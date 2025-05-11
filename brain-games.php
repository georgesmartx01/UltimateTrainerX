<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <title>Brain Games</title>
        <link rel="stylesheet" type="text/css" href="CSS/navbar.css">
        <link rel="stylesheet" type="text/css" href="CSS/brain-games.css">
    </head>
    <?php
    include "navbar.php";
    ?>

    <body>
        <br><br><br>
        <h1>Brain Games</h1>
        <p class="caption">It's important to keep your brain healthy! Challenge your brain today!</p>

        <div class="search-container">
            <form>
                <input id="search-games" class="search-game" type="text" placeholder="Search for games" name="search">
                <button id="search-btn" type="button"><i class="fa fa-search"></i></button>
            </form>
            <div class="icon-description">Search</div>
        </div>
            <!-- Memory Match -->
            <div class="column">
                <div class="card">
                    <div class="game-container">
                        <h3 class="game-name">Memory Match</h3>
                        <img src="CSS/images/brain-games/memory-match/memory-match.png" alt="Memory Match">
                        <div class="middle">
                            <button aria-label="Play Memory Match"><a href="brain-games/memory-match.php">Play</a></button>
                        </div>
                    </div>
                    <br>
                    <p>Problem-solving · Memory · Pattern Recognition</p>
                    <br>
                    <p>Concentration · Patience · Attention to Detail</p>
                </div>
            </div>

            <!-- Rock Paper Scissors -->
            <div class="column">
                <div class="card">
                    <div class="game-container">
                        <h3 class="game-name">Rock Paper Scissors</h3>
                        <img src="CSS/images/brain-games/rock-paper-scissors/rock-paper-scissors.svg" alt="Rock Paper Scissors">
                        <div class="middle">
                            <button aria-label="Play Rock Paper Scissors"><a href="brain-games/rock-paper-scissors.php">Play</a></button>
                        </div>
                    </div>
                    <br>
                    <p><b>Problem-solving · Memory · Pattern Recognition</b></p>
                    <br>
                    <p>Concentration · Patience · Attention to Detail</p>
                </div>
            </div>

            <!-- Puzzle Math -->
            <div class="column">
                <div class="card">
                    <div class="game-container">
                        <h3 class="game-name">Puzzle Math</h3>
                        <img src="CSS/images/brain-games/puzzle-math/puzzle-math.png" alt="Puzzle Math">
                        <div class="middle">
                            <button aria-label="Play Puzzle Math"><a href="brain-games/puzzle-math.php">Play</a></button>
                        </div>
                    </div>
                    <br>
                    <p>Problem-solving · Memory · Pattern Recognition</p>
                    <br>
                    <p>Concentration · Patience · Attention to Detail</p>
                </div>
            </div>

            <!-- Hangman -->
            <div class="column">
                <div class="card">
                    <div class="game-container">
                        <h3 class="game-name">Hangman</h3>
                        <img src="CSS/images/brain-games/hangman/hangman.jpg" alt="Hangman">
                        <div class="middle">
                            <button aria-label="Play Hangman"><a href="brain-games/hangman.php">Play</a></button>
                        </div>
                    </div>
                    <br>
                    <p>Problem-solving · Memory · Pattern Recognition</p>
                    <br>
                    <p>Concentration · Patience · Attention to Detail</p>
                </div>
            </div>

            <!-- 2048 -->
            <div class="column">
                <div class="card">
                    <div class="game-container">
                        <h3 class="game-name">2048</h3>
                        <img src="CSS/images/brain-games/2048/2048.jpg" alt="2048">
                        <div class="middle">
                            <button aria-label="Play 2048"><a href="brain-games/2048.php">Play</a></button>
                        </div>
                    </div>
                    <br>
                    <p>Problem-solving · Memory · Pattern Recognition</p>
                    <br>
                    <p>Concentration · Patience · Attention to Detail</p>
                </div>
            </div>

            <!-- Minesweeper -->
            <div class="column">
                <div class="card">
                    <div class="game-container">
                        <h3 class="game-name">Minesweeper</h3>
                        <img src="CSS/images/brain-games/minesweeper/minesweeper.png" alt="Minesweeper">
                        <div class="middle">
                            <button aria-label="Play Minesweeper"><a href="brain-games/minesweeper.php">Play</a></button>
                        </div>
                    </div>
                    <br>
                    <p>Problem-solving · Memory · Pattern Recognition</p>
                    <br>
                    <p>Concentration · Patience · Attention to Detail</p>
                </div>
            </div>

            <!-- Tic Tac Toe -->
            <div class="column">
                <div class="card">
                    <div class="game-container">
                        <h3 class="game-name">Tic Tac Toe</h3>
                        <img src="CSS/images/brain-games/tic-tac-toe/tic-tac-toe.png" alt="Tic Tac Toe">
                        <div class="middle">
                            <button><a href="brain-games/tic-tac-toe.php">Play</a></button>
                        </div>
                    </div>
                    <br>
                    <p>Problem-solving · Memory · Pattern Recognition</p>
                    <br>
                    <p>Concentration · Patience · Attention to Detail</p>
                </div>
            </div>
          
            <!-- Connect Four -->
            <div class="column">
                <div class="card">
                    <div class="game-container">
                        <h3 class="game-name">Connect Four</h3>
                        <img src="CSS/images/brain-games/connect-four/connect-four.jpg" alt="Connect Four">
                        <div class="middle">
                            <button><a href="brain-games/connect-four.php">Play</a></button>
                        </div>
                    </div>
                    <br>
                    <p>Problem-solving · Memory · Pattern Recognition</p>
                    <br>
                    <p>Concentration · Patience · Attention to Detail</p>
                </div>
            </div>

            <!-- Solitaire -->
            <div class="column">
                <div class="card">
                    <div class="game-container">
                        <h3 class="game-name">Solitaire</h3>
                        <img src="CSS/images/brain-games/solitaire/solitaire.jpg" alt="Solitaire">
                        <div class="middle">
                            <button><a href="brain-games/solitaire.php">Play</a></button>
                        </div>
                    </div>
                    <br>
                    <p>Problem-solving · Memory · Pattern Recognition</p>
                    <br>
                    <p>Concentration · Patience · Attention to Detail</p>
                </div>
            </div>

            <!-- Word Guessing Game -->
            <div class="column">
                <div class="card">
                    <div class="game-container">
                        <h3 class="game-name">Word Guessing Game</h3>
                        <img src="CSS/images/brain-games/word-guessing-game/word-guessing-game.jpg" alt="Word Guessing Game">
                        <div class="middle">
                            <button><a href="brain-games/word-guessing-game.php">Play</a></button>
                        </div>
                    </div>
                    <br>
                    <p>Problem-solving · Memory · Pattern Recognition</p>
                    <br>
                    <p>Concentration · Patience · Attention to Detail</p>
                </div>
            </div>

            <!-- Snake Game -->
            <div class="column">
                <div class="card">
                    <div class="game-container">
                        <h3 class="game-name">Snake Game</h3>
                        <img src="CSS/images/brain-games/snake-game/snake-game.png" alt="Snake Game">
                        <div class="middle">
                            <button><a href="brain-games/snake-game.php">Play</a></button>
                        </div>
                    </div>
                    <br>
                    <p>Problem-solving · Memory · Pattern Recognition</p>
                    <br>
                    <p>Concentration · Patience · Attention to Detail</p>
                </div>
            </div>

            <!-- Wordle -->
            <div class="column">
                <div class="card">
                    <div class="game-container">
                        <h3 class="game-name">Wordle</h3>
                        <img src="CSS/images/brain-games/wordle/wordle.png" alt="Wordle">
                        <div class="middle">
                            <button><a href="brain-games/wordle.php">Play</a></button>
                        </div>
                    </div>
                    <br>
                    <p>Problem-solving · Memory · Pattern Recognition</p>
                    <br>
                    <p>Concentration · Patience · Attention to Detail</p>
                </div>
            </div>
        </div>
        <script src="JavaScript/brain-games/search-games/search-games.js"></script>
    </body>
</html>