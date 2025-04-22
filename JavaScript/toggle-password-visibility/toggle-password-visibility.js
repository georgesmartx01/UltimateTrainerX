/**
 * Toggles visibility for password fields independently.
 * @param {Event} event - The click event from the eye icon.
 * @param {string} inputId - The ID of the password field to toggle.
 */
function togglePasswordVisibility(event, inputId) {
    const inputField = document.getElementById(inputId);
    const toggleIcon = event.target;

    if (!inputField) return; // Ensure the input exists

    // Toggle password visibility
    inputField.type = inputField.type === "password" ? "text" : "password";

    // Toggle eye icon class
    toggleIcon.classList.toggle("fa-eye-slash");
    toggleIcon.classList.toggle("fa-eye");

    // Apply dynamic positioning if it's the login form
    if (inputId === "loginPassInput") {
        toggleIcon.style.right = "50px"; // Ensures correct spacing between eye and lock icons
    }
}

/**
 * Validates that password and confirm password fields match before submission.
 */
function validatePasswordMatch() {
    const password = document.getElementById('passwordInput').value;
    const confirmPassword = document.getElementById('confirmInput').value;
    const errorMessage = document.getElementById('password-error');

    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match!";
        errorMessage.style.color = "red";
        return false; // Prevent form submission
    } else {
        errorMessage.textContent = ""; // Clear error if passwords match
        return true;
    }
}