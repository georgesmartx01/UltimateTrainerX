/**
 * 
 */
const progressBar = document.querySelector(".progress-bar"),

/**
 * 
 */
progressText = document.querySelector(".progress-text");

/**
 * 
 * @param {*} value 
 */
function progress(value) {
    const percentage = (value / time) * 100;
    progressBar.style.width = `${percentage}%`;
    progressText.innerHTML = `${value}`;
}

/**
 * 
 */
let questions = [],

/**
 *
 */
time = 30,

/**
 * 
 */
score = 0,

/**
 * 
 */
currentQuestion,

/**
 * 
 */
timer;

/**
 * 
 */
const startBtn = document.querySelector(".start-btn"),

/**
 * 
 */
numQuestions = document.querySelector("#num-questions"),

/**
 * 
 */
category = document.querySelector("#category"),

/**
 * 
 */
difficulty = document.querySelector("#difficulty"),

/**
 * 
 */
timerPerQuestion = document.querySelector("#time"),

/**
 * 
 */
quiz = document.querySelector(".quiz"),

/**
 * 
 */
startScreen = document.querySelector(".start-screen");

function startAssessment() {
    const num = numQuestions.value;
    let cat = category.value
    let diff = difficulty.value;
    
    /**
     * API URL
     */
    const url = `https://opentdb.com/api?amount=${num}&category=${cat}&difficulty=${diff}&type=multiple`;

    fetch(url).then((res) => res.json()).then((data) => {
        questions = data.results;
        startScreen.classList.add("hide");
        quiz.classList.remove("hide");
        currentQuestion = 1;
        showQuestion(questions[0]);
    });
}

startBtn.addEventListener("click", startAssessment);

function showQuestion(question) {
    const questionText = document.querySelector(".question"),
    answersWrapper = document.querySelector(".answer-wrapper"),
    questionNumber = document.querySelector(".number");
    questionText.innerHTML = question.question;

    const answers = [...question.incorrect_answers, question.correct_answers.toString()];

    // correct answer will always be last
    // shuffle the array
    answers.sort(() => Math.random() - 0.5);
    answersWrapper.innerHTML = "";
    answers.forEach((answer) => {
        answersWrapper.innerHTML += `
        <div class="answer">
            <span class="text">${answer}</span>
            <span class="checkbox">
                <span class="icon">✔</span>
            </span>
        </div>
        `;
    });

    questionNumber.innerHTML = ``;
}