const chalk = require('chalk')
var readlineSync = require('readline-sync')

var score = 0;

var highScores = [
  {
    name : 'Harsh',
    score : 5,
  },
]


var userName = readlineSync.question(chalk.blue("What is your Name? "))

var welcomeMessage = ("Hello " + userName + ", welcome to the quiz.")

console.log(chalk.yellow(welcomeMessage))

console.log('-----------------')

function play(question, answer) {
  var userAnswer = readlineSync.question(chalk.red(question));
  if (userAnswer === answer) {
    console.log("Correct")
    score = score + 1;
  }else {
    console.log("Incorrect")
  }
}

var questions = [
  
    {
    question : "Where do I stay? ",
    answer : "Mumbai"
  }, {
    question : "What beverage do I prefer? ",
    answer : "Coffee"
  }, {
    question : "Which is my favourite dish? ",
    answer : "Biryani"
  }, {
    question : "Which subject do I like the most? ",
    answer : "History"
  }, {
    question : "Am I a morning person? ",
    answer : "No"
  }, 
  
]

for (i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer)
  console.log("Your score is " + score);
  console.log("--------------")
}

console.log("Your final score is " + score)

console.log("Here are the high scores. If you score higher than this, message me")

for (j=0; j<highScores.length; j++){
  console.log(highScores[j])
}