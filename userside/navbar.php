<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" href="CSS/navbar.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
		<link rel="stylesheet" href="CSS/navbar.css">
	</head>

	<body>
		<nav>
            <ul class="nav_list">
                <!-- UlimateTrainerX logo -->
                <li class="logo"><img src="../images/UltimateTrainerX-logo.png"></li>

                <div class="nav_links">
                   <!-- Link to Home page -->
                   <li><a href="homepage.php">Home</a></li>

                   <!-- Link to FAQ (Frequently Asked Questions) page -->
                   <li><a href="faq.php">FAQ</a></li>                    

                   <!-- Link to Feedback page -->
                   <li><a href="feedback.php">Give Feedback</a></li>

                   <!-- Link to Features page -->
                   <li><a href="features.php">Features</a></li>                    

                   <!-- Link to Learn More page -->
                   <li><a href="learnmore.php">Learn More</a></li>
                 
                   <!-- Link to Support page -->
                   <li><a href="help.php">Help</a></li>
                 
                   <!-- Link to About page -->
                   <li><a href="about.php">About</a></li>
                 
                   <!-- Quick settings icon, including link -->
                   <li class="icon-container">
                       <i class="fa-solid fa-gear"></i>
                       <div class="icon-description" style="bottom: -50px">Quick Settings</div>
                   </li>
                </div>
                
                <?php
                // Set current page as prev_page
                if($_SERVER['REQUEST_URI'] !== "user-login.php") {
                    if($_SERVER['REQUEST_URI'] !== "/UltimateTrainerX/connectdb.php"){
                        $_SESSION['prev_page'] = $_SERVER['REQUEST_URI'];
                    }
                }
                //if logged in, adds account.php and logout.php links
                if(isset($_SESSION['username']) && isset($_SESSION['User_ID'])){
                    echo "<li><a href='accountpage.php'>Welcome ".$_SESSION['username']."</a></li>";
                    echo "<li><a href='logout.php'>Logout</a></li>";
                }
                ?>
                
            <div id="user-account-container">
                <?php
                if(isset($_SESSION['User_ID'])){
                    echo "<li class='icon-container' id='account_btn'><a href='accountpage.php'><i class='fa fa-user' style='float:right'></i></a></li>";
                } else {
                    echo "<li class='icon-container' style='padding-right: 30px; margin-bottom: -3px;'>
                            <a href='user-login.php'><i class='fa fa-user'></i></a>
                            <div class='icon-description' style='bottom: -20px;'>Login</div>
                          </li>";
                }
                ?>
            </div>             
        </ul>
    </nav>
</body>
</html>