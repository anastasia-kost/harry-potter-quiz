const quizData = [
  {
    question: "How did Harry get the scar on his forehead?",
    a: "In a quiddich accident",
    b: "He was attacked by a basilisk",
    c: "Lord Voldemort tried to kill him when he was a baby",
    d: "He was bitten by a werewolf",
    correct: "c",
  },
  {
    question: "Name Ron Weasley's pet rat",
    a: "Scratchy",
    b: "Scabbers",
    c: "Itchy",
    d: "Splinter",
    correct: "b",
  },
  {
    question: "Which animal is associated with Hufflepuff?",
    a: "Bear",
    b: "Badger",
    c: "Wolf",
    d: "Fox",
    correct: "b",
  },
  {
    question: "When unearthed, a mandrake will do what?",
    a: "Dance",
    b: "Burp",
    c: "Scream",
    d: "Laugh",
    correct: "c",
  },
  {
    question: "What creature is Aragog?",
    a: "Acromantula",
    b: "Dragon",
    c: "Hippogriff",
    d: "Boggart",
    correct: "a",
  },
  {
    question: "Who is Harry Potter's godfather?",
    a: "Remus Lupin",
    b: "Peter Pettigrew",
    c: "Lucius Malfoy",
    d: "Sirius Black",
    correct: "d",
  },
  {
    question: "Who was Hemione’s date at Hogwarts’ Yule Ball?",
    a: "Harry Potter",
    b: "Viktor Krum",
    c: "Ron Weasley",
    d: "Neville Longbottom",
    correct: "b",
  },
  {
    question: "The potion Felix Felicis is commonly known as?",
    a: "Liquid Luck",
    b: "Eternal love",
    c: "The Dark Knight",
    d: "Сonqueror of death",
    correct: "a",
  },
  {
    question: "What spell did Harry use to kill Lord Voldemort?",
    a: "Expelliarmus",
    b: "Expecto Patronum",
    c: "Avada Kedavra",
    d: "Accio",
    correct: "a",
  },
  {
    question: 'Finish the quote: "After all this time?..."',
    a: "Never",
    b: "Forever",
    c: "Always",
    d: "Again",
    correct: "c",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      if (score === quizData.length) {
        quiz.innerHTML = `
      <h2>Congratulations! You know everything about The Boy Who Lived!<br>${score}/${quizData.length} </h2>
      <button onClick="location.reload()">Reload</button>
      `;
      }
      if (score < quizData.length) {
        quiz.innerHTML = `
      <h2>Good job! But you should restore your knowledge about Harry Potter and his friends!<br>${score}/${quizData.length} </h2>
      <button onClick="location.reload()">Reload</button>
      `;
      }
      if (score < 5) {
        quiz.innerHTML = `
      <h2>Oh no! It's time to review movies or reread books! Good luck!<br>${score}/${quizData.length} </h2>
      <button onClick="location.reload()">Reload</button>
      `;
      }
    }
  }
});

//You scored ${score} correct answers out of ${quizData.length}</h2>
