<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <title>Brain Games</title>
        <link rel="stylesheet" type="text/css" href="CSS/navbar.css">
        <link rel="stylesheet" type="text/css" href="CSS/brain-games.css">
        <script defer src="JavaScript/script.js"></script>
    </head>
    <?php
    include "connectdb.php";
    session_start();
    include "navbar.php";
    ?>

    <body>
        <br><br><br>
        <h1>Brain Games</h1>
        <p class="caption">It's important to keep your brain healthy! Challenge your brain today!</p>

        <div class="row">
            <!-- Sudoku -->
            <div class="column">
                <div class="card">
                    <div class="container">
                        <img src="CSS/images/brain-games/sudoku/sudoku.jpg" alt="Sudoku">
                        <div class="middle">
                            <p>Sudoku</p>
                            <button><a href="brain-games/sudoku.php">Play</a></button>
                        </div>
                    </div>
                    <br>
                    <p>Inhibition · Spatial Perception · Planning</p>
                    <br>
                    <p>Phonological Short-term Memory</p>
                </div>
            </div>

            <!-- Memory Match -->
            <div class="column">
                <div class="card">
                    <div class="container">
                        <img src="CSS/images/brain-games/memory-match/memory-match.png" alt="Memory Match">
                        
                        <div class="middle">
                            <p>Memory Match</p>
                            <button><a href="brain-games/memory-match.php">Play</a></button>
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
                    <div class="container">
                        <img src="CSS/images/brain-games/rock-paper-scissors/rock-paper-scissors.svg" alt="Rock Paper Scissors">

                        <div class="middle">
                            <p>Rock Paper Scissors</p>
                            <button><a href="brain-games/rock-paper-scissors.php">Play</a></button>
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
                    <div class="container">
                        <img src="CSS/images/brain-games/puzzle-math/puzzle-math.png" alt="Puzzle Math">

                        <div class="middle">
                            <p>Puzzle Math</p>
                            <button><a href="brain-games/puzzle-math.php">Play</a></button>
                        </div>
                    </div>
                    <br>
                    <p>Problem-solving · Memory · Pattern Recognition</p>
                    <br>
                    <p>Concentration · Patience · Attention to Detail</p>
                </div>
            </div>

            <!-- Word Search -->
            <div class="column">
                <div class="card">
                    <div class="container">
                        <img src="CSS/images/brain-games/word-search/word-search.png" alt="Word Search">

                        <div class="middle">
                            <p>Word Search</p>
                            <button><a href="brain-games/word-search.php">Play</a></button>
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
                    <div class="container">
                        <img src="CSS/images/brain-games/hangman/hangman.jpg" alt="Hangman">

                        <div class="middle">
                            <p>Hangman</p>
                            <button><a href="brain-games/hangman.php">Play</a></button>
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
                    <div class="container">
                        <img src="CSS/images/brain-games/2048/2048.jpg" alt="2048">

                        <div class="middle">
                            <p>2048</p>
                            <button><a href="brain-games/2048.php">Play</a></button>
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
                    <div class="container">
                        <img src="CSS/images/brain-games/minesweeper/minesweeper.png" alt="Minesweeper">

                        <div class="middle">
                            <p>Minesweeper</p>
                            <button><a href="brain-games/minesweeper.php">Play</a></button>
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
                    <div class="container">
                        <img src="CSS/images/brain-games/tic-tac-toe/tic-tac-toe.png" alt="Tic Tac Toe">

                        <div class="middle">
                            <p>Tic Tac Toe</p>
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
                    <div class="container">
                        <img src="CSS/images/brain-games/connect-four/connect-four.jpg" alt="Connect Four">

                        <div class="middle">
                            <p>Connect Four</p>
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
                    <div class="container">
                        <img src="CSS/images/brain-games/solitaire/solitaire.jpg" alt="Solitaire">

                        <div class="middle">
                            <p>Connect Four</p>
                            <button><a href="brain-games/solitaire.php">Play</a></button>
                        </div>
                    </div>
                    <br>
                    <p>Problem-solving · Memory · Pattern Recognition</p>
                    <br>
                    <p>Concentration · Patience · Attention to Detail</p>
                </div>
            </div>
        </div>
    </body>
</html>