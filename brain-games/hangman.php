<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../CSS/navbar.css">
    <link rel="stylesheet" href="../CSS/brain-games/hangman.css">
    <title>Hangman</title>
</head>

<?php
include "../navbar.php";
?>

<body>
    <div id="game-container">
        <canvas id="hangman-canvas"></canvas>
        <div id="word-container"></div>
        <div id="message"></div>
        <div id="letters-container"></div>
        <button id="new-game">New Game</button>
    </div>
    <script src="../JavaScript/brain-games/hangman/hangman.js"></script>
    <script src="../JavaScript/navbar/nav-behaviour.js"></script>
</body>
</html>