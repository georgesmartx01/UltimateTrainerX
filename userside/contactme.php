<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Me</title>
    <link rel="stylesheet" type="text/css" href="../userside/CSS/contactme.css">
    <link rel="stylesheet" type="text/css" href="../userside/CSS/navbar.css">
    <script defer src="../userside/JavaScript/main-script.js"></script>
</head>
<?php
include "../userside/connectdb.php";
session_start();
include "../userside/navbar.php"; 
?>
<body>
    <div class="wrapper">
        <?php
        // Check if the form is submitted
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            // Connect to the database (Replace these parameters with your actual credentials)
            $servername = "localhost";
            $username = "root";
            $password = "";
            $dbname = "UltimateTrainerX";

            $conn = new mysqli($servername, $username, $password, $dbname);

            // Check connection
            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }

            // Prepare SQL statement to insert data into the ContactMe table
            $sql = "INSERT INTO contactme (name, email, message) VALUES (?, ?, ?)";

            // Prepare and bind parameters
            $stmt = $conn->prepare($sql);
            $stmt->bindParam("sss", $name, $message);

            // Set parameters and execute statement
            $name = $_POST["name"];
            $email = $_POST["email"];
            $message = $_POST["message"];
            $stmt->execute();

            // Close statement and connection
            $stmt->close();
            $stmt->close();

            echo "<p>Your message has been successfully submitted!</p>";
        }
        ?>
        <br><br><br><br>
        <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="POST">
            <h1>Contact Form</h1>
            <div class="input-box">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
                <i class="fa fa-user"></i>
            </div>
            
            <div class="input-box">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email">
            </div>

            <div class="input-box">
                <label for="message">Message:</label>
                <textarea id="" name="message"></textarea>
            </div>

            <button type="submit" class="login-btn">Submit</button>        
        </form>
    </div>
    
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
<?php include "../userside/footer.php" ?>
</html>