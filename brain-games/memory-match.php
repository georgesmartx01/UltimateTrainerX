<?php
    include "../connectdb.php";
    session_start();
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../CSS/navbar.css"/>
        <link rel="stylesheet" href="../CSS/brain-games/memory-match.css"/>
        <title>Memory Match</title>
    </head>

    <?php
    include "../navbar.php";
    ?>

    <body>
        <h3>Score:<span id="result"></span></h3>
        <script src="../JavaScript/games/memory-match/memory-match.js" defer></script>
    </body>
</html>