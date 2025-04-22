<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="../CSS/brain-games/word-search.css">
    <link rel="stylesheet" href="../CSS/navbar.css">
    <link rel="stylesheet" href="../CSS/word-search.css">
    <title>Word Search</title>
</head>
<?php include "../navbar.php"?>
<body>
    <div class="game-container">
        <h1>Word Search Game</h1>
        <section id="game-area">
            <ul class="words"></ul>
        </section>
    </div>

    <script src="../JavaScript/brain-games/word-search/utility.js"></script>
    <script src="../JavaScript/brain-games/word-search/word-search.js"></script>
    <script type="text/javascript">
        const gameAreaElement = document.getElementById('game-area');
        let gameObject = gameAreaElement.wordSearch();

        // Put words into 'words'
        let words = gameObject.settings.wordsList, 
        wordsWrap = document.querySelector('.words');
        words.forEach(word => {
            const liEl = document.createElement('li');
            liEl.setAttribute('class', 'word');
            liEl.innerText = word;
            wordsWrap.appendChild(liEl);
        });
    </script>
</body>