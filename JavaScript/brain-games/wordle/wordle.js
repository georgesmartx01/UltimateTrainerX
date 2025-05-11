/**
 * Dictionary of possible secret words.
 * These words are randomly selected for the game.
 */
const dictionary = ['earth', 'plane', 'crane', 'audio', 'house', ''];

/**
 * Game state object storing essential properties:
 * - `secret`: The randomly chosen word from `dictionary`.
 * - `grid`: A 6-row by 5-column grid representing user guesses.
 * - `currentRow`: Tracks the active row where the player is guessing.
 * - `currentColumn`: Tracks the active column for letter input.
 */
const state = {
    secret: dictionary[Math.floor(Math.random() * dictionary.length)],
    grid: Array(6).fill().map(() => Array(5).fill('')),
    currentRow: 0,
    currentColumn: 0
};

/**
 * Updates the grid UI by assigning guessed letters to corresponding cells.
 * Loops through all grid rows and columns to update displayed content.
 */
function updateGrid() {
    for (let i = 0; i < state.grid.length; i++) {
        for (let j = 0; j < state.grid[i].length; j++) {
            const cell = document.getElementById(`cell${i}${j}`);
            cell.textContent = state.grid[i][j];
        }
    }
}

/**
 * Creates and appends a cell element for the word grid.
 * @param {HTMLElement} container - The parent container where cells are appended.
 * @param {number} row - Row index of the cell.
 * @param {number} column - Column index of the cell.
 * @param {string} letter - Letter to display in the cell (default is empty).
 * @returns {HTMLElement} - The newly created cell element.
 */
function drawCell(container, row, column, letter = '') {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.id = `cell${row}${column}`;
    cell.textContent = letter;

    container.appendChild(cell);
    return cell;
}

/**
 * Creates and renders the word grid inside the given container.
 * @param {HTMLElement} container - The parent element for the grid.
 */
function drawGrid(container) {
    const grid = document.createElement('div');
    grid.className = 'grid';

    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 5; j++) {
            drawCell(grid, i, j);
        }
    }
    container.appendChild(grid);
}

/**
 * Registers keyboard events for player interaction.
 * - Enter: Submits the current guess.
 * - Backspace: Deletes the last entered letter.
 * - Letter keys: Adds a letter to the grid.
 */
function registerKeyboardEvents() {
    document.body.onkeydown = (event) => {
        const key = event.key;
        if (key === 'Enter') {
            if (state.currentColumn === 5) {
                const word = getCurrentWord();
                if (isWordValid(word)) {
                    revealWord(word);
                    state.currentRow++;
                    state.currentColumn = 0;
                } else {
                    alert('Not a valid word!');
                }
            }
        }

        if (key === 'Backspace') {
            removeLetter();
        }

        if (isLetter(key)) {
            addLetter(key);
        }

        updateGrid();
    };
}

/**
 * Constructs the current guessed word from the active row.
 * @returns {string} - The current word being guessed.
 */
function getCurrentWord() {
    return state.grid[state.currentRow].reduce((previous, current) => previous + current);
}

/**
 * Checks if the guessed word exists in the dictionary.
 * @param {string} word - The guessed word to validate.
 * @returns {boolean} - Returns true if the word is valid, otherwise false.
 */
function isWordValid(word) {
    return dictionary.includes(word);
}

/**
 * Reveals correctness of the guessed word by updating cell styles.
 * - Correct letters are marked (`right` class).
 * - Incorrect letters in the word are marked (`wrong` class).
 * - Incorrect letters not in the word are marked (`empty` class).
 * @param {string} guess - The guessed word.
 */
function revealWord(guess) {
    const row = state.currentRow;
    const animation_duration = 500; // duration in milliseconds
    
    for (let i = 0; i < 5; i++) {
        const cell = document.getElementById(`cell${row}${i}`);
        const letter = cell.textContent;

        setTimeout(() => {
            if (letter === state.secret[i]) {
                cell.classList.add('right');
            } else if (state.secret.includes(letter)) {
                cell.classList.add('wrong');
            } else {
                cell.classList.add('empty');
            }
        }, ((i + 1) * animation_duration) / 2);

        cell.classList.add('animated');
        cell.style.animationDelay = `${(i * animation_duration) / 2}ms`;
    }

    const isWinner = state.secret === guess;
    const isGameOver = state.currentRow === 5;

    setTimeout(() => {
        if (isWinner) {
            alert('Congratulations! You won the game!');
        } else if (isGameOver) {
            alert(`Better luck next time! The word was ${state.secret}.`);
        }
    }, 3 * animation_duration);
}

/**
 * Determines whether a key press is a valid letter.
 * @param {string} key - The key pressed by the user.
 * @returns {boolean} - Returns true if the key is a letter.
 */
function isLetter(key) {
    return key.length === 1 && key.match(/[a-z]/i);
}

/**
 * Adds a letter to the current row if within limit.
 * @param {string} letter - The letter to add.
 */
function addLetter(letter) {
    if (state.currentColumn === 5) return;
    state.grid[state.currentRow][state.currentColumn] = letter;
    state.currentColumn++;
}

/**
 * Removes the last entered letter from the current row.
 */
function removeLetter() {
    if (state.currentColumn === 0) return;
    state.grid[state.currentRow][state.currentColumn - 1] = '';
    state.currentColumn--;
}

/**
 * Initializes the game by drawing the grid and registering event listeners.
 */
function startGame() {
    const game = document.getElementById('game');
    drawGrid(game);
    registerKeyboardEvents();
}

startGame();