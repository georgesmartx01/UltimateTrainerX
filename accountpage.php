<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Account</title>
    <link rel="stylesheet" type="text/css" href="CSS/account.css">
    <link rel="icon" type="image/x-icon" href="CSS/images/favicon.ico">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script defer src="JavaScript/main-script.js"></script>
</head>

<body>
<?php
include('connectdb.php');
session_start();
include "navbar.php";
if (!isset($_SESSION['User_ID'])) {
    header("Location: login.php");
}
$stmt = $pdo->prepare($sql);
$stmt->bindParam(':userID', $_SESSION['User_ID'], PDO::PARAM_INT);
$stmt->execute();

// form submission
if (isset($_POST['start_return'])) {

}
?>
</body>
<?php include "footer.php" ?>
</html>