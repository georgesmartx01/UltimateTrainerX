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
            <button id="close-btn"><i class="fa-solid fa-circle-xmark"></i></button>
            <h1>Password Generator</h1>
            <p>Use this tool to generate a secure password and **save it somewhere safe**.</p>

            <!-- Password Settings -->
            <label for="length">Password Length: <span id="length-value">12</span></label>
            <input type="range" id="length" min="8" max="50" value="12" class="slider">

            <div class="checkbox-container">
                <label><input type="checkbox" id="include-lowercase" checked> Lowercase Letters</label>
                <label><input type="checkbox" id="include-uppercase" checked> Uppercase Letters</label>
                <label><input type="checkbox" id="include-numbers" checked> Numbers</label>
                <label><input type="checkbox" id="include-symbols"> Symbols</label>
            </div>

            <button id="generate-pswd-btn">Generate Password</button>
            <div class="output">
                <input type="text" id="password" readonly>
                <button id="copy">Copy</button>
            </div>
            <p id="copy-message"></p>
        </div>
    </div>
    
    <script src="JavaScript/password-generator/password-generator.js"></script>
    <script>
        // Close tooltip function
        document.getElementById("close-btn").addEventListener("click", function() {
            document.getElementById("password-tooltip").style.display = "none";
        });
    </script>
</body>
</html>
