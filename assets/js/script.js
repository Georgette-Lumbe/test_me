
//getting all required elements
const questionNumber =  document.querySelector('.questionNumber');
const questionText =  document.querySelector('.questionText');
const optionList =  document.querySelector('.optionList');

let questionCounter = 0;
let currentQuestion;
let accessibleQuestions = [];

// push the questions into accessibleQuestions Array
function setAccessibleQuestions(){
    const totalQuestion = quiz.length;
    for(let i = 0; i < totalQuestion; i++){
        accessibleQuestions.push(quiz[i])
    }
}

// set question number, question and options
function getNewQuestion(){

    // set question number
    questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of " + quiz.length;

    // set question text and get random question
    const questionIndex = accessibleQuestions[Math.floor(Math.random() * accessibleQuestions.length)]
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.question;
   // console.log(questionIndex)

}

window.onload = function(){

    // set all questions in accessibleQuestions array first
    setAccessibleQuestions();

    // call getNewQuestion second
    getNewQuestion();
}