<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../CSS/navbar.css">
        <link rel="stylesheet" href="../CSS/brain-games/snake-game.css">
        <title>Snake Game</title>
    </head>
    <?php include "../navbar.php"?>
    <body>
        <h1 class="neon-text">Snake</h1>
        <div id="score-board">
            <span class="neon-text" id="score">Score: 0</span>
            <span class="neon-text" id="best-score">Best Score: 0</span>
        </div>
        <canvas id="game-canvas" width="400" height="400"></canvas>
        <button id="start-btn">Start Game</button>

        <div id="game-over-popup">
            <h2 class="neon-text">Game Over</h2>
            <p class="neon-text"><span id="final-score">Your Score: 0</span></p>
            <button id="restart-btn">Restart</button>
        </div>

        <script src="../JavaScript/brain-games/snake-game/snake-game.js"></script>
    </body>
</html>