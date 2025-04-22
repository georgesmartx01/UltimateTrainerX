<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="CSS/password-generator-login.css">
</head>
<body>
    <!-- Password generator tooltip -->
    <div id="password-tooltip" class="password-generator-tooltip-container">
    <div class="password-generator-container">
        <button style="border: none; background: transparent;"><i class="fa-solid fa-circle-xmark"></i></button>
        <h1>Password Generator</h1>
        <div class="settings">
            <p>If you choose to use the password generator, make sure you save the password somewhere safe.</p>
            <br>
            <label for="length">Password Length: <span id="length-value">12</span></label>
            <input type="range" id="length" min="8" max="50" value="12" class="slider">
            
            <div class="checkbox-container">
                <label>
                    <input type="checkbox" id="include-lowercase" checked> Include Lowercase Letters
                </label>

                <label>
                    <input type="checkbox" id="include-uppercase" checked> Include Uppercase Letters
                </label>

                <label>
                    <input type="checkbox" id="include-numbers" checked> Include Numbers
                </label>

                <label>
                    <input type="checkbox" id="include-symbols"> Include Symbols
                </label>
            </div>
        </div>
        <br>
        <button id="generate-pswd-btn">Generate Password</button>
        <div class="output">
            <input type="text" id="password" readonly>
            <button id="copy">Copy</button>
        </div>
        <p id="copy-message"></p>
    </div>
    </div>
    <script src="JavaScript/password-generator/password-generator.js"></script>
</body>
</html>