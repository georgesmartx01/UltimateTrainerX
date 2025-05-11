<?php
include "../connectdb.php";

$category = $_GET['category'] ?? 'any';
$difficulty = $_GET['difficulty'] ?? '';
$num_questions = $_GET['num_questions'] ?? 10;

// Build the SQL query dynamically
$sql = "SELECT * FROM questions WHERE 1=1";
$params = [];

if ($category !== 'any') {
    $sql .= " AND Category = ?";
    $params[] = $category;
}
if (!empty($difficulty)) {
    $sql .= " AND Difficulty = ?";
    $params[] = $difficulty;
}

$sql .= " ORDER BY RAND() LIMIT ?";
$params[] = (int)$num_questions;

// Execute query
$stmt = $pdo->prepare($sql);
$stmt->execute($params);
$questions = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($questions);
?>