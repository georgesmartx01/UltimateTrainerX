<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="../CSS/brain-games/tic-tac-toe.css">
    <link rel="stylesheet" href="../CSS/navbar.css">
    <title>Tic-Tac-Toe</title>
</head>

<?php 
include "../navbar.php";
?>

<body>
    <div id="game-container">
        <h1>Tic-Tac-Toe</h1>
        <div id="board"></div>
        <div id="status"></div>
    </div>

    <div id="popup">
        <div id="popup-content">
            <h2 id="popup-title"></h2>
            <p id="popup-message"></p>
            <button id="restart-btn">Play Again</button>
        </div>
    </div>

    <script src="../JavaScript/brain-games/tic-tac-toe/tic-tac-toe.js"></script>
</body>
</html>