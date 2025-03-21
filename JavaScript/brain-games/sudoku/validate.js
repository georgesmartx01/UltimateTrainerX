/**
 * 
 */
class Validate {
    board;
    boardSize;
    sumTarget;
    boxArray_fromBoard;

    /**
     * 
     * @param {*} _board 
     * @param {*} _boardSize 
     */
    constructor(_board, _boardSize) {
        this.board = _board;
        this.boardSize = _boardSize;
        this.sumTarget = parseInt(this.boardSize * (this.boardSize + 1) / 2)
    }

    /**
     * 
     * @returns 
     */
    runTests() {        
        return this.columnSums__validation() && this.rowSums_validation() && this.box_validation()
    }

    /**
     * 
     * @returns 
     */
    columnSums__validation() {
        let isValid = true;
        for (let i = 0; i < this.board.length; i++) {
            let sum = 0;
            for (let j = 0; j < this.board.length; j++) {
                sum += this.board[j][i]
            }
            if (sum != this.sumTarget) {
                isValid = false;
                return isValid;
            }
        }

        return isValid;
    }

    /**
     * 
     * @returns 
     */
    rowSums_validation() {
        let isValid = true
        this.board.forEach(x => {
            if (x.reduce((a, b) => a + b, 0) != this.sumTarget) {
                isValid = false
            }
        });
        return isValid
    }

    /**
     * 
     * @returns 
     */
    box_validation() {
        this.boxArray_fromBoard = generateBoxArray(this.board, this.boardSize)
        let isValid = true
        this.boxArray_fromBoard.forEach(x => {
            isValid = this.unique(x)
        });

        return isValid;
    }

    /**
     * 
     * @param {*} array 
     * @returns 
     */
    unique(array) {
        
        let x = array;
        x.sort()
        x = [...new Set(x)]
        let sum = x.reduce((a, b) => a + b, 0);
        if (sum != this.sumTarget || x.length != this.boardSize) {
            return false
        }
        return true;
    }
}