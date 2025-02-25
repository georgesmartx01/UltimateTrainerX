<?php
$server_name = "localhost";
$database_name = "";
$username = "root";
$password = "";

try {
    $pdo = new PDO("mysqli:host=$servername;dbname=$database_name", $username, $password);
    // set the PDO error mode to exception
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch(PDOException $pdo_exception) {
        echo "Connection failed: " . $pdo_exception->getMessage();
    }
?>