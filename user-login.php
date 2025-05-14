<?php
ob_start();
session_start();
include "connectdb.php";

// CSRF functions
function generateCSRFToken() {
    if (empty($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }
    return $_SESSION['csrf_token'];
}
function verifyCSRFToken($token) {
    return isset($_SESSION['csrf_token']) && hash_equals($_SESSION['csrf_token'], $token);
}

// Enforce HTTPS
if (empty($_SERVER['HTTPS']) || $_SERVER['HTTPS'] === "off") {
    header("Location: user-login.php?msg=" . urlencode("Login successful! Redirecting..."));
    exit();
}

// Security Headers
header("X-Content-Type-Options: nosniff");
header("X-Frame-Options: SAMEORIGIN");
header("X-XSS-Protection: 1; mode=block");

// Already logged in?
if (isset($_SESSION['username']) && isset($_SESSION['User_ID'])) {
    header("Location: accountpage.php");
    exit();
}

// Rate Limiting
$ip = $_SERVER['REMOTE_ADDR'];
$limit_stmt = $pdo->prepare("SELECT COUNT(*) FROM login_attempts WHERE ip = :ip AND timestamp > (NOW() - INTERVAL 15 MINUTE)");
$limit_stmt->execute([':ip' => $ip]);
if ($limit_stmt->fetchColumn() >= 5) {
    header("Location: user-login.php?error=" . urlencode("Too many login attempts. Please try again later."));
    exit();
}

// Handle login
if ($_SERVER['REQUEST_METHOD'] === "POST" && isset($_POST['loginbtn'])) {
    if (!verifyCSRFToken($_POST['csrf_token'])) {
        die("Invalid CSRF token.");
    }

    $usernameSubmit = trim($_POST['username']);
    $passwordSubmit = $_POST['password'];

    if (strlen($usernameSubmit) > 50 || strlen($passwordSubmit) > 100) {
        header("Location: user-login.php?error=" . urlencode("Input too long."));
        exit();
    }

    $stmt = $pdo->prepare("SELECT * FROM `users` WHERE Username = :username");
    $stmt->bindParam(':username', $usernameSubmit);
    $stmt->execute();
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    $success = 0;
    if ($user && password_verify($passwordSubmit, $user['Password'])) {
        session_regenerate_id(true);
        $_SESSION['username'] = $user['Username'];
        $_SESSION['User_ID'] = $user['User_ID'];
        $success = 1;

        $log = $pdo->prepare("INSERT INTO login_attempts (ip, username, success, timestamp) VALUES (:ip, :username, :success, NOW())");
        $log->execute([':ip' => $ip, ':username' => $usernameSubmit, ':success' => $success]);

        $redirect = $_SESSION['prev_page'] ?? "accountpage.php";
        header("Location: $redirect");
        exit();
    } else {
        $log = $pdo->prepare("INSERT INTO login_attempts (ip, username, success, timestamp) VALUES (:ip, :username, :success, NOW())");
        $log->execute([':ip' => $ip, ':username' => $usernameSubmit, ':success' => $success]);

        header("Location: user-login.php?error=" . urlencode("Invalid login credentials."));
        exit();
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Login</title>
    <link rel="stylesheet" href="CSS/user-login.css">
    <link rel="stylesheet" href="CSS/navbar.css">
    <link rel="stylesheet" href="CSS/password-generator.css">
</head>
<?php include "navbar.php"; ?>
<body>
    <div class="wrapper">
        <!-- Error/Success messages inside the wrapper, above the form -->
        <?php if (isset($_GET['error'])): ?>
            <div class="error-box"><?= htmlspecialchars($_GET['error']) ?></div>
        <?php endif; ?>
        <?php if (isset($_GET['msg'])): ?>
            <div class="success-box"><?= htmlspecialchars($_GET['msg']) ?></div>
        <?php endif; ?>

        <form method="post" action="user-login.php">
            <h1>Login Form</h1>

            <div class="input-box">
                <input type="text" placeholder="Username" name="username" maxlength="50" required>
                <i class="fa fa-user"></i>
            </div>

            <div class="input-box">
                <input type="password" placeholder="Enter your password" name="password" maxlength="100" id="loginPassInput" required>
                <i class="fa-solid fa-lock"></i>
                <i class="fa-solid fa-eye-slash" id="toggleLoginPassword" onclick="togglePasswordVisibility(event, 'loginPassInput')"></i>
            </div>

            <!-- CSRF Token -->
            <input type="hidden" name="csrf_token" value="<?= htmlspecialchars(generateCSRFToken()) ?>">

            <div class="remember-forgot">
                <label class="remember-me">Remember me 
                    <input type="checkbox">
                    <span class="checkmark"></span>
                </label>
                <a href="forgot-password.php">Forgot Password</a>
            </div>

            <button id="generate-pass-btn" type="button">Generate Password</button>
            <button type="submit" name="loginbtn" class="login-btn">Login</button>

            <div class="register-link">
                <p>Don't have an account? <a href="register-user.php">Click to register</a></p>
            </div>       
        </form>
    </div>

    <?php include "password-generator.php"; ?>
    <script src="JavaScript/password-generator/password-generator.js"></script>
    <script src="JavaScript/toggle-password-visibility/toggle-password-visibility.js"></script>
</body>
</html>
<?php ob_end_flush(); ?>