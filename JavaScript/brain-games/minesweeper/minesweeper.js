/**
 * Represents the Minesweeper game field
 */
class Minefield {
    /**
     * Creates a new Minefield instance
     * @param {number} rows - Number of rows in the minefield
     * @param {number} columns - Number of columns in the minefield
     * @param {number} mines - Total number of mines
     */
    constructor(rows, columns, mines) {
        this.rows = rows;
        this.columns = columns;
        this.mines = mines;
        this.cells = [];
        this.isGameOver = false;
        this.initialiseGame();
    }

    /**
     * Initialises the minefield by creating cells, 
     * placing mines and calculating adjacent mine counts.
     */
    initialiseGame() {
        this.cells = Array.from({ length: this.rows}, () => Array(this.columns).fill(null));
        this.createCells();
        this.placeMines();
        this.calculateAdjacentMines();
    }

    /**
     * Creates the visual minefield grid and appends cells to the Document Object Model (DOM).
     */
    createCells() {
        const minefieldDiv = document.getElementById('minefield');
        minefieldDiv.innerHTML = '';

        this.cells.forEach((row, r) => {
            const rowDiv = document.createElement('div');
            rowDiv.classList.add('row');
            row.forEach((_, c) => {
                const cell = new Cell(r, c); // Create a new cell
                row[c] = cell;
                rowDiv.appendChild(cell.element);
            });
            minefieldDiv.appendChild(rowDiv);
        });
    }

    /**
     * Randomly places mines in the grid.
     */
    placeMines() {
        let placedMines = 0;

        while (placedMines < this.mines) {
            const r = Math.floor(Math.random() * this.rows);
            const c = Math.floor(Math.random() * this.columns);

            if (!this.cells[r][c].isMine) {
                this.cells[r][c].isMine = true;
                placedMines++;
            }
        }
    }

    /**
     * Calculates the number of adjacent mines for each cell.
     */
    calculateAdjacentMines() {
        this.cells.forEach((row, r) => {
            row.forEach((cell, c) => {
                if (!cell.isMine) {
                    cell.adjacentMines = this.getAdjacentCells(r, c)
                    .filter(adjCell => adjCell.isMine)
                    .length;
                }
            });
        });
    }

    /**
     * Retrieves adjacent cells to a given position.
     * @param {number} row - Row index.
     * @param {number} column - Column index.
     * @returns {Cell[]} An array of adjacent cells
     */
    getAdjacentCells(row, column) {
        const directions = [
            [-1, -1], [-1, 0], [-1, 1],
            [0, -1], [0, 1],
            [1, -1], [1, 0], [1, 1]
        ];
        return directions
        .map(([dr, dc]) => [row + dr, column + dc])
        .filter(([nr, nc]) => nr >= 0 && nr < this.rows && nc >= 0 && nc < this.columns)
        .map(([nr, nc]) => this.cells[nr][nc]);
    }

    /**
     * Reveals a cell, triggerring a game over if it's a mine.
     * @param {number} row - Row index.
     * @param {number} column - Column index.
     */
    revealCell(row, column) {
        if (this.isGameOver || this.cells[row][column].isRevealed) return;

        const cell = this.cells[row][column];
        cell.reveal();

        if (cell.isMine) {
            // Game Over
            this.gameOver('Game Over!');
        } else if (cell.adjacentMines === 0) {
            this.getAdjacentCells(row, column).forEach(adjCell => this.revealCell(adjCell,row, adjCell.column));
        }
        this.checkWin(); // check win
    }

    /**
     * checks if the player has won the game.
     */
    checkWin() {
        const nonMineCells = this.rows * this.columns - this.mines;
        const revealedCells = this.cells.flat().filter(cell => cell.isRevealed).length;

        if (nonMineCells === revealedCells) {
            this.gameOver('You Win!');
        }
    }

    /**
     * Handles game over logic and reveals all mines.
     * @param {string} message - Message to display upon game over.
     */
    gameOver(message) {
        this.isGameOver = true;
        this.revealAllMines();
        this.highlightIncorrectFlags();
        this.showPopup(message);
    }

    /**
     * Displays the game over popup with a restart option.
     * @param {string} message - Message to display in the popup.
     */
    showPopup(message) {
        const popup = document.getElementById('popup');
        const popupMessage = document.getElementById('popup-message');
        popupMessage.textContent = message;
        popup.style.display = 'block';

        document.getElementById('restart-btn').addEventListener('click', () => {
            popup.style.display = 'none';
            minesweeperGame.startGame();
        });
    }

    /**
     * Reveals all mines after the game ends.
     */
    revealAllMines() {
        this.cells.flat().forEach(cell => {
            if (cell.isMine && !cell.isFlagged) {
                cell.reveal();
                cell.element.classList.add('mine');
            }
        });
    }

    /**
     * Highlights incorrectly flagged cells.
     */
    highlightIncorrectFlags() {
        this.cells.flat().forEach(cell => {
            if (cell.isFlagged && !cell.isMine) {
                cell.element.classList.remove('flagged');
                cell.element.classList.add('incorrect-flag');
                cell.element.textContent = '❌';
            }
        });
    }

    /**
     * Flags or unflags a cell to mark potential mines.
     * @param {number} row - Row index of the cell to flag.
     * @param {number} column - Column index of the cell to flag.
     */
    flagCell(row, column) {
        if (this.isGameOver || this.cells[row][column].isRevealed) return;
        this.cells[row][column].toggleFlag();
    }

    /**
     * Highlights adjacent cells around the given cell.
     * Used when a player middle-clicks to preview nearby cells.
     * @param {number} row - Row index of the selected cell.
     * @param {number} column - Column index of the selected cell.
     */
    highlightArea(row, column) {
        this.getAdjacentCells(row, column).forEach(cell => cell.highlight());
    }

    /**
     * Clears any highlighted adjacent cells.
     * Used when the middle-click is released.
     */
    clearHighlight() {
        this.cells.flat().forEach(cell => cell.clearHighlight());
    }

    /**
     * Reveals all adjacent cells if the given cell has no nearby mines.
     * Helps in uncovering large empty areas quickly.
     * @param {number} row - Row index of the selected cell.
     * @param {number} column - Column index of the selected cell.
     */
    revealArea(row, column) {
        if (this.cells[row][column].adjacentMines === 0 
            && !this.cells[row][column].isFlagged) {
                this.getAdjacentCells(row, column)
                .forEach(cell => this.revealCell(cell.row, cell.column));
        }
    }
}

/**
 * Represents a single cell in the Minesweeper game.
 */
class Cell {
    /**
     * Creates a new cell instance within the minesweeper grid.
     * Initialises its properties, such as position, mine status and adjacent mines.
     * @param {number} row - The row index of the cell.
     * @param {number} column - The column index of the cell.
     */
    constructor(row, column) {
        this.row = row; // Row position of the cell
        this.column = column; // Column position of the cell
        this.isMine = false; // Indicates whether the cell contains a mine
        this.isRevealed = false; // Tracks whether the cell has been revealed
        this.isFlagged = false; // Marks whether the cell has been flagged by the player
        this.adjacentMines = 0; // Stores the number of mines adjacent to this cell
        this.element = this.createElement(); // Generated the cell's visual element
    }

    /**
     * Creates a DOM element representing a Minesweeper cell.
     * Adds event listeners for left-click, right-click and middle-click interactions.
     * @returns {HTMLDivElement} The created cell element.
     */
    createElement() {
        const cellDiv = document.createElement('div');
        cellDiv.classList.add('cell');
        
        // event listeners in Minesweeper game
        cellDiv.addEventListener('click', () => {
            minesweeperGame.minefield.revealCell(this.row, this.column);
        });

        cellDiv.addEventListener('contextmenu', (event) => {
            event.preventDefault();
            minesweeperGame.minefield.flagCell(this.row, this.column);
        });

        cellDiv.addEventListener('mousedown', (event) => {
            if (event.button === 1) {
                minesweeperGame.minefield.highlightArea(this.row, this.column);
            }
        });

        cellDiv.addEventListener('mouseup', (event) => {
            if (event.button === 1) {
                minesweeperGame.minefield.clearHighlight();
                minesweeperGame.minefield.revealArea(this.row, this.column);
            }
        });

        return cellDiv;
    }

    /**
     * Reveals the cell and updates its content.
     */
    reveal() {
        if (this.isRevealed) return;
        this.isRevealed = true;
        this.element.classList.add('revealed');
        
        if (this.isFlagged) {
            // toggle flag
            this.toggleFlag();
        }

        if (this.isMine) {
            this.element.textContent = '💣';
        } else if (this.adjacentMines > 0) {
            this.element.textContent = this.adjacentMines;
            this.element.setAttribute('data-mines', this.adjacentMines);
        }
    }

    /**
     * Toggles a flag on a cell, marking or unmarking it as a potential mine.
     * Displays a flag emoji 🚩 when flagged.
     */
    toggleFlag() {
        if (this.isFlagged) {
            this.isFlagged = false;
            this.element.classList.remove('flagged');
            this.element.textContent = '';
        } else {
            this.isFlagged = true;
            this.element.classList.add('flagged');
            this.element.textContent = '🚩';
        }
    }

    /**
     * Highlight a cell when the player middle-clicks.
     * Used to preview adjacent cells before committing to a click.
     */
    highlight() {
        this.element.classList.add('highlighted');
    }

    /**
     * Clears the highlight effect from a cell.
     * Used when the middle mouse button is released.
     */
    clearHighlight() {
        this.element.classList.remove('highlighted');
    }
}

/**
 * Handles Minesweeper game logic.
 */
class Minesweeper {
    /**
     * Initialises a new Minesweeper game instance.
     * Stores available difficulty levels and prepares the minefield.
     */
    constructor() {
        this.minefield = null;

        /**
         * The difficulty levels the user can select from
         */
        this.levels = {
            novice: { rows: 9, columns: 9, mines: 10 }, // Beginner difficulty
            intermediate: { rows: 16, columns: 16, mines: 40 }, // Medium difficulty
            expert: { rows: 30, columns: 16, mines: 99 }, // Hard difficulty
            superhuman: { rows: 50, columns: 50, mines: 500 } // Extreme difficulty
        };
    }

    /**
     * Starts the Minesweeper game at the selected difficulty level.
     */
    startGame() {
        const level = document.getElementById('level').value;
        const { rows, columns, mines } = this.levels[level];
        this.minefield = new Minefield(rows, columns, mines);
    }
}

const minesweeperGame = new Minesweeper();
minesweeperGame.startGame();