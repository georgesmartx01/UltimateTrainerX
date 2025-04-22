'use strict';

/**
 * 
 */
class WordSearch {
    /**
     * 
     * @param {Element} element 
     * @param {Array} settings 
     */
    constructor(element, settings) {
        this.wrapElement = element;
        this.wrapElement.classList.add('game-area'); // Add `game-area` id to the wrap element
        this.solved = 0; // Words solved

        // Default settings
        const defaultSettings = {
            directions: ['W', 'N', 'WN', 'EN'],
            gridSize: 10,
            words: ['one', 'two', 'three', 'four', 'five'],
            wordsList: [],
            debug: false
        };

        this.settings = { ...defaultSettings, ...settings }; // Merge default and user-provided settings

        // Check the words' length and initialise the application if valid
        if (this.parseWords(this.settings.gridSize)) {
            let isWorked = false;

            while (!isWorked) {
                this.initialiseGame(); // initialise the game
                isWorked = this.addWords();
            }

            if (!this.settings.debug) {
                this.fillUpBlankSpaces();
            }

            // Render the matrix into the wrap element
            this.drawMatrix();
        }
    }

    /**
     * Parse words
     */
    parseWords(maxSize) {
        let itWorked = true;

        this.settings.words.forEach((word, index) => {
            // Trim and convert words to uppercase
            this.settings.wordsList[index] = word.trim();
            this.settings.words[index] = removeDiacritics(this.settings.wordsList[index].toUpperCase());

            // Check if the word length exceeds the maximum size
            const upperCaseWord = this.settings.words[index];
            if (upperCaseWord.length > maxSize) {
                alert(`The length of the word "${upperCaseWord} exceeds the gridSize."`);
                console.error(`The length of the word "${upperCaseWord}" exceeds the gridSize`);
                itWorked = false;
            }
        });
        return itWorked;
    }

    /**
     * Put the words into the matrix
     */
    addWords() {
        let keepGoing = true;
        let counter = 0;
        let allWordsAdded = true;

        while (keepGoing) {
            // Get a random direction
            const randomIndex = Math.floor(Math.random() * this.settings.directions.length);
            const direction = this.settings.directions[randomIndex];
            const result = this.addWord(this.settings.words[counter], direction);

            if (!result) {
                keepGoing = false;
                allWordsAdded = false;
            }

            counter++;
            if (counter >= this.settings.words.length) {
                keepGoing = false;
            }
        }
        return allWordsAdded;
    }

    /**
     * 
     * @param {*} word 
     * @param {*} direction 
     */
    addWord(word, direction) {
        let wordAdded = true;
        const directions = {
            'W': [0, 1], // Horizontal (left to right)
            'N': [1, 0], // Vertical (top to bottom)
            'WN': [1, 1], // Diagonal (top-left to bottom-right)
            'EN': [1, -1] // Diagonal (top-right to bottom-left)
        };

        let row, column;
        
        // Helper function for generating random integers within a range
        const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

        // Determine starting row and column based on the direction
        switch (direction) {
            case 'W': // Horizontal (left to right)
                row = randomInteger(0, this.settings.gridSize - 1);
                column = randomInteger(0, this.settings.gridSize - word.length);
                break;
            
            case 'N': // Vertical (top to bottom)
                row = randomInteger(0, this.settings.gridSize - word.length);
                column = randomInteger(0, this.settings.gridSize - 1);
                break;

            case 'WN': // Diagonal (top-left to bottom-right)
                row = randomInteger(0, this.settings.gridSize - word.length);
                column = randomInteger(0, this.settings.gridSize - word.length);
                break;

            case 'EN': // Diagonal (top-right to bottom-left)
                row = randomInteger(0, this.settings.gridSize - word.length);
                column = randomInteger(word.length - 1, this.settings.gridSize - 1);
                break;
            
            default:
                const error = `UNKNOWN DIRECTION: ${direction}`;
                alert(error);
                console.error(error);
                return false; // Exit the function on an unknown direction
        }

        // Add the word to the matrix
        for (let index = 0; index < word.length; index++) {
            const newRow = row + index * directions[direction][0];
            const newColumn = column + index * directions[direction][1];

            // Check the current letter on the board
            const origin = this.matrix[newRow][newColumn].letter;

            if (origin === '.' || origin === word[index]) {
                this.matrix[newRow][newColumn].letter = word[index]; // Place the letter
            } else {
                wordAdded = false;
            }
        }

        return wordAdded;
    }

    /**
     * Initialise the game
     */
    initialiseGame() {
        /**
         * Letter matrix
         * 
         * @param {Array} matrix
         */
        this.matrix = [];

        /**
         * Select from
         * @type {Object | null}
         */
        this.selectFrom = null;

        /**
         * Selected items
         * @type {Array}
         */
        this.selected = [];

        // initialise the matrix
        this.initialiseMatrix(this.settings.gridSize);
    }

    /**
     * Fill default items into the matrix
     * @param {Number} size - The size of the grid
     */
    initialiseMatrix(size) {
        for (let row = 0; row < size; row++) {
            for (let column = 0; column < size; column++) {
                const item = {
                    letter: '.', // Default value
                    row: row,
                    column: column
                };

                if (!this.matrix[row]) {
                    this.matrix[row] = [];
                }

                this.matrix[row][column] = item;
            }
        }
    }

    /**
     * Draw the matrix
     */
    drawMatrix() {
        for (let row = 0; row < this.settings.gridSize; row++) {
            // Create a new row
            const divElement = document.createElement('div');
            divElement.classList.add('game-row');
            this.wrapElement.appendChild(divElement);

            for (let column = 0; column < this.settings.gridSize; column++) {
                const canvasElement = document.createElement('canvas');
                canvasElement.classList.add('game-column');
                canvasElement.setAttribute('width', 40);
                canvasElement.setAttribute('height', 40);

                // Fill text in the middle center
                const x = canvasElement.width /2;
                const y = canvasElement.height /2;

                const ctx = canvasElement.getContext('2d');
                ctx.font = '400 28px Calibri';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillStyle = '#333'; // Text color
                ctx.fillText(this.matrix[row][column].letter, x, y);

                // Add event listeners
                canvasElement.addEventListener('mousedown', () => this.onMousedown(this.matrix[row][column]));
                canvasElement.addEventListener('mouseover', () => this.onMouseover(this.matrix[row][column]));
                canvasElement.addEventListener('mouseup', () => this.onMouseup());
                
                divElement.appendChild(canvasElement);
            }
        }
    }

    /**
     * Fill up the remaining items
     */
    fillUpBlankSpaces() {
        const rangeLanguage = searchLanguage(this.settings.words[0][0]);

        for (let row = 0; row < this.settings.gridSize; row++) {
            for (column = 0; this.settings.gridSize; column++) {
                if (this.matrix[row][column].letter === '') {
                    // Generate a random letter in the specified range
                    const randomCharacterCode = Math.floor(Math.random() * (rangeLanguage[1] - rangeLanguage[0] + 1)) + rangeLanguage[0];
                    this.matrix[row][column].letter = String.fromCharCode(randomCharacterCode);
                }
            }
        }
    }

    /**
     * Returns matrix items
     * @param {*} rowFrom - 
     * @param {*} columnFrom -
     * @param {*} rowTo -
     * @param {*} columnTo -
     * @returns {Array}
     */
    getItems(rowFrom, columnFrom, rowTo, columnTo) {
        const items = [];
    
        // Validate if the selection aligns horizontally, vertically, or diagonally
        if (
            rowFrom === rowTo || 
            columnFrom === columnTo || 
            Math.abs(rowTo - rowFrom) === Math.abs(columnTo - columnFrom)
        ) {
            const shiftY = (rowFrom === rowTo) ? 0 : (rowTo > rowFrom) ? 1 : -1;
            const shiftX = (columnFrom === columnTo) ? 0 : (columnTo > columnFrom) ? 1 : -1;
            let row = rowFrom;
            let column = columnFrom;
    
            // Push the first item into the list
            items.push(this.getItem(row, column));
    
            // Traverse through the grid to collect all items
            do {
                row += shiftY;
                column += shiftX;
                items.push(this.getItem(row, column));
            } while (row !== rowTo || column !== columnTo);
        }
    
        return items;
    }

    /**
     * Return matrix item
     * @param {number} row 
     * @param {number} column 
     */
    getItem(row, column) {
        return this.matrix[row]?.[column];
    }

    /**
     * Clear the existing highlights
     */
    clearHighlight() {
        const selectedElements = document.querySelectorAll('.selected');
        selectedElements.forEach(element => element.classList.remove('selected'));
    }

    /**
     * Lookup if the wordlist contains the selected
     * @param {Array} selected
     */
    lookup(selected) {
        let words = [''];

        // Construct the word from selected letters
        selected.forEach(item => {
            words[0] += item.letter;
        });

        // Add the reversed version of the word
        words.push([...words[0]].reverse().join(''));

        // Check if the word is present in the word list
        if (this.settings.words.includes(words[0]) || this.settings.words.includes(words[1])) {
            // Highlight the selected letters
            selected.forEach(item => {
                const row = item.row + 1;
                const column = item.column + 1;
                const element = document.querySelector(`.game-area .game-row:nth-child(${row}) .game-column:nth-child(${column})`);
                element.classList.add('found');
            });

            const wordList = document.querySelector('.words');
            const wordListItems = wordList.getElementsByTagName('li');

            Array.from(wordListItems).forEach(li => {
                const wordText = removeDiacritics(li.innerHTML.toUpperCase());
                if (words[0] === wordText && li.innerHTML !== `<del>${li.innerHTML}</del>`) {
                    li.innerHTML = `<del>${li.innerHTML}</del>`;
                    this.solved++; // increment solved words
                }
            });

            // Check if all words are found
            if (this.solved === this.settings.words.length) {
                this.gameOver();
            }
        }
    }

    /**
     * Game Over
     */
    gameOver() {
        const overlay = document.createElement('div'); // Create overlay
        overlay.id = 'game-over-outer';
        overlay.className = 'game-over-outer';
        this.wrapElement.parentNode.appendChild(overlay);

        // Add overlay content
        overlay.innerHTML = `
            <div class="game-over-inner" id="game-over-inner">
                <div class="game-over" id="game-over">
                    <h2>Congratulations</h2>
                    <p>You found all of the words!</p>
                </div>
            </div>
        `;
    }

    /**
     * Mouse event - Mouse down
     * @param {Object} item
     */
    onMousedown(item) {
        this.selectFrom = item; // Set the starting point of selection
    }

    /**
     * Mouse event - Mouse move
     * @param {Object} item
     */
    onMouseover(item) {
        if (this.selectFrom) {
            // Get selected items between start and current position
            this.selected = this.getItems(this.selectFrom.row, this.selectFrom.column, item.row, item.column);

            // Clear any existing highlights
            this.clearHighlight();

            // Highlighted the selected items
            this.selected.forEach(({ row, column }) => {
                const element = document.querySelector(`.game-area .game-row:nth-child(${row + 1}) .game-column:nth-child(${column + 1})`);
                element.classList.add('selected');
            });
        }
    }

    /*
     * Mouse event - Mouse up
     */
    onMouseup() {
        // Clear the selection and check if it matches a word
        this.selectFrom = null;
        this.clearHighlight();
        this.lookup(this.selected);
        this.selected = [];
    }
}

// Remove accent for latin/hebrew letters
const defaultDiacriticsRemovalMap = [
    { 
        base: "A",
        letters: /(&#65;|&#9398;|&#65313;|&#192;|&#193;|&#194;|&#7846;|&#7844;|&#7850;|&#7848;|&#195;|&#256;|&#258;|&#7856;|&#7854;|&#7860;|&#7858;|&#550;|&#480;|&#196;|&#478;|&#7842;|&#197;|&#506;|&#461;|&#512;|&#514;|&#7840;|&#7852;|&#7862;|&#7680;|&#260;|&#570;|&#11375;|[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F])/g 
    },

    {
        base: "AA",
        letters: /(&#42802;|[\uA732])/g
    },

    {
        base: "AE",
        letters: /(&#198;|&#508;|&#482;|[\u00C6\u01FC\u01E2])/g
    },

    {
        base: "AO",
        letters: /(&#42804;|[\uA734])/g
    },
    
    {
        base: "AU",
        letters: /(&#42806;|[\uA736])/g
    },

    {
        base: "AV",
        letters: /(&#42808;|&#42810;|[\uA738\uA73A])/g
    },
    
    {
        base: "AY",
        letters: /(&#42812;|[\uA73C])/g
    },
    
    {
        base: "B",
        letters: /(&#66;|&#9399;|&#65314;|&#7682;|&#7684;|&#7686;|&#579;|&#386;|&#385;|[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181])/g
    },
    
    {
        base: "C",
        letters: /(&#67;|&#9400;|&#65315;|&#262;|&#264;|&#266;|&#268;|&#199;|&#7688;|&#391;|&#571;|&#42814;|[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E])/g
    },

    {
        base: "D",
        letters: /(&#68;|&#9401;|&#65316;|&#7690;|&#270;|&#7692;|&#7696;|&#7698;|&#7694;|&#272;|&#395;|&#394;|&#393;|&#42873;|&#208;|[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779\u00D0])/g
    },
    
    {
        base: "DZ",
        letters: /(&#497;|&#452;|[\u01F1\u01C4])/g
    },
    
    {
        base: "Dz",
        letters: /(&#498;|&#453;|[\u01F2\u01C5])/g
    },
    
    {
        base: "E",
        letters: /(&#69;|&#9402;|&#65317;|&#200;|&#201;|&#202;|&#7872;|&#7870;|&#7876;|&#7874;|&#7868;|&#274;|&#7700;|&#7702;|&#276;|&#278;|&#203;|&#7866;|&#282;|&#516;|&#518;|&#7864;|&#7878;|&#552;|&#7708;|&#280;|&#7704;|&#7706;|&#400;|&#398;|[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E])/g
    },
    
    {
        base: "F",
        letters: /(&#70;|&#9403;|&#65318;|&#7710;|&#401;|&#42875;|[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B])/g
    },

    {
        base: "G",
        letters: /(&#71;|&#9404;|&#65319;|&#500;|&#284;|&#7712;|&#286;|&#288;|&#486;|&#290;|&#484;|&#403;|&#42912;|&#42877;|&#42878;|[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E])/g
    },

    {
        base: "H",
        letters: /(&#72;|&#9405;|&#65320;|&#292;|&#7714;|&#7718;|&#542;|&#7716;|&#7720;|&#7722;|&#294;|&#11367;|&#11381;|&#42893;|[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D])/g
    },

    {
        base: "I",
        letters: /(&#73;|&#9406;|&#65321;|&#204;|&#205;|&#206;|&#296;|&#298;|&#300;|&#304;|&#207;|&#7726;|&#7880;|&#463;|&#520;|&#522;|&#7882;|&#302;|&#7724;|&#407;|[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197])/g
    },

    {
        base: "J",
        letters: /(&#74;|&#9407;|&#65322;|&#308;|&#584;|[\u004A\u24BF\uFF2A\u0134\u0248])/g
    },
    
    {
        base: "K",
        letters: /(&#75;|&#9408;|&#65323;|&#7728;|&#488;|&#7730;|&#310;|&#7732;|&#408;|&#11369;|&#42816;|&#42818;|&#42820;|&#42914;|[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2])/g
    },

    {
        base: "L",
        letters: /(&#76;|&#9409;|&#65324;|&#319;|&#313;|&#317;|&#7734;|&#7736;|&#315;|&#7740;|&#7738;|&#321;|&#573;|&#11362;|&#11360;|&#42824;|&#42822;|&#42880;|[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780])/g
    },
    
    {
        base: "LJ",
        letters: /(&#455;|[\u01C7])/g
    },

    {
        base: "Lj",
        letters: /(&#456;|[\u01C8])/g
    },
  
    {
        base: "M",
        letters: /(&#77;|&#9410;|&#65325;|&#7742;|&#7744;|&#7746;|&#11374;|&#412;|[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C])/g
    },
 
    {
        base: "N",
        letters: /(&#78;|&#9411;|&#65326;|&#504;|&#323;|&#209;|&#7748;|&#327;|&#7750;|&#325;|&#7754;|&#7752;|&#544;|&#413;|&#42896;|&#42916;|&#330;|[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4\u014A])/g
    },

    {
        base: "NJ",
        letters: /(&#458;|[\u01CA])/g
    },

    {
        base: "Nj",
        letters: /(&#459;|[\u01CB])/g
    },

    {
        base: "O",
        letters: /(&#79;|&#9412;|&#65327;|&#210;|&#211;|&#212;|&#7890;|&#7888;|&#7894;|&#7892;|&#213;|&#7756;|&#556;|&#7758;|&#332;|&#7760;|&#7762;|&#334;|&#558;|&#560;|&#214;|&#554;|&#7886;|&#336;|&#465;|&#524;|&#526;|&#416;|&#7900;|&#7898;|&#7904;|&#7902;|&#7906;|&#7884;|&#7896;|&#490;|&#492;|&#216;|&#510;|&#390;|&#415;|&#42826;|&#42828;|[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C])/g
    },

    
    {
        base: "OE",
        letters: /(&#338;|[\u0152])/g
    },

    
    {
        base: "OI",
        letters: /(&#418;|[\u01A2])/g
    },

    
    {
        base: "OO",
        letters: /(&#42830;|[\uA74E])/g
    },

    
    {
        base: "OU",
        letters: /(&#546;|[\u0222])/g
    },

    
    {
        base: "P",
        letters: /(&#80;|&#9413;|&#65328;|&#7764;|&#7766;|&#420;|&#11363;|&#42832;|&#42834;|&#42836;|[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754])/g
    },

    
    {
        base: "Q",
        letters: /(&#81;|&#9414;|&#65329;|&#42838;|&#42840;|&#586;|[\u0051\u24C6\uFF31\uA756\uA758\u024A])/g
    },

    
    {
        base: "R",
        letters: /(&#82;|&#9415;|&#65330;|&#340;|&#7768;|&#344;|&#528;|&#530;|&#7770;|&#7772;|&#342;|&#7774;|&#588;|&#11364;|&#42842;|&#42918;|&#42882;|[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782])/g
    },

    {
        base: "S",
        letters: /(&#83;|&#9416;|&#65331;|&#7838;|&#346;|&#7780;|&#348;|&#7776;|&#352;|&#7782;|&#7778;|&#7784;|&#536;|&#350;|&#11390;|&#42920;|&#42884;|[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784])/g
    },
    
    {
        base: "T",
        letters: /(&#84;|&#9417;|&#65332;|&#7786;|&#356;|&#7788;|&#538;|&#354;|&#7792;|&#7790;|&#358;|&#428;|&#430;|&#574;|&#42886;|[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786])/g
    },
    
    {
        base: "TH",
        letters: /(&#222;|[\u00DE])/g
    },

    {
        base: "TZ",
        letters: /(&#42792;|[\uA728])/g
    },
    
    {
        base: "U",
        letters: /(&#85;|&#9418;|&#65333;|&#217;|&#218;|&#219;|&#360;|&#7800;|&#362;|&#7802;|&#364;|&#220;|&#475;|&#471;|&#469;|&#473;|&#7910;|&#366;|&#368;|&#467;|&#532;|&#534;|&#431;|&#7914;|&#7912;|&#7918;|&#7916;|&#7920;|&#7908;|&#7794;|&#370;|&#7798;|&#7796;|&#580;|[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244])/g
    },

    {
        base: "V",
        letters: /(&#86;|&#9419;|&#65334;|&#7804;|&#7806;|&#434;|&#42846;|&#581;|[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245])/g
    },

    {
        base: "VY",
        letters: /(&#42848;|[\uA760])/g
    },

    {
        base: "W",
        letters: /(&#87;|&#9420;|&#65335;|&#7808;|&#7810;|&#372;|&#7814;|&#7812;|&#7816;|&#11378;|[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72])/g
    },

    {
        base: "X",
        letters: /(&#88;|&#9421;|&#65336;|&#7818;|&#7820;|[\u0058\u24CD\uFF38\u1E8A\u1E8C])/g
    },

    {
        base: "Y",
        letters: /(&#89;|&#9422;|&#65337;|&#7922;|&#221;|&#374;|&#7928;|&#562;|&#7822;|&#376;|&#7926;|&#7924;|&#435;|&#590;|&#7934;|[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE])/g
    },

    {
        base: "Z",
        letters: /(&#90;|&#9423;|&#65338;|&#377;|&#7824;|&#379;|&#381;|&#7826;|&#7828;|&#437;|&#548;|&#11391;|&#11371;|&#42850;|[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762])/g
    },

    {
        base: "", // delete Niqqud in Hebrew
        letters: /[\u0591-\u05C7]/g
    }
];

/**
 * Remove diacritics from a string
 * @param {string} str - Input string
 * @returns {string} - String without diacritics
 */
function removeDiacritics(str) {
    for (const map of defaultDiacriticsRemovalMap) {
        str = str.replace(map.letters, map.base);
    }
    return str;
}

/**
 * Determine what letters are injected on the grid
 * @param {string} firstLetter - A single character
 * @returns {Array<number>} - Start and end Unicode values for the language range
 * 
 */
function searchLanguage(firstLetter) {
    if (typeof firstLetter !== 'string' || firstLetter.length === 0) {
        throw new Error('Invalid input: first letter must be a non-empty string!');
    }

    const languageRanges = {
        Latin: [65, 90],
        Hebrew: [1488, 1514],
        Greek: [913, 929],
        Cyrillic: [1040, 1071],
        Arabic: [1569, 1594],
        Chinese: [19969, 40891],
        Hiragana: [12388, 12418]
    }

    const codeFirstLetter = firstLetter.charCodeAt();

    for (const [_, [start, end]] of Object.entries(languageRanges)) {
        if (codeFirstLetter >= start && codeFirstLetter <= end) return [start, end]; 
    }
    console.warn(`Letter not detected. Defaulting to Latin. Received: ${firstLetter} (Unicode: ${codeFirstLetter})`);
    return languageRanges.Latin; // default fallback to Latin
}