<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>

    <nav>
        <?php
        // Set current page as previous page
        if($_SERVER['REQUEST_URI'] !== 'login.php') {
            if($_SERVER['REQUEST_URI'] !== connectdb.php) {
                $_SESSION['prev_page'] = $_SERVER['REQUEST_URI'];
            }
        }

        if (isset($_SESSION['username']) && isset($_SESSION['User_ID'])) {
            echo "<li><a href='accountpage.php'> Welcome " .$_SESSION['username']."</a></li>";
            echo "<li><a href='logout.php'>Lougout</a></li>";
        }
        ?>
    </nav>
</html