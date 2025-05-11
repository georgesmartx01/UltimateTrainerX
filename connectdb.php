<?php
  $servername = "localhost";
  $databasename = "ultimatetrainerx";
  $username = "root";
  $password = "";
  
  try {
    $pdo = new PDO("mysql:host=$servername;dbname=$databasename;charset=utf8", $username, $password);
    // set the PDO error mode to exception
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  } catch(PDOException $e) {
    error_log("Database connection error: " . $e->getMessage(), 0);
    http_response_code(500);
    die("We're experiencing issues connecting to our database. Please try again later.");
  }
?>