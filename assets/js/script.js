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
    }
    else {
        // set the red color to the incorrect option
        element.classList.add('incorrect');
    }
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