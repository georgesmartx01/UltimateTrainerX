<?php
ob_start();
session_start();
include "connectdb.php";

// Enforce HTTPS
if (empty($_SERVER['HTTPS']) || $_SERVER['HTTPS'] === "off") {
    $redirect = "https://" . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
    header("Location: $redirect");
    exit();
}

// Security headers
header("X-Content-Type-Options: nosniff");
header("X-Frame-Options: SAMEORIGIN");
header("X-XSS-Protection: 1; mode=block");

// Check login
if (!isset($_SESSION['User_ID']) || !isset($_SESSION['username'])) {
    header("Location: user-login.php?error=" . urlencode("Please log in first."));
    exit();
}

// Fetch user info
$user_sql = "SELECT * FROM users WHERE User_ID = :userID";
$user_stmt = $pdo->prepare($user_sql);
$user_stmt->bindParam(':userID', $_SESSION['User_ID'], PDO::PARAM_INT);
$user_stmt->execute();
$user = $user_stmt->fetch(PDO::FETCH_ASSOC);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Account</title>
    <link rel="stylesheet" href="CSS/account.css">
    <link rel="icon" type="image/x-icon" href="CSS/images/favicon.ico">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script defer src="JavaScript/main-script.js"></script>
</head>
<body>
    <?php include "navbar.php"; ?>

    <div id="update-details-popup" class="popup-menu">
        <h3>Update Details</h3>
        <form id="update-form" method="post" action="update-user-details.php">
            Username: <input type="text" name="username" value="<?= htmlspecialchars($user['Username'] ?? '') ?>"><br><br>
            Password: <input type="password" name="password"><br><br>
            Forename: <input type="text" name="forename" value="<?= htmlspecialchars($user['Fore_name'] ?? '') ?>"><br><br>
            Second Name: <input type="text" name="second_name" value="<?= htmlspecialchars($user['Second_Name'] ?? '') ?>"><br><br>
            Last Name: <input type="text" name="last_name" value="<?= htmlspecialchars($user['Last_Name'] ?? '') ?>"><br><br>
            <input type="submit" value="Update">
            <button type="button" class="cancel-btn" onclick="cancelUpdatePopup()">Cancel</button>
        </form>
    </div>

    <div class="account-body">
        <div class="card">
            <img class="user_image" src="CSS/images/userlogo/userlogo.png">
            <h3><?= htmlspecialchars($_SESSION['username']) ?></h3>
            <button class="update-details-btn"><a href="#" onclick="updateDetailsPopup()">Update Details</a></button><br>
        </div>
    </div>

    <script>
        function updateDetailsPopup() {
            document.getElementById('update-details-popup').style.display = 'block';
        }

        function cancelUpdatePopup() {
            document.getElementById('update-details-popup').style.display = 'none';
        }

        // Star rating system logic
        function groupIntoSubgroups(array, groupSize) {
            let result = [];
            for (let i = 0; i < array.length; i += groupSize) {
                result.push(array.slice(i, i + groupSize));
            }
            return result;
        }

        let totalStars = Array.from(document.getElementsByClassName("fa fa-star"));
        let groupedStars = groupIntoSubgroups(totalStars, 5);

        function remove() {
            for (let group of groupedStars) {
                for (let star of group) {
                    star.className = "fa fa-star";
                }
            }
        }

        function star(starValue, starId) {
            let output = document.getElementById("stars-" + starId);
            remove();
            for (let group of groupedStars) {
                if (group.some(star => star.id.includes(starId))) {
                    for (let i = 0; i < starValue; i++) {
                        group[i].className = "fa fa-star " + ["one", "two", "three", "four", "five"][starValue - 1];
                    }
                    output.value = starValue;
                    break;
                }
            }
        }
    </script>
</body>
</html>
<?php ob_end_flush(); ?>