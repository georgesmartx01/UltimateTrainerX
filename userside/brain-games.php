<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <title>Brain Games</title>
        <link rel="stylesheet" type="text/css" href="../userside/CSS/navbar.css">
        <link rel="stylesheet" type="text/css" href="../userside/CSS/brain-games.css">
        <script defer src="JavaScript/script.js"></script>
    </head>
    <?php
    include "../userside/connectdb.php";
    session_start();
    include "../userside/navbar.php";
    ?>

    <body>
        <br><br><br>
        <!-- Creating the initial header and brief description of the company-->
        <h1>Brain Games</h1>
        <p class="caption">It's important to keep your brain healthy! Challenge your brain today!</p>

        <div class="row">
            <div class="column">
                <div class="card">
                    <div class="container">
                        <img src="../userside/CSS/images/brain-games/sudoku/sudoku.jpg" alt="">
                        <div class="middle">
                            <button><a href="../userside/brain-games/sudoku.php">Play</a></button>
                        </div>
                    </div>
                    <br>
                    <p>Inhibition · Spatial Perception · Planning</p>
                    <br>
                    <p>Phonological Short-term Memory</p>
                </div>
            </div>

            <div class="column">
                <div class="card">
                    <div class="container">
                        <img src="../userside/CSS/images/brain-games/memory-match/memory-match.png" alt="">
                        
                        <div class="middle">
                            <button><a href="../userside/brain-games/memory-match.php">Play</a></button>
                        </div>
                    </div>
                    <br>
                    <p>Problem-solving · Memory · Pattern Recognition</p>
                    <br>
                    <p>Concentration · Patience · Attention to Detail</p>
                </div>
            </div>

            <div class="column">
                <div class="card">
                    <div class="container">
                        <img src="../userside/CSS/images/brain-games/rock-paper-scissors/rock-paper-scissors.svg" alt="">

                        <div class="middle">
                            <button><a href="../userside/brain-games/rock-paper-scissors.php">Play</a></button>
                        </div>
                    </div>
                    <br>
                    <p>Problem-solving · Memory · Pattern Recognition</p>
                    <br>
                    <p>Concentration · Patience · Attention to Detail</p>
                </div>
            </div>

            <div class="column">
                <div class="card">
                    <div class="container">
                        <img src="../userside/CSS/images/brain-games/puzzle-math/puzzle-math.png" alt="">

                        <div class="middle">
                            <button><a href="../userside/brain-games/puzzle-math.php">Play</a></button>
                        </div>
                    </div>
                    <br>
                    <p>Problem-solving · Memory · Pattern Recognition</p>
                    <br>
                    <p>Concentration · Patience · Attention to Detail</p>
                </div>
            </div>

            <div class="column">
                <div class="card">
                    <div class="container">
                        <img src="../userside/CSS/images/brain-games/word-search/word-search.png" alt="">

                        <div class="middle">
                            <button><a href="../userside/brain-games/word-search.php">Play</a></button>
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
    <?php include "../userside/footer.php";?>
</html>