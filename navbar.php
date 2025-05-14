<?php
// Start session only if it has not been started already
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

// Determine the base directory path
$basePath = "/UltimateTrainerX";
$currentDirectory = basename(dirname($_SERVER['PHP_SELF']));
$rootPath = "/UltimateTrainerX"; // Root path to always access files from root

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?= $basePath ?>/CSS/navbar.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" 
        integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" 
        crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body>
    <nav>
        <ul class="nav_list">
            <!-- UltimateTrainerX logo -->
            <?php 
            // Adjust the logo path depending on whether we're in brain-games or user-profile directory
            if ($currentDirectory === 'brain-games' || $currentDirectory === 'user-profile') {
                echo '<li class="logo"><img src="' . $rootPath . '/CSS/images/logo/UltimateTrainerX-logo.png"></li>';
            } else {
                echo '<li class="logo"><img src="' . $rootPath . '/CSS/images/logo/UltimateTrainerX-logo.png"></li>';
            }
            ?>

            <div class="nav_links">
                <!-- Navbar links -->
                <li><a class="active" href="<?= $rootPath ?>/homepage.php">Home</a></li>
                <!-- Adjust path for brain-games.php depending on the current directory -->
                <li><a href="<?= $rootPath ?>/brain-games/brain-games.php">Games</a></li>
                <li><a href="<?= $rootPath ?>/aboutus.php">About Us</a></li>
                <li><a href="<?= $rootPath ?>/learnmore.php">Learn More</a></li>
                <li><a href="<?= $rootPath ?>/contactus.php">Contact Us</a></li>

                <!-- Quick settings icon, including link -->
                <li class="icon-container">
                    <button id="settings-icon"><i class="fa-solid fa-gear"></i></button>
                    <div class="settings-popover">
                        <h3>Quick Settings</h3>
                        <label class="dark-mode-switch" for="dark-mode-switch">    
                        <div class="dark-mode-container">
                            <p id="dm-opt">Enable Dark Mode</p>
                            <div class="toggle">
                                <div class="toggle-dark-mode" onclick="animatedToggle()"></div>
                            </div>
                            <div class="dm-text">Off</div>
                        </div>
                        </label>

                        <label class="font-size-slider">
                            <p id="font-size">Font Size</p>
                            <div class="fs-slider-container">
                                <input type="range" min="6" max="96" value="18" class="slider" id="fs-range">
                                <p>Value: <span id="fs-value"></span></p>
                            </div>
                        </label>

                        <p id="show-more"><a href="<?= $rootPath ?>/user-profile/settings.php">Show more settings</a></p>
                    </div>
                    <div class="icon-description">Settings</div>
                </li>

                <?php
                // Handle session for logged in users
                if(isset($_SESSION['username']) && isset($_SESSION['User_ID'])){
                    echo "<li><a href='" . $rootPath . "/accountpage.php'>Welcome ".$_SESSION['username']."</a></li>";
                    echo "<li><a href='" . $rootPath . "/logout.php'>Logout</a></li>";
                } else {
                    echo "<li class='icon-container'>
                        <a href='" . $rootPath . "/user-login.php'><i class='fa fa-user'></i></a>
                        <div class='icon-description'>Login</div>
                    </li>";
                }
                ?>
            </div>
        </ul>
    </nav>

    <script src="<?= $rootPath ?>/JavaScript/navbar/nav-behaviour.js"></script>
</body>
</html>