/**
 * Represents the 2048 game logic and board management.
 */
class Game2048 {
	/**
	 * Create a new instance of the 2048 game
	 */
	constructor() {
		this.gameBoard = document.getElementById('game-board');
		this.scoreDisplay = document.getElementById('score');
		this.restartButton = document.getElementById('restart');
		this.initialiseGame();
		this.setupEventListeners();
	}

	/**
	 * Initialises the game state, including the tile array and score.
	 */
	initialiseGame() {
		this.tiles = Array(16).fill(null);
		this.score = 0;
		this.addRandomTile();
		this.renderBoard();
	}

	/**
	 * Sets up event listeners for restart and keyboard inputs.
	 */
	setupEventListeners() {
		this.restartButton.addEventListener('click', () => this.initialiseGame());
		document.addEventListener('keydown', event => this.handleKeyDown(event));
	}

	/** 
	 * Handles keydown events for controlling tile elements
	 * @param {KeyboardEvent} event - The keydown event object.
	*/
	handleKeyDown(event) {
		switch(event.key) {
			case 'ArrowUp':
				this.moveTiles('up');
				break;
			case 'ArrowDown':
				this.moveTiles('down');
				break;
			case 'ArrowLeft':
				this.moveTiles('left');
				break;
			case 'ArrowRight':
				this.moveTiles('right');
				break;
		}
	}

	/**
	 * Moves and merges tiles based on the specified direction.
	 * @param {string} direction - The movement direction ('up', 'down', 'left', 'right').
	 */
	moveTiles(direction) {
		let moved = false;
		const merged = Array(16).fill(false);

		/**
		 * Moves a tile from one index to another.
		 * @param {number} from - The starting tile index.
		 * @param {number} to - The destination tile index.
		 */
		const moveTile = (from, to) => {
			if (this.tiles[to] === null) {
				this.tiles[to] = this.tiles[from];
				this.tiles[from] = null;
				moved = true;
			} else if (this.tiles[to] === this.tiles[from] && !merged[to]) {
				this.tiles[to] += this.tiles[from];
				this.score += this.tiles[to];
				this.tiles[from] = null;
				merged[to] = true;
				moved = true;
			}
		};

		/**
		 * Traverses tiles in a predefined order based on direction
		 * @param {number[]} indices - Array of tile indices to process.
		 */
		const traverse = (indices) => {
			indices.forEach(index => {
				if (this.tiles[index] !== null) {
					let newIndex = index;
					while (true) {
						const nextIndex = this.getNextIndex(newIndex, direction);
						if (nextIndex === null 
							|| (this.tiles[nextIndex] !== null 
								&& this.tiles[nextIndex] !== this.tiles[newIndex])) break;
						moveTile(newIndex, nextIndex);
						newIndex = nextIndex;
					}
				}
			});
		};

		const order = this.createOrder(direction);
		traverse(order);

		if (moved) {
			this.addRandomTile();
			this.renderBoard();
		}
	};

	/**
	 * Creates an ordered list of tile indices based on movement direction.
	 * @param {string} direction - Movement direction.
	 * @returns {number[]} Ordered indices for movement processing.
	 */
	createOrder(direction) {
		const order = [];

		for (let row = 0; row < 4; row++) {
			for (let column = 0; column < 4; column++) {
				const index = row * 4 + column;
				if (direction === 'up' || direction === 'down') {
					order.push(index);
				} else {
					order.unshift(index);
				}
			}
		}
		if (direction === 'up' || direction == 'down') {
			return order;
		} else {
			const rotatedOrder = [];
			for (let i = 0; i < 4; i++) {
				for (let j = 0; j < 4; j++) {
					rotatedOrder.push(order[j * 4 + i]);
				}
			}
			return rotatedOrder;
		}
	}

	/**
	 * Calculates the next tile index for movement.
	 * @param {number} index - The current tile index.
	 * @param {string} direction - Movement direction
	 * @returns {number|nul} Next tile index or null if out of bounds. 
	 */
	getNextIndex(index, direction) {
		const row = Math.floor(index / 4);
		const column = index % 4;
		switch (direction) {
			case 'up': return row > 0 ? index - 4 : null;
			case 'down': return row < 3 ? index + 4 : null;
			case 'left': return column > 0 ? index - 3 : null;
			case 'right': return column < 3 ? index + 1 : null;
		}
	}

	/**
	 * Renders the board by updating tile elements.
	 */
	renderBoard() {
		this.gameBoard.innerHTML = '';
		this.tiles.forEach(tile => {
			const tileElement = document.createElement('div');
			tileElement.classList.add('tile');
			
			if (tile !== null) {
				tileElement.classList.add(`tile-${tile}`);
				tileElement.textContent = tile;
			}
			this.gameBoard.appendChild(tileElement);
		});
		this.scoreDisplay.textContent = `Score: ${this.score}`;
	}

	/**
	 * Adds a random tile (either 2 or 4) to an empty position on the board.
	 */
	addRandomTile() {
		const emptyTiles = this.tiles.map((tile, index) => tile === null ? index : null).filter(index => index !== null);
		if (emptyTiles.length === 0) return;
		const randomIndex = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
		this.tiles[randomIndex] = Math.random() < 0.9 ? 2 : 4;
	}
}

// Initialise the game when the Document Object Model (DOM) is fully loaded.
document.addEventListener('DOMContentLoaded', () => new Game2048());