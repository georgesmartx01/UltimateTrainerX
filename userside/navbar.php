<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" href="../userside/CSS/navbar.css">
        <script src="../JavaScript/main-script.js"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
	</head>

	<body>
        <nav>
            <ul class="nav_list">
                <!-- UlimateTrainerX logo -->
                <li class="logo"><img src="../userside/CSS/images/logo/UltimateTrainerX-logo.png"></li>

                <div class="nav_links">
                   <!-- Link to Home page -->
                   <li><a class="active" href="../userside/homepage.php">Home</a></li>

                   <!-- Link to Brain Games page -->
                   <li><a class="active" href="../userside/brain-games.php">Games</a></li>

                   <!-- Link to FAQ (Frequently Asked Questions) page -->
                   <li><a href="../userside/faq.php">FAQ</a></li>                    

                   <!-- Link to Feedback page -->
                   <li><a href="../userside/feedback.php">Give Feedback</a></li>

                   <!-- Link to Features page -->
                   <li><a href="../userside/features.php">Features</a></li>                    

                   <!-- Link to Learn More page -->
                   <li><a href="../userside/learnmore.php">Learn More</a></li>
                 
                   <!-- Link to Help page -->
                   <li><a href="../userside/help.php">Help</a></li>

                   <!-- Link to Contact Me page -->
                   <li><a href="../userside/contactme.php">Contact Me</a></li>
                 
                   <!-- Link to About Me page -->
                   <li><a href="../userside/aboutme.php">About Me</a></li>
                 
                   <!-- Quick settings icon, including link -->
                   <li class="icon-container">
                       <i class="fa-solid fa-gear"></i>
                       <div class="icon-description" style="bottom: -20px">Settings</div>
                   </li>

                    <?php
                    // Set current page as prev_page
                    if($_SERVER['REQUEST_URI'] !== "../userside/user-login.php") {
                        if($_SERVER['REQUEST_URI'] !== "/UltimateTrainerX/connectdb.php"){
                            $_SESSION['prev_page'] = $_SERVER['REQUEST_URI'];
                        }
                    }
                    //if logged in, adds account.php and logout.php links
                    if(isset($_SESSION['username']) && isset($_SESSION['User_ID'])){
                        echo "<li><a href='../userside/accountpage.php'>Welcome ".$_SESSION['username']."</a></li>";
                        echo "<li><a href='logout.php'>Logout</a></li>";
                    }
                    ?>

                    <?php
                    if(isset($_SESSION['User_ID'])){
                        echo "<li class='icon-container' id='account_btn'><a href='accountpage.php'><i class='fa fa-user' style='float:right'></i></a></li>";
                    } else {
                        echo "<li class='icon-container'>
                        <a href='user-login.php'><i class='fa fa-user'></i></a>
                        <div class='icon-description' style='bottom: -20px;'>Login</div>
                        </li>";
                    }
                    ?>
                </div>
            </ul>
        </nav>
        
    <script>
        const navLinks = document.querySelectorAll('.nav_links li');
        
        if (navLinks.length) {
            navLinks.forEach((navLink) => {
                navLink.addEventListener('click', (e) => {
                    navLinks.forEach((navLink) => {
                        navLink.classList.remove('active');
                    });
                    navLink.classList.add('active');
                });
            });
        }
    </script>
</body>
</html>