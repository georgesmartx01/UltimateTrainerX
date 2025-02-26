<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Account</title>
    <link rel="stylesheet" type="text/css" href="CSS/account.css">
    <link rel="icon" type="image/x-icon" href="CSS/images/favicon.ico">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script defer src="JavaScript/script.js"></script>
</head>

<body>
<?php
include('connectdb.php');
session_start();
include "navbar.php";
if (!isset($_SESSION['User_ID'])) {
    header("Location: login.php");
}
$
$stmt = $pdo->prepare($sql);
$stmt->bindParam(':userID', $_SESSION['User_ID'], PDO::PARAM_INT);
$stmt->execute();
$orders = $stmt->fetchAll();
?>
</body>
</html>