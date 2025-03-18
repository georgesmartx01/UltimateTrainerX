// Getting HTML elements
let gameContainer = document.querySelector(".game-container");
let weaponBox = document.querySelector(".weapon-box");
let playerChoicesBox = gameContainer.querySelector(".player-choices");
let weapons = weaponBox.querySelectorAll(".weapons div");
let player = playerChoicesBox.querySelector(".player-choice img");
let computer = playerChoicesBox.querySelector(".computer-choice");
let resultBox = gameContainer.querySelector(".result-box");
let resultTxt = resultBox.querySelector("h3");
let playAgainBtn = resultBox.querySelector("button");
let wonValueTxt = document.querySelector(".score-box .won h3 span");
let lostValueTxt = document.querySelector(".score-box .lost h3 span");
let drawValueTxt = document.querySelector(".score-box .draw h3 span");

// Initialise the scores
let won = 0, lost = 0, draw = 0;

// Define the possible computer choices
let computerChoices = ["Rock", "Paper", "Scissors"];

// Define the possible outcomes of the game
let outcomes = {
    RockRock: "Draw",
    RockPaper: "Computer",
    RockScissors: "You",
    PaperPaper: "Draw",
    PaperRock: "You",
    PaperScissors: "Computer",
    ScissorsScissors: "Draw",
    ScissorsRock: "Computer",
    ScissorsPaper: "You"
};

// Add event listener to weapon choice
for (let index = 0; index < weapons.length; index++) {
    weapons[index].addEventListener("click", (event) => {
    
    // Set the revealing hands to rock
    player.src = "../CSS/images/brain-games/rock-paper-scissors/rock.png";
    computer.src = "../CSS/images/brain-games/rock-paper-scissors/rock.png";

    // Hide the weapon box and show the player choices
    weaponBox.style.display = "none";
    playerChoicesBox.style.display = "block";
    
    setTimeout(() => {
        playerChoicesBox.classList.add("active");
    }, 1000);

    setTimeout(() => {
        // Pause the animation of revealing hands after 3 seconds
        let playerChoices = playerChoicesBox.querySelectorAll("div");
        for (let index = 0; index < playerChoices.length; index++) {
            playerChoices[index].animationPlayState = "paused";
        }

        // Set the player choice to the selected weapon
        player.src = event.target.src;

        // Generate a random computer choice
        let randomChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        computer.src = `../CSS/images/rock-paper-scissors/${randomChoice}.png`;

        // Get the user choice and random choice to determine the outcome
        let userChoice = event.target.parentElement.className;
        let outcomeValue = outcomes[userChoice + randomChoice];

        showResult(outcomeValue);

    }, 3000);
    })
}

/**
 * Show the result of the game
 * @param {*} result 
 */
function showResult(result) {
    gameContainer.style.height = "415px";
    resultBox.style.display = "block";

    // update the result text add score
    if (result === "You") {
        resultTxt.innerHTML = "Congratulations, you won! &#x1F389;";
        won++;
        wonValueTxt.innerHTML = won;
    } else if (result === "Computer") {
        resultTxt.innerHTML = "You lost!";
        lost++;
        lostValueTxt.innerHTML = lost;
    } else {
        resultTxt.innerHTML = "It's a draw!";
        draw++;
        drawValueTxt.innerHTML = draw;
    }
}

// Add event listener to the play again button
playAgainBtn.addEventListener("click", () => {
    playerChoicesBox.classList.remove("active");
    gameContainer.style.height = "380px";
    resultBox.style.display = "none";
    weaponBox.style.display = "block";
    playerChoicesBox.style.display = "none";
    
    let playerChoices = playerChoicesBox.querySelectorAll("div");

    // Resume the animation on the revealing hands when player chooses his/her weapon
    for (let index = 0; index < playerChoices.length; index++) {
        playerChoices[index].style.animationPlayState = "running";
    }
})