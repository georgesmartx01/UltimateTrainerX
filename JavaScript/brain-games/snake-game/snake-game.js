class Snake {
    /**
     * Initializes the snake with a given grid size.
     * @param {number} gridSize - The size of each grid cell.
     */
    constructor(gridSize) {
        this.gridSize = gridSize;
        this.reset();
    }

    /**
     * Resets the snake's position and direction.
     */
    reset() {
        this.body = [{ x: 10, y: 10 }];
        this.direction = { x: 1, y: 0 };
    }

    /**
     * Moves the snake in the current direction.
     */
    move() {
        const head = {
            x: this.body[0].x + this.direction.x,
            y: this.body[0].y + this.direction.y
        };
        this.body.unshift(head);
    }

    /**
     * Makes the snake grow by keeping the last segment.
     */
    grow() {
        // The snake grows by not removing the last segment
    }

    /**
     * Updates the direction of the snake.
     * @param {number} dx - Horizontal movement.
     * @param {number} dy - Vertical movement.
     */
    setDirection(dx, dy) {
        if ((dx !== 0 && this.direction.x === 0) || (dy !== 0 && this.direction.y === 0)) {
            this.direction = { x: dx, y: dy };
        }
    }

    /**
     * Checks if the snake has collided with the walls or itself.
     * @param {number} gridSize - Size of the game grid.
     * @returns {boolean} - True if collision occurs, false otherwise.
     */
    checkCollision(gridSize) {
        const head = this.body[0];

        // Check if the snake hits the boundary
        if (head.x < 0 || head.x >= gridSize || head.y < 0 || head.y >= gridSize) {
            return true;
        }

        // Check if the snake collides with itself
        for (let index = 1; index < this.body.length; index++) {
            if (head.x === this.body[index].x && head.y === this.body[index].y) {
                return true;
            }
        }
        return false;
    }

    /**
     * Draws the snake on the canvas.
     * @param {CanvasRenderingContext2D} ctx - The drawing context.
     */
    drawSnake(ctx) {
        ctx.fillStyle = '#0f0';
        ctx.strokeStyle = '#000';

        this.body.forEach(segment => {
            ctx.fillRect(segment.x * this.gridSize, segment.y * this.gridSize, this.gridSize - 2, this.gridSize - 2);
            ctx.strokeRect(segment.x * this.gridSize, segment.y * this.gridSize, this.gridSize - 2, this.gridSize - 2);
        });
    }
}

class Food {
    /**
     * Initializes food with a given grid size and tile count.
     * @param {number} gridSize - The size of each grid cell.
     * @param {number} tileCount - Number of tiles in the grid.
     */
    constructor(gridSize, tileCount) {
        this.gridSize = gridSize;
        this.tileCount = tileCount;
        this.position = { x: 5, y: 15 };
    }

    /**
     * Generates new food at a random position.
     */
    generateFood() {
        this.position = {
            x: Math.floor(Math.random() * this.tileCount),
            y: Math.floor(Math.random() * this.tileCount)
        };
    }

    /**
     * Draws the food on the canvas.
     * @param {CanvasRenderingContext2D} ctx - The drawing context.
     */
    drawFood(ctx) {
        ctx.fillStyle = '#f00';
        ctx.fillRect(this.position.x * this.gridSize, this.position.y * this.gridSize, this.gridSize - 2, this.gridSize - 2);
    }
}

class Game {
    /**
     * Initializes the game.
     */
    constructor() {
        this.canvas = document.getElementById('game-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.gridSize = 30;
        this.tileCount = this.canvas.width / this.gridSize;
        this.snake = new Snake(this.gridSize);
        this.food = new Food(this.gridSize, this.tileCount);
        this.score = 0;
        this.bestScore = localStorage.getItem('bestScore') || 0; // Retrieve best score
        this.gameLoop = null;
        this.bindEventListeners();
    }

    /**
     * Draws the game grid.
     */
    drawGrid() {
        this.ctx.strokeStyle = "blue";
        this.ctx.lineWidth = 1;

        // Draw vertical lines
        for (let x = 0; x <= this.canvas.width; x += this.gridSize) {
            this.ctx.beginPath();
            this.ctx.moveTo(x, 0);
            this.ctx.lineTo(x, this.canvas.height);
            this.ctx.stroke();
        }

        // Draw horizontal lines
        for (let y = 0; y <= this.canvas.height; y += this.gridSize) {
            this.ctx.beginPath();
            this.ctx.moveTo(0, y);
            this.ctx.lineTo(this.canvas.width, y);
            this.ctx.stroke();
        }
    }

    /**
     * Binds event listeners for game controls.
     */
    bindEventListeners() {
        document.getElementById('start-btn').addEventListener('click', () => this.startGame());
        document.getElementById('restart-btn').addEventListener('click', () => this.startGame());
        document.addEventListener('keydown', (event) => this.handleKeyPress(event));
    }

    /**
     * Handles key presses to control the snake.
     * @param {KeyboardEvent} event 
     */
    handleKeyPress(event) {
        switch (event.key) {
            case 'ArrowUp': this.snake.setDirection(0, -1); break;
            case 'ArrowDown': this.snake.setDirection(0, 1); break;
            case 'ArrowLeft': this.snake.setDirection(-1, 0); break;
            case 'ArrowRight': this.snake.setDirection(1, 0); break;
        }
    }

    /**
     * Starts the game.
     */
    startGame() {
        this.snake.reset();
        this.food.generateFood();
        this.score = 0;
        this.updateScore();
        document.getElementById('game-over-popup').style.display = 'none';
        document.getElementById('start-btn').style.display = 'none';
        this.gameLoop = setInterval(() => this.update(), 200);
    }

    /**
     * Updates the game state.
     */
    update() {
        this.clearCanvas();
        this.drawGrid();
        this.snake.move();
        this.checkFoodCollision();
        this.snake.drawSnake(this.ctx);
        this.food.drawFood(this.ctx);

        if (this.snake.checkCollision(this.tileCount)) {
            this.gameOver();
        }
    }

    /**
     * Checks for food collision.
     */
    checkFoodCollision() {
        const head = this.snake.body[0];

        if (head.x === this.food.position.x && head.y === this.food.position.y) {
            this.food.generateFood();
            this.score++;
            this.updateScore();
            this.snake.grow();
        } else {
            this.snake.body.pop();
        }
    }

    /**
     * Ends the game.
     */
    gameOver() {
        clearInterval(this.gameLoop);
        document.getElementById('final-score').textContent = this.score;
        document.getElementById('game-over-popup').style.display = 'block';
    }

    /**
     * Clears the canvas.
     */
    clearCanvas() {
        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    /**
     * Updates the score display.
     */
    updateScore() {
        document.getElementById('score').textContent = `${this.score}`;
        if (this.score >= this.bestScore) {
            this.bestScore = this.score;
            localStorage.setItem('bestScore', this.bestScore); // Save best score
        }
        document.getElementById('best-score').textContent = `${this.bestScore}`;
    }
}

/**
 * Initializes the game.
 */
const snakeGame = new Game();