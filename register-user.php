<?php
// No whitespace before this line!
session_start();
include "connectdb.php";

// DEBUG mode (disable in production)
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Handle registration form submission
if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST['registerbtn'])) {
    $firstname    = trim($_POST['firstname']);
    $secondname   = trim($_POST['secondname']);
    $lastname     = trim($_POST['lastname']);
    $new_username = trim($_POST['new_username']);
    $new_password = $_POST['new_password'];
    $confirm_pass = $_POST['confirm_pass'];

    // Password match check
    if ($new_password !== $confirm_pass) {
        $_SESSION['error'] = "Passwords do not match!";
        header("Location: register-user.php");
        exit();
    }

    // Password strength check
    if (!preg_match('/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/', $new_password)) {
        $_SESSION['error'] = "Password must be at least 8 characters, include an uppercase letter, a number, and a special character.";
        header("Location: register-user.php");
        exit();
    }

    $hashed_password = password_hash($new_password, PASSWORD_DEFAULT);

    try {
        // Check for duplicate username or name
        $check = $pdo->prepare("SELECT COUNT(*) FROM users WHERE Username = :username OR (First_Name = :firstname AND Last_Name = :lastname)");
        $check->execute([
            ':username' => $new_username,
            ':firstname' => $firstname,
            ':lastname' => $lastname
        ]);

        if ($check->fetchColumn() > 0) {
            $_SESSION['error'] = "Username or full name already exists. Try something different.";
            header("Location: register-user.php");
            exit();
        }

        // Insert user into database
        $insert = $pdo->prepare("INSERT INTO users (First_Name, Second_Name, Last_Name, Username, Password)
                                VALUES (:firstname, :secondname, :lastname, :username, :password)");
        $insert->execute([
            ':firstname' => $firstname,
            ':secondname' => $secondname,
            ':lastname' => $lastname,
            ':username' => $new_username,
            ':password' => $hashed_password
        ]);

        $_SESSION['msg'] = "Registered successfully! You can now log in.";
        header("Location: user-login.php");
        exit();

    } catch (PDOException $e) {
        $_SESSION['error'] = "Database error: " . $e->getMessage();
        header("Location: register-user.php");
        exit();
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Register | Cognitive Training</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="CSS/navbar.css">
    <link rel="stylesheet" href="CSS/register-user.css">
    <link rel="stylesheet" href="CSS/password-generator.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script src="JavaScript/toggle-password-visibility/toggle-password-visibility.js" defer></script>
    <script src="JavaScript/password-generator/password-generator.js" defer></script>
</head>
<body>
<?php include "navbar.php"; ?>

<div class="wrapper">
    <form method="post" action="register-user.php" class="registration-form">
        <h1>User Registration</h1>
        <p>Password must be at least 8 characters, including one uppercase, one number, and one special character.</p>

        <?php
        if (isset($_SESSION['error'])) {
            echo "<div class='message error-message'>" . htmlspecialchars($_SESSION['error']) . "</div>";
            unset($_SESSION['error']);
        } elseif (isset($_SESSION['msg'])) {
            echo "<div class='message success-message'>" . htmlspecialchars($_SESSION['msg']) . "</div>";
            unset($_SESSION['msg']);
        }
        ?>

        <div class="input-box">
            <label for="firstname">First Name</label><br>
            <input type="text" name="firstname" id="firstname" placeholder="Enter your first name" required>
        </div><br>

        <div class="input-box">
            <label for="secondname">Second Name</label><br>
            <input type="text" name="secondname" id="secondname" placeholder="Enter your second name (optional)">
        </div><br>

        <div class="input-box">
            <label for="lastname">Last Name</label><br>
            <input type="text" name="lastname" id="lastname" placeholder="Enter your last name" required>
        </div><br>

        <div class="input-box">
            <label for="new_username">Username</label><br>
            <input type="text" name="new_username" id="new_username" placeholder="Choose a username" required>
        </div><br>

        <div class="input-box password-box">
            <label for="regPassInput">Password</label><br>
            <input type="password" name="new_password" id="regPassInput" placeholder="Enter a secure password" required>
            <i class="fa-solid fa-eye-slash" onclick="togglePasswordVisibility(event, 'regPassInput')"></i>
        </div><br>

        <div class="input-box password-box">
            <label for="regConfirmInput">Confirm Password</label><br>
            <input type="password" name="confirm_pass" id="regConfirmInput" placeholder="Re-enter your password" required>
            <i class="fa-solid fa-eye-slash" onclick="togglePasswordVisibility(event, 'regConfirmInput')"></i>
        </div><br>

        <div class="btn-group">
            <button id="generate-pass-btn" type="button">Generate Password</button>
            <button type="submit" name="registerbtn" class="register-btn">Register</button>
        </div>

        <p class="privacy-hint">You are not required to add a phone number or email to use this tool.</p>

        <div class="login-link">
            <p>Already registered? <a href="user-login.php">Click here to log in</a></p>
        </div>
    </form>
</div>

<?php include "password-generator.php"; ?>
</body>
</html>