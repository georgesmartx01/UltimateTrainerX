<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../CSS/navbar.css"/>
    <link rel="stylesheet" href="../CSS/brain-games/2048.css"/>
    <title>2048</title>
</head>

<?php
include "../navbar.php"
?>

<body>
    <div class="container">
        <h1>2048</h1>

        <div class="game-container">
            <div id="game-board"></div>
        </div>

        <div class="score-container">
            <div id="score"></div>
        </div>

        <button id="restart">Restart</button>

        <div class="instructions">
            <p>Use arrow keys to move tiles. Combine tiles with the same number to add them.</p>
        </div>
    </div>
    <script src="../JavaScript/brain-games/2048/2048.js"></script>
    <script src="../JavaScript/navbar/nav-behaviour.js"></script>
</body>
</html>