/**
 * TicTacToe Game Class
 * Supports: 2-player mode, AI mode with 3 difficulty levels, persistent score tracking via localStorage.
 */
class TicTacToe {
    constructor() {
        // Initialize board state
        this.board = Array(9).fill(null);
        this.currentPlayer = 'X';
        this.gameOver = false;
        this.twoPlayerMode = false;

        // DOM element references
        this.boardElement = document.getElementById('board');
        this.statusElement = document.getElementById('status');
        this.restartButton = document.getElementById('restart-btn');
        this.difficultySelect = document.getElementById('difficulty');
        this.toggleModeButton = document.getElementById('toggle-mode');
        this.scoreX = document.getElementById('score-x');
        this.scoreO = document.getElementById('score-o');

        // Load scores from localStorage or initialize if not present
        this.scores = JSON.parse(localStorage.getItem('tictactoeScores')) || { X: 0, O: 0 };

        // Initialize the game board and UI
        this.initialiseBoard();
        this.updateStatus();
        this.updateScores();

        // Attach event listeners
        this.restartButton.addEventListener('click', () => this.resetGame());
        this.toggleModeButton.addEventListener('click', () => this.toggleMode());
    }

    /**
     * Initializes the game board with clickable cells.
     */
    initialiseBoard() {
        this.boardElement.innerHTML = '';
        for (let i = 0; i < 9; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener('click', () => this.makeMove(i));
            this.boardElement.appendChild(cell);
        }
    }

    /**
     * Handles a player or AI making a move.
     */
    makeMove(index) {
        if (this.board[index] || this.gameOver) return;

        this.board[index] = this.currentPlayer;
        this.boardElement.children[index].textContent = this.currentPlayer;

        if (this.checkWin()) {
            this.statusElement.textContent = `Player ${this.currentPlayer} wins!`;
            this.gameOver = true;
            this.scores[this.currentPlayer]++;
            localStorage.setItem('tictactoeScores', JSON.stringify(this.scores));
            this.updateScores();
        } else if (this.board.every(cell => cell)) {
            this.statusElement.textContent = "It's a draw!";
            this.gameOver = true;
        } else {
            this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
            this.updateStatus();

            // If single-player mode and AI's turn, trigger AI move
            if (!this.twoPlayerMode && this.currentPlayer === 'O') {
                setTimeout(() => this.aiMove(), 300); // Small delay for realism
            }
        }
    }

    /**
     * Performs an AI move based on selected difficulty.
     */
    aiMove() {
        const difficulty = this.difficultySelect.value;
        let index;

        if (difficulty === 'easy') {
            // Random empty cell
            const empty = this.board.map((v, i) => v === null ? i : null).filter(v => v !== null);
            index = empty[Math.floor(Math.random() * empty.length)];
        } else if (difficulty === 'medium') {
            // Try to win, block, or pick randomly
            index = this.findWinningMove('O') ?? this.findWinningMove('X');
            if (index === undefined) {
                const empty = this.board.map((v, i) => v === null ? i : null).filter(v => v !== null);
                index = empty[Math.floor(Math.random() * empty.length)];
            }
        } else {
            // Hard: Minimax algorithm
            index = this.minimax(this.board, 'O').index;
        }

        this.makeMove(index);
    }

    /**
     * Finds a winning move for a given player, or a blocking move for the opponent.
     */
    findWinningMove(player) {
        const winPatterns = [
            [0,1,2],[3,4,5],[6,7,8],
            [0,3,6],[1,4,7],[2,5,8],
            [0,4,8],[2,4,6]
        ];
        for (let pattern of winPatterns) {
            const [a,b,c] = pattern;
            const values = [this.board[a], this.board[b], this.board[c]];
            if (values.filter(v => v === player).length === 2 && values.includes(null)) {
                return pattern[values.indexOf(null)];
            }
        }
        return undefined;
    }

    /**
     * Minimax algorithm: recursively evaluates moves for AI.
     */
    minimax(board, player) {
        const opponent = player === 'O' ? 'X' : 'O';
        const empty = board.map((v, i) => v === null ? i : null).filter(v => v !== null);

        if (this.checkWinState(board, 'X')) return { score: -1 };
        if (this.checkWinState(board, 'O')) return { score: 1 };
        if (empty.length === 0) return { score: 0 };

        let moves = [];

        for (let i of empty) {
            let newBoard = [...board];
            newBoard[i] = player;
            const result = this.minimax(newBoard, opponent);
            moves.push({ index: i, score: result.score });
        }

        return player === 'O'
            ? moves.reduce((a, b) => a.score > b.score ? a : b)  // Maximize for 'O'
            : moves.reduce((a, b) => a.score < b.score ? a : b); // Minimize for 'X'
    }

    /**
     * Checks if the current player has won.
     */
    checkWin() {
        return this.checkWinState(this.board, this.currentPlayer);
    }

    /**
     * Checks if a given board state results in a win for a specific player.
     */
    checkWinState(board, player) {
        const winPatterns = [
            [0,1,2],[3,4,5],[6,7,8],
            [0,3,6],[1,4,7],[2,5,8],
            [0,4,8],[2,4,6]
        ];
        return winPatterns.some(pattern =>
            pattern.every(i => board[i] === player)
        );
    }

    /**
     * Updates the status text to show whose turn it is.
     */
    updateStatus() {
        this.statusElement.textContent = `Player ${this.currentPlayer}'s turn`;
    }

    /**
     * Updates the score UI from stored values.
     */
    updateScores() {
        this.scoreX.textContent = this.scores.X;
        this.scoreO.textContent = this.scores.O;
    }

    /**
     * Toggles between 2-player and AI mode.
     */
    toggleMode() {
        this.twoPlayerMode = !this.twoPlayerMode;
        this.toggleModeButton.textContent = this.twoPlayerMode ? "Switch to AI" : "Switch to 2-Player";
        this.resetGame();
    }

    /**
     * Resets the board and game state to start a new game.
     */
    resetGame() {
        this.board = Array(9).fill(null);
        this.gameOver = false;
        this.currentPlayer = 'X';
        this.initialiseBoard();
        this.updateStatus();
    }
}

// Initialize game after DOM is loaded
document.addEventListener('DOMContentLoaded', () => new TicTacToe());