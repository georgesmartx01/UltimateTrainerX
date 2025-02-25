<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <title>About Us</title>
        <link rel="stylesheet" href="CSS/aboutus.css">
        <link rel="icon" type="image/x-icon" href="CSS/images/favicon.ico">
        <script defer src="JavaScript/script.js"></script>
    </head>
    <body>
<?php
include('connectdb.php');
session_start();
include "navbar.php";
?>
<br>
<br>
<!--Creating the initial header and breif of the company-->
<h1>About Us</h1>
<?php include "footer.php";?>
</html>