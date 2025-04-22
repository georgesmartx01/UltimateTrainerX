/**
 * Hangman Game Class
 * 
 * This class handles the logic for a Hangman game, including:
 * - Managing word selection
 * - Tracking guessed letters and mistakes
 * - Updating the user interface (UI)
 * - Handling animations for wins and losses
 */
class Hangman {
    /**
    * Crates a new Hangman game instance.
    * 
    * @param {number} maxMistakes - Maximum number of allowed mistakes before losing
    */
    constructor(maxMistakes = 6) {
        this.maxMistakes = maxMistakes;
        this.isAnimating = false;
        this.scaleApplied = false;
        this.initialiseUI();
        this.resetGame();
    }

    /**
     * Reset the Hangman game by selecting a new word, resetting mistakes
     * and refreshing the user interface (UI).
     * 
     * @async
     */
    async resetGame() {
        if (this.isAnimating) {
            this.resetAnimations();
        }

        this.word = await this.getRandomWord();
        this.guessedLetters = new Set();
        this.mistakes = 0;
        this.updateUI();
        this.clearCanvas();
        this.drawGallows();
        this.enableKeyboard(true);
        this.showMessage('', 'black');
    }

    /**
     * Initialises the game interface.
     * - Sets up word container and letters container elements.
     * - Creates clickable letter buttons for guessing.
     * - Prepares the canvas for drawing the hangman.
     */
    initialiseUI() {
        this.wordContainer = document.getElementById('word-container');
        this.lettersContainer = document.getElementById('letters-container');
        this.messageContainer = document.getElementById('message');
        this.canvas = document.getElementById('hangman-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.lettersContainer.innerHTML = '';
        
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        letters.forEach(letter => {
            const letterBtn = document.createElement('div');
            letterBtn.className = 'letter';
            letterBtn.textContent = letter;
            letterBtn.addEventListener('click', () => {
                this.handleGuess(letterBtn);
            });
            this.lettersContainer.appendChild(letterBtn);
        });
        this.canvas.width = 200;
        this.canvas.height = 250;
    }

    /**
     * Updates the word display in the user interface (UI).
     * - Replaces unguessed letters with underscores.
     * - Shows correctly guessed letters in their correct positions.
     */
    updateUI() {
        this.wordContainer.innerHTML = this.word.split('').map(letter => this.guessedLetters.has(letter) ? letter : '_').join(' ');
    }
    

    /**
     * Processes a guessed letter and updates game state.
     * 
     * @param {HTMLElement} letterBtn - The letter button clicked by the player.
     */
    handleGuess(letterBtn) {
        const letter = letterBtn.textContent;
        if (this.guessedLetters.has(letter) || this.mistakes >= this.maxMistakes) {
            return;
        }
        this.guessedLetters.add(letter);
        letterBtn.classList.add('disabled');
        if (this.word.includes(letter)) {
            this.updateUI();
            if (this.checkWin()) {
                this.showMessage('You Win!', 'green');
                this.enableKeyboard(false);
                this.animateWin();
            }
        } else {
            this.mistakes++;
            this.animateDrawHangman();
            if (this.mistakes === this.maxMistakes) {
                this.showMessage('You Lose', 'red');
                this.enableKeyboard(false);
                this.animateLose();
            } 
        }
    }

    /**
     * Enables or disables the keyboard (letter buttons).
     * 
     * @param {boolean} enable - Whether to enable (true) or disable (false) keyboard input.
     */
    enableKeyboard(enable) {
        const letters = this.lettersContainer.getElementsByClassName('letter');
        for (let letter of letters) {
            letter.classList.toggle('disabled', !enable);
            letter.style.pointerEvents = enable ? 'auto' : 'none';
        }
    }

    /**
     * Checks if the player has successfully guessed the word.
     * 
     * @returns {boolean} True if all letters in the word in the word have been guessed.
     */
    checkWin() {
        return this.word.split('').every(letter => this.guessedLetters.has(letter));
    }

    /**
     * Displays a message in the game interface.
     * 
     * @param {string} message - The message to display
     * @param {string} colour - The colour of the message text.
     */
    showMessage(message, colour) {
        this.messageContainer.textContent = message;
        this.messageContainer.style.color = colour;
    }
    
    /**
    * Fetches a random word from an API to be used in the game.
    * 
    * @async
    * @returns {Promise<string>} - A randomly selected word in uppercase
    */
    async getRandomWord() {
        try {
            const response = await fetch(`https://random-word-api.herokuapp.com/word?number=1&timestamp=${Date.now()}`);
            const data = await response.json();
            return data[0].toUpperCase();
        } catch (error) {
            console.error('Error fetching word: ', error);
            return 'DEFAULT';
        }
    }
     
    /**
    * Draws the initial gallows structure (stick figure) on the canvas.
    */
    drawGallows() {
        const ctx = this.ctx;
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'mediumslateblue';
        ctx.beginPath();
        ctx.moveTo(50, 220);
        ctx.lineTo(150, 220);
        ctx.stroke();
        ctx.moveTo(75, 220);
        ctx.lineTo(75, 50);
        ctx.lineTo(120, 50);
        ctx.lineTo(120, 70);
        ctx.stroke();
    }

    /**
     * Animates drawing a circle on the canvas.
     * 
     * @param {number} x - X-coordinate of the circle's center.
     * @param {number} y - Y-coordinate of the circle's center.
     * @param {number} radius - Radius of the circle
     */
    animateCircle(x, y, radius) {
        const ctx = this.ctx;
        let currentRadius = 0;
        const animate = () => {
            ctx.beginPath();
            ctx.arc(x, y, currentRadius, 0, Math.PI * 2);
            ctx.stroke();
            if (currentRadius < radius) {
                currentRadius += 1;
                this.animationFrame = requestAnimationFrame(animate);
            }
        };
        animate();
    }

    /**
     * Animates drawing a line on the canvas.
     * 
     * @param {number} x1 - X-coordinate of the line's start.
     * @param {number} y1 - Y-coordinate of the line's start.
     * @param {number} x2 - X-coordinate of the line's end.
     * @param {number} y2 - Y-coordinate of the line's end.
     */
    animateLine(x1, y1, x2, y2) {
        const ctx = this.ctx;
        let progress = 0;
        const animate = () => {
            const currentX = x1 + (x2 - x1) * progress;
            const currentY = y1 + (y2 - y1) * progress;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(currentX, currentY);
            ctx.stroke();
            
            // animate the line
            if (progress < 1) {
                progress += 0.05;
                this.animationFrame = requestAnimationFrame(animate);
            }
        };
        animate();
    }

    /**
     * Draws the next part of the hangman based on mistakes count
     */
    animateDrawHangman() {
        const ctx = this.ctx;
        ctx.lineWidth = 3;
        ctx.strokeStyle = 'mediumslateblue';

        // part of the stick figure to draw based on how many mistakes the player has made
        switch (this.mistakes) {
            case 1: // head
                this.animateCircle(120,90, 20);
                break;
            case 2: // body
                this.animateLine(120, 110, 120, 160);
                break
            case 3: // left hand
                this.animateLine(120, 120, 100, 140);
                break;
            case 4: // right hand
                this.animateLine(120, 120, 140, 140);
                break;
            case 5: // left leg
                this.animateLine(120, 160, 100, 190);
                break;
            case 6: // right leg
                this.animateLine(120, 160, 140, 190);
                break;
        }
    }

    /**
     * Clear the canvas, removing all drawn elements.
     */
    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    /**
     * Animates a winning effect when the player successfully guesses the word.
     */
    animateWin() {
        if (this.isAnimating) return;
        this.isAnimating = true;
        this.scaleApplied = true;
        let scale = 1;
        const animate = () => {
            this.wordContainer.style.transform = `scale(${scale})`;
            scale += 0.05;
            if (scale < 1.5) {
                this.animationFrame = requestAnimationFrame(animate);
            }
        };
        animate();
    }

    /**
     * Animates a shaking effect when the player loses.
     */
    animateLose() {
        if (this.isAnimating) return;
        this.isAnimating = true;
        
        let frame = 0;
        const shakeIntensity = 8; // Shake intensity
        const maxFrames = 10; // total shake frames

        const animate = () => {
            let offset = (frame % 2 === 0 ? shakeIntensity : -shakeIntensity);
            this.wordContainer.style.transform = `translateX(${offset}px)`;

            frame++

            if (frame < maxFrames) {
                requestAnimationFrame(animate);
            } else {
                this.wordContainer.style.transform = 'translateX(0)'; // reset position
                this.isAnimating = false;
            }
        };
        animate();
    }

    /**
     * Resets all animations and transformations applied to user interface (UI) elements.
     * - Clears wordContainer animations.
     * - Cancels any running animation frames.
     * - Restores default styling.
     */
    resetAnimations() {
        this.wordContainer.style.transform = 'none';
        if (this.scaleApplied) {
            this.wordContainer.style.fontSize = window.getComputedStyle(this.wordContainer, null).getPropertyValue('font-size') / 1.5;
            this.scaleApplied = false;
        }
        cancelAnimationFrame(this.animationFrame);
        this.isAnimating = false;
    }
}

document.addEventListener('DOMContentLoaded', () =>  {
    let hangman = new Hangman();
    document.getElementById('new-game').addEventListener('click', () => hangman.resetGame());
});