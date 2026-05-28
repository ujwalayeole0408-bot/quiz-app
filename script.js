const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hyper Text Markup Language", correct: true },
      { text: "High Transfer Machine Language", correct: false },
      { text: "Hyperlinks Text Machine Language", correct: false },
      { text: "Home Tool Markup Language", correct: false }
    ]
  },

  {
    question: "Which language is used for styling websites?",
    answers: [
      { text: "HTML", correct: false },
      { text: "CSS", correct: true },
      { text: "Python", correct: false },
      { text: "C++", correct: false }
    ]
  },

  {
    question: "Which language is used for website logic?",
    answers: [
      { text: "Java", correct: false },
      { text: "Python", correct: false },
      { text: "JavaScript", correct: true },
      { text: "C", correct: false }
    ]
  },

  {
    question: "Which company developed JavaScript?",
    answers: [
      { text: "Google", correct: false },
      { text: "Netscape", correct: true },
      { text: "Microsoft", correct: false },
      { text: "Apple", correct: false }
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  resultBox.classList.add("hide");
  quizBox.classList.remove("hide");
  showQuestion();
}

function showQuestion() {
  resetState();

  let currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = "none";

  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const correct = selectedBtn.dataset.correct === "true";

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

  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  quizBox.classList.add("hide");
  resultBox.classList.remove("hide");

  scoreElement.innerText = `${score} / ${questions.length}`;
}

restartButton.addEventListener("click", startQuiz);

startQuiz();