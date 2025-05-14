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
    constructor(size) {
      this.size = size;
      this.board = [];
      this.flippedCards = [];
      this.matchedCards = 0;
      this.totalPairs = (size * size) / 2;
      this.moves = 0;
      this.timeElapsed = 0;
      this.timerInterval = null;
  
      this.movesEl = document.querySelector(".moves");
      this.timerEl = document.querySelector(".timer");
  
      this.createBoard();
    }
  
    startTimer() {
      this.stopTimer();
      this.timerInterval = setInterval(() => {
        this.timeElapsed++;
        this.timerEl.textContent = `Time: ${this.timeElapsed} sec`;
      }, 1000);
    }
  
    stopTimer() {
      clearInterval(this.timerInterval);
    }
  
    createBoard() {
      let selectedEmojis = emojis.slice(0, this.totalPairs);
      this.board = [...selectedEmojis, ...selectedEmojis].sort(() => Math.random() - 0.5);
    }
  
    revealAllCards() {
      this.flippedCards = [...Array(this.board.length).keys()];
      this.render();
      setTimeout(() => {
        this.flippedCards = [];
        this.render();
        this.startTimer();
      }, 1000);
    }
  
    render() {
      const gameBoard = document.getElementById("game-board");
      gameBoard.innerHTML = "";
      gameBoard.style.gridTemplateColumns = `repeat(${this.size}, 1fr)`;
      gameBoard.style.gridTemplateRows = `repeat(${this.size}, 1fr)`;
  
      this.board.forEach((emoji, index) => {
        const card = document.createElement("div");
        card.classList.add("card");
        if (this.flippedCards.includes(index)) {
          card.classList.add("flipped");
          card.textContent = emoji;
        } else {
          card.textContent = "?";
        }
  
        if (emoji === null) {
          card.classList.add("hidden");
        } else {
          card.addEventListener("click", () => this.flipCard(index));
        }
  
        gameBoard.appendChild(card);
      });
    }
  
    flipCard(index) {
      if (
        this.flippedCards.length === 2 ||
        this.board[index] === null ||
        this.flippedCards.includes(index)
      )
        return;
  
      this.flippedCards.push(index);
      this.render();
  
      if (this.flippedCards.length === 2) {
        this.moves++;
        this.movesEl.textContent = `${this.moves} moves`;
        setTimeout(() => this.checkMatch(), 700);
      }
    }
  
    checkMatch() {
      const [first, second] = this.flippedCards;
      if (this.board[first] === this.board[second]) {
        this.board[first] = null;
        this.board[second] = null;
        this.matchedCards++;
        if (this.matchedCards === this.totalPairs) {
          this.stopTimer();
          setTimeout(() => this.showPopup(), 500);
        }
      }
      this.flippedCards = [];
      this.render();
    }
  
    showPopup() {
      document.getElementById("popup").classList.remove("hidden");
    }
  }
  
  let currentGame = null;
  
  function initGame() {
    const size = parseInt(document.getElementById("grid-size").value);
    currentGame = new MemoryMatchGame(size);
    currentGame.revealAllCards();
    document.getElementById("popup").classList.add("hidden");
    document.querySelector(".moves").textContent = "0 moves";
    document.querySelector(".timer").textContent = "Time: 0 sec";
  }
  
  // Event listeners
  
  document.getElementById("start-game").addEventListener("click", initGame);
  document.getElementById("close-popup").addEventListener("click", () => {
    document.getElementById("popup").classList.add("hidden");
  });
  