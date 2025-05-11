<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pac Man</title>
    <link rel="stylesheet" href="../CSS/navbar.css">
    <link rel="stylesheet" href="../CSS/brain-games/pac-man.css">
</head>

<?php include "../navbar.php" ?>

<body>
    <h1>Pac Man</h1>
    <div id="game-container">
        <div id="score-board">
            <span id="score-text">Score:</span>
            <span id="score-value">0</span>
        </div>

        <div id="maze">
            <img src="../CSS/images/brain-games/pac-man/maze.png" alt="Pacman Maze" id="maze-img">
            <div id="pacman"></div>
            <div id="blinky" class="ghost"></div>
            <div id="pinky" class="ghost"></div>
            <div id="inky" class="ghost"></div>
            <div id="clyde" class="ghost"></div>
            <div id="message">Press Enter</div>
        </div>

        <div id="lives-board">
            <span id="lives-text">Lives left:</span>
            <img src="../CSS/images/brain-games/pac-man/pacman.png" alt="Pacman">
            <img src="../CSS/images/brain-games/pac-man/pacman.png" alt="Pacman">
            <img src="../CSS/images/brain-games/pac-man/pacman.png" alt="Pacman">
        </div>
    </div>

    <script src="../JavaScript/brain-games/pac-man/global.js"></script>
    <script src="../JavaScript/brain-games/pac-man/data.js"></script>
    <script src="../JavaScript/brain-games/pac-man/initialise.js"></script>
    <script src="../JavaScript/brain-games/pac-man/ai.js"></script>
    <script src="../JavaScript/brain-games/pac-man/utility.js"></script>
    <script src="../JavaScript/brain-games/pac-man/visual.js"></script>
    <script src="../JavaScript/brain-games/pac-man/event.js"></script>
    <script src="../JavaScript/brain-games/pac-man/movement.js"></script>
    <script src="../JavaScript/brain-games/pac-man/timing.js"></script>
    <script src="../JavaScript/navbar/nav-behaviour.js"></script>
</body>
</html>