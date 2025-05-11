/**
 * Word list categorised by difficulty level (easy, medium and hard).
 * Each word has an associated hint to help players guess the word.
 */
const words = {
    /**
     * Easy words
     */
    easy: [
        {word: "apple", hint: "A fruit"},
        {word: "cat", hint: "A small pet"},
        {word: "car", hint: "A mode of transport"},
        {word: "banana", hint: "A yellow fruit"},
        {word: "dog", hint: "A common pet that barks"},
        {word: "book", hint: "Contains pages filled with words"},
        {word: "sun", hint: "The star at the center of our solar system"},
        {word: "hat", hint: "Worn on the head, often for fashion or protection from the sun"},
        {word: "bird", hint: "A creature that can fly and often builds nests"},
        {word: "fish", hint: "A creature that lives in the water and has fins"},
        {word: "orange", hint: "A citrus fruit"},
        {word: "chair", hint: "You sit on it"},
        {word: "cloud", hint: "Fluffy white, like cotton candy, floating in the sky"},
        {word: "train", hint: "A mode of transport"},
        {word: "clock", hint: "Tells time, found in homes and schools"},
        {word: "tree", hint: "Plant with an elongated stem or trunk, supporting branches and leaves"},
        {word: "milk", hint: "White liquid produced by mammary glands of mammals"},
        {word: "grass", hint: "Green plant covering the ground"},
        {word: "moon", hint: "Earth's only natural satellite"},
        {word: "cup", hint: "Used to drink liquids"},
        {word: "ball", hint: "Round object used in games"},
        {word: "star", hint: "A shining object in space"},
        {word: "butter", hint: "Spread on bread and used in cooking"},
        {word: "egg", hint: "A common food with a shell"},
        {word: "snow", hint: "Frozen water that falls from the sky"},
        {word: "ship", hint: "A large vessel that travels on water"},
        {word: "lamp", hint: "Provides light indoors"},
        {word: "leaf", hint: "Found on trees, changes color in autumn"},
        {word: "door", hint: "A movable barrier that lets people in and out"},
        {word: "cake", hint: "A sweet dessert, often served at birthdays"},
        {word: "beach", hint: "A sandy area near the ocean"},
        {word: "desk", hint: "A flat surface for studying or working"},
        {word: "bottle", hint: "Holds liquids, like water or juice"},
        {word: "bridge", hint: "Connects two places, often over water"},
        {word: "pen", hint: "Used for writing or drawing"},
        {word: "key", hint: "Used to unlock doors or start cars"},
        {word: "bag", hint: "Used to carry items, like books or groceries"},
        {word: "shoe", hint: "Worn on your feet for protection or fashion"},
        {word: "kite", hint: "Flies in the sky, often on windy days"},
        {word: "bed", hint: "A piece of furniture for sleeping"},
        {word: "soap", hint: "Used for cleaning hands or the body"},
        {word: "bell", hint: "Makes a ringing sound when struck"},
        {word: "road", hint: "A path for cars and vehicles to travel on"},
        {word: "coin", hint: "A small, round piece of metal used as money"},
        {word: "plant", hint: "A living thing that grows in soil and needs sunlight"},
        {word: "box", hint: "A container used for storing or carrying items"},
        {word: "rain", hint: "Water that falls from clouds in the sky"},
        {word: "frog", hint: "A small, jumping animal that lives near water"},
        {word: "pencil", hint: "Used for writing or drawing, can be erased"},
        {word: "window", hint: "An opening in a wall that lets in light and air"},
    ],

        /**
     * Medium words (intermediate)
     */
    medium: [
        {word: "giraffe", hint: "Tall animal with a long neck"},
        {word: "computer", hint: "Used for computing tasks"},
        {word: "umbrella", hint: "Used when it rains"},
        {word: "dolphin", hint: "A highly intelligent marine animal"},
        {word: "camera", hint: "Used to capture photos or videos"},
        {word: "pyramid", hint: "A three-dimensional shape with a square base and triangular sides"},
        {word: "mountain", hint: "A large natural elevation of the Earth's surface"},
        {word: "island", hint: "A piece of land surrounded by water"},
        {word: "violin", hint: "A string instrument played with a bow"},
        {word: "magnet", hint: "An object that attracts iron and produces a magnetic field"},
        {word: "airplane", hint: "A flying vehicle used for travel"},
        {word: "volcano", hint: "A mountain that erupts with lava"},
        {word: "jungle", hint: "A dense forest with tropical plants and animals"},
        {word: "diamond", hint: "A precious gemstone known for its sparkle"},
        {word: "rocket", hint: "A vehicle used for space exploration"},
        {word: "castle", hint: "A large fortified building, often historical"},
        {word: "galaxy", hint: "A vast system of stars and planets"},
        {word: "compass", hint: "A tool used for navigation"},
        {word: "telescope", hint: "Used to observe distant objects in space"},
        {word: "waterfall", hint: "A stream of water falling from a height"},
        {word: "rainbow", hint: "A colourful arc seen after rain"},
        {word: "lantern", hint: "A portable light source"},
        {word: "penguin", hint: "A flightless bird that lives in cold regions"},
        {word: "cactus", hint: "A spiky plant that grows in deserts"},
        {word: "statue", hint: "A carved or cast figure of a person or animal"},
        {word: "planet", hint: "A celestial body orbiting a star"},
        {word: "painter", hint: "Someone who creates art using paint"},
        {word: "scooter", hint: "A two-wheeled vehicle for short distances"},
        {word: "factory", hint: "A place where goods are manufactured"},
        {word: "lighthouse", hint: "A tower with a light to guide ships"},
        {word: "parachute", hint: "Used to slow down a fall from high places"},
        {word: "festival", hint: "A celebration or event with food, music or traditions"},
        {word: "coconut", hint: "A tropical fruit with coconut water, a hard shell and white fleshy interior"},
        {word: "whistle", hint: "A sound made by blowing air or a small device"},
        {word: "airship", hint: "A floating aircraft often seen in old-style travel"},
        {word: "companion", hint: "A friend or someone who keeps you company"},
        {word: "mermaid", hint: "A mythical sea creature with a human upper body and fish tail"},
        {word: "voyage", hint: "A long journey, especially by sea or space"},
        {word: "mirror", hint: "A surface that reflects images"},
        {word: "harbour", hint: "A sheltered area of water where ships dock"},
        {word: "ladder", hint: "A tool with steps used for climbing"},
        {word: "puzzle", hint: "A game or problem that tests ingenuity or knowledge"},
        {word: "anchor", hint: "A heavy object used to keep a ship in place"},
        {word: "tunnel", hint: "An underground passage for vehicles or people"},
        {word: "beacon", hint: "A light or signal used for guidance or warning"},
        {word: "orchard", hint: "A piece of land planted with fruit trees"},
        {word: "fountain", hint: "A structure that sends water into the air for decoration"},
        {word: "archery", hint: "The sport of shooting arrows with a bow"},
        {word: "sculpture", hint: "A three-dimensional art piece made from materials like stone, metal or clay"},
        {word: "blueprint", hint: "A detailed plan or design used for building structures"}
    ],

    /**
     * Hard words
     */
    hard: [
        {word: "entrepreneur", hint: "A business person"},
        {word: "metamorphosis", hint: "Transformation"},
        {word: "sphinx", hint: "Mythical creature"},
        {word: "philosopher", hint: "A thinker who contemplates fundamental questions about existence"},
        {word: "kaleidoscope", hint: "An optical instrument that creates patterns through mirrors and coloured glass"},
        {word: "astronaut", hint: "A person trained to travel in space"},
        {word: "paradox", hint: "A statement that contradicts itself, but may reveal a truth"},
        {word: "quasar", hint: "An extremely luminous active galactic nucleus"},
        {word: "neuroscience", hint: "The scientific study of the nervous system"},
        {word: "cryptography", hint: "The practice of secure communication in the presence of third parties"},
        {word: "astronomy", hint: "The study of stars, planets and space"},
        {word: "philosophy", hint: "The study of ideas about knowledge, truth and existence"},
        {word: "architecture", hint: "The art and science of designing buildings"},
        {word: "hydraulic", hint: "A system powered by liquid movement, often water or oil"},
        {word: "symmetry", hint: "When two sides of an object or shape are perfectly balanced"},
        {word: "camouflage", hint: "A pattern or ability that helps blend into surroundings"},
        {word: "cartography", hint: "The science and art of making and using maps"},
        {word: "hypothesis", hint: "A proposed explanation that can be tested"},
        {word: "monument", hint: "A structure built to commemorate something or someone"},
        {word: "ecosystem", hint: "A system where living things interact with their environment"},
        {word: "eclipse", hint: "When one celestial body blocks another"},
        {word: "tsunami", hint: "A giant ocean wave"},
        {word: "genome", hint: "Complete set of genetic material"},
        {word: "anomaly", hint: "something unexpected or unusual"},
        {word: "algorithm", hint: "A step-by-step process for solving problems"},
        {word: "quantum", hint: "The smallest amount of physical property"},
        {word: "enigma", hint: "A mysterious or puzzling thing"},
        {word: "tectonic", hint: "Related to the structure of the Earth's crust"},
        {word: "pandemonium", hint: "Wild and noisy disorder or chaos"},
        {word: "omniscient", hint: "Having complete or unlimited knowledge"},
        {word: "ephemeral", hint: "Lasting for a very short time"},
        {word: "equilibrium", hint: "A state of balance or stability"},
        {word: "luminescence", hint: "Emission of light by a substance not resulting from heat"},
        {word: "photosynthesis", hint: "The process by which plants convert sunlight into energy"},
        {word: "antithesis", hint: "A person or thing that is the direct opposite of another"},
        {word: "zeitgeist", hint: "The defining spirit or mood of a particular period in history"},
        {word: "synergy", hint: "Interaction or cooperation producing a combined effect greater than the sum of individual effects"},
        {word: "entropy", hint: "A measure of disorder or randomness in a system"},
        {word: "paradigm", hint: "A typical example or pattern of something"},
        {word: "conundrum", hint: "A confusing or difficult problem or question"},
        {word: "euphoria", hint: "A feeling or state of intense happiness and excitement"},
        {word: "juxtaposition", hint: "The act of placing two things close together for contrasting effect"},
        {word: "labyrinth", hint: "A complex maze or network of paths"},
        {word: "epiphany", hint: "A sudden realisation or insight"},
        {word: "renaissance", hint: "A period of cultural rebirth or revival"},
        {word: "cataclysm", hint: "A large-scale and violent event in the natural or social world"},
        {word: "serendipity", hint: "The occurrence of events by a chance in a happy or beneficial way"},
        {word: "phenomenon", hint: "An observable event or occurrence"},
        {word: "existential", hint: "Relating to existence or the nature of being"},
        {word: "parallax", hint: "The apparent shift in the position of an object when viewed from different angles"}
    ]
}

/**
 * Stores the current word used for the guessing game.
 * This variable will be updated dynamically during gameplay.
 */
let currentWord = "";

/**
 * Track correctly guessed words
 */
let guessedWords = [];

/**
 * Tracks the player's score.
 * Increments when the player correctly guesses a word.
 */
let score = 0;

/**
 * Counts the number of attempts the player has made.
 * This helps in limiting the number of guesses before revealing the answer.
 */
let attempts = 0;

/**
 * Keeps track of words that have been used during gameplay.
 * Prevents repetition of words when randomly selecting a new one.
 */
let usedWords = [];

document.getElementById("start-btn").addEventListener("click", startGame);
document.getElementById("guess-btn").addEventListener("click", checkGuess);
document.getElementById("next-btn").addEventListener("click", loadNextWord);

/**
 * 
 */
function startGame() {
    score = 0;
    usedWords = [];
    document.getElementById("score").innerText = `Score: ${score}`;
    loadNextWord();

    document.getElementById("game").classList.remove("hidden");
}

/**
 * 
 * @returns 
 */
function loadNextWord() {
    const difficulty = document.getElementById("difficulty").value;
    const selectedWords = words[difficulty];

    /**
     * Filter out used words from the selected words
     */
    const availableWords = selectedWords.filter(word => !usedWords.includes(word.word));

    if (availableWords.length === 0) {
        document.getElementById("message").innerText = "No more words available! Game over!";
        document.getElementById("next-btn").classList.add("hidden");
        return;
    }

    /**
     * Select a new random word from the available words
     */
    currentWord = availableWords[Math.floor(Math.random() * availableWords.length)];
    
    // add the word to the used words list
    usedWords.push(currentWord.word);
    document.getElementById("hint").innerText = currentWord.hint;
    document.getElementById("user-input").value = "";
    document.getElementById("message").innerText = "";
    attempts = 0;
    
    // hide the next word until the word is guessed
    document.getElementById("next-btn").classList.add("hidden"); 
    
}

/**
 * 
 */
function checkGuess() {
    const userGuess = document.getElementById("user-input").value.toLowerCase();
    attempts++;

    if (guessedWords.includes(userGuess)) {
        document.getElementById("message").style.color = "red";
        document.getElementById("message").style.fontWeight = "bold";
        document.getElementById("message").style.fontSize = "18px";
        document.getElementById("message").innerText = "You've already guessed this word!";
        return;
    }

    if (userGuess === currentWord.word) {
        score += 10;
        guessedWords.push(userGuess);
        document.getElementById("message").style.color = "green";
        document.getElementById("message").style.fontWeight = "bold";
        document.getElementById("message").style.fontSize = "18px";
        document.getElementById("message").innerText = "Correct! Well done!";
        document.getElementById("next-btn").classList.remove("hidden");
    } else if (userGuess === "") {
        document.getElementById("message").style.color = "orange";
        document.getElementById("message").style.fontWeight = "bold";
        document.getElementById("message").style.fontSize = "18px";
        document.getElementById("message").innerText = "Cannot leave guess empty! Please enter a guess!";
    } else {
        document.getElementById("message").style.color = "red";
        document.getElementById("message").style.fontWeight = "bold";
        document.getElementById("message").style.fontSize = "18px";
        document.getElementById("message").innerText = `Wrong! Try again. Attempts: ${attempts}`;
    }

    document.getElementById("score").innerText = `Score: ${score}`;
}