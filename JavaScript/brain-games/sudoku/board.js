/**
 * 
 */
class Board {
    board;
    boardSize;
    boxSize;
    boardValues;

    /**
     * 
     * @param {*} _boardSize 
     */
    constructor(_boardSize) {
        this.boardSize = _boardSize;
        this.boxSize = parseInt(Math.sqrt(_boardSize));
        this.board = Array.from(Array(this.boardSize), () => new Array(this.boardSize).fill(0));
        this.boardValues = Array.from(Array(this.boardSize), () => new Array(this.boardSize).fill(0));
    }

    /**
     * 
     */
    getBoard() {
        let newBoard = [...this.board];
        console.table(newBoard);
        return [...newBoard];
    }

    createBoard() {
        // basic board is created here by shifting
        this.board[0] = this.randomArray(this.boardSize);

        for (let i = 2; i <= this.boardSize; i++) {
            // if the row is in a new set then shift by boxSize + 1
            let shiftSize = (i - 1) % this.boxSize == 0 ? this.boxSize + 1 : this.boxSize;
            this.board[i - 1] = this.shiftSequence(this.board[i - 2], shiftSize);
        }

        // board is ran through combinations for removing obviousness
        return this.combinations();
    }

    /**
     * 
     * @returns 
     */
    validate() {
        let validation = new validate(this.board, this.boardSize);
        return validation.runTests();
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

    /**
     * 
     * @param {*} length 
     * @param {*} starting 
     * @returns 
     */
    randomArray(length, starting = 1) {
        // returns an array with random values
        let sequence = Array.from({
            length: length
        }, (value, idx) => idx + starting)
        let tempArray;
        for (let i = 0; i < sequence.length; i++) {
            let randomNumber = this.random(length - 1);
            tempArray = sequence[i];
            sequence[i] = sequence[randomNumber];
            sequence[randomNumber] = tempArray;
        }
        return sequence;
    }

    /**
     * 
     * @param {*} sequence 
     * @param {*} position 
     * @returns 
     */
    shiftSequence(sequence, position) {
        let newSequence = [...sequence];
        let part1 = newSequence.splice(0, pos);
        newSequence.push(...part1);
        return newSequence;
    }

    /**
     * 
     * @returns 
     */
    combinations() {
        let combination = new Combinations(this.board, this.boardSize, this.boxSize);
        combination.runCombinations();
        return this.validate();
    }
}