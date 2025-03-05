<?php
include('connectdb.php');
session_start();
include "navbar.php";

echo $_SESSION['User_ID'];

if (isset($_SESSION['User_ID'])) {
    $rating = $_POST['rating'];
    $revdesc = $_POST['reviewdesc'];

    $makereview = "INSERT INTO 'reviews' (User_ID, Rating, Description) VALUES (:userid, :rating, :description)";
    $review_stmt = $pdo->prepare($makereview);
    $review_stmt->bindParam(':userid', $_SESSION['User_ID'], PDO::PARAM_INT);
    $review_stmt->bindParam(':rating', $rating, PDO::PARAM_INT);
    $review_stmt->bindParam(':description', $revdesc, PDO::PARAM_STR);
    $review_stmt->execute();

    header("Location: accountpage.php?reviewsent=true");
    exit();
} else {
    echo "error";
}
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <title>Give Feedback</title>
        <link rel="stylesheet" type="text/css" href="../CSS/navbar.css">
        <script defer src="JavaScript/script.js"></script>
    </head>
    <body>
<?php
include "navbar.php";
?>
</html>