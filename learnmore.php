<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Learn More</title>
        <link rel="stylesheet" href="CSS/learnmore.css">
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
            <header class="learnmore-header">
                <h1>Learn More About UltimateTrainerX</h1>
                <p>Your one-stop solution for brain training and cognitive improvement.</p>
            </header>

            <section class="privacy-policy">
                <h2>Privacy Policy</h2>
                <p>Your privacy is important to us. Here's how we ensure the security and confidentiality of your data:</p>
                <ul>
                    <li>All data is processed securely using industry-standard encryption methods.</li>
                    <li>We never share your data with third parties without your consent.</li>
                    <li>Your performance data is stored locally on your device, ensuring no exposure to external risks.</li>
                    <li>Sessions are randomized to prevent unauthorized access or manipulation.</li>
                    <li>We implement regular security audits and updates to ensure the highest level of protection.</li>
                </ul>
            </section>

            <section class="terms-of-service">
                <h2>Terms of Service</h2>
                <p>By using UltimateTrainerX, you agree to the following terms:</p>
                <ul>
                    <li>We provide brain training services that focus on improving cognitive functions such as memory and problem-solving.</li>
                    <li>Users are encouraged to use our services regularly to see improvements over time.</li>
                    <li>We reserve the right to update our terms and services as necessary to reflect new features or legal requirements.</li>
                    <li>Use of our service is at your own risk; we are not liable for any consequences resulting from using our platform.</li>
                </ul>
            </section>

            <section class="contact-info">
                <h2>Contact Information</h2>
                <p>If you have any questions or concerns, feel free to reach out to us:</p>
                <ul>
                    <li><i class="fas fa-envelope"></i> Email: <a href="mailto:support@ultimatetrainerx.com">support@ultimatetrainerx.com</a></li>
                    <li><i class="fas fa-phone-alt"></i> Phone: +1-800-123-4567</li>
                    <li><i class="fas fa-map-marker-alt"></i> Address: 123 Brain Street, Cognitive City, USA</li>
                </ul>
            </section>

            <section class="faq">
                <h2>Frequently Asked Questions</h2>
                <p>Here are answers to some common questions:</p>
                <ul>
                    <li><strong>Is UltimateTrainerX free?</strong> Yes, we offer both free and premium plans to suit your needs.</li>
                    <li><strong>What devices can I use UltimateTrainerX on?</strong> UltimateTrainerX is available on all major devices, including desktop, tablet, and mobile.</li>
                    <li><strong>How do I reset my password?</strong> Simply click the "Forgot Password" link on the login page and follow the instructions.</li>
                    <li><strong>Can I track my progress?</strong> Yes, we provide detailed performance tracking so you can monitor your cognitive improvement over time.</li>
                </ul>
            </section>
        </div>

        <?php include "footer.php"; ?>
    </body>
</html>