<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Us | UltimateTrainerX</title>
    <link rel="stylesheet" href="CSS/navbar.css">
    <link rel="stylesheet" href="CSS/aboutus.css">
    <script defer src="JavaScript/script.js"></script>
</head>

<body>
    <?php
    include "connectdb.php";
    if (session_status() === PHP_SESSION_NONE) {
        session_start();
    }
    include "navbar.php";
    ?>

    <main class="about-container">
        <section class="hero-section">
            <h1>About UltimateTrainerX</h1>
            <p>Unlock your cognitive potential with engaging brain exercises!</p>
        </section>

        <section class="about-content">
            <h2>Who We Are</h2>
            <p>
                Welcome to <strong>UltimateTrainerX</strong>, a web-based <strong>cognitive training tool</strong> designed to help users <strong>improve memory, problem-solving, and attention</strong> through interactive exercises. Since <strong>2025</strong>, we’ve been committed to making brain training <strong>accessible and effective</strong> for individuals of all backgrounds.
            </p>

            <h2>Our Mission</h2>
            <p>
                We believe that <strong>mental fitness</strong> is just as important as physical health. Our carefully crafted challenges encourage users to:
            </p>
            <ul>
                <li>🧠 Strengthen <strong>memory recall</strong> and retention.</li>
                <li>🧐 Improve <strong>problem-solving and logical reasoning skills</strong>.</li>
                <li>🎯 Enhance <strong>focus, concentration, and cognitive flexibility</strong>.</li>
            </ul>

            <h2>Why UltimateTrainerX?</h2>
            <p>Here's what makes us stand out:</p>
            <ul>
                <li>✔ A <strong>diverse range of cognitive exercises</strong> designed for mental agility.</li>
                <li>✔ <strong>Accessibility-first approach</strong>, ensuring usability for all individuals.</li>
                <li>✔ <strong>Performance tracking</strong>, helping users understand their cognitive progress.</li>
            </ul>

            <h2>Commitment to Accessibility</h2>
            <p>We strive to make <strong>UltimateTrainerX inclusive</strong> by offering:</p>
            <ul>
                <li>🔍 <strong>Customizable font sizes and color contrast</strong> options.</li>
                <li>⌨ <strong>Keyboard navigation support</strong> for ease of use.</li>
                <li>🖼 <strong>Descriptive image labels</strong>, ensuring clarity for all users.</li>
            </ul>

            <h2>Join Us on the Journey</h2>
            <p>
                Whether you're a student, a professional, or simply looking to <strong>keep your mind sharp</strong>, UltimateTrainerX is here to help. Ready to boost your cognitive skills? <strong><a href="signup.php">Start training today!</a></strong>
            </p>
        </section>
    </main>

    <?php include "footer.php"; ?>
</body>
</html>