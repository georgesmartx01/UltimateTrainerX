<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Baseline Assessment</title>
    <link rel="stylesheet" href="../CSS/navbar.css">
    <link rel="stylesheet" href="../CSS/base-quiz.css">
</head>

<?php include "../navbar.php" ?>

<body>
<div class="base-quiz-container">
      <div class="start-screen">
        <h1 class="quiz-title">Baseline Cognitive Assessment</h1>
        <div class="settings">
          <label for="num-questions">Number of Questions:</label>
          <select id="num-questions">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="20">30</option>
            <option value="20">40</option>
            <option value="20">50</option>
          </select>

          <label for="category">Select Category:</label>
          <select id="category">
            <option value="any">Any Category</option>
            <option value="literacy">Literacy</option>
            <option value="sp-gr">Spelling and Grammar</option>
            <option value="vocabulary">Vocabulary</option>
            <option value="maths">Maths</option>
            <option value="pattern">Pattern Recognition</option>
          </select>

          <label for="difficulty">Select difficulty:</label>
          <select id="difficulty">
            <option value="">Any Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          
          <label for="time">Select time per question:</label>
          <select id="time">
            <option value="10s">10 seconds</option>
            <option value="20s">20 seconds</option>
            <option value="30s">30 seconds</option>
            <option value="45s">45 seconds</option>
            <option value="60s">60 seconds</option>
          </select>
        </div>
        <button class="start-btn">Start Assessment</button>
      </div>

      <div class="quiz hide">
        <div class="timer">
          <div class="progress">
            <div class="progress-bar"></div>
            <span class="progress-text">50</span>
          </div>
        </div>

        <div class="question-wrapper">
          <div class="number">
            Question <span class="current">1</span>
            <span class="total">/10</span>
          </div>
          <div class="question">This is a question This is a question?</div>
        </div>

        <!-- <div class="answer-wrapper">
          <div class="answer selected">
            <span class="text">answer</span>
            <span class="checkbox">
                <span class="icon">✔</span>
            </span>
          </div>
        </div> -->

        <button class="submit-btn" disabled>Submit</button>
        <button class="next-btn">Next</button>
      </div>

      <div class="end-screen hide">
        <h1 class="quiz-title">Baseline Cognitive Assessment</h1>
        <div class="score">
          <span class="score-text">Your score:</span>
          <div>
            <span class="final-score">0</span>
            <span class="total-score">/10</span>
          </div>
        </div>
        <button class="restart-btn">Restart Assessment</button>
      </div>
    </div>
    <script src="../JavaScript/assessment/base-quiz.js"></script>
</body>
</html>