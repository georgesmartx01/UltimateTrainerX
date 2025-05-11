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
        <h1 class="snake-title">Snake Game</h1>
        <div id="score-board">
            <span class="score-title">Score:
                <span id="score">0</span>
            </span>
            <span class="best-score-title">Best Score:
                <span id="best-score">0</span>
            </span>
        </div>
        <canvas id="game-canvas" width="600" height="660"></canvas>
        <button id="start-btn">Start Game</button>

        <div id="game-over-popup">
            <h2 class="game-over-title">Game Over</h2>
            <p class="fscore-title">Your Score: <span id="final-score"></span></p>
            <button id="restart-btn">Restart Game</button>
        </div>

        <script src="../JavaScript/brain-games/snake-game/snake-game.js"></script>
        <script src="../JavaScript/navbar/nav-behaviour.js"></script>
    </body>
</html>