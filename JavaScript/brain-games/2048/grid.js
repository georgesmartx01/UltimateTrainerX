import Tile from "./tile";

const GRID_SIZE = 4;
const CELL_SIZE = 20;
const CELL_GAP = 2;

/**
 * Represents the game grid containing cells.
 */
export default class Grid {
  #cells;

  /**
   * Initialises the grid and its cells.
   * @param {HTMLElement} gridElement - The HTML element where the grid will be rendered.
   */
  constructor(gridElement) {
    gridElement.style.setProperty("--grid-size", GRID_SIZE);
    gridElement.style.setProperty("--cell-size", `${CELL_SIZE}vmin`);
    gridElement.style.setProperty("--cell-gap", `${CELL_GAP}vmin`);
    
    // Create cells and assign positions within the grid.
    this.#cells = createCellElements(gridElement).map((cellElement, index) => {
      return new Cell(
        cellElement,
        index % GRID_SIZE,
        Math.floor(index / GRID_SIZE)
      )
    })
  }

  /**
   * Gets all cells in the grid.
   * @returns {Cell[]} Array of Cell Instances
   */
  get cells() {
    return this.#cells;
  }

  /**
   * Gets cells arranged by row.
   * @returns {Cell[][]} 2D array of cells grouped by row.
   */
  get cellsByRow() {
    return this.#cells.reduce((cellGrid, cell) => {
      cellGrid[cell.y] = cellGrid[cell.y] || []
      cellGrid[cell.y][cell.x] = cell
      return cellGrid;
    }, []);
  }

  /**
   * Gets cells arranged by column.
   * @returns {Cell[][]} 2D array of cells grouped by column.
   */
  get cellsByColumn() {
    return this.#cells.reduce((cellGrid, cell) => {
      cellGrid[cell.x] = cellGrid[cell.x] || []
      cellGrid[cell.x][cell.y] = cell;
      return cellGrid;
    }, [])
  }

  /**
   * Gets all empty cells that do not contain a tile.
   * @returns {Cell[][]} Array of empty cells.
   */
  get #emptyCells() {
    return this.#cells.filter(cell => cell.tile == null);
  }

  /**
   * Selects a randomly empty cell from the grid.
   * @returns {Cell} A randomly chosen empty cell.
   */
  randomEmptyCell() {
    const randomIndex = Math.floor(Math.random() * this.#emptyCells.length);
    return this.#emptyCells[randomIndex];
  }
}

/**
 * Represents a single cell within the grid.
 */
class Cell {
  #cellElement;
  #x;
  #y;
  #tile;
  #mergeTile;

  /**
   * Creates a cell instance.
   * @param {HTMLElement} cellElement - The HTML element representing the cell.
   * @param {number} x - The x-coordinate of the cell.
   * @param {number} y - The y-coordinate of the cell.
   */
  constructor(cellElement, x, y) {
    this.#cellElement = cellElement;
    this.#x = x;
    this.#y = y;
  }

  /**
   * Gets the x-coordinate of the cell.
   * @returns {number} The x position of the cell.
   */
  get x() {
    return this.#x;
  }

  /**
   * Gets the y-coordinate of the cell.
   * @returns {number} The y position of the cell.
   */
  get y() {
    return this.#y;
  }

  /**
   * Gets the tile placed in this cell.
   * @returns {Tile|null} The tile occupying the cell.
   */
  get tile() {
    return this.#tile;
  }

  /**
   * Places a tile in the cell and updates its coordinates.
   * @param {Tile|null} value - The tile to be replaced or `null` to remove the tile.
   */
  set tile(value) {
    this.#tile = value;
    if (value == null) return;
    this.#tile.x = this.#x;
    this.#tile.y = this.#y;
  }

  /**
   * Gets the tile that is marked for merging.
   * @returns {Tile|null} The tile marked for merging.
   */
  get mergeTile() {
    return this.#mergeTile;
  }

  /**
   * Sets a merge tile and updates its coordinates.
   * @param {Tile|null} value - The tile to be merged or `null` to clear merging.
   */
  set mergeTile(value) {
    this.#mergeTile = value;
    if (value == null) return;
    this.#mergeTile.x = this.#x;
    this.#mergeTile.y = this.#y;
  }

  /**
   * Checks whether a tile can be placed in this cell.
   * A tile can be accepted if the cell is empty or contains a matching merge tile.
   * @param {Tile} tile - The tile to check
   * @returns {boolean} Whether the tile can be placed in this cell.
   */
  canAccept(tile) {
    return (
      this.tile == null ||
      (this.mergeTile == null && this.tile.value === tile.value)
    );
  }

  /**
   * Merges the current tile with the merge tile.
   * Updates the value and removes the merge tile.
   */
  mergeTiles() {
    if (this.tile == null || this.mergeTile == null) return;
    this.tile.value = this.tile.value + this.mergeTile.value;
    this.mergeTile.remove();
    this.mergeTile = null;
  }
}

/**
 * Creates cell elements and appends them to the grid.
 * @param {HTMLElement} gridElement - The HTML element where cells will be appended.
 * @returns {HTMLElement[]} Array of cell elements.
 */
function createCellElements(gridElement) {
  const cells = [];
  for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cells.push(cell);
    gridElement.append(cell);
  }
  return cells;
}