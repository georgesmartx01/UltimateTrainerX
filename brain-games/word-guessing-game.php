<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../CSS/navbar.css" />
  <link rel="stylesheet" href="../CSS/brain-games/word-guessing-game.css" />
  <title>Word Guessing Game</title>
</head>

<?php include "../navbar.php"; ?>

<body>
  <div class="game-container">
    <h1>Word Guessing Game</h1>

    <!-- Difficulty and category selectors -->
    <label for="difficulty" id="difficulty-label">Choose Difficulty</label>
    <select id="difficulty" class="select-diff">
    <option value="easy">Easy</option>
    <option value="medium">Medium</option>
    <option value="hard">Hard</option>
    </select>

    <br><br>
    <label for="category" id="category-label">Choose Category</label>
    <select id="category" class="select-cat">
    <option value="random">Random</option>
    <option value="animals">Animals</option>
    <option value="fruits">Fruits</option>
    <option value="science">Science</option>
    <option value="geography">Geography</option>
    <option value="jobs">Jobs</option>
    <option value="computers">Computers</option>
    <option value="food">Food</option>
    <option value="instruments">Instruments</option>
    </select>

    <button id="start-button" class="start">Start Game</button>
    <br>
    <button id="restart-button" class="start hidden">Restart Game</button>

    <!-- Game area -->
    <div id="game" class="hidden game-area">
    <p id="daily-challenge" class="daily-text"></p>
    <p id="hint" class="hint-text"></p>
    <p id="wordDisplay" class="word-display-text"></p>

    <input type="text" id="user-input" class="usr-input" placeholder="Guess the word" />
    <button id="guess-btn" class="guess">Guess</button>

    <p id="timer" class="timer-text"></p>
    <p id="score" class="score-text">Score: 0</p>
    <p id="high-score" class="score-text">High Score: 0</p>
    <p id="message" class="message-text"></p>

    <ul id="guess-history" class="guess-history"></ul>
    </div>
  </div>

  <script src="../JavaScript/navbar/nav-behaviour.js"></script>
  <script src="../JavaScript/brain-games/word-guessing-game/word-guessing-game.js"></script>
</body>
</html>