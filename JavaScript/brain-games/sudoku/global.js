let setLimits;
let boardSize = 4;
let level = 3; // 0 = Easy, 1 = Medium, 2 = Hard, 3 = Extreme
let board, boxSize, isBoardValidate, solvedBoard, digger, questionBoard;
let view, dotMenuButton,solverMenu,dotMenuDiv;
let solver, solverStartButton,speedRangeButton, solverStopButton ,solverWatchButton;

/**
 * Generate and return indices for the boxes in a Sudoku board based on the board size.
 * @param {number} size - The size of the Sudoku board (e.g., 9 for a 9x9 board). 
 * @returns (Array<Array<number>>) An array of sub-arrays, where each sub-array contains
 * the indices of the elements in one box (or sub-grid)
 */
function getSetLimits(size) {
    setLimits = []
    let boxSize = parseInt(Math.sqrt(size))
    let arr = []
    for (let i = 0; i < size; i++) {
        arr.push(i)
        if ((i + 1) % boxSize == 0 && i != 0) {
            setLimits.push(arr);
            arr = []
        }
    }
    return setLimits;
}

/**
 * Randomly generate an integer within a specified range.
 * 
 * @param {number} max - The maximum value of the range (inclusive).
 * @param {number} [min=0] - The minimum value of the range (inclusive). Default falls back to 0, if not provided.
 * @returns {number} A random number between the minimum and maximum (inclusive).
 */
function random(max, min = 0) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * Generate a table, where each row contains values of a box.
 * 
 * @param {Array<Array<number>>} board - The Sudoku board represented as a 2D array.
 * @param {number} boardSize - The size of the Sudoku board (e.g., 9 for a 9x9 board).
 * @returns {Array<Array<number>>} An array of sub-arrays, where each sub-array contains
 * the values of one box (sub-grid) from the Sudoku board.
 */
function generateBoxArray(board, boardSize) {
    let boxSize = parseInt(Math.sqrt(boardSize))
    let boxes = Array.from(Array(boardSize), () => new Array());
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            let row = parseInt(i / boxSize)
            let col = parseInt(j / boxSize)
            let box = col + row * boxSize;
            boxes[box].push(board[i][j])
        }
    }
    return boxes
}

/**
 * Calculate the index of the box that a specific cell belongs to in a grid
 * divided into smaller boxes.
 * 
 * @param {number} row - the row index of the cell.
 * @param {number} col - the column index of the cell.
 * @param {number} boxSize - the size of the smaller boxes within the grid.
 * @returns {Number} The index of the box that the specified cell belongs to.
 */
function getBoxNumber(row, col, boxSize) {
    let x = parseInt(row / boxSize)
    let y = parseInt(col / boxSize)
    return (y + x * boxSize);
}

//returns the column array of a board
function generateColumnArray(board) {
    let boardSize = board.length;
    let colArray = Array.from(Array(boardSize), () => new Array());

    for (let col = 0; col < boardSize; col++) {
        for (let row = 0; row < boardSize; row++) {
            colArray[col][row] = board[row][col]
        }
    }

    return colArray;
}

/**
 * Remove a specified value from an array, if it exists.
 * It provide a boolean value, indicating whether the removal was successful.
 * 
 * @param {Array} arr - The array from which the value should be removed.
 * @param {Array} val - The value to be removed from the array.
 * @returns {Boolean} - true if the value was fount and removed; false if the value ws not found in the array.
 */
function removeInArrayValue(arr, val){
    let idx = arr.indexOf(val);
    if(idx >= 0){
        arr.splice(idx,1)
        return true;
    } else{
        return false;
    }
}

/**
 * Transpose the given board, either returning the transposed values or the transposed positions,
 * based on the specified which parameter.
 * @param {Array} board - A two-dimensional array representing the original board.
 * @param {Number} boardSize - The size of the board, representing the total number of rows or columns in the grid.
 * @param {String} which - Determines whether to transpose values or positions. Can be 'values' to transpose the actual values or 'positions' to transpose the positions.
 * @returns The tranposed values of the board, and 'which' has 2 values: position or values.
 */
function transposeBoard(board, boardSize, which) {
    let board_inv = Array.from(Array(boardSize), () => new Array(boardSize).fill(0));
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (which == 'values') {
                board_inv[j][i] = board[i][j]
            } else if (which == 'positions') {
                board_inv[j][i] = [i, j]
            }
        }
    }

    return board_inv
}

/**
 * A new board is created with the same dimensions as the original board, without altering the original board.
 * @param {Array} board - A two dimensional array, representing the original board.
 * @returns Copy of a given board
 */
function copyBoard(board) {
    let copyOfBoard = Array.from(Array(board.length), () => new Array(board.length).fill(0))
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            copyOfBoard[i][j] = board[i][j]
        }
    }
    return copyOfBoard;
}

/**
 * Add a delay for a specified amount of time by returning a promise
 * that resolves after the given timeout period in milliseconds (ms).
 * @param {number} ms - The timeout duration in milliseconds (ms)
 * @returns A new Promise object
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Demonstrates asynchronous behaviour using the sleep function.
 * Logs messages to the console with delays to illustrate the use of await.
 */
async function demo() {
    console.log('Taking a break...');
    await sleep(2000);
    console.log('Two seconds later, showing sleep in a loop...');

    // Sleep in loop
    for (let i = 0; i < 5; i++) {
        if (i === 3)
            await sleep(2000); // 2-second delay
        console.log(i); // Logging the loop index
    }
}