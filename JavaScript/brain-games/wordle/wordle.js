// Word list for the game (random selection from various themes)
const wordList = [
  "APPLE", "BRAVE", "CRISP", "PLANE", "SHINE", "GHOST", "TRAIL", "DRIVE", "GRAPE", "WORLD", "BLACK",
  "LIGHT", "RIVER", "STONE", "FLAME", "HEART", "OCEAN", "STORM", "MOUNT", "WINGS", "BLOOM", "SPARK",
  "CHESS", "MIRTH", "CROWN", "GLIDE", "QUIRK", "BLEND", "FROST", "LATCH", "VIVID", "BREEZE", "SHELL",
  "ZEBRA", "TIGER", "LATCH", "MARSH", "DUSKY", "HUMOR", "PLUME", "NORTH", "SOUTH", "EAST", "WEST",
  "SUMMER", "WINTER", "AUTUMN", "SPRING", "HAPPY", "GRUMPY", "DREAM", "NIGHT", "FABLE", "STARRY",
  "CANDLE", "VIOLET", "MAGNET", "SILVER", "PLANET", "GALAXY", "NEBULA", "SATURN", "ORBIT", "SOLAR",
  "DANCER", "LANTERN", "CASTLE", "MEADOW", "ECHO", "MIRROR", "WHALE", "CYPRESS", "CLOUD", "RUSTLE",
  "PINE", "JUMPY", "WONDER", "BUBBLE", "SHADOW", "CANYON", "VELVET", "STARRY", "MOSSY", "RIDDLE"
];

// Selects a random word from the list for the game session
const word = wordList[Math.floor(Math.random() * wordList.length)];

// Game variables
let currentRow = 0; // Tracks number of guesses (max 6)
let currentCol = 0; // Tracks letter position within a guess
let board = []; // Stores the board state

// Initializes the game once the page loads
document.addEventListener("DOMContentLoaded", () => {
  initBoard();
  initKeyboard();
  document.addEventListener("keydown", handleKeyPress);
});

// Creates the game board with empty tiles
function initBoard() {
  const boardEl = document.getElementById("board");
  board = []; // Clear board state

  for (let r = 0; r < 6; r++) {
    const row = [];
    for (let c = 0; c < 5; c++) {
      const tile = document.createElement("div");
      tile.classList.add("tile");
      tile.setAttribute("id", `tile-${r}-${c}`);
      boardEl.appendChild(tile);
      row.push(""); // Initialize row with empty values
    }
    board.push(row);
  }
}

// Generates the on-screen keyboard dynamically
function initKeyboard() {
  const keys = [
    ["Q","W","E","R","T","Y","U","I","O","P"],
    ["A","S","D","F","G","H","J","K","L"],
    ["Enter","Z","X","C","V","B","N","M","Back"]
  ];
  const keyboard = document.getElementById("keyboard");

  keyboard.innerHTML = ""; // Clear existing keyboard

  keys.forEach(row => {
    const rowEl = document.createElement("div");
    rowEl.classList.add("keyboard-row");
    row.forEach(key => {
      const keyEl = document.createElement("button");
      keyEl.textContent = key;
      keyEl.classList.add("key");
      keyEl.addEventListener("click", () => handleKey(key));
      rowEl.appendChild(keyEl);
    });
    keyboard.appendChild(rowEl);
  });
}

// Handles key presses (both physical and on-screen)
function handleKeyPress(e) {
  if (e.key === "Backspace") return handleKey("Back");
  if (e.key === "Enter") return handleKey("Enter");
  if (/^[a-zA-Z]$/.test(e.key)) return handleKey(e.key.toUpperCase()); // Allow only letters
}

// Handles input logic (typing, deleting, and submitting guesses)
function handleKey(key) {
  if (currentRow >= 6) return; // Stop input if max guesses reached
  
  if (key === "Back") {
    if (currentCol > 0) {
      currentCol--;
      board[currentRow][currentCol] = "";
      updateTile(currentRow, currentCol, "");
    }
  } else if (key === "Enter") {
    if (currentCol === 5) {
      checkWord(); // Validate word after full entry
    }
  } else if (/^[A-Z]$/.test(key)) {
    if (currentCol < 5) {
      board[currentRow][currentCol] = key;
      updateTile(currentRow, currentCol, key);
      currentCol++;
    }
  }
}

// Updates a tile with the entered letter
function updateTile(r, c, letter) {
  const tile = document.getElementById(`tile-${r}-${c}`);
  tile.textContent = letter;
  tile.classList.add("filled");
}

// Checks guessed word against the correct word
function checkWord() {
  const guess = board[currentRow].join("");
  const feedback = Array(5).fill("absent"); // Default feedback
  const targetLetters = word.split("");

  // First pass: Mark correct letters
  for (let i = 0; i < 5; i++) {
    if (board[currentRow][i] === word[i]) {
      feedback[i] = "correct";
      targetLetters[i] = null;
    }
  }

  // Second pass: Mark letters that are present but in the wrong position
  for (let i = 0; i < 5; i++) {
    if (feedback[i] !== "correct") {
      const index = targetLetters.indexOf(board[currentRow][i]);
      if (index !== -1) {
        feedback[i] = "present";
        targetLetters[index] = null;
      }
    }
  }

  // Apply feedback to tiles and update keyboard
  for (let i = 0; i < 5; i++) {
    const tile = document.getElementById(`tile-${currentRow}-${i}`);
    tile.classList.add(feedback[i]); // Apply styles based on correctness
    tile.style.animation = `flip 0.4s ease ${i * 0.15}s both`;
  }

  updateKeyboard(); // Update keyboard based on feedback

  // Check if player won or needs to continue
  if (guess === word) {
    setTimeout(() => alert("🎉 You got it!"), 1200);
  } else {
    currentRow++;
    currentCol = 0;
    if (currentRow >= 6) {
      setTimeout(() => alert(`Game over! The word was ${word}`), 500);
    }
  }
}

// Updates keyboard styling based on guessed letters
function updateKeyboard() {
  const keyButtons = document.querySelectorAll(".key");
  keyButtons.forEach(btn => {
    btn.classList.remove("correct", "present", "absent"); // Reset previous styles
  });

  board[currentRow].forEach((letter, i) => {
    const btn = [...keyButtons].find(b => b.textContent === letter);
    if (btn) btn.classList.add(feedback[i]);
  });
}