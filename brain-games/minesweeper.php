<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minesweeper</title>
    <link rel="stylesheet" href="../CSS/navbar.css">
    <link rel="stylesheet" href="../CSS/brain-games/minesweeper.css">
</head>

<?php
include "../navbar.php";
?>

<body>
    <div id="game-container">
        <h1>Minesweeper</h1>
        <div id="controls">
            <label for="label">Choose Level:</label>
            <select name="level" id="level" onchange="minesweeperGame.startGame()">
                <option id="difficulty-option" value="novice">Novice (9x9, 10 mines)</option>
                <option id="difficulty-option" value="intermediate">Intermediate (16x16, 40 mines)</option>
                <option id="difficulty-option" value="expert">Expert (30x16, 99 mines)</option>
                <option id="difficulty-option" value="superhuman">Superhuman (50x50, 500 mines)</option>
            </select>
            <span class="custom-arrow"></span>
        </div>
        <div id="minefield"></div>
    </div>

    <div id="popup">
        <div id="popup-content">
            <p id="popup-message"></p>
            <button id="restart-btn">Play Again!</button>
        </div>
    </div>

    <script src="../JavaScript/brain-games/minesweeper/minesweeper.js"></script>
</body>
</html>