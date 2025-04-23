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
        <!-- Container for the sections -->
        <div class="container">
            <!-- Home Caption -->
            <section class="home-caption">
                <h1>Unlock Your Brain's True Potential!</h1>
                <p>Challenging your brain is important, which is why this cognitive tool helps you improve literacy, problem-solving, memory and more.</p>
                <p>You should complement the time spent on this tool with other aspects of your life, so you can maximise your cognitive performance.</p>
            </section>

            <!-- Performance Monitoring -->
            <section class="perf-mon">
                <h1>Monitor Your Brain's Cognitive Performance and Progress!</h1>
                <p>Get real-time insights with detailed performance metrics and personalised feedback.</p>
                <p>Our performance measurement system gives you additional information about strengths, weaknesses</p>
            </section>

            <!-- Benefits -->
            <section class="benefits">
                <h1>Benefits of Training Your Brain</h1>
                <p>Improved memory recall</p>
                <p>Enhance problem-solving abilities</p>
                <p>Boost confidence and mental agility</p>
            </section>

            <!-- Personalised Training -->
            <section class="personalised-training">
                <h1>Personalised Brain Training, Adapting To Your Brain's Needs!</h1>
                <p>Anyone can use UltimateTrainerX - children, teenagers, adults, the elderly, educators, doctors and employees alike can benefit from this tool!</p>
            </section>
            
            <!-- Other ways to challenge your brain -->
            <section class="challenges">
                <h1>Other ways to challenge your brain</h1>
                <p>
                    Apart from our available game stack that focuses on problem-solving, memory, processing speed, literacy and more, to improve cognitive performance, 
                    there are other ways to challenge your brain. 
                </p>
                <p>These include:</p>
                <p>1. Daily exercise 🏃‍♀️</p>
                <p>2. Taking regular breaks from screens and take care of yourself 🌿🥤📖</p>
                <p>3. Spending time with your loved ones (family and friends) 👪</p>
                <p>4. Eat a healthy diet 🍎🥦</p>
                <p>5. Learn a new hobby 🎨📚</p>
                <p>6. Listening to music 🎶</p>
                <p>7. Be optimistic</p>
                <p>Remember: challenging your brain takes time, so patience is key and don't give up!</p>
                <p>You can do this!</p>
            </section> 

            <!-- Accessibility -->
            <section class="accessibility">
                <h1>Accessible to Everyone!</h1>
                <p>
                    Whether you are not a native English speaker, have visual or hearing impairments, motor disabilities, dyslexia, autism or ADHD, 
                    UltimateTrainerX has got you covered in offering accessibility features to meet your needs!
                </p>
                <p>
                    Everything from adjustable font sizes and colour schemes, customisable page layout to your fingertips, text-to-speech, compatible screen readers, image labels, keyboard navigation, 
                    voice commands and more means you are not missing out on additional features worth considering. 
                </p>
            </section>
            
            <!-- Privacy and Security -->
            <section class="privacy-security">
                <h1>Private and Secure By Design!</h1>
                <p>Your privacy is our top priority! UltimateTrainerX securely stores your performance charts and scores with your sessions and personalised cognitive training is performed locally on your device!</p>
                <p>Your sessions are always randomly generated and passwords are hashed, to further enhance your security!</p>
                <p>You can learn more at this page: <a href="learnmore.php">Learn More</a></p>
            </section>
            
            <!-- Testimonials -->
            <section class="testimonials">
                <h1>What people have said about UltimateTrainerX?</h1>
            </section>
        </div>
    </body>
</html>