<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <title>Brain Games</title>
        <link rel="stylesheet" type="text/css" href="../CSS/navbar.css">
        <script defer src="JavaScript/script.js"></script>
    </head>
    <?php
    include "../userside/connectdb.php";
    session_start();
    include "../userside/navbar.php";
    ?>

    <body>
        <br><br><br><br>
        <!-- Creating the initial header and brief description of the company-->
        <h1>Brain Games</h1>
        <p>It's important to keep your brain healthy! Challenge your brain today!</p>
        <?php include "../userside/footer.php";?>
    </body>
</html>