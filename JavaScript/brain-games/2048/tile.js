/**
 * Represents a tile in the same grid.
 */
export default class Tile {
    #tileElement
    #x
    #y
    #value
  
    /**
     * Creats a new tile instance
     * @param {HTMLElement} tileContainer - The container where the tile will be appended.
     * @param {number} value - The initial value of the file, defaulting to 2 or 4.
     */
    constructor(tileContainer, value = Math.random() > 0.5 ? 2 : 4) {
      this.#tileElement = document.createElement("div")
      this.#tileElement.classList.add("tile")
      tileContainer.append(this.#tileElement)
      this.value = value
    }

    /**
     * Gets the current value of the tile.
     * @returns {number} The value of the tile.
     */
    get value() {
      return this.#value
    }

    /**
     * Sets the value of the tile and updates its appearance
     * @param {number} v - The value of the new tile.
     */
    set value(v) {
      this.#value = v
      this.#tileElement.textContent = v
      const power = Math.log2(v)
      const backgroundLightness = 100 - power * 9
      this.#tileElement.style.setProperty(
        "--background-lightness",
        `${backgroundLightness}%`
      )
      this.#tileElement.style.setProperty(
        "--text-lightness",
        `${backgroundLightness <= 50 ? 90 : 10}%`
      )
    }

    /**
     * Sets the x-coordinate of the tile.
     * @param {number} value - The x-coordinate value.
     */
    set x(value) {
      this.#x = value
      this.#tileElement.style.setProperty("--x", value)
    }

    /**
     * Sets the y-coordinate of the tile.
     * @param {number} value - The y-coordinate value.
     */
    set y(value) {
      this.#y = value
      this.#tileElement.style.setProperty("--y", value)
    }

    /**
     * Remove the tile from the Document Object Model (DOM).
     */
    remove() {
      this.#tileElement.remove()
    }

    /**
     * Waits for the transition or animation to finish before proceeding.
     * @param {boolean} animation - Whether to wait for an animation (`true`) or a transition (`false`).
     * @returns {Promise<void>} A promise that resolves when the main transition/animation ends.
     */
    waitForTransition(animation = false) {
      return new Promise(resolve => {
        this.#tileElement.addEventListener(
          animation ? "animationend" : "transitionend",
          resolve,
          {
            once: true,
          }
        )
      })
    }
  }