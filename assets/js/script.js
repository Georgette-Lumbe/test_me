// the developer got help from YouTube Tutorials which is referenced in the README file (credits)
// get all required elements
const questionNumber =  document.querySelector('.questionNumber');
const questionText =  document.querySelector('.questionText');
const optionList =  document.querySelector('.optionList');

let questionCounter = 0;
let currentQuestion;
let accessibleQuestions = [];
let accessibleOptions = [];

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
    
    // get the position of questionIndex from the accessibleQuestion array
    const indexOne = accessibleQuestions.indexOf(questionIndex);
    
    // remove the questionIndex from the accessibleQuestion array, so that the question doesn't repeat
    accessibleQuestions.splice(indexOne,1);
   
    // set options and get the length of options
    const optionLength = currentQuestion.options.length

    // push options into accessibleOptions array
    for(let i = 0; i < optionLength; i++){
        accessibleOptions.push(i)
    }
   // create options in html
   for(let i = 0; i < optionLength; i++){
       const option = document.createElement("div");
       option.innerHTML = currentQuestion.options[i];
       option.id = i;
       option.className = "option";
       optionList.appendChild(option)
   }
    questionCounter++
}

function next (){
    if(questionCounter === quiz.length){
        console.log("questions are over")
    } else {
        getNewQuestion();
    }
}

window.onload = function(){

    // set all questions in accessibleQuestions array first
    setAccessibleQuestions();

    // call getNewQuestion second
    getNewQuestion();
}