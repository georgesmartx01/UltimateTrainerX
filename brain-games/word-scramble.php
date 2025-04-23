<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../CSS/navbar.css"/>
    <link rel="stylesheet" href="../CSS/brain-games/word-scramble.css"/>
    <script src="../JavaScript/brain-games/word-scramble/word-scramble.js"></script>
    <script src="../JavaScript/brain-games/word-scramble/words.js"></script>
    <title>Word Scramble</title>
</head>

<?php include "../navbar.php"; ?>

<body>
<div class="container">
        <h2>Word Scramble</h2>
        <div class="content">
            <p class="word"></p>
            <div class="details">
                <p class="hint">Hint: <span></span></p>
                <p class="time">Time Left: <span><b>30</b>s</span></p>
            </div>
            <input type="text" spellcheck="false" placeholder="Enter a valid word">
            <div class="buttons">
                <button class="refresh-word">Refresh Word</button>
                <button class="check-word">Check Word</button>
            </div>
        </div>
    </div>
  </body>
</html>