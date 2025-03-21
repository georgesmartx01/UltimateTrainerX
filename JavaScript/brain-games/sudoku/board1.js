/**
 * 
 */
class Board {
    board;
    boardSize;
    boxSize;
    boardValues;

    /**
     * Initialises the board size
     * @param {Array} _boardSize - the size of the board represented as a two-dimensional array
     */
    constructor(_boardSize) {
        this.boardSize = _boardSize;
        this.boxSize = parseInt(Math.sqrt(_boardSize));
        this.board = Array.from(Array(this.boardSize), () => new Array(this.boardSize).fill(0));
        this.boardValues = Array.from(Array(this.boardSize), () => new Array(this.boardSize).fill(0));
        this.createBoard();
    }

    /**
     * Creates the board
     */
    createBoard() {
        // filling each number
        let values = ["*", "$$", '---'];
        let insertions = Array(this.boardSize).fill(0);

        for (let i = 1; i <= 3; i++) {
            let insertionsCount = 0;
            let availableBlocks;
            let availableColumns = Array.from({length:this.boardSize}, (val, idx)=>idx);
            let availableColumnsForSet1 = availableColumns;
            let setNumber;

            for (let row = 0; row < this.boardSize; row++) {
                let valueInserted = false;
                let currentRow = row;
                let currentColumn;
                let randomBox;
                let randomColumn;

                if (row %this.boxSize == 0) {
                    availableBlocks = Array.from({length:this.boxSize}, (val, idx)=>idx);
                    setNumber = row / this.boxSize;

                    if (setNumber == 1) availableColumnsForSet1 = availableColumns;
                }
                while (!valueInserted) {
                    if (availableColumns.length == 1 && availableBlocks.length == 1) {
                        randomBox = availableBlocks[0];
                        currentColumn = availableColumns[0];
                        } else {
                            randomBox = availableBlocks[this.random(availableBlocks.length - 1)];
                            randomColumn = this.random(this.boxSize - 1);
                            currentColumn = randomBox * boxSize + randomColumn;

                            while (!availableColumns.includes(currentColumn) || this.board[currentRow][currentColumn] != 0) {
                                randomBox = availableBlocks[this.random(availableBlocks.length - 1)];
                                randomColumn = this.random(this.boxSize - 1);
                                currentColumn = randomBox * boxSize + randomColumn;
                            }
                        }

                        if (this.board[currentRow][currentColumn == 0]) {
                            // found a valid cell
                            insertionsCount++;
                            this.board[currentRow][currentColumn] = values[i - 1];
                            valueInserted = true;
                            availableBlocks.splice(availableBlocks.indexOf(randomBox), 1);
                            availableColumns.splice(availableColumns.indexOf(currentColumn), 1);
                        } else if (setNumber == 1) {
                            console.log("inside if");
                            row = setNumber * this.boxSize - 1;
                            availableColumns = availableColumnsForSet1;
                            console.log('i', i);
                            console.log('randomBox', randomBox);
                            console.log('row', row);
                            console.log('currentColumn', currentColumn);
                            console.groupEnd("");
                        }
                    }
                }
                insertions[i - 1] = insertionsCount;
            }
            console.log(insertions);
        }

        /**
         * 
         * @param {*} max 
         * @param {*} min 
         * @returns 
         */
        random(max, min = 0) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
    }