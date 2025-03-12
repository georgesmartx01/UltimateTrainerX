<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Memory Match</title>
        <link rel="stylesheet" href="../CSS/navbar.css"/>
        <link rel="stylesheet" href="../CSS/brain-games/memory-match.css"/>
        <script src="../JavaScript/games/memory-match/memory-match.js" defer></script>
    </head>

    <?php
    include "../userside/connectdb.php";
    session_start();
    include "../userside/navbar.php";
    ?>

    <body>
        <br><br><br><br>
        <h3>Score:<span id="result"></span></h3>
    </body>
</html>