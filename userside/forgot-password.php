<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset Your Password</title>
    <link rel="stylesheet" type="text/css" href="../CSS/forgot-password.css">
    <link rel="stylesheet" type="text/css" href="../CSS/navbar.css">
    <script defer src="JavaScript/main-script.js"></script>
</head>
<?php include "navbar.php"; ?>

<body>
<div class="wrapper">
        <form>
            <h1>Reset Your Password</h1>
            <p>If you think you forgot or have lost your password, this form guides you through the process of safely resetting your password.</p>
            <p>Follow the steps carefully and you should be able to reset your password</p>
            <p>If you need assistance with any of these steps or have any other queries, visit the Contact page or access the appropriate help articles</p>
            <p>Other notes:</p>
            <p>1. For the user types, once you select on appropriate user type, the form changes to an appropriate layout to reduce likely errors for businesses/operators providing the same information as end-users.</p>
            <p>2. Make sure you write your password on a piece of paper or save it in a password manager installed on your device, so you don't forget it!</p>
            <label for="user-type">Choose the appropriate user type:</label>
            <select name="user-types">
                <option value="end-user">End User</option>
                <option value="business">Business</option>
                <option value="operator">Operator</option>
            </select>
            </div>
            
            <div class="input-box">
                <input type="text" placeholder="Username" required>
                <i class="fa-solid fa-lock"></i>
            </div>
    
            <div class="remember-forgot">
                <label><input type="checkbox">Remember me</label>
                <a href="forgot-password.php">Forgot Password</a>
            </div>
    
            <button type="submit" class="login-btn">User Login</button>
    
            <div class="register-link">
                <p>Don't have an account?<a href="register-user.php"> Register</a></p>
            </div>

            <button type="submit" class="login-business-btn">Login as business</button>
            <button type="submit" class="login-operator-btn">Login as operator</button>
        </form>
    </div>
</body>

</html>