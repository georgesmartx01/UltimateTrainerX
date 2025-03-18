/**
 * 
 */

class View {
    createBoardHTML(size) {
        this.changeGridCSS(size);

        // board
        let boardElement = document.querySelector('#board');
        let html = '';

        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                let id = String(i) + String(j);

                let setSize = parseInt(Math.sqrt(size));
                let setRow = (i + 1) % (setSize) == 0 ? "setRow" : "";
                let setColumn = (i + 1) % (setSize) == 0 ? "setColumn" : "";
                
                let item = `<div id='${id}' data-row='${i}' class="grid__item flex-col ${set__row} ${set__col}">${j+1}</div>`;
                html += item;
            }
        }

        boardElement.innerHTML = html;

        // keypad
        let keypad = document.querySelector('#keypad');
        html = '';

        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                let element = document.getElementById(`${i}${j}`);

                element.textContent = board[i][j] > 0  ? board[i][j] : " ";
                let given = board[i][j] > 0 ? "given" : "emptyItem";

                element.classList.add(given.replace(" ", ''));
            }
        }
    }

    /**
     * 
     * @param {*} size 
     */
    changeGridCSS(size) {
        let temp = "auto ".repeat(size);
        let boardElement = document.querySelector('#board');
        boardElement.style.gridTemplateColumns = temp;
        boardElement.style.gridTemplateRows = temp;
        boardElement.style.fontSize = size == 4 ? "2.25rem" : "1rem";
    }
}