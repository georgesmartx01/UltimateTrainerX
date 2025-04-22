/**
 * Password generator class for generating random passwords based on user-defined criteria.
 */
class PasswordGenerator {
    /**
     * Initialises the character sets for password generation.
     * The character sets include: lowercase and uppercase letters, numbers and symbols.
     */
    constructor() {
        this.lowercase = 'abcdefghijklmnopqrstuvwxyz'; // Lowercase letters
        this.uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Uppercase letters
        this.numbers = '0123456789'; // Numeric digits
        this.symbols = '!@#£$%^&*()_-+=[]{};:,.<>?'; // Special symbols
    }

    /**
     * Generates a random password based on selected criteria.
     * @param {number} length - The desired length of the generated password.
     * @param {Object} options - Configuration object specifying included character sets.
     * @param {boolean} options.includeLowerCase - Whether to include lowercase letters.
     * @param {boolean} options.includeUpperCase - Whether to include uppercase letters.
     * @param {boolean} options.includeNumbers - Whether to include numeric digits.
     * @param {boolean} options.includeLowerCase - Whether to include special characters.
     * @returns {string} The generated password or an error message if no character set is selected.
     */
    generatePassword(length, options) {
        let characterPool = '';
        
        if (options.includeLowerCase) {
            characterPool += this.lowercase;
        }

        if (options.includeUpperCase) {
            characterPool += this.uppercase;
        }

        if (options.includeNumbers) {
            characterPool += this.numbers;
        }

        if (options.includeSymbols) {
            characterPool += this.symbols;
        }

        if (characterPool === '')  {
            return 'Please select at least one option';
        }

        let password = '';

        for (let index = 0; index < length; index++) {
            const randomIndex = Math.floor(Math.random() * characterPool.length);
            password += characterPool[randomIndex];
        }
        
        return password;
    }
}

// Event listener for updating password dynamically while moving the slider
document.getElementById('length').addEventListener('input', (event) => {
    const length = event.target.value;
    document.getElementById('length-value').textContent = length;

    // Get selected options for password generation
    const options = {
        includeLowerCase: document.getElementById('include-lowercase').checked,
        includeUpperCase: document.getElementById('include-uppercase').checked,
        includeNumbers: document.getElementById('include-numbers').checked,
        includeSymbols: document.getElementById('include-symbols').checked
    };

    // Generate and update password dynamically
    const generator = new PasswordGenerator();
    const password = generator.generatePassword(length, options);
    document.getElementById('password').value = password;
});

// Event listener for generating a new password when clicking the button
document.getElementById('generate-pswd-btn').addEventListener('click', () => {
    const length = document.getElementById('length').value;

    // Get selected options for password generation
    const options = {
        includeLowerCase: document.getElementById('include-lowercase').checked,
        includeUpperCase: document.getElementById('include-uppercase').checked,
        includeNumbers: document.getElementById('include-numbers').checked,
        includeSymbols: document.getElementById('include-symbols').checked
    };

    // Generate a new password
    const generator = new PasswordGenerator();
    const password = generator.generatePassword(length, options);
    document.getElementById('password').value = password;
});

// Event listener for copying the generated password to clipboard
document.getElementById('copy').addEventListener('click', () => {
    const passwordField = document.getElementById('password');
    passwordField.select();
    passwordField.setSelectionRange(0, 99999); // Ensure selection works across all browsers.
    try {
        navigator.clipboard.writeText(passwordField.value);
        showCopyMessage('Successfully copied password to clipboard');
    } catch (error) {
        showCopyMessage('Failed to copy password');
    }
});

/**
 * Displays a temporary copy confirmation message.
 * @param {string} message - The message to be shown in the copy confirmation element.
 */
function showCopyMessage(message) {
    const copyMessageElement = document.getElementById('copy-message');
    copyMessageElement.textContent = message;
    copyMessageElement.style.display = 'block';
    setTimeout(() => {
        copyMessageElement.style.display = 'none';
    }, 2000);
}

/**
 * Sets up the password tooltip behaviour, toggling visibility and positioning dynamically.
 * Also allows the tooltip to be closable.
 */
function setupPasswordTooltip() {
    const button = document.getElementById('generate-pass-btn');
    const tooltip = document.getElementById('password-tooltip');
    const closeButton = document.querySelector('.password-generator-container .fa-circle-xmark');

    button.addEventListener('click', () => {
        tooltip.classList.toggle('show-tooltip'); // Toggle visibility
    });

    // Close tooltip when clicking the 'X' button
    closeButton.addEventListener('click', () => {
        tooltip.classList.remove('show-tooltip');
    });

    // Close tooltip when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!tooltip.contains(event.target) && event.target !== button) {
            tooltip.classList.remove('show-tooltip');
        }
    });

    // Close the tooltip when pressing the Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === "Escape") {
            tooltip.classList.remove('show-tooltip');
        }
    });
}

// Initialise tooltip behaviour on page load
document.addEventListener('DOMContentLoaded', setupPasswordTooltip);