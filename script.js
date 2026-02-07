const quizData = [
    {
        question: "Which language runs in a web browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        answer: "JavaScript"
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Central Style Sheets",
            "Cascading Style Sheets",
            "Computer Style Sheets",
            "Creative Style Sheets"
        ],
        answer: "Cascading Style Sheets"
    },
    {
        question: "Which HTML tag is used for JavaScript?",
        options: ["<js>", "<script>", "<javascript>", "<code>"],
        answer: "<script>"
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const quizEl = document.getElementById("quiz");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");

loadQuestion();

function loadQuestion() {
    feedbackEl.textContent = "";
    optionsEl.innerHTML = "";

    let q = quizData[currentQuestion];
    questionEl.textContent = q.question;

    q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.onclick = () => checkAnswer(option);
        optionsEl.appendChild(btn);
    });
}

function checkAnswer(selected) {
    const correct = quizData[currentQuestion].answer;

    if (selected === correct) {
        feedbackEl.textContent = "Correct!";
        feedbackEl.style.color = "green";
        score++;
    } else {
        feedbackEl.textContent = "Wrong! Correct answer is: " + correct;
        feedbackEl.style.color = "red";
    }

    Array.from(optionsEl.children).forEach(btn => {
        btn.disabled = true;
    });
}

nextBtn.onclick = () => {
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
};

function showResult() {
    quizEl.classList.add("hide");
    resultEl.classList.remove("hide");
    scoreEl.textContent = `${score} / ${quizData.length}`;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    quizEl.classList.remove("hide");
    resultEl.classList.add("hide");
    loadQuestion();
}
