<?php
include "connectdb.php";
session_start();
include "navbar.php";

if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST['registerbtn'])) {
    $firstname = trim($_POST['firstname']);
    $secondname = trim($_POST['secondname']);
    $lastname = trim($_POST['lastname']);
    $new_username = trim($_POST['new_username']);
    $new_password = $_POST['new_password'];
    $confirm_password = $_POST['confirm_pass'];

    if ($new_password !== $confirm_password) {
        $_SESSION['error'] = "Passwords do not match!";
        header("Location: register-user.php");
        exit();
    }

    if (!preg_match('/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/', $new_password)) {
        $_SESSION['error'] = "Password must be at least 8 characters long and contain one uppercase letter, one number, and one special character.";
        header("Location: register-user.php");
        exit();
    }

    $hashed_password = password_hash($new_password, PASSWORD_DEFAULT);

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

    $create_query = "INSERT INTO `users` (First_Name, Second_Name, Last_Name, Username, Password) 
                     VALUES (:firstname, :secondname, :lastname, :username, :password)";
    $create_stmt = $pdo->prepare($create_query);
    $create_stmt->bindParam(':firstname', $firstname);
    $create_stmt->bindParam(':secondname', $secondname);
    $create_stmt->bindParam(':lastname', $lastname);
    $create_stmt->bindParam(':username', $new_username);
    $create_stmt->bindParam(':password', $hashed_password);

    if ($create_stmt->execute()) {
        $_SESSION['msg'] = "Registered successfully!";
        header("Location: user-login.php");
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
    <title>Register | Cognitive Training</title>
    <link rel="stylesheet" href="CSS/navbar.css">
    <link rel="stylesheet" href="CSS/register-user.css">
    <link rel="stylesheet" href="CSS/password-generator.css">
    <script src="https://kit.fontawesome.com/your-fontawesome-kit.js" crossorigin="anonymous"></script>
</head>
<body>
    <div class="wrapper">
        <form action="register-user.php" method="post" class="registration-form">
            <h1>User Registration</h1>

            <?php
            if (isset($_SESSION['error'])) {
                echo "<div class='message error-message'>{$_SESSION['error']}</div>";
                unset($_SESSION['error']);
            } elseif (isset($_SESSION['msg'])) {
                echo "<div class='message success-message'>{$_SESSION['msg']}</div>";
                unset($_SESSION['msg']);
            }
            ?>

            <div class="input-box">
                <label for="firstname">First Name</label>
                <input type="text" id="firstname" name="firstname" placeholder="First Name" required>
            </div>
            <br>
            <div class="input-box">
                <label for="secondname">Second Name</label>
                <input type="text" id="secondname" name="secondname" placeholder="Second Name (optional)">
            </div>
            <br>
            <div class="input-box">
                <label for="lastname">Last Name</label>
                <input type="text" id="lastname" name="lastname" placeholder="Last Name" required>
            </div>
            <br>
            <div class="input-box">
                <label for="new_username">Username</label>
                <input type="text" id="new_username" name="new_username" placeholder="Choose a Username" required>
            </div>
            <br>
            <div class="input-box password-box">
                <label for="regPassInput">Password</label>
                <input type="password" name="new_password" id="regPassInput" placeholder="Enter a secure password" required>
                <i class="fa-solid fa-eye-slash" onclick="togglePasswordVisibility(event, 'regPassInput')"></i>
            </div>
            <br>
            <div class="input-box password-box">
                <label for="regConfirmInput">Confirm Password</label>
                <input type="password" name="confirm_pass" id="regConfirmInput" placeholder="Confirm your password" required>
                <i class="fa-solid fa-eye-slash" onclick="togglePasswordVisibility(event, 'regConfirmInput')"></i>
            </div>
            <br>
            <div class="btn-group">
                <button id="generate-pass-btn" type="button">Generate Password</button>
                <button class="register-btn" name="registerbtn" type="submit">Register</button>
            </div>

            <p class="privacy-hint">You are not required to add a phone number or e-mail account to use the cognitive training tool.</p>

            <div class="login-link">
                <p>Already registered? <a href="user-login.php">Click here to login</a></p>
            </div>     
        </form>
    </div>

    <?php include "password-generator.php"; ?>

    <script src="JavaScript/toggle-password-visibility/toggle-password-visibility.js"></script>
    <script src="JavaScript/password-generator/password-generator.js"></script>
</body>
</html>