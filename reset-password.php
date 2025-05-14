<?php
require 'connectdb.php';
session_start();

if (!isset($_SESSION['reset_username'])) {
    die("Session expired. Start over from the <a href='forgot-password.php'>forgot password</a> page.");
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_SESSION['reset_username'];
    $first = $_POST['first_name'];
    $second = $_POST['second_name'];
    $last = $_POST['last_name'];
    $new_pass = password_hash($_POST['new_password'], PASSWORD_DEFAULT);

    $stmt = $pdo->prepare("SELECT * FROM users WHERE username = ? AND first_name = ? AND second_name = ? AND last_name = ?");
    $stmt->execute([$username, $first, $second, $last]);
    $user = $stmt->fetch();

    if (!$user) {
        die("Identity verification failed. <a href='forgot-password.php'>Try again</a>.");
    }

    $stmt = $pdo->prepare("UPDATE users SET password = ? WHERE username = ?");
    $stmt->execute([$new_pass, $username]);

    unset($_SESSION['reset_username']);
    echo "<p>Password successfully reset. You can now <a href='login.php'>log in</a>.</p>";
} else {
    header("Location: forgot-password.php");
    exit;
}
?>