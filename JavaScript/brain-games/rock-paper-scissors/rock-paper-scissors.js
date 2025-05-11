// Retrieve selectors
let gameContainer = document.querySelector(".game-container");
let weaponBox = gameContainer.querySelector(".weapon-box");
let playerChoicesBox = gameContainer.querySelector(".player-choices");
let weapons = weaponBox.querySelectorAll(".weapons div");
let player = playerChoicesBox.querySelector(".player-choice img");
let computer = playerChoicesBox.querySelector(".computer-choice img");
let resultBox = gameContainer.querySelector(".result-box");
let resultTxt = resultBox.querySelector("h3");
let playAgainBtn = resultBox.querySelector("button");
let wonValueTxt = document.querySelector(".score-box .won h3 span");
let lostValueTxt = document.querySelector(".score-box .lost h3 span");
let drawValueTxt = document.querySelector(".score-box .draw h3 span");

/**
 * Initialise the 'win' score
 */
let won = localStorage.getItem("won") ? parseInt(localStorage.getItem("won")) : 0;

/**
 * Initialise the 'lost' score
 */
let lost = localStorage.getItem("lost") ? parseInt(localStorage.getItem("lost")) : 0;

/**
 * Initialise the 'draw' score
 */
let draw = localStorage.getItem("draw") ? parseInt(localStorage.getItem("draw")) : 0;

/**
 * Possible computer choices
 */
let computerChoices = ["rock", "paper", "scissors"];

/**
 * Possible outcomes of the game
 */
let outcomes = {
    rockrock: "Draw",
    rockpaper: "Computer",
    rockscissors: "You",
    paperpaper: "Draw",
    paperrock: "You",
    paperscissors: "Computer",
    scissorsscissors: "Draw",
    scissorsrock: "Computer",
    scissorspaper: "You"
};

for (let weaponIndex = 0; weaponIndex < weapons.length; weaponIndex++) {
    weapons[weaponIndex].addEventListener("click", (event) => {
        // Set revealing hands to rock
        player.src = "../CSS/images/brain-games/rock-paper-scissors/rock.png";
        computer.src = "../CSS/images/brain-games/rock-paper-scissors/rock.png";
        
        weaponBox.style.display = "none";
        playerChoicesBox.style.display = "block";

        setTimeout(() => {
            playerChoicesBox.classList.add("active");
        }, 1000);

        setTimeout(() => {
            let playerChoices = playerChoicesBox.querySelectorAll("div");

            for (let playerIndex = 0; playerIndex < playerChoices.length; playerIndex++) {
                playerChoices[playerIndex].style.animationPlayState = "paused";
            }

            // Set the player choice to the selected weapon
            player.src = event.target.src;

            // Generate a random computer choice
            let randomChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            computer.src = `../CSS/images/brain-games/rock-paper-scissors/${randomChoice}.png`;

            /**
             * Get the user choice
             */
            let userChoice = event.target.parentElement.className;

            /**
             * Get the random choice to determine the outcome
             */
            let outcomeValue = outcomes[userChoice + randomChoice];
            
            showResult(outcomeValue);

        }, 3000);
    });
}

/**
 * Show the result of the game and update the score
 * @param {*} result 
 */
function showResult(result) {
    gameContainer.style.height = "470px";
    resultBox.style.display = "block";

    if (result === "You") {
        resultTxt.innerHTML = "Congratulations! You won the game! &#x1F389;";
        resultTxt.style.color = "green";
        won++;
        localStorage.setItem("won", won);
        wonValueTxt.innerHTML = won;
    } else if (result === "Computer") {
        resultTxt.innerHTML = "You Lost!";
        resultTxt.style.color = "red";
        lost++;
        localStorage.setItem("lost", lost);
        lostValueTxt.innerHTML = lost;
    } else {
        resultTxt.innerHTML = "It's a Draw!";
        resultTxt.style.color = "orange";
        draw++;
        localStorage.setItem("draw", draw);
        drawValueTxt.innerHTML = draw;
    }
}

// Add event listener to the play again button
playAgainBtn.addEventListener("click", () => {
    playerChoicesBox.classList.remove("active");
    gameContainer.style.height = "420px";
    resultBox.style.display = "none";
    weaponBox.style.display = "block";
    playerChoicesBox.style.display = "none";

    // Resume animation on the revealing hands when player chooses his weapon
    let playerChoices = playerChoicesBox.querySelectorAll("div");
    for (let playerIndex = 0; playerIndex < playerChoices.length; playerIndex++) {
        playerChoices[playerIndex].style.animationPlayState = "running";
    }
});