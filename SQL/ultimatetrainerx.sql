CREATE TABLE `users` (
    `USER_ID` int(11) NOT NULL AUTO_INCREMENT,
    `Username` varchar(255) DEFAULT NULL,
    `Password` varchar(255) DEFAULT NULL,
    `First_Name` varchar(255) DEFAULT NULL,
    `Second_Name` varchar(255) DEFAULT NULL,
    `Last_Name` varchar(255) DEFAULT NULL,
    PRIMARY KEY (`user_ID`)
)

INSERT INTO `users` (`User_ID`, `Username`, `Password`, `First_Name`, `Second_Name`, `Last_Name`, `Address_User`) VALUES
(1, 'john_doe', '$2y$10$OP/4IcTxsnm74SLuzZwkcumFeFd8X8.zDTyFt94Td06fl6nn914Se', 'John', 'Michael', 'Doe'),
-- Password: Password123!
(2, 'jane_smith', '$2y$10$Ry5UeKbdjvE3fyxBM6gpWuNh4y7g2e3xzkc8nOIEX20sWd4foHsLS', 'Jane', 'Elizabeth', 'Smith'),
-- Password: Password456!
(3, 'will_brown', '$2y$10$7XxNg3FzTmlBOTEV2stAGu94tvJaP4FD0WVwLZRswwlOxS6BFWafm', 'William', 'George', 'Brown'),
-- Password: Password789%
(4, 'emily_white', '$2y$10$/V25hL8MsiL/tN5Nag00HeNEhBOx6xTudP/gHr2./pDDH5JxqtMA6', 'Emily', 'Anne', 'White',),
-- Password: Password101$
(5, 'david_jones', '$2y$10$eKTu0WEySS3NLRsSpbvsu.DmuqhICOy8sElKZo0hEp/EwEAsCok.u', 'David', 'Lee', 'Jones'),
-- Password: Password102%
(6, 'sarah_johnson', '$2y$10$BDe5JkDTdnx1VrVa33ehDumvBHSsklH2ds13ri6IFTAM.a8t9RvUS', 'Sarah', 'Marie', 'Johnson'),
-- Password: Password103*
(7, 'michael_wilson', '$2y$10$9e5TLvZqsFUfTaWtmnDjO.IymPUfMiqfG5eZqZM95LqnVNtfpey5G', 'Michael', 'Andrew', 'Wilson'),
-- Password: PassWord104!
(8, 'lisa_moore', '$2y$10$2aRPy89idEkdBrdJgFssxOX.lZckHHIQkxw0F0BPvxfvHf4CSuIme', 'Lisa', 'Renee', 'Moore'),
-- Password: PassWord105!
(9, 'robert_taylor', '$2y$10$bdjyH0F3oAGhUCz2s3WrxeleWYo6gcbRD5Z2VbyCE5faggBlomV5m', 'Robert', 'James', 'Taylor'),
-- Password: PassWord106%
(10, 'laura_martin', '$2y$10$gsLIi/qoLtsq1vlR9Selcunsk.xyF.EQhdJDeHmEDl8HYJjDWe5pa', 'Laura', 'Michelle', 'Martin'),
-- Password: PassWord106%
(11, 'daniel_cox', '$2y$10$W8531hrY4FwlpvVIM.4v2Ortzh16wdP24kcbTYBEnL7gxx3IDPSxi', 'Daniel', 'Roberts', 'Cox');

CREATE TABLE `employees` (
    `Employee_ID` int(11) NOT NULL AUTO_INCREMENT,
    `First_Name` varchar(255) DEFAULT NULL,
    `Last_Name` varchar(255) DEFAULT NULL,
    `Password` varchar(255) DEFAULT NULL,
    `Employee_Email` varchar(255) DEFAULT NULL,
    PRIMARY KEY(`Employee_ID`)
)

INSERT INTO `employees` (`employee_id`, `LastName`, `FirstName`, `password`, `employee_email`) VALUES
(1, 'Dawood', 'Husein', 'Password123!', 'h.dawood1360@gmail.com'),
(2, 'man', 'Husein', 'Password123!', 'h.dawood1360@gmail.net'),
(3, 'test', 'iron', 'Password123!', 'h.dawood1360@gmail.biz'),
(4, 'Giakos', 'Alexandros', '$2y$10$eR7OhEK9veJMVsavFDReW.rEtpZDNLRIb.obKNCbjOaoIDA/4PvGK', 'alex123@gmail.com'),
(5, 'sample', 'Alexandros', '$2y$10$75nd547hiuYD7v4Vos8vU.hxj/2AIXNh3sbdvh6TacRZZ9ZguGiPC', 'sample@aston.com'),
(6, 'account', 'sample ', '$2y$10$NgvVzdsvf66N7Ks/10DqHemf6A5QZyQMbrUQwmkV8/4J3bvOvV5LW', 'sample@sample.com');

CREATE TABLE `reviews` (
  `Review_ID` int(11) NOT NULL AUTO_INCREMENT,
  `User_ID` int(11) NOT NULL,
  `Item_ID` int(11) NOT NULL,
  `Rating` int(11) NOT NULL,
  `Description` VARCHAR(255) DEFAULT NULL,
  `Created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`Review_ID`),
  FOREIGN KEY (`User_ID`) REFERENCES `users`(`User_ID`),
  FOREIGN KEY (`Item_ID`) REFERENCES `item`(`Item_ID`),
  CONSTRAINT `chk_rating_range` CHECK (`Rating` >= 0 AND `Rating` <= 5)
)

INSERT INTO `reviews` (`Review_ID`, `User_ID`, `Item_ID`, `Rating`, `Description`)
VALUES
(1, 1, 1, 1, 'I give this product 1 star'),
(2, 2, 3, 3, 'I give this product 3 star'),
(3, 3, 2, 2, 'I give this product 2 star'),
(4, 4, 4, 2, 'I give this product 2 star'),
(5, 5, 5, 4, 'I give this product 4 star'),
(6, 6, 6, 5, 'I give this product 5 star'),
(7, 7, 7, 5, 'I give this product 5 star'),
(8, 8, 1, 5, 'I give this product 5 star');

CREATE TABLE contactme (
    `ContactMe_ID` INT(11) NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(255) NOT NULL,
    `Email` VARCHAR(255) NOT NULL,
    `Message` VARCHAR(255) NOT NULL,
    `Created_at` timestamp NOT NULL DEFAULT current_timestamp(),
    PRIMARY KEY (`ContactUs_ID`)
)