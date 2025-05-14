<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home page</title>
    <link rel="stylesheet" href="CSS/homepage.css">
    <link rel="stylesheet" href="CSS/navbar.css">
    <link rel="icon" type="image/x-icon" href="Images/favicon.ico">
    <!-- Font Awesome Link-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" 
    integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" 
    crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<?php
include "connectdb.php";
session_start();
include "navbar.php";
?>

<body>
    <div class="container">
        <section class="home-caption">
            <h1>Unlock Your Brain's True Potential!</h1>
            <p>Challenge your brain to improve literacy, problem-solving, memory, and more.</p>
            <p>Maximise cognitive performance by balancing brain training with other aspects of life.</p>
        </section>

        <section class="perf-mon">
            <h1>Monitor Your Cognitive Performance!</h1>
            <p>Real-time insights with detailed performance metrics and personalised feedback.</p>
        </section>

        <section class="benefits">
            <h1>Benefits of Brain Training</h1>
            <ul>
                <li>Improved memory recall</li>
                <li>Enhanced problem-solving abilities</li>
                <li>Boosted confidence and mental agility</li>
            </ul>
        </section>

        <section class="personalised-training">
            <h1>Personalised Brain Training for Everyone!</h1>
            <p>UltimateTrainerX caters to people of all ages and professions: children, adults, educators, and more.</p>
        </section>

        <section class="challenges">
            <h1>Other Ways to Challenge Your Brain</h1>
            <ul>
                <li>Daily exercise 🏃‍♀️</li>
                <li>Taking breaks from screens 🌿🥤📖</li>
                <li>Spending time with loved ones 👪</li>
                <li>Eating a healthy diet 🍎🥦</li>
                <li>Learning a new hobby 🎨📚</li>
                <li>Listening to music 🎶</li>
                <li>Maintaining an optimistic mindset</li>
            </ul>
            <p>Patience is key—take your time, and don't give up!</p>
        </section>

        <section class="accessibility">
            <h1>Accessibility for Everyone!</h1>
            <p>UltimateTrainerX is designed to accommodate a wide range of needs, from font adjustments to voice commands, and more.</p>
        </section>

        <section class="privacy-security">
            <h1>Private and Secure By Design!</h1>
            <p>Your privacy is our priority! Sessions are stored securely, and performance data is processed locally on your device.</p>
            <p>Your sessions are randomly generated, with encrypted passwords for additional security.</p>
            <p>Learn more about our security practices <a href="learnmore.php">here</a>.</p>
        </section>
    </div>

    <?php include "footer.php"; ?>
</body>
</html>