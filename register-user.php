<?php
include "connectdb.php";
session_start();
include "navbar.php";

if(isset($_POST['registerbtn'])) {
    $firstname = $_POST['firstname'];
    $secondname = $_POST['secondname'];
    $lastname = $_POST['lastname'];
    $new_username = $_POST['new_username'];
    $new_password = $_POST['new_password'];
    $confirm_password = $_POST['confirm-pass'];

    // ✅ Validate Password Confirmation Before Hashing
    if ($new_password !== $confirm_password) {
        $_SESSION['error'] = "Passwords do not match!";
        header("Location: register-user.php");
        exit();
    }

    // ✅ Enforce Strong Password Requirements
    if (!preg_match('/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/', $new_password)) {
        $_SESSION['error'] = "Password must be at least 8 characters long and contain one uppercase letter, one number, and one special character.";
        header("Location: register-user.php");
        exit();
    }

    // ✅ Hash the Password Securely
    $hashed_password = password_hash($new_password, PASSWORD_DEFAULT);

    // ✅ Prevent Duplicate Registrations (Checks Username & Name)
    $check_query = "SELECT COUNT(*) FROM `users` WHERE Username = :username OR (First_Name = :firstname AND Last_Name = :lastname)";
    $check_stmt = $pdo->prepare($check_query);
    $check_stmt->bindParam(':username', $new_username);
    $check_stmt->bindParam(':firstname', $firstname);
    $check_stmt->bindParam(':lastname', $lastname);
    $check_stmt->execute();
    $existing_user = $check_stmt->fetchColumn();

    if ($existing_user > 0) {
        $_SESSION['error'] = "Username or name already exists. Choose a different one.";
        header("Location: register-user.php");
        exit();
    }

    // ✅ Insert New User into Database
    $create_query = "INSERT INTO `users` (First_Name, Second_Name, Last_Name, Username, Password) VALUES (:firstname, :secondname, :lastname, :username, :password)";
    $create_stmt = $pdo->prepare($create_query);
    $create_stmt->bindParam(':firstname', $firstname);
    $create_stmt->bindParam(':secondname', $secondname);
    $create_stmt->bindParam(':lastname', $lastname);
    $create_stmt->bindParam(':username', $new_username);
    $create_stmt->bindParam(':password', $hashed_password);

    if($create_stmt->execute()) {
        $_SESSION['msg'] = "Registered successfully!";
        header("Location: userlogin.php");
        exit();
    } else {
        $_SESSION['error'] = "Error creating user. Please try again.";
        header("Location: register-user.php");
        exit();
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Form</title>
    <link rel="stylesheet" href="CSS/navbar.css">
    <link rel="stylesheet" href="CSS/register-user.css">
    <link rel="stylesheet" href="CSS/password-generator.css">
</head>
<body>
    <!-- Registration Form -->
    <div class="wrapper">
        <form action="register-user.php" method="post">
            <h1>Registration Form</h1>
            <div class="input-box">
                <label>First Name</label>
                <input type="text" name="firstname" placeholder="First Name" required>
            </div>
            <br>
            <div class="input-box">
                <label>Last Name</label>
                <input type="text" name="lastname" placeholder="Last Name" required>
            </div>
            <br>
            <div class="input-box">
                <label>Username</label>
                <input type="text" placeholder="Username" name="new_username" required>
            </div>
            <br>
            <div class="input-box">
                <label>Password</label>
                <input type="password" placeholder="Enter your password" name="pass" id="regPassInput" value="Password" required>
                <i class="fa-solid fa-eye-slash" id="toggleRegPassword" onclick="togglePasswordVisibility(event, 'regPassInput')"></i>
            </div>
            <br>
            <div class="input-box">
                <label>Confirm Password</label>
                <input type="password" placeholder="Confirm your password" name="confirm-pass" id="regConfirmInput" value="Confirm" required>
                <i class="fa-solid fa-eye-slash" id="toggleRegConfirmPassword" onclick="togglePasswordVisibility(event, 'regConfirmInput')"></i>
            </div>
            <br>
            <button id="generate-pass-btn">Generate Password</button>
            <button class="register-btn">Register</button>
            <p>You are not required to add a phone number or e-mail account to use the cognitive training tool.</p>
            <div class="login-link">
                <p>Already have an account? <a href="user-login.php">Click to login</a></p>
            </div>     
        </form>
    </div>

    <?php include "password-generator.php" ?>

    <script src="JavaScript/toggle-password-visibility/toggle-password-visibility.js"></script>
    <script src="JavaScript/password-generator/password-generator.js"></script>
</body>
</html>