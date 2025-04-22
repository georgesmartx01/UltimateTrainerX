<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Home page</title>
        <link rel="stylesheet" href="../CSS/brain-games/connect-four.css">
        <link rel="stylesheet" href="../CSS/navbar.css">
        <link rel="icon" type="image/x-icon" href="Images/favicon.ico">
        <!-- Font Awesome Link-->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    </head>

    <?php include "../navbar.php"; ?>

    <body>
        <h1>Connect Four</h1>
        <div class="wrapper">
            <div id="player-turn">Demo Text</div>
            <div class="game-container"></div>
            <div id="information">
                <div class="player-wrappers">
                    Player 1
                    <div class="player1"></div>
                </div>

                <div class="player-wrappers">
                    Player 2
                <div class="player2"></div>
            </div>
        </div>

        <div class="start-screen">
            <div id="message"></div>
            <button id="start-btn">Start Game</button>
        </div>

        <script src="../JavaScript/brain-games/connect-four/connect-four.js"></script>
    </body>
</html>