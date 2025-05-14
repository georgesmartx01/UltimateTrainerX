<?php
session_start();
include('connectdb.php');

$name = $email = $message = '';
$successMsg = $errorMsg = '';

// Form submission handling
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Trim the inputs
    $name = trim($_POST["name"] ?? '');
    $email = trim($_POST["email"] ?? '');
    $message = trim($_POST["message"] ?? '');

    // Basic validation
    if (empty($name) || empty($email) || empty($message)) {
        $errorMsg = "All fields are required.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errorMsg = "Please enter a valid email address.";
    } else {
        // Use prepared statements to avoid SQL injection
        $stmt = $conn->prepare("INSERT INTO ContactUs (Name, Email, Message) VALUES (?, ?, ?)");

        if ($stmt) {
            $stmt->bind_param("sss", $name, $email, $message);
            if ($stmt->execute()) {
                $successMsg = "Your message has been successfully submitted!";
                $name = $email = $message = ''; // Clear form
            } else {
                $errorMsg = "Failed to submit message. Please try again later.";
            }
            $stmt->close();
        } else {
            $errorMsg = "Database error. Please try again later.";
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us</title>
    <link rel="stylesheet" href="css/aboutus.css">
    <link rel="icon" type="image/x-icon" href="CSS/images/favicon.ico">
    <script defer src="JavaScript/script.js"></script>
</head>
<body>

<?php include "navbar.php"; ?>

<h1>Contact Us</h1>

<div class="container">
    <div class="column">
        <div class="text">
            <?php if (!empty($successMsg)): ?>
                <p class="success-message"><?= htmlspecialchars($successMsg) ?></p>
            <?php elseif (!empty($errorMsg)): ?>
                <p class="error-message"><?= htmlspecialchars($errorMsg) ?></p>
            <?php endif; ?>

            <form action="<?= htmlspecialchars($_SERVER["PHP_SELF"]) ?>" method="POST" class="contactus-form">
                <label for="name">Name:</label><br>
                <input type="text" id="name" name="name" value="<?= htmlspecialchars($name) ?>" required><br>

                <label for="message">Message:</label><br>
                <textarea id="message" name="message" required><?= htmlspecialchars($message) ?></textarea><br>

                <button type="submit" class="send-msg-btn">Submit</button>
            </form>
        </div>
    </div>
</div>

<?php include "footer.php"; ?>
</body>
</html>