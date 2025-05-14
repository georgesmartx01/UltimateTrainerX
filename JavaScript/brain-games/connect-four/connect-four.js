document.addEventListener("DOMContentLoaded", function () {
    let player = 1; // 1 for Red, -1 for Yellow
    let winner = 0; // 0 means no winner, 1 for Red, -1 for Yellow
    let redWins = localStorage.getItem("redWins") ? parseInt(localStorage.getItem("redWins")) : 0;
    let yellowWins = localStorage.getItem("yellowWins") ? parseInt(localStorage.getItem("yellowWins")) : 0;

    const grid = document.querySelector(".grid");
    const restartButton = document.querySelector(".restart-btn");
    const clearStatsButton = document.querySelector(".clear-stats");
    const turnIndicator = document.querySelector(".turn-indicator");
    const redWinsElement = document.querySelector("#redWins");
    const yellowWinsElement = document.querySelector("#yellowWins");

    // Update UI for stats
    redWinsElement.textContent = redWins;
    yellowWinsElement.textContent = yellowWins;

    // Create grid dynamically
    createGrid();

    // Event listeners
    restartButton.addEventListener("click", restartGame);
    clearStatsButton.addEventListener("click", clearStats);

    function createGrid() {
        grid.innerHTML = ''; // Clear any previous content
        for (let row = 0; row < 6; row++) {
            for (let col = 0; col < 7; col++) {
                let cell = document.createElement("div");
                cell.classList.add("cell");
                cell.dataset.column = col;
                cell.dataset.row = row;
                grid.appendChild(cell);
            }
        }

        // Attach click event listener to each cell
        const cells = document.querySelectorAll(".cell");
        cells.forEach(cell => {
            cell.addEventListener("click", handleClick);
        });
    }

    function handleClick(event) {
        if (winner !== 0) return; // No action if there's a winner

        const column = event.target.dataset.column;
        const availableRow = findAvailableRow(column);
        
        if (availableRow === -1) return; // No available space in this column

        const cell = document.querySelector(`[data-row="${availableRow}"][data-column="${column}"]`);
        cell.style.backgroundColor = player === 1 ? "red" : "yellow";
        cell.dataset.player = player;

        // Check if this move results in a win
        if (checkWin()) {
            winner = player;
            highlightWinningCells();
            updateStats();
            return;
        }

        // Switch player turn
        player = player === 1 ? -1 : 1;
        turnIndicator.textContent = player === 1 ? "Red's Turn" : "Yellow's Turn";
    }

    function findAvailableRow(column) {
        for (let row = 5; row >= 0; row--) {
            const cell = document.querySelector(`[data-row="${row}"][data-column="${column}"]`);
            if (!cell.dataset.player) {
                return row;
            }
        }
        return -1; // Column is full
    }

    function checkWin() {
        return checkRows() || checkColumns() || checkDiagonals();
    }

    function checkRows() {
        for (let row = 0; row < 6; row++) {
            for (let col = 0; col < 4; col++) {
                if (checkLine(row, col, 0, 1)) {
                    return true;
                }
            }
        }
        return false;
    }

    function checkColumns() {
        for (let col = 0; col < 7; col++) {
            for (let row = 0; row < 3; row++) {
                if (checkLine(row, col, 1, 0)) {
                    return true;
                }
            }
        }
        return false;
    }

    function checkDiagonals() {
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 4; col++) {
                if (checkLine(row, col, 1, 1)) {
                    return true;
                }
                if (checkLine(row + 3, col, -1, 1)) {
                    return true;
                }
            }
        }
        return false;
    }

    function checkLine(row, col, rowStep, colStep) {
        const color = document.querySelector(`[data-row="${row}"][data-column="${col}"]`).dataset.player;
        if (!color) return false;

        for (let i = 1; i < 4; i++) {
            const nextCell = document.querySelector(`[data-row="${row + i * rowStep}"][data-column="${col + i * colStep}"]`);
            if (nextCell && nextCell.dataset.player !== color) {
                return false;
            }
        }
        return true;
    }

    function highlightWinningCells() {
        const winningCells = getWinningCells();
        winningCells.forEach(cell => {
            cell.classList.add("win-highlight");
        });
    }

    function getWinningCells() {
        // This function should return the array of winning cells.
        // For simplicity, just implementing a dummy version
        return [];
    }

    function updateStats() {
        if (winner === 1) {
            redWins++;
            localStorage.setItem("redWins", redWins);
            redWinsElement.textContent = redWins;
        } else if (winner === -1) {
            yellowWins++;
            localStorage.setItem("yellowWins", yellowWins);
            yellowWinsElement.textContent = yellowWins;
        }
    }

    function restartGame() {
        winner = 0;
        player = 1;
        turnIndicator.textContent = "Red's Turn";
        const cells = document.querySelectorAll(".cell");
        cells.forEach(cell => {
            cell.style.backgroundColor = "rgb(3, 3, 49)";
            cell.removeAttribute("data-player");
            cell.classList.remove("win-highlight");
        });
    }

    function clearStats() {
        redWins = 0;
        yellowWins = 0;
        localStorage.setItem("redWins", redWins);
        localStorage.setItem("yellowWins", yellowWins);
        redWinsElement.textContent = redWins;
        yellowWinsElement.textContent = yellowWins;
    }
});