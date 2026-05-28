const questionElement = document.getElementById("question");

const answerButtons = document.getElementById("answer-buttons");

let currentQuestion = questions[0];

questionElement.innerHTML = currentQuestion.question;

currentQuestion.answers.forEach(answer => {

  const button = document.createElement("button");

  button.innerHTML = answer.text;

  answerButtons.appendChild(button);

});