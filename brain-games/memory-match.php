<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../CSS/navbar.css" />
    <link rel="stylesheet" href="../CSS/brain-games/memory-match.css" />
    <title>Memory Match</title>
  </head>

  <?php include "../navbar.php"; ?>

  <body>
    <div id="game-container">
      <h1>Memory Match</h1>

      <div class="controls">
        <div class="stats">
          <div class="moves">0 moves</div>
          <div class="timer">Time: 0 sec</div>
        </div>
      </div>

      <div id="settings">
        <label for="grid-size">Select grid size:</label>
        <select name="grid-size" id="grid-size">
          <option value="4">4 x 4</option>
          <option value="6">6 x 6</option>
        </select>
        
        <label for="emoji-category">Choose emoji category:</label>
        <select id="emoji-category">
          <option value="smileys">Smileys</option>
          <option value="animals">Animals & Nature</option>
          <option value="food">Food & Drink</option>
          <option value="sports">Sports</option>
          <option value="travel">Travel & Places</option>
          <option value="objects">Objects</option>
        </select>

        <button id="start-game">Start Game</button>
      </div>

      <div id="game-board"></div>
    </div>

    <div id="popup" class="popup hidden">
      <div class="popup-content">
        <h2>Congratulations!</h2>
        <p>You won the game!</p>
        <button id="close-popup">Close</button>
      </div>
    </div>

    <script src="../JavaScript/brain-games/memory-match/memory-match.js"></script>
    <script src="../JavaScript/navbar/nav-behaviour.js"></script>
  </body>
</html>