<?php
ob_start();
session_start();

// Brute-force protection setup
if (!isset($_SESSION['failed_attempts'])) {
    $_SESSION['failed_attempts'] = 0;
    $_SESSION['last_attempt_time'] = time();
}

// Rate limiting: 5 attempts in 10 minutes
if ($_SESSION['failed_attempts'] >= 5 && (time() - $_SESSION['last_attempt_time']) < 600) {
    $rate_limited = true;
} else {
    $rate_limited = false;
}

// Handle form submission
require_once 'connectdb.php';

$error_message = '';

if ($_SERVER["REQUEST_METHOD"] === "POST" && !$rate_limited) {
    $username = trim($_POST['username'] ?? '');
    $first_name = trim($_POST['first_name'] ?? '');
    $second_name = trim($_POST['second_name'] ?? '');
    $last_name = trim($_POST['last_name'] ?? '');

    if (empty($username) || empty($first_name) || empty($second_name) || empty($last_name)) {
        $_SESSION['failed_attempts']++;
        $_SESSION['last_attempt_time'] = time();
        $error_message = "Please fill in all fields.";
    } else {
        $stmt = $conn->prepare("SELECT * FROM users WHERE Username = ? AND First_Name = ? AND Second_Name = ? AND Last_Name = ?");
        $stmt->bind_param("ssss", $username, $first_name, $second_name, $last_name);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result && $result->num_rows === 1) {
            $_SESSION['failed_attempts'] = 0;
            $_SESSION['reset_username'] = $username;
            header("Location: reset-password.php");
            exit();
        } else {
            $_SESSION['failed_attempts']++;
            $_SESSION['last_attempt_time'] = time();
            $error_message = "Incorrect details provided. Try again.";
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Forgot Password</title>
    <link rel="stylesheet" href="CSS/navbar.css">
    <link rel="stylesheet" href="CSS/forgot-password.css">
</head>
<body>
    <?php include 'navbar.php'; ?>

    <div class="wrapper">
        <form action="forgot-password.php" method="POST">
            <h1>Verify Your Identity</h1>

            <?php if ($rate_limited): ?>
                <p class="error-message">Too many failed attempts. Please try again in 10 minutes.</p>
            <?php elseif (!empty($error_message)): ?>
                <p class="error-message"><?= htmlspecialchars($error_message) ?></p>
            <?php endif; ?>

            <div class="input-box">
                <label for="username">Username</label>
                <input type="text" name="username" placeholder="Enter your username" required>
            </div>
            <div class="input-box">
                <label for="first_name">First Name</label>
                <input type="text" name="first_name" placeholder="Enter your first name" required>
            </div>
            <div class="input-box">
                <label for="second_name">Second Name</label>
                <input type="text" name="second_name" placeholder="Enter your second name" required>
            </div>
            <div class="input-box">
                <label for="last_name">Last Name</label>
                <input type="text" name="last_name" placeholder="Enter your last name" required>
            </div>

            <button type="submit" class="reset-btn" <?= $rate_limited ? 'disabled' : '' ?>>Continue</button>
        </form>
    </div>
</body>
</html>
<?php ob_end_flush(); ?>