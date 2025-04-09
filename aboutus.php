<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <title>About Me</title>
        <link rel="stylesheet" type="text/css" href="CSS/navbar.css">
        <script defer src="JavaScript/script.js"></script>
    </head>
    
    <body>
        <?php
        include "connectdb.php";
        session_start();
        include "navbar.php";
        ?>
        <br>
        <br>
        <!-- Creating the initial header and brief description of the company-->
         <br><br>
         <h1>About Me</h1>
         <p>Welcome to UltimateTrainerX! Founded in 2025, I am pleased to say that this cognitive training tool is one of the most excellent options for catering towards various types of users to ensuring accessibility, large skillset, great improvements in overall, cognitive performance and wellbeing.</p>
         
    </body>
    <?php include "footer.php";?>
</html>