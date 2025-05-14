<?php
session_start();
if (!isset($_SESSION['username'])) {
    echo json_encode(["error" => "Not logged in"]);
    exit;
}

$username = $_SESSION['username'];
$start = $_GET['start'] ?? '';
$end = $_GET['end'] ?? '';

// Include your database connection
include 'connectdb.php';

try {
    // Prepare the base query
    $query = "SELECT date, accuracy, reaction_time, mood, focus FROM user_stats WHERE username = ?";
    $params = [$username];
    $types = "s";

    // Add date range to query if provided
    if ($start && $end) {
        $query .= " AND date BETWEEN ? AND ?";
        $params[] = $start;
        $params[] = $end;
        $types .= "ss";
    }

    $query .= " ORDER BY date ASC";

    // Prepare the statement
    $stmt = $pdo->prepare($query);

    // Bind parameters
    $stmt->bindParam(1, $params[0], PDO::PARAM_STR); // username
    if ($start && $end) {
        $stmt->bindParam(2, $params[1], PDO::PARAM_STR); // start date
        $stmt->bindParam(3, $params[2], PDO::PARAM_STR); // end date
    }

    // Execute the query
    $stmt->execute();

    // Fetch the result
    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Return the data as JSON
    echo json_encode($data);

} catch (PDOException $e) {
    // Handle potential errors with a message
    echo json_encode(["error" => "Error fetching user stats: " . $e->getMessage()]);
}
?>