/**
* Words are separated by category and difficulty
* Difficulties include: easy, medium and hard.
* Categories include: animals, fruits, etc.
*/
const words = {
    animals: {
        easy: [
            { word: "cat", hint: "A small domesticated feline" },
            { word: "dog", hint: "A loyal barking pet" },
            { word: "ant", hint: "Tiny insect often found at picnics" },
            { word: "cow", hint: "Gives us milk" },
            { word: "bat", hint: "Nocturnal flying mammal" },
            { word: "fox", hint: "Cunning woodland animal" },
            { word: "bee", hint: "Makes honey" },
            { word: "pig", hint: "Farm animal that oinks" },
            { word: "hen", hint: "Female chicken" },
            { word: "rat", hint: "Often found in cities" }
        ],
        medium: [
            { word: "zebra", hint: "Striped horse-like animal" },
            { word: "tiger", hint: "A big striped cat" },
            { word: "koala", hint: "Tree-dwelling marsupial" },
            { word: "panda", hint: "Eats bamboo, black and white" },
            { word: "eagle", hint: "Bird of prey with sharp vision" },
            { word: "camel", hint: "Desert animal with humps" },
            { word: "rabbit", hint: "Eats carrots, hops" },
            { word: "lizard", hint: "Scaly and cold-blooded" },
            { word: "snail", hint: "Slow with a shell" },
            { word: "monkey", hint: "Swings from trees" }
        ],
        hard: [
            { word: "elephant", hint: "Largest land animal" },
            { word: "giraffe", hint: "Tall animal with long neck" },
            { word: "hippopotamus", hint: "Large river-dwelling mammal" },
            { word: "rhinoceros", hint: "Has a horn on its nose" },
            { word: "chimpanzee", hint: "Closest relative to humans" },
            { word: "alligator", hint: "Lives in swamps, big jaws" },
            { word: "porcupine", hint: "Has sharp quills" },
            { word: "platypus", hint: "Lays eggs, has a bill" },
            { word: "orangutan", hint: "Red-haired great ape" },
            { word: "armadillo", hint: "Armored mammal" }
        ]
    },
    
    fruits: {
        easy: [
            { word: "apple", hint: "Keeps the doctor away" },
            { word: "pear", hint: "Sweet green fruit" },
            { word: "plum", hint: "Small purple fruit" },
            { word: "kiwi", hint: "Brown outside, green inside" },
            { word: "lime", hint: "Green citrus fruit" },
            { word: "fig", hint: "Often eaten dried" },
            { word: "date", hint: "Sweet desert fruit" },
            { word: "mango", hint: "Tropical and sweet" },
            { word: "grape", hint: "Small and juicy" },
            { word: "peach", hint: "Fuzzy skin, juicy inside" }
        ],
        medium: [
            { word: "orange", hint: "Citrus fruit with same colour name" },
            { word: "banana", hint: "Yellow and curved" },
            { word: "papaya", hint: "Tropical with black seeds" },
            { word: "apricot", hint: "Similar to peach but smaller" },
            { word: "guava", hint: "Tropical fruit with seeds" },
            { word: "nectarine", hint: "Smooth-skinned peach" },
            { word: "cherry", hint: "Red and often paired" },
            { word: "lychee", hint: "Asian fruit with white inside" },
            { word: "melon", hint: "Juicy summer fruit" },
            { word: "coconut", hint: "Hard shell, water inside" }
        ],
        hard: [
            { word: "pineapple", hint: "Spiky on outside, juicy inside" },
            { word: "pomegranate", hint: "Red seeds inside" },
            { word: "blueberry", hint: "Small and blue" },
            { word: "blackberry", hint: "Dark berry with many drupelets" },
            { word: "cranberry", hint: "Often made into sauce" },
            { word: "persimmon", hint: "Orange fruit eaten ripe" },
            { word: "tamarind", hint: "Tangy fruit in a pod" },
            { word: "rambutan", hint: "Hairy tropical fruit" },
            { word: "starfruit", hint: "Shaped like a star when cut" },
            { word: "durian", hint: "Spiky and very smelly" }
        ]
    },
    
    science: {
        easy: [
            { word: "atom", hint: "Smallest unit of matter" },
            { word: "gas", hint: "A state of matter" },
            { word: "sun", hint: "Star at the center of our solar system" },
            { word: "plant", hint: "Performs photosynthesis" },
            { word: "rock", hint: "Solid mineral material" },
            { word: "rain", hint: "Falls from clouds" },
            { word: "star", hint: "Shines in the night sky" },
            { word: "heat", hint: "Energy felt as warmth" },
            { word: "light", hint: "What lets us see" },
            { word: "moon", hint: "Orbits the Earth" }
        ],
        medium: [
            { word: "gravity", hint: "Keeps us on the ground" },
            { word: "neutron", hint: "Neutral atomic particle" },
            { word: "proton", hint: "Positively charged particle" },
            { word: "electron", hint: "Negatively charged particle" },
            { word: "energy", hint: "Drives motion and change" },
            { word: "planet", hint: "Orbits a star" },
            { word: "galaxy", hint: "Massive star system" },
            { word: "magnet", hint: "Attracts iron" },
            { word: "telescope", hint: "Used to see stars" },
            { word: "volcano", hint: "Mountain that erupts lava" }
        ],
        hard: [
            { word: "photosynthesis", hint: "How plants make food" },
            { word: "evaporation", hint: "Liquid to gas" },
            { word: "evolution", hint: "Darwin’s theory" },
            { word: "electricity", hint: "Powers devices" },
            { word: "microscope", hint: "View tiny things" },
            { word: "ecosystem", hint: "Interacting organisms in a habitat" },
            { word: "biodiversity", hint: "Variety of life forms" },
            { word: "photosphere", hint: "Surface of the sun" },
            { word: "mitochondria", hint: "Powerhouse of the cell" },
            { word: "continental", hint: "Large land mass related" }
        ]
    },
    
    geography: {
        easy: [
            { word: "lake", hint: "A body of water surrounded by land" },
            { word: "hill", hint: "Smaller than a mountain" },
            { word: "city", hint: "A large town" },
            { word: "isle", hint: "Another name for island" },
            { word: "land", hint: "Opposite of water" },
            { word: "road", hint: "Cars drive on it" },
            { word: "bay", hint: "A body of water partially enclosed by land" },
            { word: "reef", hint: "Underwater ridge of coral" },
            { word: "port", hint: "Where ships dock" },
            { word: "cape", hint: "Land that extends into water" }
        ],
        medium: [
            { word: "continent", hint: "Large landmass like Asia or Africa" },
            { word: "volcano", hint: "Can erupt lava" },
            { word: "channel", hint: "Waterway between land" },
            { word: "glacier", hint: "A slowly moving mass of ice" },
            { word: "savanna", hint: "Grassy plain with few trees" },
            { word: "peninsula", hint: "Land surrounded by water on three sides" },
            { word: "desert", hint: "Dry, sandy region" },
            { word: "plateau", hint: "Flat-topped elevated land" },
            { word: "basin", hint: "Low area where water collects" },
            { word: "valley", hint: "Low land between hills" }
        ],
        hard: [
            { word: "archipelago", hint: "Group of islands" },
            { word: "tundra", hint: "Cold, treeless region" },
            { word: "longitude", hint: "Vertical lines on a globe" },
            { word: "latitude", hint: "Horizontal lines on a globe" },
            { word: "equator", hint: "Imaginary line dividing Earth in half" },
            { word: "topography", hint: "Arrangement of natural features" },
            { word: "cartography", hint: "Study of maps" },
            { word: "estuary", hint: "River meets the sea" },
            { word: "geomorphology", hint: "Study of landforms" },
            { word: "hemisphere", hint: "Half of the Earth" }
        ]
    },
    
    jobs: {
        easy: [
            { word: "cook", hint: "Prepares food" },
            { word: "nurse", hint: "Helps patients" },
            { word: "teacher", hint: "Educates students" },
            { word: "pilot", hint: "Flies planes" },
            { word: "farmer", hint: "Grows crops" },
            { word: "chef", hint: "Expert in kitchen" },
            { word: "guard", hint: "Protects places" },
            { word: "clerk", hint: "Works in office or store" },
            { word: "actor", hint: "Performs on stage or screen" },
            { word: "baker", hint: "Makes bread" }
        ],
        medium: [
            { word: "barber", hint: "Cuts hair" },
            { word: "janitor", hint: "Keeps buildings clean" },
            { word: "librarian", hint: "Manages books" },
            { word: "cashier", hint: "Handles payments" },
            { word: "plumber", hint: "Fixes pipes" },
            { word: "mechanic", hint: "Repairs vehicles" },
            { word: "soldier", hint: "Serves in the military" },
            { word: "lawyer", hint: "Provides legal help" },
            { word: "artist", hint: "Creates art" },
            { word: "tailor", hint: "Alters clothes" }
        ],
        hard: [
            { word: "neurologist", hint: "Brain specialist" },
            { word: "choreographer", hint: "Creates dances" },
            { word: "cartographer", hint: "Draws maps" },
            { word: "statistician", hint: "Analyzes data" },
            { word: "archaeologist", hint: "Studies ancient ruins" },
            { word: "biotechnologist", hint: "Works with living cells" },
            { word: "paleontologist", hint: "Studies fossils" },
            { word: "pharmacist", hint: "Dispenses medication" },
            { word: "journalist", hint: "Reports news" },
            { word: "astronomer", hint: "Studies space" }
        ]
    },
    
    food: {
        easy: [
            { word: "bread", hint: "Made from flour and yeast" },
            { word: "rice", hint: "Staple grain in Asia" },
            { word: "egg", hint: "Laid by birds" },
            { word: "meat", hint: "Animal protein" },
            { word: "corn", hint: "Yellow kernel vegetable" },
            { word: "salt", hint: "Used for seasoning" },
            { word: "milk", hint: "White liquid from cows" },
            { word: "fish", hint: "Lives in water" },
            { word: "cake", hint: "Eaten on birthdays" },
            { word: "jam", hint: "Fruit spread" }
        ],
        medium: [
            { word: "noodles", hint: "Long pasta strands" },
            { word: "cheese", hint: "Dairy, yellow or white" },
            { word: "chicken", hint: "Poultry meat" },
            { word: "biscuit", hint: "Dry baked good" },
            { word: "cabbage", hint: "Leafy green veggie" },
            { word: "spinach", hint: "Iron-rich greens" },
            { word: "potato", hint: "Root vegetable" },
            { word: "pudding", hint: "Soft dessert" },
            { word: "salmon", hint: "Pink fish" },
            { word: "cookie", hint: "Sweet treat" }
        ],
        hard: [
            { word: "croissant", hint: "Flaky French pastry" },
            { word: "lasagna", hint: "Layered pasta dish" },
            { word: "paella", hint: "Spanish rice dish" },
            { word: "burrito", hint: "Mexican wrap" },
            { word: "casserole", hint: "Baked dish with layers" },
            { word: "ratatouille", hint: "French veggie dish" },
            { word: "gazpacho", hint: "Cold tomato soup" },
            { word: "moussaka", hint: "Greek casserole" },
            { word: "quiche", hint: "Egg pie" },
            { word: "sauerkraut", hint: "Fermented cabbage" }
        ]
    },
    
    instruments: {
        easy: [
            { word: "drum", hint: "Percussion instrument" },
            { word: "flute", hint: "Woodwind instrument" },
            { word: "bell", hint: "Rings when struck" },
            { word: "harp", hint: "Stringed and elegant" },
            { word: "horn", hint: "Brass instrument" },
            { word: "tambourine", hint: "Shake it to jingle" },
            { word: "whistle", hint: "You blow into it" },
            { word: "triangle", hint: "Three-sided percussion" },
            { word: "maracas", hint: "Rattling instrument" },
            { word: "cymbal", hint: "Crash sound" }
        ],
        medium: [
            { word: "violin", hint: "Played with a bow" },
            { word: "trumpet", hint: "Brass with valves" },
            { word: "guitar", hint: "Popular string instrument" },
            { word: "clarinet", hint: "Single-reed woodwind" },
            { word: "saxophone", hint: "Jazz instrument" },
            { word: "trombone", hint: "Uses a slide" },
            { word: "ukulele", hint: "Mini guitar" },
            { word: "cello", hint: "Large bowed string" },
            { word: "banjo", hint: "Plucked with drumhead" },
            { word: "oboe", hint: "Double-reed woodwind" }
        ],
        hard: [
            { word: "xylophone", hint: "Struck wooden bars" },
            { word: "bassoon", hint: "Large woodwind" },
            { word: "accordion", hint: "Expanding keyboard instrument" },
            { word: "didgeridoo", hint: "Aboriginal wind instrument" },
            { word: "mandolin", hint: "Lute-like instrument" },
            { word: "sitar", hint: "Indian string instrument" },
            { word: "zither", hint: "Flat string instrument" },
            { word: "hurdygurdy", hint: "Crank-operated strings" },
            { word: "theremin", hint: "Played without touch" },
            { word: "bagpipes", hint: "Blown with bag and drones" }
        ]
    },
    
    computers: {
        easy: [
            { word: "mouse", hint: "Moves the cursor" },
            { word: "screen", hint: "Displays information" },
            { word: "file", hint: "Stores data" },
            { word: "icon", hint: "Clickable image on desktop" },
            { word: "text", hint: "What you type" },
            { word: "link", hint: "Takes you to a webpage" },
            { word: "disk", hint: "Old data storage" },
            { word: "save", hint: "Store progress" },
            { word: "type", hint: "Press keyboard" },
            { word: "code", hint: "Used by programmers" }
        ],
        medium: [
            { word: "window", hint: "Part of GUI interface" },
            { word: "router", hint: "Distributes WiFi" },
            { word: "backup", hint: "Save a copy of data" },
            { word: "driver", hint: "Software for hardware" },
            { word: "update", hint: "Improves software" },
            { word: "folder", hint: "Holds files" },
            { word: "server", hint: "Stores websites" },
            { word: "binary", hint: "Language of computers" },
            { word: "device", hint: "Generic tech tool" },
            { word: "tablet", hint: "Touchscreen computer" }
        ],
        hard: [
            { word: "firewall", hint: "Blocks unauthorized access" },
            { word: "compiler", hint: "Turns code into executable" },
            { word: "algorithm", hint: "Step-by-step instruction" },
            { word: "protocol", hint: "Set of rules for communication" },
            { word: "database", hint: "Stores structured data" },
            { word: "encryption", hint: "Secures data" },
            { word: "cybersecurity", hint: "Protects computer systems" },
            { word: "machinelearning", hint: "Type of AI" },
            { word: "virtualization", hint: "Simulates computing environments" },
            { word: "microprocessor", hint: "CPU of a computer" }
        ]
    }
};

/**
* Difficulty Settings: Timer Duration and Attempt Limits
*/
const settings = {
    easy: { time: 40, attempts: 6 },
    medium: { time: 30, attempts: 5 },
    hard: { time: 20, attempts: 4 }
};

/**
* The current word and hint to guess
*/
let currentWord = {};

/**
* Number of current attempt for the word
*/
let attempts = 0;

/**
* Number of attempts for the word
*/
let maxAttempts = 5;

/**
* Time remaining for current word
*/
let timeLeft = 30;

/**
* Player's current score
*/
let score = 0;

/**
* High score is retrieved using local storage
*/
let highScore = localStorage.getItem('highScore') ? parseInt(localStorage.getItem('highScore')) : 0;

/**
* Timer interval reference
*/
let timer;

/**
* Retrieve start button selector
*/
const startBtn = document.getElementById('start-button');

/**
 * Retrieve restart button selector
 */
const restartBtn = document.getElementById('restart-button');

/**
 * Retrieve difficulty selector
 */
const diffSelect = document.getElementById('difficulty');

/**
 * Retrieve category selector
 */
const catSelect = document.getElementById('category');

/**
 * Retrieve the game area selector
 */
const gameArea = document.getElementById('game');

/**
 * Retrieve the hint selector
 */
const hintEl = document.getElementById('hint');

/**
 * Retrieve the user input selector
 */
const inputEl = document.getElementById('user-input');

/**
 * Retrieve the guess button selector
 */
const guessBtn = document.getElementById('guess-btn');

/**
 * Retrieve the message selector
 */
const messageEl = document.getElementById('message');

/**
 * Retrieve the score selector
 */
const scoreEl = document.getElementById('score');

/**
 * Retrieve the high score selector
 */
const highScoreEl = document.getElementById('high-score');

/**
 * Retrieve the guess history selector
 */
const historyEl = document.getElementById('guess-history');

/**
 * Retrieve timer selector
 */
const timerEl = document.getElementById('timer');

/**
 * Retrieve the word display selector
 */
const wordDisplay = document.getElementById('wordDisplay');

// Attach event listeners to the start, restart and guess buttons.
startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', restartGame);
guessBtn.addEventListener('click', checkGuess);
inputEl.addEventListener('keyup', e => {
    if (e.key === 'Enter') checkGuess();
});

/**
 * Initialises the game.
 */
function startGame() {
    score = 0;
    updateScore();
    updateHighScoreDisplay();
    
    diffSelect.classList.add('hidden');
    catSelect.classList.add('hidden');
    startBtn.classList.add('hidden');
    restartBtn.classList.remove('hidden');
    gameArea.classList.remove('hidden');
    
    loadNextWord();
}

/**
 * Restarts the game.
 */
function restartGame() {
    clearInterval(timer);
    diffSelect.classList.remove('hidden');
    catSelect.classList.remove('hidden');
    startBtn.classList.remove('hidden');
    restartBtn.classList.add('hidden');
    gameArea.classList.add('hidden');
    messageEl.textContent = '';
    wordDisplay.textContent = '';
}

/**
 * Loads a new word once the time's up for guessing the current word.
 * @returns 
 */
function loadNextWord() {
    const category = catSelect.value;
    const difficulty = diffSelect.value;
    
    attempts = 0;
    messageEl.textContent = '';
    historyEl.innerHTML = '';
    inputEl.value = '';
    
    // Set gam elimits based on difficulty
    maxAttempts = settings[difficulty].attempts;
    timeLeft = settings[difficulty].time;
    
    // Get appropriate word pool
    let wordPool = [];
    
    if (category === 'random') {
        for (let cat in words) {
            if (words[cat][difficulty]) {
                wordPool = wordPool.concat(words[cat][difficulty]);
            }
        }
    } else {
        wordPool = words[category]?.[difficulty] || [];
    }
    
    // Handle edge cases: no words found
    if (wordPool.length === 0) {
        showMessage('No words available for this selection.', 'red');
        return;
    }
    
    // Select a random word and show the hint
    currentWord = wordPool[Math.floor(Math.random() * wordPool.length)];
    hintEl.textContent = currentWord.hint;
    wordDisplay.textContent = '_ '.repeat(currentWord.word.length).trim();
    
    startTimer();
}

/**
 * Check the player's guess based on their input.
 * @returns 
 */
function checkGuess() {
    const guess = inputEl.value.trim().toLowerCase();
    if (!guess) return showMessage('Please enter a guess.', 'orange');
    if (attempts >= maxAttempts) return showMessage(`No more attempts! Word: ${currentWord.word}`, 'orange');
    
    attempts++;
    const correct = guess === currentWord.word.toLowerCase();
    addGuessToHistory(guess, correct);
    
    if (correct) {
        score += 10;
        updateScore();
        updateHighScore();
        showMessage('Correct! Loading next...', 'green');
        clearInterval(timer);
        setTimeout(loadNextWord, 1500);
    } else if (attempts >= maxAttempts) {
        showMessage(`Out of attempts! Word was: ${currentWord.word}`, 'red');
        clearInterval(timer);
        setTimeout(loadNextWord, 2000);
    } else {
        showMessage(`Wrong! Attempts: ${attempts}/${maxAttempts}`, 'red');
    }
    
    inputEl.value = '';
}

/**
 * Show appropriate message to the user.
 * Handles 
 * @param {String} text - The appropriate message to display to the user.
 * @param {String} colour - The colour of the text to use in the message.
 */
function showMessage(text, colour) {
    messageEl.textContent = text;
    messageEl.style.colour = colour;
}

/**
 * Update the player's score.
 */
function updateScore() {
    scoreEl.textContent = `Score: ${score}`;
}

/**
 * Update high score in local storage if beaten.
 */
function updateHighScore() {
    if (score > highScore) {
        highScore = score;
        localStorage.setItem('highScore', highScore);
        updateHighScoreDisplay();
    }
}

/**
 * Display high score.
 */
function updateHighScoreDisplay() {
    highScoreEl.textContent = `High Score: ${highScore}`;
}

/**
 * Track guess history.
 */
function addGuessToHistory(guess, correct) {
    const li = document.createElement('li');
    li.textContent = `${guess} — ${correct ? '✓' : '✗'}`;
    li.style.colour = correct ? 'green' : 'red';
    historyEl.appendChild(li);
}

/**
 * Start and run the countdown timer.
 */
function startTimer() {
    clearInterval(timer);
    timerEl.textContent = `Time left: ${timeLeft}s`;
    timer = setInterval(() => {
        timeLeft--;
        timerEl.textContent = `Time left: ${timeLeft}s`;
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            showMessage(`Time's up! Word was: ${currentWord.word}`, 'orange');
            setTimeout(loadNextWord, 2000);
        }
    }, 1000);
}