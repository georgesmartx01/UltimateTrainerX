<?php
include "../../connectdb.php";

$user_id = $_POST['user_id']; // User submitting the answer
$question_id = $_POST['question_id']; // Question being answered
$user_response = $_POST['user_response']; // User's selected answer

// Fetch correct answer from database
$sql = "SELECT Correct_Answer FROM questions WHERE Question_ID = ?";
$stmt = $pdo->prepare($sql);
$stmt->execute([$question_id]);
$correct_answer = $stmt->fetchColumn();

// Check if user response is correct
$is_correct = ($user_response === $correct_answer) ? 1 : 0;

// Insert response into database
$sql = "INSERT INTO user_answers (User_ID, Question_ID, User_Response, Is_Correct) VALUES (?, ?, ?, ?)";
$stmt = $pdo->prepare($sql);
$stmt->execute([$user_id, $question_id, $user_response, $is_correct]);

echo json_encode(["success" => true, "is_correct" => $is_correct]);
?>