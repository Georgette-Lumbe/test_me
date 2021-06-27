// the developer got help from YouTube Tutorials which is referenced in the README file (credits)
// get all required elements
const questionNumber =  document.querySelector('.questionNumber');
const questionText =  document.querySelector('.questionText');
const optionList =  document.querySelector('.optionList');
const answersIndicatorBoxes = document.querySelector('.indicator');
const infoBox = document.querySelector('.infoBox');
const quizBox = document.querySelector('.quizBox');
const feedbackBox = document.querySelector('.feedbackBox');

let questionCounter = 0;
let currentQuestion;
let accessibleQuestions = [];
let accessibleOptions = [];
let correctAnswers = 0;
let attempt = 0;

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

    optionList.innerHTML = '';
    let animationDelay = 0.15;

   // create options in html
   for(let i = 0; i < optionLength; i++){

       // get random option
       const optionIndex = accessibleOptions[Math.floor(Math.random() *accessibleOptions.length)];

       // get the position the position of optionIndex from accessibleOptions
       const indexTwo = accessibleOptions.indexOf(optionIndex);

       // remove the optionIndex from the accessibleOptions, so that the option doesn't repeat
       accessibleOptions.splice(indexTwo,1);
       const option = document.createElement("div");
       option.innerHTML = currentQuestion.options[optionIndex];
       option.id = optionIndex;
       option.style.animationDelay = animationDelay + 's';
       animationDelay = animationDelay + 0.15;
       option.className = "option";
       optionList.appendChild(option)
       option.setAttribute('onclick', 'getFeedback(this)');
   }
    questionCounter++
}

// get the feedback of current attempt question
function getFeedback(element){
    const id = parseInt(element.id);

    // get the answer by comparing the id clicked option
    if(id === currentQuestion.answer){

        // set the green color to the correct option
        element.classList.add('correct');

        // add indicator to correct answer
        updateAnswerIndicator('correct');
        correctAnswers++;
        console.log('correct:' + correctAnswers)
    }
    else {
        // set the red color to the incorrect option
        element.classList.add('incorrect');

        // add indicator to incorrect answer
        updateAnswerIndicator('incorrect');
    }

    attempt++;
    unavailableOptions();
}

// make all the options unclickable once the user select an option, the user can not change the option again
function unavailableOptions() {
    const optionLength = optionList.children.length;
    for(let i = 0; i < optionLength; i++){
        optionList.children[i].classList.add("already_selected");
    }

}

function answerIndicator() {
    answersIndicatorBoxes.innerHTML = '';
    const totalQuestion = quiz.length;
    for(let i = 0; i < totalQuestion; i++){
        const indicator = document.createElement('div');
        answersIndicatorBoxes.appendChild(indicator)
    }
}

// add markType in the console area
function updateAnswerIndicator(markType){
    answersIndicatorBoxes.children[questionCounter-1].classList.add(markType)
}

function next (){
    if(questionCounter === quiz.length){
        console.log("questions are over")
        quizOver();
    } else {
        getNewQuestion();
    }
}

// hide quiz box and show feedback box
function quizOver(){
    quizBox.classList.add('hide');
    feedbackBox.classList.remove('hide');
    quizFeedback();
}

// get the quiz feedback
function quizFeedback() {
    feedbackBox.querySelector('.totalQuestion').innerHTML = quiz.length;
    feedbackBox.querySelector('.totalAttempt').innerHTML =attempt;    
    feedbackBox.querySelector('.totalCorrect').innerHTML = correctAnswers;
    feedbackBox.querySelector('.totalWrong').innerHTML = attempt - correctAnswers;

    // calculate the percentage by divide correct answers to quiz length and multiply by 100
    const percentage = (correctAnswers/quiz.length)*100;
    feedbackBox.querySelector('.percentage').innerHTML = percentage.toFixed() + '%';
    feedbackBox.querySelector('.totalScore').innerHTML = correctAnswers +' / ' + quiz.length;
}

window.onload = function(){

    // set all questions in accessibleQuestions array first
    setAccessibleQuestions();

    // call getNewQuestion function secondly
    getNewQuestion();

    // create indicator of answers
    answerIndicator();
}