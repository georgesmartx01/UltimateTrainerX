<?php
include "connectdb.php";
session_start();
include "navbar.php";

if(isset($_POST['registerbtn'])) {
    $firstname = $_POST['firstname'];
    $new_username = $_POST['new_username'];
    $lastname = $_POST['lastname'];
    $new_password = $_POST['new_password'];

    if(!preg_match('/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/', $new_password)) {
        $error = "Password must be at least 8 characters long and contain at least one number and one special character.";
        header("Location: login.php?error=".$error);
        exit();
    } else {
        $hashed_password = password_hash($new_password, PASSWORD_DEFAULT);

        $check_query = "SELECT COUNT(*) FROM `users` WHERE Username = :username";
        $check_stmt = $pdo->prepare($check_query);
        $check_stmt->bindParam(':username', $new_username);
        $check_stmt->execute();
        $existing_user = $check_stmt->fetchColumn();

        if($existing_user == 0) {
            $create_query = "INSERT INTO `users` (Fore_name, Second_Name, Last_Name, Address_User, Username, Password) VALUES (:forename, :secondname, :lastname, :address, :username, :password)";
            $create_stmt = $pdo->prepare($create_query);
            $create_stmt->bindParam(':forename', $firstname);
            $create_stmt->bindParam(':lastname', $lastname);
            $create_stmt->bindParam(':username', $new_username);
            $create_stmt->bindParam(':password', $hashed_password);

            if($create_stmt->execute()) {
                $msg = "Registered successfully";
                header("Location: userlogin.php?msg=".$msg);
                exit();
            } else {
                $error = "Error creating user. Please try again.";
                header("Location: userlogin.php?error=".$msg);
                exit();
            }
        } else {
            $error = "Username already exists. Please choose a different username.";
            header("Location: userlogin.php?error=".$error);
            exit();
        }
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
        <form action="register-user.php" method="post" onsubmit="return validatePasswordMatch()">
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
            <p>Note: You are not required to add a phone number or e-mail account to use the cognitive training tool.</p>
            <p>Only limited amount of information from you is required to provide the service.</p>
        </form>
    </div>

    <?php include "password-generator.php" ?>

    <script src="JavaScript/toggle-password-visibility/toggle-password-visibility.js"></script>
    <script src="JavaScript/password-generator/password-generator.js"></script>
</body>
</html>