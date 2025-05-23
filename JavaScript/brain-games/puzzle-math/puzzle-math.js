var score = 0;
var plays = 10;
var active = false;
var opt1, opt2, num1, num2, num3, options, result, answer, final, mainTimer;

/**
 * 
 */
function checkScores() {
    plays--;
    active = false;
    clearTimeout(mainTimer);
    setTimeout(function () {
        $('#correct').tooltip('hide');
        $('#wrong').tooltip('hide');
        document.getElementById("correct").classList.remove("glow-green");
        document.getElementById("wrong").classList.remove("glow-red");
        if (plays == 0) {
            //Display final Score
            console.log("Game has ended");
            $('#equation').tooltip('show');
            document.getElementById("equation").innerHTML = ("Final Score: " + score + "/10");
        } else {
            // Play More Rounds
            gameCountDown();
        }
    }, 2000)
}

/**
 * 
 */
function gameCountDown() {
    // Reset All Variables
    document.getElementById("equals").innerText = "?";
    getNewEquation();
    document.getElementById("timer").classList.add("timer");
    mainTimer = setTimeout(wrongAnswer, 10000);
}

/**
 * 
 * @param {*} inputNum 
 */
function correctAnswer(inputNum) {
    document.getElementById("timer").classList.remove("timer");
    document.getElementById("correct").classList.add("glow-green");
    document.getElementById("equals").innerText = final;
    $('#correct').tooltip('show');
    score++;
    checkScores();
}

/**
 * 
 * @param {*} inputNum 
 */
function wrongAnswer(inputNum) {
    document.getElementById("timer").classList.remove("timer");
    document.getElementById("wrong").classList.add("glow-red");
    document.getElementById("equals").innerText = final;
    $('#wrong').tooltip('show');
    checkScores();

}

/**
 * 
 * @param {*} buttonPressed 
 */
function pressButton(buttonPressed) {
    if (active) {
        switch (buttonPressed) {
            case 0: if (final == 0) { correctAnswer(0); } else { wrongAnswer(0) } break;
            case 1: if (final == 1) { correctAnswer(1); } else { wrongAnswer(1) } break;
            case 2: if (final == 2) { correctAnswer(2); } else { wrongAnswer(2) } break;
            case 3: if (final == 3) { correctAnswer(3); } else { wrongAnswer(3) } break;
            case 4: if (final == 4) { correctAnswer(4); } else { wrongAnswer(4) } break;
            case 5: if (final == 5) { correctAnswer(5); } else { wrongAnswer(5) } break;
            case 6: if (final == 6) { correctAnswer(6); } else { wrongAnswer(6) } break;
            case 7: if (final == 7) { correctAnswer(7); } else { wrongAnswer(7) } break;
            case 8: if (final == 8) { correctAnswer(8); } else { wrongAnswer(8) } break;
            case 9: if (final == 9) { correctAnswer(9); } else { wrongAnswer(9) } break;
        }
    }
}

/**
 * 
 * @param {*} e 
 */
function testForKeys(e) {
    if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105) && active) { // 0-9 Keys only
        switch (e.keyCode) {
            case 48: if (final == 0) { correctAnswer(0); } else { wrongAnswer(0) } break;
            case 49: if (final == 1) { correctAnswer(1); } else { wrongAnswer(1) } break;
            case 50: if (final == 2) { correctAnswer(2); } else { wrongAnswer(2) } break;
            case 51: if (final == 3) { correctAnswer(3); } else { wrongAnswer(3) } break;
            case 52: if (final == 4) { correctAnswer(4); } else { wrongAnswer(4) } break;
            case 53: if (final == 5) { correctAnswer(5); } else { wrongAnswer(5) } break;
            case 54: if (final == 6) { correctAnswer(6); } else { wrongAnswer(6) } break;
            case 55: if (final == 7) { correctAnswer(7); } else { wrongAnswer(7) } break;
            case 56: if (final == 8) { correctAnswer(8); } else { wrongAnswer(8) } break;
            case 57: if (final == 9) { correctAnswer(9); } else { wrongAnswer(9) } break;
            //Keycode
            case 96: if (final == 0) { correctAnswer(0); } else { wrongAnswer(0) } break;
            case 97: if (final == 1) { correctAnswer(1); } else { wrongAnswer(1) } break;
            case 98: if (final == 2) { correctAnswer(2); } else { wrongAnswer(2) } break;
            case 99: if (final == 3) { correctAnswer(3); } else { wrongAnswer(3) } break;
            case 100: if (final == 4) { correctAnswer(4); } else { wrongAnswer(4) } break;
            case 101: if (final == 5) { correctAnswer(5); } else { wrongAnswer(5) } break;
            case 102: if (final == 6) { correctAnswer(6); } else { wrongAnswer(6) } break;
            case 103: if (final == 7) { correctAnswer(7); } else { wrongAnswer(7) } break;
            case 104: if (final == 8) { correctAnswer(8); } else { wrongAnswer(8) } break;
            case 105: if (final == 9) { correctAnswer(9); } else { wrongAnswer(9) } break;
        }
    }
}

/**
 * 
 */
function startGame() {
    document.addEventListener("keydown", testForKeys);
    gameCountDown();
}

window.onload = function () {
    $('#startGame').modal({
        backdrop: 'static',
        keyboard: false
    }, 'show');
};

/**
 * 
 * @param {*} min 
 * @param {*} max 
 * @returns 
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * 
 * @param {*} option 
 * @returns 
 */
function getRandomOperator(option) {
    var temp = getRandomInt(1, option);
    switch (temp) {
        case 1: temp = '+';
            break;
        case 2: temp = '-';
            break;
        case 3: temp = '*';
            break;
        case 4: temp = '/';
            break;
        default: temp = 'broken';
    }
    return temp;
}

/**
 * 
 * @param {*} int1 
 * @param {*} op 
 * @param {*} int2 
 * @returns 
 */
function calculate(int1, op, int2) {
    if (op == '+') {
        return int1 + int2;
    }
    else if (op == '-') {
        return int1 - int2;
    }
    else if (op == '*') {
        return int1 * int2;
    }
    else if (op == '/') {
        return int1 / int2;
    }
}

/**
 * 
 */
function getNewEquation() {
    active = true;
    answer = getRandomInt(0, 9); // Always have Answer of 0-9
    var parenthesis = Math.random() >= 0.5; // Random Boolean
    num1 = getRandomInt(0, 25);
    num2 = getRandomInt(0, 25);
    var tempNum;
    if (num1 < num2) { // First Number is always bigger
        temp = num1;
        num1 = num2;
        num2 = temp;
    }
    if ((num1 % num2 == 0)) { // Divison is Whole Number
        opt1 = '/'
    }
    else if (num1 <= 10 || num2 <= 10) { // Multiplication is not Too Complicated
        opt1 = getRandomOperator(3);
    }
    else // Only Addition or Subtraction
    {
        opt1 = getRandomOperator(2);
    }
    result = calculate(num1, opt1, num2);
    if (result > answer) { // Result - Num3 = Answer
        opt2 = '-';
        num3 = result - answer;
        parenthesis = true;
    } // Result can be addition or subtraction
    else {//(result < answer)
        if (parenthesis) { // Just need Random Bool
            // Result + Num3 = Answer
            opt2 = '+';
            num3 = answer - result;
        }
        else {
            // Num3 - Result = Answer
            opt2 = '-';
            num3 = answer + result;
            parenthesis = false;
        }
    }

    if (parenthesis) { // Place around First Set
        final = calculate(result, opt2, num3);
        document.getElementById("left1").style.display = 'inline-block';
        document.getElementById("right1").style.display = 'inline-block';
        document.getElementById("left2").style.display = 'none';
        document.getElementById("right2").style.display = 'none';
        document.getElementById("num1").innerText = num1;
        document.getElementById("opt1").innerText = opt1;
        document.getElementById("num2").innerText = num2;
        document.getElementById("opt2").innerText = opt2;
        document.getElementById("num3").innerText = num3;
    }
    else {
        final = calculate(num3, opt2, result);
        document.getElementById("left2").style.display = 'inline-block';
        document.getElementById("right2").style.display = 'inline-block';
        document.getElementById("left1").style.display = 'none';
        document.getElementById("right1").style.display = 'none';
        document.getElementById("num1").innerText = num3;
        document.getElementById("opt1").innerText = opt2;
        document.getElementById("num2").innerText = num1;
        document.getElementById("opt2").innerText = opt1;
        document.getElementById("num3").innerText = num2;
    }
    //document.getElementById("equals").innerText = final;
    if (final != answer) {
        window.alert("For some reason, the expected answer and calculated answer were off!"); 
    }
}