<?php
session_start();
session_unset();
session_destroy();
header("Location: business-login.php?message=logout_success");
exit();
?>