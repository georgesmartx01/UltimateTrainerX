/**
 * Array containing emojis for the game.
 * These emojis are used for creating the matching pairs in the grid.
 * Emojis are grouped into the following categories:
 * 1. Smileys (1-20)
 * 2. Gestures & Body Parts (21-30)
 * 3. Clothing & Accessories (31-60)
 * 4. Animals & Nature (61-256)
 * 5. Food & Drink (257-374)
 * 6. Activity & Sports (375-492)
 * 7. Travel & Places (493-620)
 * 8. Objects (621-765)
 * 9. Flags (765-771)
 */
const emojis = [
    '😃', '😍', '😇', '😜', '🤪', '🥰', '😎', '🤭', '😲', '🥱', '🥳', '🤩', '👋', '🧐', '😱', '😨', '🤑', '😴', '🤠', '🤐',
    '👋', '💋', '👀', '🙏', '👁', '👈', '👍', '✊', '👏', '🤲', '👶', '👧', '🧒', '👦', '👩', '🧑', '👨', '👩‍🦱', '👩‍🦰', '👨‍🦰',
    '👵', '👲', '🧓', '👴', '👳‍♂️', '🧕', '👮‍♀️', '👮', '👷‍♀️', '👷', '🧳', '🌂', '☂️', '🧵', '🧶', '👓', '🕶', '🥽', '🥼', '🦺',
    '👔', '👕', '👖', '🧣', '🧤', '🧥', '🧦', '👗', '👘', '🥻', '🩳', '👚', '👛', '👜', '👝', '🎒', '👞', '👟', '🥾', '🥿', 
    '👠', '👡', '🩰', '👒', '🎩', '🎓', '🧢', '⛑', '💄', '💼', '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯',
    '🦁', '🐮', '🐷', '🐽', '🐸', '🐵', '🙈', '🙉', '🙊', '🐒', '🐔', '🐧', '🐦', '🐤', '🐣', '🐥', '🦆', '🦅', '🦉', '🦇',
    '🐺', '🐗', '🐴', '🦄', '🐝', '🐛', '🦋', '🐌', '🐞', '🐜', '🦟', '🦗', '🕷', '🕸', '🦂', '🐢', '🐍', '🦎', '🦖', '🦕',
    '🐙', '🦑', '🦐', '🦞', '🦀', '🐡', '🐠', '🐟', '🐬', '🐳', '🐋', '🦈', '🐊', '🐅', '🐆', '🦓', '🦍', '🦧', '🐘', '🦛',
    '🦏', '🐪', '🐫', '🦒', '🦘', '🐃', '🐂', '🐄', '🐎', '🐖', '🐏', '🐑', '🦙', '🐐', '🦌', '🐕', '🐩', '🦮', '🐕‍🦺', '🐈', 
    '🐓', '🦃', '🦚', '🦜', '🦢', '🦩', '🕊', '🐇', '🦝', '🦨', '🦦', '🦥', '🦥', '🐁', '🐀', '🐿', '🦔', '🐉', '🐲', '🌵',
    '🎄', '🌲', '🌳', '🌴', '🌱', '🌿', '☘️', '🍀', '🎍', '🎋', '🍃', '🍂', '🍁', '🍄', '🐚', '🌾', '💐', '🌷', '🌹', '🥀',
    '🌺', '🌸', '🌼', '🌻', '🌞', '🌝', '🌛', '🌜', '🌚', '🌕', '🌖', '🌗', '🌘', '🌑', '🌒', '🌓', '🌔', '🌙', '🌎', '🌍',
    '🌏', '🪐', '💫', '⭐️', '🌟', '✨', '⚡️', '☄️', '💥', '🔥', '🌪', '🌈', '☀️', '🌤', '🌥', '☁️', '🌦', '⛈', '🌩', '🌨', 
    '❄️', '☃️', '⛄️', '🌬', '💨', '💧', '💦', '☔️', '☂️', '🌊','🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈', 
    '🍒', '🍑', '🥭', '🍍', '🥥', '🥝', '🍅', '🍆', '🥑', '🥦', '🥬', '🥒', '🌶', '🌽', '🥕', '🧄', '🧅', '🥔', '🍠', '🥐', 
    '🥯', '🍞', '🥖', '🥨', '🧀', '🥚', '🍳', '🧈', '🥞', '🧇', '🥓', '🥩', '🍗', '🍖', '🦴', '🌭', '🍔', '🍟', '🍕', '🥪', 
    '🥙', '🧆', '🌮', '🌯', '🥗', '🥘', '🥫', '🍝', '🍜', '🍲', '🍛', '🍣', '🍱', '🥟', '🦪', '🍤', '🍙', '🍚', '🍘', '🍥', 
    '🥠', '🥮', '🍢', '🍡', '🍧', '🍨', '🍦', '🥧', '🧁', '🍰', '🎂', '🍮', '🍭', '🍬', '🍫', '🍿', '🍩', '🍪', '🌰', '🥜', 
    '🍯', '🥛', '🍼', '☕️', '🍵', '🧃', '🥤', '🍶', '🍺', '🍻', '🍷', '🥃', '🍸', '🍹', '🧉', '🍾', '🧊', '🥄', '🍴', '🥣', 
    '🥡', '🥢', '🧂', '⚽️', '🏀', '🏈', '⚾️', '🥎', '🎾', '🏐', '🏉', '🥏', '🎱', '🪀', '🏓', '🏸', '🏒', '🏑', '🥍', '🏏', 
    '🥅', '⛳️', '🪁', '🏹', '🎣', '🤿', '🥊', '🥋', '🎽', '🛹', '🛷', '⛸', '🥌', '🎿', '⛷', '🏂', '🪂', '🏋️‍♀️', '🏋️', '🏋️‍♂️', '🤼‍♀️', 
    '🤼', '🤸‍♀️', '🤸‍♂️', '⛹️‍♀️', '⛹️', '🤺', '🤾‍♀️', '🤾', '🏌️‍♀️', '🏌️', '🏇', '🧘‍♀️', '🧘‍♂️', '🏄‍♀️', '🏄', '🏊‍♀️', '🚣‍♀️', '🚣', '🧗‍♀️', '🧗', '🚵‍♀️', '🚵',
    '🚴‍♀️', '🚴', '🏆', '🥇', '🥈', '🥉', '🏅', '🎖', '🏵', '🎗', '🎫', '🎟', '🎪', '🤹', '🎭', '🩰', '🎨', '🎬', '🎤', '🎧',
    '🎼', '🎹', '🥁', '🎷', '🎺', '🎸', '🪕', '🎻', '🎲', '♟', '🎯', '🎳', '🎮', '🎰', '🧩', '🚗', '🚕', '🚙', '🚌', '🚎', '🏎', 
    '🚓', '🚑', '🚒', '🚐', '🚚', '🚛', '🚜', '🦯', '🦽', '🦼', '🛴', '🚲', '🛵', '🏍', '🛺', '🚨', '🚔', '🚍', '🚘', '🚖', 
    '🚡', '🚠', '🚟', '🚃', '🚋', '🚞', '🚝', '🚄', '🚅', '🚈', '🚂', '🚆', '🚇', '🚊', '✈️', '🛫', '🛬', '🛩', '💺', '🛰', 
    '🚀', '🛸', '🚁', '🛶', '⛵️', '🚤', '🛥', '🛳', '🛳', '⛴', '🚢', '⚓️', '⛽️', '🚧', '🚦', '🚥', '🚏', '🗺', '🗿', '🗽', '🗼', 
    '🏰', '🏯', '🏟', '🎡', '🎢', '🎠', '⛲️', '⛱', '🏖', '🏝', '🏜', '🌋', '⛰', '🗻', '🏕', '⛺️', '🏠', '🏡', '🏘', '🏚', '🏗', 
    '🏭', '🏢', '🏬', '🏣', '🏤', '🏥', '🏦', '🏨', '🏪', '🏫', '🏩', '💒', '🏛', '⛪️', '⛪️', '🕌', '🕍', '🛕', '🕋', '⛩', '🛤', '🛣', 
    '🗾', '🎑', '🏞', '🌅', '🌄', '🌠', '🎇', '🎆', '🌇', '🌆', '🏙', '🌃', '🌌', '🌉', '🌁', 
    '⌚️', '📱', '📲', '💻', '⌨️', '🖥', '🖨', '🖱', '🖲', '🕹', '🗜', '💽', '💾', '💿', '📀', '📼', '📷', '📹', '🎥', '📽',
    '🎞', '🎞', '📞', '☎️', '📟', '📠', '📺', '📻', '🎙', '🎚', '🎛', '🧭', '⏱', '⏲', '⏰', '🕰', '⌛️', '⏳', '📡', '🔋',
    '🔌', '💡', '🔦', '🕯', '🪔', '🧯', '🛢', '🛍️', '💸', '💵', '💴', '💶', '💷', '💰', '💳', '💎', '⚖️', '🧰', '🔧', '🔨',
    '⚒', '🛠', '⛏', '🔩', '⚙️', '🧱', '⛓️‍💥', '🧲', '🔫', '💣', '🧨', '🪓', '🔪', '🗡', '⚔️', '🛡', '🚬', '⚰️', '⚱️', '🏺',
    '🔮', '📿', '🧿', '💈', '⚗️', '🔭', '🔬', '🕳', '🩹', '🩺', '💊', '💉', '🩸', '🧬', '🦠', '🧫', '🧪', '🌡', '🧹', '🧺',
    '🧻', '🚽', '🚰', '🚿', '🛁', '🛀', '🧼', '🪒', '🧽', '🧴', '🛎', '🔑', '🗝', '🚪', '🪑', '🛋', '🛏', '🛌', '🧸', '🖼',
    '🛒', '🎁', '🎈', '🎏', '🎀', '🎊', '🎉', '🎎', '🏮', '🎐', '🧧', '✉️', '📩', '📨', '📧', '💌', '📥', '📤', '📦', '🏷',
    '📪', '📫', '📬', '📭', '📮', '📯', '📜', '📃', '📄', '📑', '🧾', '📊', '📈', '📉', '🗒', '🗓', '📆', '📅', '🗑', '📇',
    '🏳️', '🏴', '🏁', '🏁', '🚩', '🏴‍☠️',
];

/**
 * Defines the core logic behaviour of the memory match game.
 */
class MemoryMatchGame {
    /**
     * Initialise the game
     * @param {number} size - The size of the game grid (e.g., 4 for 4x4 grid).
     */
    constructor(size) {
        /**
         * The size of the grid (e.g., 4 for 4x4 grid).
         */
        this.size = size;

        /**
         * The game board, represented as an array of emojis
         */
        this.board = [];

        /**
         * Keeps track of the currently flipped cards (indices).
         */
        this.flippedCards = [];
        
        /**
         * Tracks the number of matched pairs.
         */
        this.matchedCards = 0;
        
        /**
         * Calculates the total number of pairs in the grid.
         */
        this.totalPairs = (size * size) /2;
        
        /**
         * Keeps track of the number of moves the player has made
         */
        this.moves = 0;

        /**
         * Keeps track of the score
         */
        this.score = 0;

        /**
         * Updates the time elapsed during gameplay
         */
        this.timeElapsed = 0;

        this.timerInterval = null;

        this.createBoard();
    }

    startTimer() {
        this.timerInterval = setInterval(() => {
            this.timeElapsed++;
            document.querySelector('.timer').textContent = 
        });
    }

    stopTimer() {
        clearInterval(this.timerInterval);
    }

    /**
     * Creates the game board by selecting and shuffling emojis.
     */
    createBoard() {
        /**
         * Select the required number of unique emojis to create pairs.
         */
        let selectedEmojis = emojis.slice(0, this.totalPairs);
        
        // Duplicate the emojis to form pairs and shuffle them randomly.
        this.board = [...selectedEmojis, ...selectedEmojis].sort(() => Math.random() - 0.5);
    }

    /**
     * Reveals all cards briefly to the player for memorisation.
     */
    revealAllCards() {
        // Temporarily flip all cards.
        this.flippedCards = [...Array(this.board.length).keys()];
        this.render();
        
        // Hide all cards after 1 second.
        setTimeout(() => {
            this.flippedCards = [];
            this.render();
        }, 1000);
    }

    /**
     * Renders the game board on the webpage.
     */
    render() {
        const gameBoard = document.getElementById('game-board');
        gameBoard.innerHTML = '';
        gameBoard.style.gridTemplateColumns = `repeat(${this.size}, 1fr)`;
        gameBoard.style.gridTemplateRows = `repeat(${this.size}, 1fr)`;

        this.board.forEach((emoji, index) => {
            const card = document.createElement('div');
            card.classList.add('card');
            
            if (this.flippedCards.includes(index)) {
                card.classList.add('flipped');
            }

            if (emoji === null) {
                card.classList.add('hidden');
            } else {
                card.textContent = this.flippedCards.includes(index) ? emoji : '?';
            }

            card.addEventListener('click', () => this.flipCard(index));
            gameBoard.appendChild(card);
        });
    }

    /**
     * Handles the logic for flipping a card.
     * @param {number} index - The index of the card being flipped.
     */
    flipCard(index) {
        // Prevent flipping more than two cards or invalid cards.
        if (this.flippedCards.length === 2 || this.board[index] === null || this.flippedCards.includes(index)) return;
        
        // Flip the selected card and re-render the board.
        this.flippedCards.push(index);
        this.render();

        // Check for a match if two cards are flipped.
        if (this.flippedCards.length === 2) {
            setTimeout(() => this.checkMatch(), 1000);
        } 
    }

    /**
     * Checks if the flipped cards are a match.
     */
    checkMatch() {
        // Get the indices of the flipped cards.
        const [first, second] = this.flippedCards;

        // Check if the two cards match.
        if (this.board[first] === this.board[second]) {
            // Remove matched cards from the board.
            this.board[first] = null;
            this.board[second] = null;

            // Increment the matched pairs count.
            this.matchedCards++;

            // Temporarily hide matched cards visually.
            setTimeout(() => {
                document.querySelectorAll('.card.flipped').forEach(card => {
                    card.classList.add('hidden');
                });
            }, 500);

            // Show a popup if all pairs are matched.
            if (this.matchedCards === this.totalPairs) {
                setTimeout(() => this.showPopup(), 500);
            }
        }

        // Reset flipped cards and re-render the board.
        this.flippedCards = [];
        this.render();
        
    }

    /**
     * Displays a popup when the game is completed.
     */
    showPopup() {
        document.getElementById('popup').classList.remove('hidden');
    }
}

// Add event listener to start the game when the button is clicked.
document.getElementById('start-game').addEventListener('click', () => {
    const size = parseInt(document.getElementById('grid-size').value);
    const game = new MemoryMatchGame(size);
    game.revealAllCards();
});

// Add event listener to close the popup when the button is clicked.
document.getElementById('close-popup').addEventListener('click', () => {
    const popup = document.getElementById('popup');
    popup.classList.add('hidden');
});