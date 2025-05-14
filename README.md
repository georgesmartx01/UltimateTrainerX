This code should be ran and viewed on Apache or similar private servers than can run PHP and SQL files together.

Instructions for using this code:
1. Prequisites
a. Install XAMPP and Visual Studio Code installed before proceeding to the next steps.

Links:
i) https://www.apachefriends.org/
ii) https://code.visualstudio.com/

b. Once you have XAMPP and Visual Studio Code installed, open both.
c. Download the source code from the GitHub repository and extract the files once downloaded.
d. Copy over the files to "C:\xampp\htdocs" directory.
e. Looking at XAMPP, look for "Apache" and "MySQL" and click on the "Start" button for both to make the connection to the code contained in the UltimateTrainerX.
f. You will get an error message at first that there is no database. Note: you need to go to "localhost/phpmyadmin" (without quotes) to create the database.
g. Click on "New" and once the page for creating the database immediately appears, type the database name as follows: "ultimatetrainerx".
h. Now that the database is created, go to "SQL", copy the CREATE TABLE and CREATE INDEX statements into the SQL area.
i. After doing that, you have the database. Then, finally, copy all of the INSERT INTO statements into the SQL and you should have all of the data in the database.
Note: This is useful if you need full access to everything contained in my project, so you don't face issues.

Dummy accounts:
  1. For the user side only - Username: michael_wilson, Password: PassWord104!

The UltimateTrainerX branch is broken down into 5 main folders and 18 PHP files:
  PHP files:
    1. aboutus.php - contains the value and scope of UltimateTrainerX
    2. accountpage.php - contains functionality for logged-in user detail changes.
    3. brain-games.php - contains the games section with a search bar to search for games faster.
    4. connectdb.php - used for connecting to the database given one exists.
    5. contactus.php - contains a form for the purpose of giving feedback about UltimateTrainerX, the website or any errors encountered while using the website.
    6. footer.php - contains the user-side footer.
    7. forgot-password.php - contains the logic where the user resets their password, in case they forgot it.
    8. homepage.php - the landing page, highlighting UltimateTrainerX's features.
    9. learnmore.php - contains the sections for how UltimateTrainerX handles privacy, security, assistance in supporting you with anything you're having issues with and answer your questions.
    10. logout.php - contains the logic for logging out the user by destroying their session.
    11. navbar.php - the main navigation bar used for navigating around the website
    12. password-generator.php - useful feature for generating a random password to increase security
    13. register-user.php - contains the logic for validating user input when registering to UlitmateTrainerX.
    14. reset-password.php - useful for when users have forgotten their password, working alongside forgot-password.php.
    15. update-user-details.php - updates the user's details
    16. user-login - main login form, validating username and password before logging in
    17. verify-identity.php - seamlessly integrates with forgot-password.php and reset-password.php to ensure that the legitimate user is actually the one requesting information to reset their password.
    18. settings.php - contains a list of preferences for the user to change, in accordance with their needs.

1. brain-games folder - holds 12 PHP files for the following games:
  a. 2048 - A sliding tile puzzle where you combine like-numbered tiles to reach the elusive 2048 block.
  b. Connect Four - Two-player game where you drop discs into a grid, aiming to connect four vertically, horizontally or diagonally.
  c. Hangman - A word-guessing game where each wrong letter slowly builds a stick figure.
  d. Memory Match - A grid of face-down cards, where you flip two cards at a time to find matching pairs.
  e. Minesweeper - A grid-based logic game where you avoid hidden mines based on number clues.
  f. Puzzle Math - A custom math-based brain teaser involving adding, subtracting, multiplying and dividing numbers.
  g. Rock Paper Scissors - Classic hand game of chance and psychology.
  h. Snake Game - Guide a pixelated snake around the screen to eat food and grow - without crashing into walls or yourself.
  i. Solitaire - Classic card game where you sort cards by suit in ascending order.
  j. Tic Tac Toe - 3x3 grid battle game between two players placing Xs and Os.
  k. Word Guessing Game - Guess the hidden word letter-by-letter or word-by-word.
  l. Wordle - A guessing game where you guess a five-letter word in six attemps. Colour-coded feedback helps you guide your next guess.

2. CSS folder - consists of 2 main folders called 'brain-games' and 'images' and 12 PHP files
  In 'brain-games' sub-directory, it contains 12 CSS files, applying styling for each game, mentioned above.
  In 'images' sub-folder, it consists of 4 further sub-folders:
  a. brain-games - consists of 12 folders with the name of each (as mentioned above), storing images for each game that is displayed in the 'brain-games.php' file
  Displays placeholder images at the 'brain-games.php' file.
b. logo - holds the image of the logo for the website.
  c. social media - stores logos of the social media platforms (Facebook, Instragram, X (Twiiter)) to be displayed on the footer.
  d. userlogo - holds a placeholder image of a dummy user profile when logged in.

3. JavaScript folder - contains 6 main folders called:
  a. assessment - adds interactivity for when the user interacts with the baseline assessment.
  b. brain-games - contains each of the 12 folders for the 12 games created with their respective files to handle logic for each one accordingly.
  c. dashboard - controls dashboard behaviour to increase user engagement
  d. navbar - Adds navigation bar behaviour, like highlighting navigation links when clicked or putting the cursor on them.
  e. password-generator - Contains the logic for randomly generating a password using lowercase (a-z) + uppercase letters (A-Z), numbers (0-9) and special symbols (!"£$...)/ 
  f. toggle-password-visibility: contains a toggle-password-visibility.js file for allowing the user to quickly view their password, so they can login successfully.
5. SQL folder - holds the ultimatetrainerx.sql file for inserting dummy data to the base.

4. user-profile folder - contains assessment sub-folder and 6 PHP files in total
   a. assessment - handles assessment questions, for retrieving correct answers and saving the answers in the database.
   b. dashboard.php - displays the main dashboard for the user to see their cognitive performance.
   c. get-user-stats.php - retrieves user statistics based on their overall performance.
