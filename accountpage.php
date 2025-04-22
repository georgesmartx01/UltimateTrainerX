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

        <div id="update-details-popup" class="popup-menu">
            <h3>Update Details</h3>
            <form id="update-form" method="post" action="update_details.php">
                <?php
                // Fetch user details from the database
                $user_sql = "SELECT * FROM users WHERE User_ID = :userID";
                $user_stmt = $pdo->prepare($user_sql);
                $user_stmt->bindParam(':userID', $_SESSION['User_ID'], PDO::PARAM_INT);
                $user_stmt->execute();
                $user = $user_stmt->fetch(PDO::FETCH_ASSOC);
                ?>

                Username: <input type="text" name="username" value="<?php echo $user['Username'] ?? ''; ?>"><br><br>
                Password: <input type="password" name="password"><br><br>
                Forename: <input type="text" name="forename" value="<?php echo $user['Fore_name'] ?? ''; ?>"><br><br>
                Second Name: <input type="text" name="second_name" value="<?php echo $user['Second_Name'] ?? ''; ?>"><br><br>
                Last Name: <input type="text" name="last_name" value="<?php echo $user['Last_Name'] ?? ''; ?>"><br><br>
                <input type="submit" value="Update">
                <button type="button" onclick="cancelUpdatePopup()">Cancel</button>
            </form>
        </div>

        <div class="account-body">
            <div class="card">
                <img class="user_image" src="CSS/images/userlogo.png">
                <h3>
                    <?php echo $_SESSION['username']; ?>
                </h3>
                <a href="" onclick="updateDetailsPopup()">Update Details</a><br>
                
            </div>
        </div>

        <script>
            function updateDetailsPopup() {
                document.getElementById('update-details-popup').style.display = 'block';
            }

            function cancelUpdatePopup() {
                document.getElementById('update-details-popup').style.display = 'none';
            }

            let totalStars = document.getElementsByClassName("fa fa-star");
            let totalStarsArray = Array.from(totalStars);
            // make array groups for each form
            let groupedStars = groupIntoSubGroups(totalStarsArray, 5);

            for (let j = 0; j < groupedStars.length; j++) {
                for (var c = 0; c < 5; c++) {
                    groupedStars[j][c] = totalStars[j * 5 + c].id;
                }
            }

            
            // value = star value, starId = form id (star id = "one/two/three/four/five")
            function star(starValue, starId) {                
                let output = document.getElementById("stars-" + starId);
                remove();
                for (let j = 0; j < groupedStars.length) {
                    for (let k = 0; k < 5; k++) {
                        if (groupedStars[j][k].includes(starId)) {
                            for (let i = 0; i < starValue; i++) {
                                if (starValue == 1) cls = "one";
                                else if (starValue == 2) cls = "two";
                                else if (starValue == 3) cls = "three";
                                else if (starValue == 4) cls = "four";
                                else if (starValue == 5) cls = "five";
                                document.getElementById(groupedStars[j][i].className = "fa fa-star" + cls);
                            }
                        }
                        output.value = starValue;
                    }
                }
            }

            function remove() {
                for (let j = 0; j < groupedStars.length; j++) {
                    let i = 0;
                    while (i < 5) {
                        document.getElementById(groupedStars[j][i].className = "fa fa-star");
                        i++;
                    }
                }
            }

            function groupIntoSubgroups(array, groupSize) {
                let result = [];
                for (let i = 0; i < array.length; i += groupSize) {
                    result.push(array.slice(i, i + groupSize));
                }
                return result;
            }

        </script>
    </body>
</html>