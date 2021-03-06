// the developer consulted more youtube tutorials for better understanding, tutorials which are referenced in the README file (credits)

// get all required elements
const questionNumber = document.querySelector('.questionNumber');
const questionText = document.querySelector('.questionText');
const optionList = document.querySelector('.optionList');
const answersIndicatorBoxes = document.querySelector('.indicator');
const infoBox = document.querySelector('.infoBox');
const quizBox = document.querySelector('.quizBox');
const feedbackBox = document.querySelector('.feedbackBox');
const exitIcon = quizBox.querySelector('.quizIcon');
const leaveIcon = feedbackBox.querySelector('.feedbackIcon');
const nextButton = document.querySelector('.next_btn');

// active dark mode when the label is clicked
let content = document.getElementsByTagName('body')[0];
let boxOne = document.querySelector('.infoBox');
let boxTwo = document.querySelector('.quizBox');
let boxThree = document.querySelector('.feedbackBox');
let feedbackIcon = document.querySelector('.feedbackIcon');
let quizIcon = document.querySelector('.quizIcon');
let darkMode = document.querySelector('.darkChange');
darkMode.addEventListener('click', function () {
	darkMode.classList.toggle('active');
	content.classList.toggle('night');
	boxOne.classList.toggle('night');
	boxTwo.classList.toggle('night');
	boxThree.classList.toggle('night');
	feedbackIcon.classList.toggle('night');
	quizIcon.classList.toggle('night');
});

const limitQuestion = 7;
let questionCounter = 0;
let currentQuestion;
let accessibleQuestions = [];
let accessibleOptions = [];
let correctAnswers = 0;
let attempt = 0;

// push the questions into accessibleQuestions Array
function setAccessibleQuestions() {
	const totalQuestion = quiz.length;
	for (let i = 0; i < totalQuestion; i++) {
		accessibleQuestions.push(quiz[i]);
	}
}

// set question number, question and options
function getNewQuestion() {

	// set question number
	questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of " + limitQuestion;

	// set question text and get random question
	const questionIndex = accessibleQuestions[Math.floor(Math.random() * accessibleQuestions.length)];
	currentQuestion = questionIndex;
	questionText.innerHTML = currentQuestion.question;

	// get the position of questionIndex from the accessibleQuestion array
	const indexOne = accessibleQuestions.indexOf(questionIndex);

	// remove the questionIndex from the accessibleQuestion array, so that the question doesn't repeat
	accessibleQuestions.splice(indexOne, 1);

	// show question image if img property exists
	if (currentQuestion.hasOwnProperty('img')) {
		const img = document.createElement('img');
		img.src = currentQuestion.img;
		questionText.appendChild(img);
	}

	// set options and get the length of options
	const optionLength = currentQuestion.options.length;

	// push options into accessibleOptions array
	for (let i = 0; i < optionLength; i++) {
		accessibleOptions.push(i);
	}

	optionList.innerHTML = '';
	let animationDelay = 0.15;

	// create options in html
	for (let i = 0; i < optionLength; i++) {

		// get random option
		const optionIndex = accessibleOptions[Math.floor(Math.random() * accessibleOptions.length)];

		// get the position the position of optionIndex from accessibleOptions
		const indexTwo = accessibleOptions.indexOf(optionIndex);

		// remove the optionIndex from the accessibleOptions, so that the option doesn't repeat
		accessibleOptions.splice(indexTwo, 1);
		const option = document.createElement("div");
		option.innerHTML = currentQuestion.options[optionIndex];
		option.id = optionIndex;
		option.style.animationDelay = animationDelay + 's';
		animationDelay = animationDelay + 0.15;
		option.className = "option";
		optionList.appendChild(option);
		option.setAttribute('onclick', 'getFeedback(this)');
	}
	questionCounter++;

	// hide the next button till the user will choose an option
	nextButton.style.display = 'none';
}

// get the feedback of current attempt question
function getFeedback(element) {
	const id = parseInt(element.id);

	// get the answer by comparing the id clicked option
	if (id === currentQuestion.answer) {

		// set the green color to the correct option
		element.classList.add('correct');

		// add indicator to correct answer
		updateAnswerIndicator('correct');
		correctAnswers++;
	} else {
		// set the red color to the incorrect option
		element.classList.add('incorrect');

		// add indicator to incorrect answer
		updateAnswerIndicator('incorrect');
	}

	attempt++;
	unavailableOptions();
}

// disable all other options when user selects one option, the user can not change the option again
function unavailableOptions() {
	const optionLength = optionList.children.length;
	for (let i = 0; i < optionLength; i++) {
		optionList.children[i].classList.add("already_selected");
	}
	nextButton.style.display = 'block';
}

// set the answer indicator
function answerIndicator() {
	answersIndicatorBoxes.innerHTML = '';
	const totalQuestion = limitQuestion;
	for (let i = 0; i < totalQuestion; i++) {
		const indicator = document.createElement('div');
		answersIndicatorBoxes.appendChild(indicator);
	}
}

// add markType in the console area
function updateAnswerIndicator(markType) {
	answersIndicatorBoxes.children[questionCounter - 1].classList.add(markType);
}

function next() {
	if (questionCounter === limitQuestion) {
		quizOver();
	} else {
		getNewQuestion();
	}
}

// hide quiz box and show feedback box
function quizOver() {
	quizBox.classList.add('hide');
	feedbackBox.classList.remove('hide');
	quizFeedback();
}

// get the quiz feedback
function quizFeedback() {
	feedbackBox.querySelector('.totalQuestion').innerHTML = limitQuestion;
	feedbackBox.querySelector('.totalAttempt').innerHTML = attempt;
	feedbackBox.querySelector('.totalCorrect').innerHTML = correctAnswers;
	feedbackBox.querySelector('.totalIncorrect').innerHTML = attempt - correctAnswers;

	// calculate the percentage by divide correct answers to quiz length and multiply by 100
	const percentage = (correctAnswers / limitQuestion) * 100;
	feedbackBox.querySelector('.percentage').innerHTML = percentage.toFixed() + '%';
	feedbackBox.querySelector('.totalScore').innerHTML = correctAnswers + ' / ' + limitQuestion;
}

// restart the quiz
function restartQuiz() {
	questionCounter = 0;
	correctAnswers = 0;
	attempt = 0;
	accessibleQuestions = [];
	nextButton.style.display = 'none';
}

// if the play again is clicked, the feedback box will be hide and show the quiz box again
function playAgain() {
	feedbackBox.classList.add('hide');
	quizBox.classList.remove('hide');

	restartQuiz();
	startQuiz();
	nextButton.style.display = 'none';
}

//if the quiz box exit icon is clicked, the site will reload
exitIcon.onclick = () => {
	window.location.reload();
};

//if the feedback box exit icon is clicked, the site will reload
leaveIcon.onclick = () => {
	window.location.reload();
};

// Start Quiz
function startQuiz() {

	// hide info box and show quiz box
	infoBox.classList.add('hide');
	quizBox.classList.remove('hide');

	// set all questions in accessibleQuestions array first
	setAccessibleQuestions();

	// call getNewQuestion function secondly
	getNewQuestion();

	// create indicator of answers
	answerIndicator();

	nextButton.style.display = 'none';
}

window.onload = function () {
	infoBox.querySelector('.totalQuestion').innerHTML = limitQuestion;
	infoBox.querySelector('.accessibleQuestions').innerHTML = quiz.length;
};