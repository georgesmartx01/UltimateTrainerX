<?php 
include('../userside/connectdb.php');
session_start();
if(isset($_SESSION['username']) && isset($_SESSION['User_ID'])){
    header("Location: accountpage.php");
    exit();
}

if(isset($_GET['error'])){
    // XSS stands for Cross-Site Scripting
    // Sanitize the message to prevent XSS
    $error = htmlspecialchars($_GET['error']);
    // Display a JavaScript alert with the message
    echo "<script>alert('$error');</script>";
}

if(isset($_GET['msg'])){
    // Sanitize the message to prevent XSS
    $msg = htmlspecialchars($_GET['msg']);
    // Display a JavaScript alert with the message
    echo "<script>alert('$msg');</script>";
}
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Operator Login</title>
        <link rel="stylesheet" href="../userside/CSS/operator-login.css">
        <link rel="stylesheet" href="../userside/CSS/navbar.css">
        <link rel="icon" type="image/x-icon" href="../userside/CSS/images/favicon.ico">
        <script defer src="../userside/JavaScript/main-script.js"></script>

        <!-- Font Awesome Link-->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    </head>

    <?php
    include "../userside/navbar.php";
    ?>
    <body>
        <div class="wrapper">
            <form>
                <h1>Operator Login</h1>
                <div class="input-box">
                    <input type="text" placeholder="Username" required>
                    <i class="fa fa-user"></i>
                </div>
            
                <div class="input-box">
                    <input type="text" placeholder="Password" id="userInput" required>
                    <i class="fa-solid fa-lock"></i>
                    <i class="fa-solid fa-eye-slash" id="togglePassword" onclick="togglePasswordVisibility()"></i>
                </div>
    
                <div class="remember-forgot">
                    <label><input type="checkbox">Remember me</label>
                    <a href="forgot-password.php">Forgot Password</a>
                </div>
    
                <button type="submit" class="login-btn">Login</button>
    
                <div class="register-link">
                    <p>Don't have an account? <a href="register-operator.php">Register as operator</a></p>
                </div>
            </form>
        </div>

        <script>
        function togglePasswordVisibility() {
            const passwordInput = document.getElementById('userInput');
            const togglePassword = document.getElementById('togglePassword');
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            
            togglePassword.classList.toggle('fa-eye-slash');
            togglePassword.classList.toggle('fa-eye');
            
            if (togglePassword.classList.contains('fa-eye')) {
                togglePassword.style.right = '50px';
            } else if (togglePassword.classList.contains('fa-eye-slash')) {
                togglePassword.style.right = '50px';
            } else {
            }
        }
    </script>
    </body>
    <?php include "../userside/footer.php";?>
</html