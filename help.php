<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Help & Support</title>
        <link rel="stylesheet" href="CSS/navbar.css">
        <link rel="stylesheet" href="CSS/help.css">
        <link rel="icon" type="image/x-icon" href="CSS/images/favicon.ico">
        <!-- Font Awesome Link-->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    </head>

    <?php
    include "connectdb.php";
    session_start();
    include "navbar.php";
    ?>
    <body>
        <div class="search-container">
            <form action="">
                <input type="text" placeholder="What do you need help with?" name="search">
                <button type="submit"><i class="fa fa-search"></i></button>
            </form>
        </div>
    </body>
</html