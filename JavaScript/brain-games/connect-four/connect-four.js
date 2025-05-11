document.addEventListener("DOMContentLoaded", function () {
    /**
     * Represents the current player.
     * Player `1` corresponds to red and `-1` to yellow.
     */
    let player = 1;
    
    /**
     * Tracks the winner of the game.
     * If `0`, the game is still ongoing.
     * If `1` or `-1`, that player has won.
     */
    let winner = 0;
    
    /**
     * Stores colour mappings for each player.
     * - `1` represents red
     * - `-1` represents yellow.
     */
    let colours = {
        "-1": "yellow",
        "1": "red"
    };
    
    /**
     * Counter used to assign unique IDs to cells.
     * Increments as cells are initialised.
     */
    let count = 0;

    /**
     * NodeList containing all game cells.
     * Each cell represents a slot on the Connect Four grid.
     */
    let cells = document.querySelectorAll(".cell");

    cells.forEach(function (cell) {
        cell.id = count;
        cell.dataset.player = "0";
        count++;

        cell.addEventListener("click", function () {
            if (isValid(cell.id)) {
                cell.style.backgroundColor = colours[player];
                cell.dataset.player = player;
                if (checkWin(player)) {
                    alert(colours[player] + " has won!");
                    winner = player;
                }
                player = player === 1 ? -1 : 1; // Switch player turn
            }
        });
    });

    /**
     * 
     */
    const restartButton = document.querySelector(".restart-btn");

    restartButton.addEventListener("click", function() {
        clearBoard();
    });

    /**
     * Resets the board by clearing player data and restoring default colours.
     */
    function clearBoard() {
        document.querySelectorAll(".cell").forEach(cell => {
            cell.setAttribute("data-player", "0");
            cell.style.backgroundColor = "rgb(3, 3, 49)";
        });
        
        winner = 0; // reset winner
    }

    /**
     * Checks if a move is valid based on board constraints.
     * @param {number} n - The ID of the cell.
     * @returns {boolean} - Returns true if move is valid, false otherwise.
     */
    function isValid(n) {
        let id = parseInt(n);

        if (winner !== 0) {
            return false;
        }

        if (document.getElementById(id).dataset.player === "0") {
            if (id >= 35 || document.getElementById(id + 7).dataset.player !== "0") {
                return true;
            }
        }
        return false;
    }

    /**
     * Determines if a player has won the game by checking rows, columns and diagonals.
     * @param {number} p - The player value (1, -1).
     * @returns {boolean} - Returns true if the player wins.
     */
    function checkWin(p) {
        // check rows
        let chain = 0;
        for (let i = 0; i < 42; i += 7) {
            for (let j = 0; j < 7; j++) {
                let cell = document.getElementById(i + j);
                if (cell.dataset.player == p) {
                    chain++;
                } else {
                    chain = 0;
                }

                if (chain >= 4) {
                    return true;
                }
            }
            chain = 0;
        }

        // check columns
        chain = 0;

        for (let i = 0; i < 7; i++) {
            for (let j = 0; j < 42; j += 7) {
                let cell = document.getElementById(i + j);

                if (cell.dataset.player == p) {
                    chain++;
                } else {
                    chain = 0;
                }

                if (chain >= 4) {
                    return true;
                }
            }

            chain = 0;
        }

        // check diagonals
        let topLeft = 0;
        let topRight = topLeft + 3;

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 4; j++) {
                let topLeftCell1 = document.getElementById(topLeft);
                let topLeftCell2 = document.getElementById(topLeft + 8);
                let topLeftCell3 = document.getElementById(topLeft + 16);
                let topLeftCell4 = document.getElementById(topLeft + 24);

                let topRightCell1 = document.getElementById(topRight);
                let topRightCell2 = document.getElementById(topRight + 6);
                let topRightCell3 = document.getElementById(topRight + 12);
                let topRightCell4 = document.getElementById(topRight + 18);

                if (topLeftCell1 && topLeftCell2 && topLeftCell3 && topLeftCell4) {
                    if (topLeftCell1.dataset.player == p &&
                        topLeftCell2.dataset.player == p &&
                        topLeftCell3.dataset.player == p &&
                        topLeftCell4.dataset.player == p) {
                        return true;
                    }                    
                }

                if (topRightCell1 && topRightCell2 && topRightCell3 && topRightCell4) {
                    if (topRightCell1.dataset.player == p &&
                        topRightCell2.dataset.player == p &&
                        topRightCell3.dataset.player == p &&
                        topRightCell4.dataset.player == p) {
                        return true;
                    }
                }

                topLeft++;
                topRight = topLeft + 3;
            }
            topLeft = i * 7 + 7;
            topRight = topLeft + 3;
        }
        return false;
    }
});