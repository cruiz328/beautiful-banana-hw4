// variables 
var questionsEl = document.getElementById('.questions');
var gameTime;
var timeLeft = 60;
var startBtn = document.querySelector('#start-btn');
currentQuestionIndex = 0;
var questions = [
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
        correctAnswer: "marvel cinematic universe          "
    }
];
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];



var startBtn = document.getElementById("start-btn");
var quizContainer = document.getElementById('quiz');

startBtn.addEventListener("click", function () {
    console.log("start button works");

    nextQuestion()
});



document.addEventListener("click", function(e){
    console.log('htt', e.target.className)
    if(e.target.className === 'question') {
        currentQuestionIndex++;
        nextQuestion()
    }
})


function nextQuestion() {
    //    var currentQuestion = questions[currentQuestionIndex];
    //    currentQuestionIndex ++;

    //1. grab the n-th object in questions array
    console.log(questions)
    console.log(questions[0])
    console.log(questions[0].answers)
    console.log(questions[0].answers[1])

    //2. create an h3 with textContent = "who is batman"

    var output = [];
    //3. create buttons with textContent = answers stuff

    for (var i = 0; i < questions.length; i++) {
        var choices = [];
        for (var b = 0; b < questions[currentQuestionIndex].answers.length; b++) {

            choices.push(`
            <label>
                <input type="radio" class="question" name="question-${i}" value="${questions[i].answers[b]}"/>
                ${questions[i].answers[b]} 
            </label>
            `)
        }

        output.push(`
        <div class="questions">${questions[i].question}</div>
        <div class="answers">${choices.join('')}</div>
        `)
    }

    quizContainer.innerHTML = output[currentQuestionIndex];

}