const questions = [
  {
    category: "html",
    question: "What does HTML stand for?",
    answers: [
      { text: "Hyper Text Markup Language", correct: true },
      { text: "Home Tool Markup Language", correct: false },
      { text: "Hyperlinks Text Mark Language", correct: false },
      { text: "Hyper Tool Machine Language", correct: false }
    ]
  },

  {
    category: "css",
    question: "Which property changes text color?",
    answers: [
      { text: "font-color", correct: false },
      { text: "text-color", correct: false },
      { text: "color", correct: true },
      { text: "background", correct: false }
    ]
  },

  {
    category: "js",
    question: "Which keyword declares variable?",
    answers: [
      { text: "int", correct: false },
      { text: "var", correct: true },
      { text: "string", correct: false },
      { text: "define", correct: false }
    ]
  }
];

/* Duplicate questions to make 50+ */
while (questions.length < 50) {
  questions.push(...questions.slice(0, 3));
}

const loginBox = document.getElementById("login-box");
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");

const usernameInput = document.getElementById("username");
const playerName = document.getElementById("player-name");

const timerElement = document.getElementById("timer");
const progressBar = document.getElementById("progress-bar");

const resultText = document.getElementById("result-text");

const categorySelect = document.getElementById("category");

let filteredQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 15;

startBtn.addEventListener("click", startQuiz);

function startQuiz() {

  const username = usernameInput.value.trim();

  if (username === "") {
    alert("Please enter your name");
    return;
  }

  localStorage.setItem("quizUser", username);

  playerName.innerText = `👋 ${username}`;

  loginBox.classList.add("hide");
  quizBox.classList.remove("hide");

  const category = categorySelect.value;

  if (category === "all") {
    filteredQuestions = [...questions];
  } else {
    filteredQuestions = questions.filter(
      q => q.category === category
    );
  }

  shuffleQuestions();

  currentQuestionIndex = 0;
  score = 0;

  showQuestion();
}

function shuffleQuestions() {
  filteredQuestions.sort(() => Math.random() - 0.5);
}

function showQuestion() {

  resetState();

  startTimer();

  let currentQuestion = filteredQuestions[currentQuestionIndex];

  questionElement.innerText =
    `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

  let progress =
    ((currentQuestionIndex) / filteredQuestions.length) * 100;

  progressBar.style.width = `${progress}%`;

  currentQuestion.answers.forEach(answer => {

    const button = document.createElement("button");

    button.innerText = answer.text;

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", selectAnswer);

    answerButtons.appendChild(button);
  });
}

function resetState() {

  nextBtn.style.display = "none";

  clearInterval(timer);

  timeLeft = 15;

  timerElement.innerText = timeLeft;

  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function startTimer() {

  timer = setInterval(() => {

    timeLeft--;

    timerElement.innerText = timeLeft;

    if (timeLeft <= 0) {

      clearInterval(timer);

      nextQuestion();
    }

  }, 1000);
}

function selectAnswer(e) {

  clearInterval(timer);

  const selectedBtn = e.target;

  const correct =
    selectedBtn.dataset.correct === "true";

  if (correct) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("wrong");
  }

  Array.from(answerButtons.children).forEach(button => {

    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }

    button.disabled = true;
  });

  nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", nextQuestion);

function nextQuestion() {

  currentQuestionIndex++;

  if (currentQuestionIndex < filteredQuestions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {

  quizBox.classList.add("hide");

  resultBox.classList.remove("hide");

  let emoji = "😢";

  if (score > 40) {
    emoji = "🔥";
  } else if (score > 25) {
    emoji = "😎";
  }

  resultText.innerHTML =
    `You scored ${score}/${filteredQuestions.length} ${emoji}`;
}

restartBtn.addEventListener("click", () => {
  location.reload();
});

/* Dark Mode */

const darkModeBtn =
  document.getElementById("dark-mode-toggle");

darkModeBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    darkModeBtn.innerText = "☀️";
  } else {
    darkModeBtn.innerText = "🌙";
  }
});