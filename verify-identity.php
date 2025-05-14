<?php
require "connectdb.php";
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];

    $stmt = $pdo->prepare("SELECT * FROM users WHERE username = ?");
    $stmt->execute([$username]);
    $user = $stmt->fetch();

    if (!$user) {
        header("Location: forgot-password.php?error=1");
        exit;
    }
    $_SESSION['reset_username'] = $username;
} else {
    header("Location: forgot-password.php");
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Identity</title>
</head>
<body>
  <h2>Verify Your Identity</h2>
  <form action="reset-password.php" method="POST">
    <input type="text" name="first_name" placeholder="First Name" required>
    <input type="text" name="second_name" placeholder="Second Name" required>
    <input type="text" name="last_name" placeholder="Last Name" required>
    <input type="password" name="new_password" placeholder="New Password" required>
    <button type="submit">Reset Password</button>
  </form>
</body>
</html>