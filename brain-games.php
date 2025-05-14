<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Brain Games | UltimateTrainerX</title>
    <link rel="stylesheet" href="CSS/navbar.css">
    <link rel="stylesheet" href="CSS/brain-games.css">
</head>

<body>
    <?php include "navbar.php"; ?>

    <main>
        <h1>Brain Games</h1>
        <p class="caption">It's important to keep your brain healthy! Challenge your brain today!</p>

        <!-- Search Bar -->
        <div class="search-container">
            <input id="search-games" class="search-game" type="text" placeholder="Search for games" name="search" aria-label="Search for games">
            <button id="search-btn" type="button"><i class="fa fa-search"></i></button>
            <div class="icon-description">Search</div>
        </div>

        <!-- Dynamic Game Cards -->
        <div class="game-grid">
            <?php
            $games = [
                ["name" => "Memory Match", "image" => "memory-match/memory-match.png", "url" => "brain-games/memory-match.php"],
                ["name" => "Rock Paper Scissors", "image" => "rock-paper-scissors/rock-paper-scissors.svg", "url" => "brain-games/rock-paper-scissors.php"],
                ["name" => "Puzzle Math", "image" => "puzzle-math/puzzle-math.png", "url" => "brain-games/puzzle-math.php"],
                ["name" => "Hangman", "image" => "hangman/hangman.jpg", "url" => "brain-games/hangman.php"],
                ["name" => "2048", "image" => "2048/2048.jpg", "url" => "brain-games/2048.php"],
                ["name" => "Minesweeper", "image" => "minesweeper/minesweeper.png", "url" => "brain-games/minesweeper.php"],
                ["name" => "Tic Tac Toe", "image" => "tic-tac-toe/tic-tac-toe.png", "url" => "brain-games/tic-tac-toe.php"],
                ["name" => "Connect Four", "image" => "connect-four/connect-four.jpg", "url" => "brain-games/connect-four.php"],
                ["name" => "Solitaire", "image" => "solitaire/solitaire.jpg", "url" => "brain-games/solitaire.php"],
                ["name" => "Word Guessing Game", "image" => "word-guessing-game/word-guessing-game.jpg", "url" => "brain-games/word-guessing-game.php"],
                ["name" => "Snake Game", "image" => "snake-game/snake-game.png", "url" => "brain-games/snake-game.php"],
                ["name" => "Wordle", "image" => "wordle/wordle.png", "url" => "brain-games/wordle.php"]
            ];

            foreach ($games as $game) {
                echo "<div class='column'>";
                echo "<div class='card'>";
                echo "<div class='game-container'>";
                echo "<h3 class='game-name'>{$game['name']}</h3>";
                echo "<img src='CSS/images/brain-games/{$game['image']}' alt='{$game['name']}'>";
                echo "<div class='middle'><button><a href='{$game['url']}'>Play</a></button></div>";
                echo "</div>";
                echo "<p>Problem-solving · Memory · Pattern Recognition</p>";
                echo "<p>Concentration · Patience · Attention to Detail</p>";
                echo "</div>";
                echo "</div>";
            }
            ?>
        </div>
    </main>

    <script src="JavaScript/brain-games/search-games/search-games.js"></script>
</body>
</html>