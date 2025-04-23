<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../CSS/navbar.css"/>
    <link rel="stylesheet" href="../CSS/brain-games/tetris.css"/>
    <title>Tetris</title>
</head>

<?php
include "../navbar.php";
?>

<body>
    <div class="game-container">
        <canvas id="game-board"></canvas>
        <div class="side-panel">
            <div class="next-piece">
                <span class="next">Next</span>
                <canvas id="next-piece"></canvas>
            </div>
            <div class="score"><span id="score">Score</span></div>
            <div class="level">Level: <span id="level">1</span></div>
            <div class="lines">Lines: <span id="lines">0</span></div>
            <button id="start-btn">Start Game</button>
        </div>
    </div>

    <script src="../JavaScript/brain-games/tetris/tetris.js"></script>
</body>