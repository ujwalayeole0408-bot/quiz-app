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
      { text: "color", correct: true },
      { text: "background", correct: false },
      { text: "text-style", correct: false }
    ]
  },

  {
    category: "js",
    question: "Which keyword declares variable?",
    answers: [
      { text: "var", correct: true },
      { text: "string", correct: false },
      { text: "int", correct: false },
      { text: "define", correct: false }
    ]
  },

  {
    category: "html",
    question: "Which tag creates a paragraph?",
    answers: [
      { text: "<p>", correct: true },
      { text: "<h1>", correct: false },
      { text: "<div>", correct: false },
      { text: "<br>", correct: false }
    ]
  },

  {
    category: "css",
    question: "Which CSS property changes background color?",
    answers: [
      { text: "bgcolor", correct: false },
      { text: "background-color", correct: true },
      { text: "color", correct: false },
      { text: "background-style", correct: false }
    ]
  },

  {
    category: "js",
    question: "Which symbol is used for comments in JS?",
    answers: [
      { text: "//", correct: true },
      { text: "##", correct: false },
      { text: "<!-- -->", correct: false },
      { text: "**", correct: false }
    ]
  },

  {
    category: "html",
    question: "Which tag inserts image?",
    answers: [
      { text: "<img>", correct: true },
      { text: "<image>", correct: false },
      { text: "<pic>", correct: false },
      { text: "<src>", correct: false }
    ]
  },

  {
    category: "css",
    question: "Which property makes text bold?",
    answers: [
      { text: "font-style", correct: false },
      { text: "font-weight", correct: true },
      { text: "text-bold", correct: false },
      { text: "bold", correct: false }
    ]
  },

  {
    category: "js",
    question: "Which function prints in console?",
    answers: [
      { text: "console.log()", correct: true },
      { text: "print()", correct: false },
      { text: "echo()", correct: false },
      { text: "write()", correct: false }
    ]
  },

  {
    category: "html",
    question: "Which tag creates line break?",
    answers: [
      { text: "<br>", correct: true },
      { text: "<break>", correct: false },
      { text: "<lb>", correct: false },
      { text: "<newline>", correct: false }
    ]
  },

  {
    category: "css",
    question: "Which property changes font size?",
    answers: [
      { text: "font-size", correct: true },
      { text: "text-size", correct: false },
      { text: "size", correct: false },
      { text: "font-style", correct: false }
    ]
  },

  {
    category: "js",
    question: "Which operator means equal value and type?",
    answers: [
      { text: "===", correct: true },
      { text: "==", correct: false },
      { text: "=", correct: false },
      { text: "!=", correct: false }
    ]
  },

  {
    category: "html",
    question: "Which tag creates hyperlink?",
    answers: [
      { text: "<a>", correct: true },
      { text: "<link>", correct: false },
      { text: "<href>", correct: false },
      { text: "<url>", correct: false }
    ]
  },

  {
    category: "css",
    question: "Which property centers text?",
    answers: [
      { text: "align", correct: false },
      { text: "text-align", correct: true },
      { text: "center", correct: false },
      { text: "font-align", correct: false }
    ]
  },

  {
    category: "js",
    question: "Which loop repeats code?",
    answers: [
      { text: "for", correct: true },
      { text: "repeat", correct: false },
      { text: "loop", correct: false },
      { text: "iterate", correct: false }
    ]
  },

  {
    category: "html",
    question: "Which tag creates unordered list?",
    answers: [
      { text: "<ul>", correct: true },
      { text: "<ol>", correct: false },
      { text: "<li>", correct: false },
      { text: "<list>", correct: false }
    ]
  },

  {
    category: "css",
    question: "Which property adds space inside element?",
    answers: [
      { text: "margin", correct: false },
      { text: "padding", correct: true },
      { text: "spacing", correct: false },
      { text: "border", correct: false }
    ]
  },

  {
    category: "js",
    question: "Which keyword creates constant variable?",
    answers: [
      { text: "const", correct: true },
      { text: "var", correct: false },
      { text: "let", correct: false },
      { text: "constant", correct: false }
    ]
  },

  {
    category: "html",
    question: "Which tag creates table row?",
    answers: [
      { text: "<tr>", correct: true },
      { text: "<td>", correct: false },
      { text: "<table>", correct: false },
      { text: "<th>", correct: false }
    ]
  },

  {
    category: "css",
    question: "Which property changes text color?",
    answers: [
      { text: "color", correct: true },
      { text: "font-color", correct: false },
      { text: "text-color", correct: false },
      { text: "background-color", correct: false }
    ]
  },

  {
    category: "js",
    question: "Which method converts JSON to object?",
    answers: [
      { text: "JSON.parse()", correct: true },
      { text: "JSON.stringify()", correct: false },
      { text: "JSON.object()", correct: false },
      { text: "JSON.convert()", correct: false }
    ]
  },

  {
    category: "html",
    question: "Which tag creates checkbox?",
    answers: [
      { text: "input type='checkbox'", correct: true },
      { text: "<checkbox>", correct: false },
      { text: "<check>", correct: false },
      { text: "<tick>", correct: false }
    ]
  },

  {
    category: "css",
    question: "Which property adds shadow?",
    answers: [
      { text: "box-shadow", correct: true },
      { text: "shadow", correct: false },
      { text: "border-shadow", correct: false },
      { text: "text-shadow", correct: false }
    ]
  },

  {
    category: "js",
    question: "Which method selects element by ID?",
    answers: [
      { text: "getElementById()", correct: true },
      { text: "querySelectorAll()", correct: false },
      { text: "getElements()", correct: false },
      { text: "selectId()", correct: false }
    ]
  },

  {
    category: "html",
    question: "Which tag creates heading?",
    answers: [
      { text: "<h1>", correct: true },
      { text: "<head>", correct: false },
      { text: "<title>", correct: false },
      { text: "<p>", correct: false }
    ]
  },
  {
  category: "gk",
  question: "What is the capital of India?",
  answers: [
    { text: "Mumbai", correct: false },
    { text: "Delhi", correct: true },
    { text: "Pune", correct: false },
    { text: "Kolkata", correct: false }
  ]
},

{
  category: "gk",
  question: "Who is known as the Father of the Nation in India?",
  answers: [
    { text: "Bhagat Singh", correct: false },
    { text: "Mahatma Gandhi", correct: true },
    { text: "Subhash Chandra Bose", correct: false },
    { text: "Jawaharlal Nehru", correct: false }
  ]
},

{
  category: "gk",
  question: "Which planet is known as the Red Planet?",
  answers: [
    { text: "Earth", correct: false },
    { text: "Mars", correct: true },
    { text: "Venus", correct: false },
    { text: "Jupiter", correct: false }
  ]
},

{
  category: "gk",
  question: "How many continents are there in the world?",
  answers: [
    { text: "5", correct: false },
    { text: "6", correct: false },
    { text: "7", correct: true },
    { text: "8", correct: false }
  ]
},

{
  category: "gk",
  question: "Which is the largest ocean in the world?",
  answers: [
    { text: "Indian Ocean", correct: false },
    { text: "Atlantic Ocean", correct: false },
    { text: "Pacific Ocean", correct: true },
    { text: "Arctic Ocean", correct: false }
  ]
},

{
  category: "gk",
  question: "Who invented the telephone?",
  answers: [
    { text: "Albert Einstein", correct: false },
    { text: "Alexander Graham Bell", correct: true },
    { text: "Nikola Tesla", correct: false },
    { text: "Thomas Edison", correct: false }
  ]
},

{
  category: "gk",
  question: "What is the national animal of India?",
  answers: [
    { text: "Lion", correct: false },
    { text: "Tiger", correct: true },
    { text: "Elephant", correct: false },
    { text: "Leopard", correct: false }
  ]
},

{
  category: "gk",
  question: "Which gas do plants absorb from the atmosphere?",
  answers: [
    { text: "Oxygen", correct: false },
    { text: "Nitrogen", correct: false },
    { text: "Carbon Dioxide", correct: true },
    { text: "Hydrogen", correct: false }
  ]
},

{
  category: "gk",
  question: "Which is the smallest prime number?",
  answers: [
    { text: "0", correct: false },
    { text: "1", correct: false },
    { text: "2", correct: true },
    { text: "3", correct: false }
  ]
},

{
  category: "gk",
  question: "Which country is famous for the Eiffel Tower?",
  answers: [
    { text: "Italy", correct: false },
    { text: "Germany", correct: false },
    { text: "France", correct: true },
    { text: "Spain", correct: false }
  ]
},
];

let timer;
let timeLeft = 10;
const timerElement = document.getElementById("timer");

let filteredQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {

  const selectedCategory =
    document.getElementById("category").value;

  if (selectedCategory === "all") {

    filteredQuestions = [...questions];

  } else {

    filteredQuestions = questions.filter(
      q => q.category === selectedCategory
    );
  }

  filteredQuestions = filteredQuestions
    .sort(() => Math.random() - 0.5)
    .slice(0, Math.min(25, filteredQuestions.length));

  currentQuestionIndex = 0;
  score = 0;

  showQuestion();
}
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");

function showQuestion() {

  resetState();
  startTimer();

  let currentQuestion =
    filteredQuestions[currentQuestionIndex];

  questionElement.innerText =
  `Question ${currentQuestionIndex + 1}/25: ${currentQuestion.question}`;

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

  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function startTimer() {

  clearInterval(timer);

  timeLeft = 10;

  timerElement.innerText = `Time Left: ${timeLeft}s`;

  timer = setInterval(() => {

    timeLeft--;

    timerElement.innerText = `Time Left: ${timeLeft}s`;

    if (timeLeft <= 0) {

      clearInterval(timer);

      currentQuestionIndex++;

      if (currentQuestionIndex < filteredQuestions.length) {

        showQuestion();

      } else {

        questionElement.innerText =
          `Quiz Finished 🎉 Your Score: ${score}/25`;

        answerButtons.innerHTML = "";

        nextBtn.style.display = "none";

        timerElement.innerText = "";
      }
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
nextBtn.addEventListener("click", () => {

  currentQuestionIndex++;

  if (currentQuestionIndex < filteredQuestions.length) {

    showQuestion();

  } else {

    clearInterval(timer);

    questionElement.innerText =
      `Quiz Finished 🎉 Your Score: ${score}/25`;

    answerButtons.innerHTML = "";

    nextBtn.style.display = "none";

    timerElement.innerText = "Quiz Over";
  }
});

const startBtn = document.getElementById("start-btn");
const loginBox = document.getElementById("login-box");
const quizBox = document.getElementById("quiz-box");

startBtn.addEventListener("click", () => {

  const username =
    document.getElementById("username").value;

  if (username === "") {
    alert("Please enter your name");
    return;
  }

  document.getElementById("player-name").innerText =
    `Player: ${username}`;

  loginBox.classList.add("hide");

  quizBox.classList.remove("hide");

  startQuiz();
});
// Dark Mode Toggle
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