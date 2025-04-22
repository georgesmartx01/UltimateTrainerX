<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" href="CSS/navbar.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
	</head>

	<body>
        <nav>
            <ul class="nav_list">
                <!-- UlimateTrainerX logo -->
                <?php 
                $currentDirectory = basename(dirname($_SERVER['PHP_SELF'])); // Get current directory
                $isBrainGames = $currentDirectory === 'brain-games'; // Get the brain-games directory
                $isAccessibility = $currentDirectory === 'accessibility'; // Get the accessibility directory

                if ($currentDirectory === 'brain-games' || $currentDirectory === 'accessibility') {
                    echo '<li class="logo"><img src="../CSS/images/logo/UltimateTrainerX-logo.png"></li>';
                } else {
                    echo '<li class="logo"><img src="CSS/images/logo/UltimateTrainerX-logo.png"></li>';
                }
                ?>
                <div class="nav_links">
                   <!-- Link to Home page -->
                   <li><a class="active" href="homepage.php">Home</a></li>

                   <!-- Link to Brain Games page -->
                   <li><a href="brain-games.php">Games</a></li>

                   <!-- Link to FAQ (Frequently Asked Questions) page -->
                   <li><a href="faq.php">FAQ</a></li>                    

                   <!-- Link to Feedback page -->
                   <li><a href="feedback.php">Give Feedback</a></li>                 

                   <!-- Link to Learn More page -->
                   <li><a href="learnmore.php">Learn More</a></li>
                 
                   <!-- Link to Help page -->
                   <li><a href="help.php">Help</a></li>
                 
                   <!-- Link to About Me page -->
                   <li><a href="aboutme.php">About Us</a></li>
                 
                   <!-- Quick settings icon, including link -->
                    <li class="icon-container">
                        <button id="settings-icon"><i class="fa-solid fa-gear"></i></button>
                        <div class="settings-popover">
                            <h3>Quick Settings</h3>
                            <label>
                                <input type="checkbox" name id="dark-mode-toggle"> Enable Dark Mode
                            </label>

                            <label>
                                <p>Font Size</p>
                                <div class="font-slider">
                                    
                                </div>
                            </label>

                            <p id="show-more"><a href="">Show more setings</a></p>
                        </div>
                        <div class="icon-description">Settings</div>
                    </li>

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

                    <?php
                    if(isset($_SESSION['User_ID'])){
                        echo "<li class='icon-container' id='account_btn'><a href='accountpage.php'><i class='fa fa-user' style='float:right'></i></a></li>";
                    } else {
                        echo "<li class='icon-container'>
                        <a href='user-login.php'><i class='fa fa-user'></i></a>
                        <div class='icon-description'>Login</div>
                        </li>";
                    }
                    ?>
                </div>
            </ul>
        </nav>

        <script src="JavaScript/navbar/nav-behaviour.js"></script>
</body>
</html>