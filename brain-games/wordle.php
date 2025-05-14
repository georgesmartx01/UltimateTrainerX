<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Wordle Clone</title>
  <link rel="stylesheet" href="../CSS/navbar.css" />
  <link rel="stylesheet" href="../CSS/brain-games/wordle.css" />
  <?php include "../navbar.php" ?>
</head>
<body>
  <main class="wordle-container">
    <h1 class="game-title">Wordle Clone</h1>
    <div id="board" class="board"></div>
    <div id="keyboard" class="keyboard"></div>
    <div class="game-controls">
      <button id="restartBtn" class="restart-btn">New Game</button>
    </div>
  </main>

  <script src="../JavaScript/brain-games/memory-match/memory-match.js"></script>
  <script src="../JavaScript/navbar/nav-behaviour.js"></script>
  <script src="../JavaScript/brain-games/wordle/wordle.js"></script>
</body>
</html>