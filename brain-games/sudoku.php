<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="../CSS/brain-games/sudoku.css">
    <link rel="stylesheet" href="../CSS/navbar.css">
    <title>Sudoku</title>
</head>

<?php 
include "navbar.php";
?>

<body class="flex-row">
    <div id="main__container">
        <div id="header__controls" class="flex-row">
            <span id="header__menu"><img src="../CSS/images/sudoku/3dots.svg" id="dotMenuSpan" ></span>
            <Span id="header__header">SUDOKU</Span>
            <span id="header__submit"><span>Submit</span ></span>
        </div>
        <div id="dotMenu">
            <div id="back" class="flex-row" style="justify-content: space-evenly;"><img src="../CSS/images/sudoku/home.svg" alt=""> Home</div>
            <div id="newGame">New Game</div>
            <div id="clear">Clear All</div>
            <div id="solver"> <span id="text"></span>
                <div id="solverMenu">
                    <div id="solverStart">Start</div>
                    <div id="solverWatch"> 
                        <input type="checkbox" id="solverWatchCbox" name="solverWatchCbox" value="watch" checked>
                        <label for="solverWatchCbox">Watch</label>
                    </div>
                    <div id="solverSpeed">
                        <label for="speedRange">Speed</label>
                        <input type="range" name="speedRange" id="speedRange" max="250" min="50" value="100">
                    </div>
                    <div id="solverStop">Stop</div>
                </div>

            </div>
        </div>
        
        <!-- board -->
        <div id="board">

        </div>
        <div id="keypad" class="flex-row">
        </div>

    </div>

    <!-- home page with menu options -->
    <div id="home">
        <div id="header">
            <div id="title">SUDOKU</div>

            <div id="selection__size" class="selection flex-row">
                <span class="title">Size</span>
                <div class="options flex-row">
                    <span data-size="4"><svg width="24" height="24" viewBox="0 0 1792 1792"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                            <path
                                d="M832 1024v384q0 52-38 90t-90 38h-512q-52 0-90-38t-38-90v-384q0-52 38-90t90-38h512q52 0 90 38t38 90zm0-768v384q0 52-38 90t-90 38h-512q-52 0-90-38t-38-90v-384q0-52 38-90t90-38h512q52 0 90 38t38 90zm896 768v384q0 52-38 90t-90 38h-512q-52 0-90-38t-38-90v-384q0-52 38-90t90-38h512q52 0 90 38t38 90zm0-768v384q0 52-38 90t-90 38h-512q-52 0-90-38t-38-90v-384q0-52 38-90t90-38h512q52 0 90 38t38 90z" />
                            </svg></span>
                    <span data-size="9"><svg width="24" height="24" viewBox="0 0 1792 1792"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                            <path
                                d="M512 1248v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm-640-1024v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm-640-1024v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68z" />
                            </svg></span>
                </div>
            </div>

            <div id="selection__level" class="selection flex-row">
                <span class="title">Level</span>
                <div class="options">
                    <span data-level=0>Easy</span>
                    <span data-level=1>Medium</span>
                    <span data-level=2>Hard</span>
                    <span data-level=3>Extreme</span>
                </div>
            </div>
            <div id="start">start</div>
        </div>
    </div>

    <script src="../JavaScript/brain-games/sudoku/global.js"></script>
    <script src="../JavaScript/brain-games/sudoku/combinations.js"></script>
    <script src="../JavaScript/brain-games/sudoku/validate.js"></script>
    <script src="../JavaScript/brain-games/sudoku/board.js"></script>
    <script src="../JavaScript/brain-games/sudoku/view.js"></script>
    <script src="../JavaScript/brain-games/sudoku/digger.js"></script>
    <script src="../JavaScript/brain-games/sudoku/user-actions.js"></script>
    <script src="../JavaScript/brain-games/sudoku/solver.js"></script>
    <script src="../JavaScript/brain-games/sudoku/sudoku.js"></script>
</body>
</html>