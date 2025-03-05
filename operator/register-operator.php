<?php
include('connectdb.php');
session_start();
include "navbar.php";

if(isset($_POST['registerbtn'])) {
    $firstname = $_POST['firstname'];
    $new_username = $_POST['new_username'];
    $lastname = $_POST['lastname'];
    $new_password = $_POST['new_password'];

    if(!preg_match('/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/', $new_password)) {
        $error = "Password must be at least 8 characters long and contain at least one number and one special character.";
        header("Location: login.php?error=".$error);
        exit();
    } else {
        $hashed_password = password_hash($new_password, PASSWORD_DEFAULT);
        $check_query = "SELECT COUNT(*) FROM `users` WHERE Username = :username";
        $check_stmt = $pdo->prepare($check_query);
        $check_stmt->bindParam(':username', $new_username);
        $check_stmt->execute();
        $existing_user = $check_stmt->fetchColumn();

        if($existing_user == 0) {
            $create_query = "INSERT INTO `users` (Fore_name, Second_Name, Last_Name, Address_User, Username, Password) VALUES (:forename, :secondname, :lastname, :address, :username, :password)";
            $create_stmt = $pdo->prepare($create_query);
            $create_stmt->bindParam(':forename', $firstname);
            $create_stmt->bindParam(':lastname', $lastname);
            $create_stmt->bindParam(':username', $new_username);
            $create_stmt->bindParam(':password', $hashed_password);

            if($create_stmt->execute()) {
                $msg = "Registered successfully";
                header("Location: userlogin.php?msg=".$msg);
                exit();
            } else {
                $error = "Error creating user. Please try again.";
                header("Location: userlogin.php?error=".$msg);
                exit();
            }
        } else {
            $error = "Username already exists. Please choose a different username.";
            header("Location: userlogin.php?error=".$error);
            exit();
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Footer</title>
    <link rel="stylesheet" href="CSS/footer.css">
    <!-- Font Awesome Link-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<div id="createUserPopup" class="popup">
        <form method="post" action="registeruser.php">
            <h2>User Registration Form</h2>
            <input type="text" placeholder="Username" name="new_username" required><br<><br>
            <input type="password" placeholder="Password" name="new_password" required><br<><br>
            <input type="text" placeholder="First Name" name="firstname" required><br<><br>
            <input type="text" placeholder="Last Name" name="lastname" required><br<><br>
            <button type="submit" name="registerbtn">Create</button>
            <button type="button" onclick="cancelRegisterPopup()">Cancel</button>
        </form>
</div>