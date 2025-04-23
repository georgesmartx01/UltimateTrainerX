<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../CSS/navbar.css"/>
    <link rel="stylesheet" href="../CSS/brain-games/word-guessing-game.css"/>
    <title>Word Guessing Game</title>
</head>

<?php include "../navbar.php"; ?>

<body>
    <div class="container">
        <h1>Word Guessing Game</h1>
        <label for="difficulty">Choose Difficulty</label>
        <select id="difficulty" class="select-diff">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
        </select>

        <button id="start-btn" class="start">Start Game</button>

        <div id="game" class="hidden game-area">
            <p id="hint" class="hint-text"></p>
            <input type="text" id="user-input" class="usr-input" placeholder="Guess the word">
            <button id="guess-btn" class="guess">Guess</button>
            <p id="score" class="score-text">Score: 0</p>
            <p id="message" class="message-text"></p>
            <button id="next-btn" class="button hidden">Next Word</button>
        </div>
    </div>

    <script src="../JavaScript/brain-games/word-guessing-game/word-guessing-game.js"></script>
</body>
</html>