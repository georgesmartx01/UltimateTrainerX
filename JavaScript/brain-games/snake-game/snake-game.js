/**
 * 
 */
class Snake {
    /**
     * 
     * @param {*} gridSize 
     */
    constructor(gridSize) {
        this.gridSize = gridSize;
        this.reset();
    }

    /**
     * 
     */
    reset() {
        this.body = [{x: 10, y:10}];
        this.direction = { x: 1, y: 0 };
    }

    /**
     * 
     */
    move() {
        const head = {
            x: this.body[0].x + this.direction.x,
            y: this.body[0].y + this.direction.y
        };
        this.body.unshift(head);
    }

    /**
     * 
     */
    grow() {
        // The snake grows by not removing the last segment
    }

    /**
     * 
     * @param {*} dx 
     * @param {*} dy 
     */
    setDirection(dx, dy) {
        if ((dx !== 0 && this.direction.x === 0) || (dy !== 0 && this.direction.y === 0)) {
            this.direction = { x: dx, y: dy };
        }
    }

    /**
     * 
     * @param {*} gridSize 
     */
    checkCollision(gridSize) {
        const head = this.body[0];
        if (head.x < 0 || head.x >= gridSize || head.y < 0 || head.y >= gridSize) {
            return true;
        }

        for (let index = 1; index < this.body.length; index++) {
            if (head.x === this.body[index].x && head.y === this.body[index].y) {
                return true;
            }
        }
        return false;
    }

    /**
     * 
     * @param {*} ctx 
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

/**
 * 
 */
class Food {
    /**
     * 
     * @param {*} gridSize 
     * @param {*} tileCount 
     */
    constructor(gridSize, tileCount) {
        this.gridSize = gridSize;
        this.tileCount = tileCount;
        this.position = {x: 5, y: 15};
    }

    generateFood() {
        this.position = {
            x: Math.floor(Math.random() * this.tileCount),
            y: Math.floor(Math.random() * this.tileCount)
        };
    }

    drawFood(ctx) {
        ctx.fillStyle = '#f00';
        ctx.fillRect(this.position.x * this.gridSize, this.position.y * this.gridSize, this.gridSize - 2, this.gridSize - 2);
    }
}

/**
 * 
 */
class Game {
    /**
     * 
     */
    constructor() {
        this.canvas = document.getElementById('game-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.gridSize = 20;
        this.tileCount = this.canvas.width / this.gridSize;
        this.snake = new Snake(this.gridSize) // add snake
        this.food = new Food(this.gridSize, this.tileCount) // add food
        this.score = 0;
        this.bestScore = localStorage.getItem('best-score') || 0;
        this.gameLoop = null;
        this.bindEventListeners();
    }

    /**
     * 
     */
    bindEventListeners() {
        document.getElementById('start-btn').addEventListener('click', () => this.startGame());
        document.getElementById('restart-btn').addEventListener('click', () => this.startGame());
        document.addEventListener('keydown', (event) => this.handleKeyPress(event));
    }

    /**
     * 
     * @param {*} event 
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
     * 
     */
    startGame() {
        this.snake.reset();
        this.food.generateFood();
        this.score = 0;
        this.updateScore(); // update score
        document.getElementById('game-over-popup').style.display = 'none';
        document.getElementById('start-btn').style.display = 'none';
        this.gameLoop = setInterval(() => this.update(), 200);
    }

    /**
     * 
     */
    update() {
        this.clearCanvas();
        this.snake.move();
        this.checkFoodCollision(); // check collision for food
        this.snake.drawSnake(this.ctx);
        this.food.drawFood(this.ctx);
        if (this.snake.checkCollision(this.tileCount)) {
            this.gameOver();
        }
    }

    checkFoodCollision() {
        const head = this.snake.body[0];
        if (head.x === this.food.position.x && head.y === this.food.position.y) {
            
            this.food.generateFood();
            this.score++;
            this.updateScore();
        } else {
            this.snake.body.pop();
        }
    }

    /**
     * 
     */
    gameOver() {
        clearInterval(this.gameLoop);
        document.getElementById('final-score').textContent = `Your Score: ${this.score}`;
        document.getElementById('game-over-popup').style.display = 'block';
    }

    /**
     * 
     */
    clearCanvas() {
        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    /**
     * 
     */
    updateScore() {
        document.getElementById('score').textContent = `Score: ${this.score}`;
        if (this.score >= this.bestScore) {
            this.bestScore = this.score;
            localStorage.setItem('best-score', this.bestScore); // Save to local storage
            document.getElementById('best-score').textContent = `Best Score: ${this.bestScore}`;
        }
    }
}

const snakeGame = new Game() // Initialise the game 