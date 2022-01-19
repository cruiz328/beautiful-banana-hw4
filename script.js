var questions;
var startBtn = document.getElementById("start-btn");
var quizContainer = document.getElementById('quiz');
fetch('https://opentdb.com/api.php?amount=5&category=29&difficulty=easy&type=multiple')
  .then(response => response.json())
  .then(data =>{
    questions = data;
  });


  startBtn.addEventListener("click", function(){
    buildQuiz()
  });


  function buildQuiz() {
    quizContainer.innerHTML = JSON.stringify(questions)
  }
