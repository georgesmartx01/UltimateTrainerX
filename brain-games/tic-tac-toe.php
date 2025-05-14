<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Tic Tac Toe</title>
  <link rel="stylesheet" href="../CSS/navbar.css">
  <link rel="stylesheet" href="../CSS/brain-games/tic-tac-toe.css">
</head>
<body>
  <?php include "../navbar.php"; ?>
  <div class="container">
    <h1>Tic Tac Toe</h1>
    <div id="status" class="status"></div>
    <div id="board" class="board"></div>

    <div class="controls">
      <button id="restart-btn">Restart</button>
      <button id="toggle-mode">Switch to 2-Player</button>
      <select id="difficulty">
        <option value="easy">Easy</option>
        <option value="medium" selected>Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>

    <div class="scores">
      <div>Player X Wins: <span id="score-x">0</span></div>
      <div>Player O Wins: <span id="score-o">0</span></div>
    </div>
  </div>

  <script src="../JavaScript/navbar/nav-behaviour.js"></script>
  <script src="../JavaScript/brain-games/tic-tac-toe/tic-tac-toe.js"></script>
</body>
</html>