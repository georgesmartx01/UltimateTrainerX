/**
 * 
 */
class TicTacToe {
    /**
     * 
     */
    constructor() {
        this.board = Array(9).fill(null);
        this.currentPlayer = 'X';
        this.gameOver = false;
        this.boardElement = document.getElementById('board');
        this.statusElement = document.getElementById('status');
        this.popupElement = document.getElementById('popup');
        this.popupTitle = document.getElementById('popup-title');
        this.popupMessage = document.getElementById('popup-message');
        this.restartButton = document.getElementById('restart-btn');

        this.intialiseBoard();
        this.restartButton.addEventListener('click', () => this.resetGame());
    }

    /**
     * 
     */
    intialiseBoard() {
        this.boardElement.innerHTML = '';
        for (let index = 0; index < 9; index++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener('click', () => this.makeMove(index));
            this.boardElement.appendChild(cell);
        }
        this.updateStatus();
    }

    /**
     * 
     * @param {*} index 
     */
    makeMove(index) {
        if (this.board[index] || this.gameOver) return;

        this.board[index] = this.currentPlayer;
        this.boardElement.children[index].textContent = this.currentPlayer;

        
        if (this.checkWinner(this.isWinningPattern)) {
            this.gameOver = true;
            this.showPopup(`${this.currentPlayer} Wins!`, `Player ${this.currentPlayer} win!`);
        } else if (this.board.every(cell => cell !== null)) {
            this.gameOver = true;
            this.showPopup("It's a Tie!", "The game ended in a draw.");
        } else {
            this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
            this.updateStatus();
        }
    }

    /**
     * 
     * @param {*} title 
     * @param {*} message 
     */
    showPopup(title, message) {
        this.popupTitle.textContent = title;
        this.popupMessage.textContent = message;
        this.popupElement.style.display = 'flex';
    }

    /**
     * 
     * @param {*} callback 
     * @returns 
     */
    checkWinner(callback) {
        return callback(this.board);
    }

    /**
     * 
     * @param {*} board 
     */
    isWinningPattern(board) {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6] // Diagonals
        ];
        return winPatterns.some(pattern => {
            const [a, b, c] = pattern;
            return board[a] && board[a] === board[b] && board[a] === board[c];
        });
    }

    /**
     * 
     */
    updateStatus() {
        this.statusElement.textContent = `Player ${this.currentPlayer}'s turn`;
    }

    /**
     * 
     */
    resetGame() {
        this.board = Array(9).fill(null);
        this.currentPlayer = 'X';
        this.gameOver = false;
        this.popupElement.style.display = 'none';
        this.intialiseBoard();
    }
}

const game = new TicTacToe();