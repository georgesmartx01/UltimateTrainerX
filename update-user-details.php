<?php
session_start();
include "connectdb.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Collect input
    $username     = trim($_POST['username']);
    $password     = $_POST['password'];
    $firstname    = trim($_POST['firstname']);
    $second_name  = trim($_POST['second_name']);
    $last_name    = trim($_POST['last_name']);

    $userID = $_SESSION['User_ID'] ?? null;

    if (!$userID) {
        $_SESSION['update_error'] = "You must be logged in to update details.";
        header("Location: user-login.php");
        exit();
    }

    // Check if username already exists (excluding current user)
    $check = $pdo->prepare("SELECT COUNT(*) FROM users WHERE Username = :username AND User_ID != :userID");
    $check->execute([':username' => $username, ':userID' => $userID]);
    if ($check->fetchColumn() > 0) {
        $_SESSION['update_error'] = "Username already exists. Please choose another.";
        header("Location: accountpage.php");
        exit();
    }

    try {
        if (!empty($password)) {
            // Validate password
            if (!preg_match('/^(?=.*\d)(?=.*[A-Za-z])(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/', $password)) {
                $_SESSION['update_error'] = "Password must be at least 8 characters long and include a number, letter, and special character.";
                header("Location: accountpage.php");
                exit();
            }

            // Update with password
            $query = "UPDATE users 
                      SET Username = :username, 
                          Password = :password, 
                          Fore_name = :firstname, 
                          Second_Name = :second_name, 
                          Last_Name = :last_name 
                      WHERE User_ID = :userID";

            $stmt = $pdo->prepare($query);
            $stmt->execute([
                ':username'    => $username,
                ':password'    => password_hash($password, PASSWORD_DEFAULT),
                ':firstname'   => $firstname,
                ':second_name' => $second_name,
                ':last_name'   => $last_name,
                ':userID'      => $userID
            ]);
        } else {
            // Update without password
            $query = "UPDATE users 
                      SET Username = :username, 
                          Fore_name = :firstname, 
                          Second_Name = :second_name, 
                          Last_Name = :last_name 
                      WHERE User_ID = :userID";

            $stmt = $pdo->prepare($query);
            $stmt->execute([
                ':username'    => $username,
                ':firstname'   => $firstname,
                ':second_name' => $second_name,
                ':last_name'   => $last_name,
                ':userID'      => $userID
            ]);
        }

        $_SESSION['update_success'] = "Details updated successfully.";
        $_SESSION['username'] = $username; // Update session if name changed
        header("Location: accountpage.php");
        exit();

    } catch (PDOException $e) {
        $_SESSION['update_error'] = "Update failed: " . $e->getMessage();
        header("Location: accountpage.php");
        exit();
    }
}
?>