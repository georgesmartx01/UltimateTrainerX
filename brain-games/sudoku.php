<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="../CSS/brain-games/sudoku.css">
    <link rel="stylesheet" href="../CSS/navbar.css">
    <title>Sudoku</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" 
    integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" 
    crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<?php 
include "../navbar.php";
?>

<body>
     <!-- main -->
     <div class="main">
        <div class="screen">
            <!-- start screen -->
            <div class="start-screen active" id="start-screen">
                <input type="text" placeholder="Your name" maxlength="11" class="input-name" id="input-name">
                <div class="btn" id="btn-level">
                    Easy
                </div>
                <div class="btn" id="btn-continue">Continue</div>
                <div class="btn btn-blue" id="btn-play">New game</div>
            </div>
            <!-- end start screen -->

            <!-- game screen -->
            <div class="main-game" id="game-screen">
                <div class="main-sudoku-grid">
                    <!-- 81 cells -->
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                    <div class="main-grid-cell"></div>
                </div>

                <div class="main-game-info">
                    <div class="main-game-info-box main-game-info-name">
                        <span id="player-name">tuat</span>
                    </div>
                    <div class="main-game-info-box main-game-info-level">
                        <span id="game-level">Easy</span>
                    </div>
                </div>

                <div class="main-game-info-box main-game-info-time">
                    <span id="game-time">10:20</span>
                    <div class="pause-btn" id="btn-pause">
                        <i class="bx bx-pause"></i>
                    </div>
                </div>

                <div class="numbers">
                    <div class="number">1</div>
                    <div class="number">2</div>
                    <div class="number">3</div>
                    <div class="number">4</div>
                    <div class="number">5</div>
                    <div class="number">6</div>
                    <div class="number">7</div>
                    <div class="number">8</div>
                    <div class="number">9</div>
                    <div class="delete" id="btn-delete">X</div>
                </div>
            </div>
            <!-- end game screen -->

            <!-- pause screen -->
            <div class="pause-screen" id="pause-screen">
                <div class="btn btn-blue" id="btn-resume">Resume</div>
                <div class="btn" id="btn-new-game">New game</div>
            </div>
            <!-- end pause screen -->

            <!-- result screen -->
            <div class="result-screen" id="result-screen">
                <div class="congrate">Competed</div>
                <div class="info">Time</div>
                <div id="result-time"></div>
                <div class="btn" id="btn-new-game-2">New game</div>
            </div>
            <!-- end result screen -->
        </div>
    </div>
    <!-- end main -->

    <script src="../JavaScript/brain-games/sudoku/constant.js"></script>
    <script src="../JavaScript/brain-games/sudoku/sudoku.js"></script>
    <script src="../JavaScript/brain-games/sudoku/game.js"></script>
</body>
</html>