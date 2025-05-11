CREATE TABLE `users` (
    `User_ID` INT(11) NOT NULL AUTO_INCREMENT,
    `Username` VARCHAR(255) UNIQUE NOT NULL,
    `Password` VARCHAR(255) NOT NULL,
    `Password_Reset_Token` VARCHAR(255) DEFAULT NULL,
    `First_Name` VARCHAR(255) DEFAULT NULL,
    `Second_Name` VARCHAR(255) DEFAULT NULL,
    `Last_Name` VARCHAR(255) DEFAULT NULL,
    `Created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`User_ID`)
);

CREATE TABLE `reviews` (
    `Review_ID` INT(11) NOT NULL AUTO_INCREMENT,
    `User_ID` INT(11) NOT NULL,
    `Rating` INT(11) NOT NULL CHECK (`Rating` BETWEEN 1 AND 5),
    `Description` VARCHAR(255) DEFAULT NULL,
    `Created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`Review_ID`),
    FOREIGN KEY (`User_ID`) REFERENCES `users`(`User_ID`) ON DELETE CASCADE
);

CREATE TABLE `contactus` (
    `ContactUs_ID` INT(11) NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(255) NOT NULL,
    `Email` VARCHAR(255) NOT NULL,
    `Message` VARCHAR(255) NOT NULL,
    `Created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`ContactUs_ID`)
);

CREATE TABLE `feedback` (
    `Feedback_ID` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `Comment` TEXT NOT NULL,
    `Rating` INT(11) NOT NULL CHECK (`Rating` BETWEEN 1 AND 5),
    `Timestamp` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE `question_types` (
    `QuestionType_ID` INT AUTO_INCREMENT PRIMARY KEY,
    `Question_Type` VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE `questions` (
    `Question_ID` INT AUTO_INCREMENT PRIMARY KEY,
    `Category` VARCHAR(50) NOT NULL,
    `QuestionType_ID` INT NOT NULL,
    `Difficulty` ENUM('easy', 'medium', 'hard') NOT NULL,
    `Question_Text` TEXT NOT NULL,
    `Answer_Options` TEXT NOT NULL,
    `Correct_Answer` VARCHAR(255) NOT NULL,
    FOREIGN KEY (`QuestionType_ID`) REFERENCES `question_types`(`QuestionType_ID`) ON DELETE CASCADE
);

CREATE TABLE `user_answers` (
    `Answer_ID` INT AUTO_INCREMENT PRIMARY KEY,
    `User_ID` INT NOT NULL,
    `Question_ID` INT NOT NULL,
    `User_Response` TEXT NOT NULL,
    `Is_Correct` BOOLEAN NOT NULL,
    `Attempt_Number` INT DEFAULT 1,
    `Answered_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (`User_ID`) REFERENCES `users`(`User_ID`) ON DELETE CASCADE,
    FOREIGN KEY (`Question_ID`) REFERENCES `questions`(`Question_ID`) ON DELETE CASCADE
);

CREATE INDEX idx_username ON users(Username);
CREATE INDEX idx_question_type ON questions(QuestionType_ID);
CREATE INDEX idx_difficulty ON questions(Difficulty);
CREATE INDEX idx_category ON questions(Category);
CREATE INDEX idx_reviews_user_id ON reviews(User_ID);
CREATE INDEX idx_questions_category_difficulty ON questions(Category, Difficulty);

INSERT INTO `users` (`User_ID`, `Username`, `Password`, `First_Name`, `Second_Name`, `Last_Name`) VALUES
(1, 'john_doe', '$2y$10$OP/4IcTxsnm74SLuzZwkcumFeFd8X8.zDTyFt94Td06fl6nn914Se', 'John', 'Michael', 'Doe'),
(2, 'jane_smith', '$2y$10$Ry5UeKbdjvE3fyxBM6gpWuNh4y7g2e3xzkc8nOIEX20sWd4foHsLS', 'Jane', 'Elizabeth', 'Smith'),
(3, 'will_brown', '$2y$10$7XxNg3FzTmlBOTEV2stAGu94tvJaP4FD0WVwLZRswwlOxS6BFWafm', 'William', 'George', 'Brown'),
(4, 'emily_white', '$2y$10$/V25hL8MsiL/tN5Nag00HeNEhBOx6xTudP/gHr2./pDDH5JxqtMA6', 'Emily', 'Anne', 'White'),
(5, 'david_jones', '$2y$10$eKTu0WEySS3NLRsSpbvsu.DmuqhICOy8sElKZo0hEp/EwEAsCok.u', 'David', 'Lee', 'Jones'),
(6, 'sarah_johnson', '$2y$10$BDe5JkDTdnx1VrVa33ehDumvBHSsklH2ds13ri6IFTAM.a8t9RvUS', 'Sarah', 'Marie', 'Johnson'),
(7, 'michael_wilson', '$2y$10$9e5TLvZqsFUfTaWtmnDjO.IymPUfMiqfG5eZqZM95LqnVNtfpey5G', 'Michael', 'Andrew', 'Wilson'),
(8, 'lisa_moore', '$2y$10$2aRPy89idEkdBrdJgFssxOX.lZckHHIQkxw0F0BPvxfvHf4CSuIme', 'Lisa', 'Renee', 'Moore'),
(9, 'robert_taylor', '$2y$10$bdjyH0F3oAGhUCz2s3WrxeleWYo6gcbRD5Z2VbyCE5faggBlomV5m', 'Robert', 'James', 'Taylor'),
(10, 'laura_martin', '$2y$10$gsLIi/qoLtsq1vlR9Selcunsk.xyF.EQhdJDeHmEDl8HYJjDWe5pa', 'Laura', 'Michelle', 'Martin'),
(11, 'daniel_cox', '$2y$10$W8531hrY4FwlpvVIM.4v2Ortzh16wdP24kcbTYBEnL7gxx3IDPSxi', 'Daniel', 'Roberts', 'Cox');

INSERT INTO `reviews` (`Review_ID`, `User_ID`, `Rating`, `Description`)
VALUES
(1, 1, 1, 'I give this cognitive training tool 1 star'),
(2, 2, 3, 'I give this cognitive training tool 3 stars'),
(3, 3, 2, 'I give this cognitive training tool 2 stars'),
(4, 4, 2, 'I give this cognitive training tool 2 stars'),
(5, 5, 4, 'I give this cognitive training tool 4 stars'),
(6, 6, 5, 'I give this cognitive training tool 5 stars'),
(7, 7, 5, 'I give this cognitive training tool 5 stars'),
(8, 8, 5, 'I give this cognitive training tool 5 stars');

INSERT INTO questions (Category, QuestionType_ID, Difficulty, Question_Text, Answer_Options, Correct_Answer) VALUES
-- Maths (15 questions)
('maths', 1, 'easy', 'What is 5 + 3?', '["6", "7", "8", "9"]', '8'),
('maths', 1, 'easy', 'What is 7 + 3?', '["8", "9", "10", "11"]', '10'),
('maths', 1, 'medium', 'If a car travels at 60 mph for 2 hours, how far does it go?', '["100 miles", "120 miles", "140 miles", "160 miles"]', '120 miles'),
('maths', 1, 'hard', 'Solve for x: 3x - 7 = 11', '["3", "4", "5", "6"]', '6'),
('maths', 1, 'easy', 'What is 10 - 4?', '["5", "6", "7", "4"]', '6'),
('maths', 1, 'medium', 'What is the result of 9 × 3?', '["27", "21", "30", "18"]', '27'),
('maths', 1, 'hard', 'Solve for x: 5x - 10 = 20', '["4", "6", "8", "10"]', '6'),
('maths', 1, 'easy', 'What is 4 × 6?', '["20", "22", "24", "26"]', '24'),
('maths', 1, 'medium', 'Solve for x: x/4 = 5', '["15", "20", "25", "10"]', '20'),
('maths', 1, 'hard', 'What is the square root of 49?', '["6", "7", "8", "9"]', '7'),
('maths', 1, 'easy', 'What is 9 + 6?', '["12", "13", "14", "15"]', '15'),
('maths', 1, 'medium', 'If you have 4 groups of 3 apples, how many apples do you have?', '["9", "12", "15", "18"]', '12'),
('maths', 1, 'hard', 'Solve for x: 4x + 5 = 21', '["3", "4", "5", "6"]', '4'),
('maths', 1, 'easy', 'What is 12 - 5?', '["6", "7", "8", "9"]', '7'),
('maths', 1, 'medium', 'What is 15 ÷ 3?', '["3", "5", "7", "9"]', '5'),

-- Literacy (15 questions)
('literacy', 2, 'medium', 'What is a synonym for "fast"?', '["slow", "quick", "heavy", "small"]', 'quick'),
('literacy', 2, 'easy', 'Which word is an antonym of "big"?', '["Huge", "Small", "Tall", "Round"]', 'Small'),
('literacy', 2, 'medium', 'Which sentence correctly uses a comma?', '["I went to the store and bought apples oranges bananas.", "I went to the store, and bought apples, oranges, bananas.", "I went to the store and bought apples, oranges, bananas.", "I went to the store, and bought apples oranges bananas."]', 'I went to the store and bought apples, oranges, bananas.')
('literacy', 2, 'hard', 'Choose the correct sentence:', '["The dog chased it’s tail.", "The dog chase its tail.", "The dog chased its tail.", "The dog chases it’s tail."]', 'The dog chased its tail.'),
('literacy', 2, 'easy', 'Which word is a synonym for "cold"?', '["Warm", "Hot", "Chilly", "Bright"]', 'Chilly'),
('literacy', 2, 'medium', 'Select the correct spelling:', '["accommodate", "acommodate", "accommadate", "accomodate"]', 'accommodate'),
('literacy', 2, 'hard', 'Identify the grammatically correct sentence:', '["She laid on the bed.", "She lied on the bed.", "She lay on the bed.", "She was laying on the bed."]', 'She lay on the bed.'),
('literacy', 2, 'easy', 'Which word is an antonym of "beautiful"?', '["Ugly", "Nice", "Pretty", "Lovely"]', 'Ugly'),
('literacy', 2, 'medium', 'Choose the correctly spelled word:', '["embarass", "embarrass", "embarras", "embarrus"]', 'embarrass'),
('literacy', 2, 'hard', 'Identify the correct sentence structure:', '["She and me went shopping.", "She and I went shopping.", "Me and she went shopping.", "Her and me went shopping."]', 'She and I went shopping.'),
('literacy', 2, 'easy', 'What is the plural of "child"?', '["Childs", "Childes", "Children", "Childies"]', 'Children'),
('literacy', 2, 'medium', 'Which word means the same as "furious"?', '["Happy", "Excited", "Angry", "Energetic"]', 'Angry'),
('literacy', 2, 'hard', 'Which sentence is grammatically correct?', '["I could have went to the store.", "I could have gone to the store.", "I could went to the store.", "I could go to the store."]', 'I could have gone to the store.'),
('literacy', 2, 'medium', 'Which word means the same as "timid"?', '["Bold", "Fearful", "Loud", "Excited"]', 'Fearful'),
('literacy', 2, 'hard', 'What is the meaning of the word "obstinate"?', '["Flexible", "Stubborn", "Humble", "Carefree"]', 'Stubborn'),

-- Pattern Recognition (15 questions)
('pattern', 5, 'easy', 'What number follows: 2, 4, 6, ?', '["8", "9", "10", "11"]', '8'),
('pattern', 5, 'medium', 'Which shape continues the pattern: ◼︎ ◻︎ ◼︎ ◻︎ ◼︎ ?', '["◻︎", "◼︎", "◆", "⏹"]', '◻︎'),
('pattern', 5, 'hard', 'What number follows: 3, 6, 12, 24, ?', '["36", "48", "60", "72"]', '48'),
('pattern', 5, 'easy', 'Find the missing number: 1, 2, 4, ?', '["6", "7", "8", "9"]', '8'),
('pattern', 5, 'medium', 'Which shape fits the missing slot: ▲ ▲ ◻︎ ◻︎ ▲ ▲ ◻︎ ?', '["▲", "◻︎", "◾︎", "◆"]', '◻︎'),
('pattern', 5, 'hard', 'What number follows: 4, 9, 16, 25, ?', '["30", "35", "36", "49"]', '36'),
('pattern', 5, 'medium', 'Which number follows: 5, 10, 15, 20, ?', '["25", "30", "35", "40"]', '25'),
('pattern', 5, 'easy', 'Identify the missing number in the sequence: 3, 6, 9, ?', '["10", "12", "15", "18"]', '12'),
('pattern', 5, 'medium', 'Which color comes next: Red, Blue, Green, Yellow, Red, Blue, ?', '["Green", "Yellow", "Red", "Blue"]', 'Green'),
('pattern', 5, 'hard', 'What number completes the pattern: 2, 6, 12, 20, ?', '["26", "30", "32", "42"]', '30'),
('pattern', 5, 'easy', 'Find the next shape in the pattern: ▲ ▲ ◆ ◆ ▲ ▲ ?', '["◆", "▲", "◻︎", "◾︎"]', '◆'),
('pattern', 5, 'medium', 'Which symbol logically follows: %, &, @, $, % ?', '["&", "@", "$", "%"]', '&'),
('pattern', 5, 'hard', 'What number follows: 10, 20, 40, 80, ?', '["100", "120", "160", "200"]', '160'),
('pattern', 5, 'medium', 'What letter comes next: A, C, E, G, ?', '["I", "H", "J", "K"]', 'I'),
('pattern', 5, 'hard', 'Which word fits the pattern: Cat, Dog, Fish, Bird, ?', '["Horse", "Lizard", "Rabbit", "Snake"]', 'Rabbit'),

-- Spelling & Grammer
('sp-gr', 3, 'easy', 'Choose the correctly spelled word:', '["acessory", "accessory", "accessary", "accesory"]', 'accessory'),
('sp-gr', 3, 'medium', 'Which sentence uses the correct homophone?', '["I would rather go than stay.", "I would rather go then stay.", "I would rather gone then stay.", "I would rather to go than stay."]', 'I would rather go than stay.'),
('sp-gr', 3, 'hard', 'Identify the correctly punctuated sentence:', '["Lets go to the store.", "Let’s go to the store!", "Lets’ go to the store.", "Let’s’ go to the store!"]', 'Let’s go to the store!'),
('sp-gr', 3, 'easy', 'What is the correct spelling of this word?', '["definetly", "definitely", "definitly", "definately"]', 'definitely'),
('sp-gr', 3, 'medium', 'Which sentence uses "your" correctly?', '["Your going to school.", "Your backpack is heavy.", "Your happy now.", "Your doing great."]', 'Your backpack is heavy.'),
('sp-gr', 3, 'hard', 'What is the correct verb agreement in this sentence?', '["Each of the students were happy.", "Each of the students are happy.", "Each of the students is happy.", "Each of the students have been happy."]', 'Each of the students is happy.'),
('sp-gr', 3, 'medium', 'Choose the sentence with the correct verb tense:', '["She has went home.", "She has gone home.", "She have gone home.", "She had went home."]', 'She has gone home.'),
('sp-gr', 3, 'easy', 'Which word is spelled correctly?', '["recieve", "receive", "recive", "receeve"]', 'receive'),
('sp-gr', 3, 'medium', 'Which sentence is properly punctuated?', '["He said that, “I am happy.”", "He said, “I am happy.”", "He said “I am happy”", "He said I am happy.”"]', 'He said, “I am happy.”'),
('sp-gr', 3, 'hard', 'What is the plural form of "goose"?', '["Gooses", "Geese", "Goosies", "Goosen"]', 'Geese'),
('sp-gr', 3, 'easy', 'What is the opposite of "soft"?', '["Hard", "Light", "Fluffy", "Smooth"]', 'Hard'),
('sp-gr', 3, 'medium', 'Which sentence uses "they’re" correctly?', '["They’re house is big.", "They’re going to the park.", "They’re backpack is missing.", "They’re cooking dinner."]', 'They’re going to the park.'),
('sp-gr', 3, 'hard', 'Which word is spelled correctly?', '["Occassion", "Occasion", "Ocassion", "Ocasion"]', 'Occasion'),
('sp-gr', 3, 'medium', 'Which sentence correctly uses "it’s"?', '["It’s a sunny day.", "Its a sunny day.", "It’s sunny day.", "Its’ a sunny day."]', 'It’s a sunny day.'),
('sp-gr', 3, 'hard', 'Identify the correct use of "affect" in a sentence:', '["The weather will affect my mood.", "My mood has an affect on my day.", "I have a good affect on people.", "It affect me alot."]', 'The weather will affect my mood.');



INSERT INTO user_answers (User_ID, Question_ID, User_Response, Is_Correct, Attempt_Number)
VALUES
(1, 1, '8', 1, 1),
(2, 2, 'slow', 0, 1),
(3, 3, '32', 1, 2);