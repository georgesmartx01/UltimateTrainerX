<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Home page</title>
        <link rel="stylesheet" href="../userside/CSS/homepage.css">
        <link rel="stylesheet" href="../userside/CSS/navbar.css">
        <link rel="icon" type="image/x-icon" href="Images/favicon.ico">
        <!-- Font Awesome Link-->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    </head>

    <?php
    include "../userside/connectdb.php";
    session_start();
    include "../userside/navbar.php";
    ?>
    
    <body>
        <section class="home">
            <div class="home-caption">
                <br><br><br><br><br><br><br><br><br><br><br>
                <h1><b>Unlock Your Brain's True Potential Today!</b></h1>
                <p></p>
                <br>
                <h1><b></b>Monitor Your Brain's Cognitive Performance and Progress!</h1>
                <p>Get real-time insights with detailed performance metrics and personalised feedback.</p>
                <br>
                <h1><b>Benefits For Training Your Brain</b></h1>
                <p>Improve your memory and focus</p>
                <p>Enhance problem-solving abilities</p>
                <p>Boost confidence and mental agility</p>
                <h1><b>Personalised Brain Training, Adapting To Your Brain's Needs!</b></h1>
                <br>
                <h1><b>Perfect for everyone!</b></h1>
                <p>Anyone can use UltimateTrainerX - children, teenagers, adults, the elderly, educators, doctors and employees alike can benefit from this tool!</p>
                <br>
                <h1><b>Accessible to All!</b></h1>
                <p>Whether you are not a native English speaker, have visual or hearing impairments, motor disabilities, dyslexia, autism or ADHD, UltimateTrainerX has got you covered in offering accessibility features to meet your needs!</p>
                <p>Everything from adjustable font sizes and colour schemes, customisable page layout to your fingertips, text-to-speech, compatible screen readers, image labels, keyboard navigation, voice commands and more means you are not missing out on additional features worth considering. </p>
                <br>
                <h1><b>Private and Secure By Design!</b></h1>
                <p>Your privacy is my top priority! UltimateTrainerX securely stores your performance charts and scores with your sessions and personalised cognitive training is performed locally on your device!</p>
                <p>Your sessions are always randomly generated and passwords are hashed, to further enhance your security!</p>
                <p>You can learn more at this page: <a href="../userside/learnmore.php">Learn More</a></p>
                <br>
                <h1><b>What people have said about UltimateTrainerX?</b></h1>
            </div>
        </section>
    </body>
</html