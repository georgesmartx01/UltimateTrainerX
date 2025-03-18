<?php 
include "../userside/connectdb.php";
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
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Login</title>
    <link rel="stylesheet" type="text/css" href="../userside/CSS/user-login.css">
    <link rel="stylesheet" type="text/css" href="../userside/CSS/navbar.css">
    <script defer src="JavaScript/main-script.js"></script>
</head>
<?php include "../userside/navbar.php"; ?>
<body>
    <div class="wrapper">
        <form>
            <h1>User Login</h1>
            <div class="input-box">
                <input type="text" placeholder="Username" required>
                <i class="fa fa-user"></i>
            </div>
            
            <div class="input-box">
                <input type="password" value="Password" id="userInput" required>
                <i class="fa-solid fa-lock"></i>
                <i class="fa-solid fa-eye-slash" id="togglePassword" onclick="togglePasswordVisibility()"></i>
            </div>

            <div class="remember-forgot">
                <label class="remember-me">Remember me 
                    <input type="checkbox">
                    <span class="checkmark"></span>
                </label>
                <a href="forgot-password.php">Forgot Password</a>
            </div>
    
            <button type="submit" class="login-btn">Login</button>
    
            <div class="register-link">
                <p>Don't have an account? <a href="register-user.php">Register</a></p>
            </div>          
        </form>
    </div>

    <script>
        /**
         * h
         */
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
    
    <?php 
    if(isset($error)) {
        echo "<p style='color:red;'>$error</p>";
    } 
    
    if(isset($success_message)){
        echo "<p style='color:green;'>$success_message</p>";
    }?>
    
    <?php
    if(isset($_POST['loginbtn'])) {
        $usernameSubmit = $_POST['username'];
        $passwordSubmit = $_POST['password'];
        
        $login_query = "SELECT * FROM `users` WHERE Username = :username";
        $stmt = $pdo->prepare($login_query);
        $stmt->bindParam(':username', $usernameSubmit);
        $stmt->execute();
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if($user) {
            if(password_verify($passwordSubmit, $user['Password'])) {
                $_SESSION['username'] = $user['Username'];
                $_SESSION['User_ID'] = $user['User_ID'];
                
                if(isset($_SESSION['prev_page'])){
                    $prevpage = $_SESSION['prev_page'];
                    header("Location: $prevpage");
                } else{
                    header("Location: accountpage.php");
                }
            } else {
                if($passwordSubmit === $user['Password']) {
                    $_SESSION['username'] = $user['Username'];
                    $_SESSION['User_ID'] = $user['User_ID'];
                    
                    if(isset($_SESSION['prev_page'])){
                        $prevpage = $_SESSION['prev_page'];
                        header("Location: $prevpage");
                        exit();
                    } else{
                        header("Location: accountpage.php");
                        exit();
                    }
                } else {
                    $error = 'Incorrect password. Please try again.';
                    echo "<script>alert($error);</script>";
                    header("Location: user-login.php?error=".$error);
                    exit();
                }
            }
        } else {
            $error = 'User not found. Please check your username.';
            header("Location: user-login.php?error=".$error);
            exit();
        }
    }
    ?>
</body>
</html>