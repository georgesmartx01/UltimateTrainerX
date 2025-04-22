// Initial references
const gameContainer = document.querySelector(".game-container");
const playerTurn = document.getElementById("player-turn");
const startScreen = document.querySelector(".start-screen");
const startButton = document.getElementById("start-btn");
const message = document.getElementById("message");
let initalMatrix = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
];

let currentPlayer;

// Random Number Between Range
const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

// Loop through array and check for the same values
const verifyArray = (arrayElement) => {
    let bool = false;
    let elementCount = 0;
    arrayElement.forEach((element) => {
        if (element == currentPlayer) {
            elementCount += 1;
            if (elementCount == 4) {
                bool = true;
            }
        } else {
            elementCount = 0;
        }
    });
    return bool;
}

// Check for game over (Last step)
const gameOverCheck = () => {
    let truthCount = 0;
    for (let circleArray of initalMatrix) {
        if (circleArray.every((value) => value != 0)) {
            truthCount += 1;
        } else {
            return false;
        }
    }

    if (truthCount == 6) {
        message.innerText = "Game Over";
        startScreen.classList.remove("hide");
    }
};

/**
 * Check rows
 * @param {number} row - The row of the circle
 * @returns 
 */
const checkAdjacentRowValues = (row) => {
    return verifyArray(initalMatrix[row]);
};

/**
 * Check columns
 */ 
const checkAdjacentColumnValues = (column) => {
    let columnWinCount = 0;
    columnWinBool = false;
    initalMatrix.forEach((element) => {
        if (element[column] == currentPlayer) {
            columnWinCount += 1;

            if (columnWinCount == 4) {
                columnWinBool = true;
            }
        } else {
            columnWinCount = 0;
        }
    });
    // no match
    return columnWinBool;
}

/** 
 * Get right diagonal values
 */ 
const getRightDiagonal = (row, column, rowLength, columnLength) => {
    let rowCount = row;
    let columnCount = column;
    let rightDiagonal = [];
    while (rowCount > 0) {
        if (columnCount >= columnLength - 1) {
            break;
        }
        rowCount -= 1;
        columnCount += 1;
        rightDiagonal.unshift(initalMatrix[rowCount][columnCount]);
    }
    rowCount = row;
    columnCount = column;
    while (rowCount < rowLength) {
        if (columnCount < 0) {
            break;
        }
        rightDiagonal.push(initalMatrix[rowCount][columnCount]);
        rowCount += 1;
        columnCount -= 1;
    }
    return rightDiagonal;
};

const getLeftDiagonal = (row, column, rowLength, columnLength) => {
    let rowCount = row;
    let columnCount = column;
    let leftDiagonal = [];
    while (rowCount > 0) {
        if (columnCount <= 0) {
            break;
        }
        rowCount -= 1;
        columnCount -= 1;
        leftDiagonal.unshift(initalMatrix[rowCount][columnCount]);
    }
    rowCount = row;
    columnCount = column;
    while (rowCount < rowLength) {
        if (columnCount >= columnLength) {
            break;
        }
        leftDiagonal.push(initalMatrix[rowCount][columnCount]);
    }
    rowCount = row;
    columnCount = column;
    while (rowCount < rowLength) {
        if (columnCount >= columnLength) {
            break;
        }
        leftDiagonal.push(initalMatrix[rowCount][columnCount]);
        rowCount += 1;
        columnCount += 1;
    }
    return leftDiagonal;
};

// Check diagonal
const checkAdjacentDiagonalValues = (row, column) => {
    let diagonalWinBool = false;
    let tempChecks = {
        leftTop: [],
        rightTop: []
    };
    let columnLength = initalMatrix[row].length;
    let rowLength = initalMatrix.length;

    // Store left and right diagonal array
    tempChecks.leftTop = [
        ...getLeftDiagonal(row, column, rowLength, columnLength)
    ];

    tempChecks.rightTop = [
        ...getRightDiagonal(row, column, rowLength, columnLength)
    ];

    // Check both arrays for similarities
    diagonalWinBool = verifyArray(tempChecks.rightTop);
    if (!diagonalWinBool) {
        diagonalWinBool = verifyArray(tempChecks.leftTop);
    }
    return diagonalWinBool;
};

// Win check logic
const winCheck = (row, column) => {
    // if any of the functions return true we return true
    return checkAdjacentRowValues(row) 
    ? true 
    : checkAdjacentColumnValues(column) 
    ? true 
    :checkAdjacentDiagonalValues(row, column) 
    ? true 
    : false;
};

// Sets the circle to exact points
const setPiece = (startCount, columnValue) => {
    let rows = document.querySelectorAll(".grid-row");
    // Initially, it will place the circles in the last row else if 
    // no place available we will decrement the count until we gind empty slots
    if (initalMatrix[startCount][columnValue] != 0) {
        startCount -= 1;
        setPiece(startCount, columnValue);
    } else {
        // place circle
        let currentRow = rows[startCount].querySelectorAll(".grid-box");
        currentRow[columnValue].classList.add("filled", `player${currentPlayer}`);

        // Update matrix
        initalMatrix[startCount][columnValue] = currentPlayer;

        // Check for wins
        if (winCheck(startCount, columnValue)) {
            message.innerHTML = `Player<span>${currentPlayer}</span> wins`;
            startScreen.classList.remove("hide");
            return false;
        }
    }
    // Check if all are full
    gameOverCheck();
};

// When user clicks on a box
const fillBox = (event) => {
    // get column value
    let columnValue = parseInt(event.target.getAttribute("data-value"));
    // 5 because we have 6 rows (0-5)
    setPiece(5, columnValue);
    currentPlayer = currentPlayer == 1 ? 2 : 1;
    playerTurn.innerHTML = `Player <span>${currentPlayer}'s</span> turn`;
}

// Create Matrix
const matrixCreator = () => {
    for (let circleArray in initalMatrix) {
        let outerDiv = document.createElement("div");
        outerDiv.classList.add("grid-row");
        outerDiv.setAttribute("data-value", circleArray);
        
        for (let j in initalMatrix[circleArray]) {
            // Set all matrix values to 0
            initalMatrix[circleArray][j] = 0;
            let innerDiv = document.createElement("div");
            innerDiv.classList.add("grid-box");
            innerDiv.setAttribute("data-value", j);
            innerDiv.addEventListener("click", (event) => {
                fillBox(event);
            });
            outerDiv.appendChild(innerDiv);
        }
        gameContainer.appendChild(outerDiv);
    }
};

// Initialise game
window.onload = startGame = async () => {
    // Between 1 and 2
    currentPlayer = generateRandomNumber(1, 3);
    await matrixCreator();
    playerTurn.innerHTML = `Player <span>${currentPlayer}'s</span> turn`;
};

startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    startGame();
});