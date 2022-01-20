// variables 
var gameTime;
var timeLeft = 60;
var startBtn = document.querySelector('#start');
currentIndex = 0; var questions = [
     {
       queNum: 1,
        question: "Who is Batman",
       answers: ["bruce wayne", "david wu", "christian ruiz"],
       correctAnswer: "bruce wayne"
     },
     {
        queNum: 2,
        question: "Who can run at super speed?",
       answers: ["joseph cantos", "barry allen", "christian ruiz"],
       correctAnswer: "barry allen"
    },
    {
        queNum: 3,
        question: "Who is Spiderman's love interest?",
       answers: ["laura gutierrez", "emma watson", "mj watson"],
       correctAnswer: "mj watson"
    },
    {
        queNum: 4,
        question: "what universe is the avengers set in?",
       answers: ["marvel cinematic universe", "dc comics cinematic universe", "star wars cinematic universe"],
       correctAnswer: "bruce wayne"
    }
   ];
   const highScores =JSON.parse(localStorage.getItem("highScores")) || [];
   

   
   var startBtn = document.getElementById("start-btn");
   var quizContainer = document.getElementById('quiz');
   
   startBtn.addEventListener("click", function(){
     nextQuestion()
   });
   
   
   function nextQuestion() {
     
     //1. grab the n-th object in questions array
     console.log(questions)
     console.log(questions[0])
     console.log(questions[0].answers)
     console.log(questions[0].answers[1])
   
     //2. create an h3 with textContent = "who is batman"
   
     //3. create buttons with textContent = answers stuff
   
   
     
     quizContainer.append()
   
   }