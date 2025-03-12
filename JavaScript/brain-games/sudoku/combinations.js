class Combinations {
    board;
    boardSize;
    boxSize;

    /**
     * Initialises the board and its size, as well as the box size.
     * @param {board} _board 
     * @param {boardSize} _boardSize 
     * @param {boxSize} _boxSize 
     */
    constructor(_board, _boardSize, _boxSize) {
        this.board = _board;
        this.boardSize = _boardSize;
        this.boxSize = _boxSize;
    }

    /**
     * Perform a series of random row, column and value shifter operations on the current game board.
     * 
     * This function selects a random combination of shifting operations (rows, columns or values)
     * and applies them to the game board a specified number of times.
     */
    runCombinations() {
        let funcs = [this.rowShifter, this.columnShifter, this.valueShifter];
        let num_combos = random(this.boardSize, this.boxSize) * 2;

        while (num_combos > 0) {
            let randFunc = random(funcs.length - 1);
            let value1, value2;

            // Value Shifter
            if (randFunc == 2) {
                value1 = random(this.boardSize, 1);
                value2 = random(this.boardSize, 1);
                
                while (value1 == value2) {
                    value2 = random(this.boardSize, 1);
                }
            }

            // Column Shifter
            if (randFunc == 1 || randFunc == 0) {
                let limits = getSetLimits(this.boardSize);
                let randomSet = random(limits.length - 1);

                value1 = random(limits[randomSet].length - 1);
                value2 = random(limits[randomSet].length - 1);

                while (value1 == value2) {
                    value2 = random(limits[randomSet].length - 1);
                }
                value1 = limits[randomSet][value1];
                value2 = limits[randomSet][value2];
            }
            funcs[randFunc](value1, value2, this.board);
            num_combos--;
        }
    }

    /**
     * Shifts the columns on the current board by swapping two columns
     * 
     * @param {number} column1 - the first column to be swapped
     * @param {number} column2 - the second column to be swapped
     * @param {Array} board - the current game board represented as a two-dimensional array
     * 
     * The first column is stored in a temporary array,
     * assigns the second column to the first column's position
     * and finally assigns the temporary array to the second column's position.
     */
    columnShifter(column1, column2, board) {
        for (let index = 0; index < board.length; index++) {
            /** Store in a temporary array */
            let tempArray = board[index][column1];
            board[index][column1] = board[index][column2]
            board[index][column2] = tempArray;
        }
    }

    /**
     * Shift the rows on the current board by swapping two rows.
     * 
     * @param {number} row1 - the first row to be swapped
     * @param {number} row2 - the second row to be swapped
     * @param {Array} board - the current game board represented as a two-dimensional array
     * 
     * The first row is stored in a temporary array,
     * assigns the second row to the first row's position
     * and finally assigns the temporary array to the second row's position.
     */
    rowShifter(row1, row2, board) {
        let tempArray = board[row1];
        board[row1] = board[row2];
        board[row2] = tempArray;
    }

    /**
     * Shift the values in the current board by swapping two values.
     * 
     * @param {number} value1 - The first value to be swapped
     * @param {number} value2 - The second value to be swapped
     * @param {Array} board - The 2D array representing the board
     * 
     * This function iterates through each element on the board.
     * If the element matches the first occurence, it replaces it with the second one.
     * If the element matches the second occurence, it replaces it with the first one.
     */
    valueShifter(value1, value2, board) {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length; j++) {
                if (board[i][j] == value1) {
                    board[i][j] = value2;
                } else if (board[i][j] == value2) {
                    board[i][j] = value1;
                }
            }
        }
    }
}