<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="../CSS/brain-games/word-search.css">
        <link rel="stylesheet" href="../CSS/navbar.css">
        <link rel="stylesheet" href="../CSS/brain-games/rock-paper-scissors.css">
        <title>Rock Paper Scissors</title>
    </head>

    <?php include "../navbar.php"?>
    <body>
        <br><br><br>
        <div class="game-container">
            <h1>Rock Paper Scissors</h1>
            <div class="weapon-box">
                <h3>Choose your Weapon</h3>
                <div class="weapons">
                    <div class="rock">
                        <img src="../CSS/images/brain-games/rock-paper-scissors/rock.png" alt="Rock">
                    </div>

                    <div class="paper">
                        <img src="../CSS/images/brain-games/rock-paper-scissors/paper.png" alt="Paper">
                    </div>

                    <div class="scissors">
                        <img src="../CSS/images/brain-games/rock-paper-scissors/scissors.png" alt="Scissors">
                    </div>
                </div>
            </div>

            <div class="player-choices">
                <h3>Player <span>v/s</span> Computer</h3>
                <div class="player-choice">
                    <img src="../CSS/images/brain-games/rock-paper-scissors/rock.png" alt="Player Choice">
                </div>

                <div class="computer-choice">
                    <img src="../CSS/images/brain-games/rock-paper-scissors/rock.png" alt="Computer Choice">
                </div>
            </div>

            <div class="result-box">
                <h3>Congratulations! You won the game! &#x1F389;</h3>
                <button class="play-again">&#x21BB; Play Again</button>
            </div>

            <div class="score-box">
                <div class="won">
                    <h3>Won: <span>0</span></h3>
                </div>

                <div class="lost">
                    <h3>Lost: <span>0</span></h3>
                </div>

                <div class="draw">
                    <h3>Draw: <span>0</span></h3>
                </div>
            </div>
        </div>

        <script src="../JavaScript/brain-games/rock-paper-scissors/rock-paper-scissors.js"></script>
        <script src="../JavaScript/navbar/nav-behaviour.js"></script>
    </body>
</html>