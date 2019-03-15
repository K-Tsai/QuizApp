let questionNumber = 0;
let score = 0;

function generateQuestion() {
	return `
	<h2>${STORE[questionNumber].question}</h2>
	<form>
		<fieldset>
			<label class="answerOption">
				<input type="radio" value="${STORE[questionNumber].answers[0]}" name="answer" required>
				<span>${STORE[questionNumber].answers[0]}</span>
			</label>
			<label class ="answerOption">
				<input type= "radio" value="${STORE[questionNumber].answers[1]}" name="answer" required>
				<span>${STORE[questionNumber].answers[1]}</span>
			</label>
			<label class ="answerOption">
				<input type= "radio" value="${STORE[questionNumber].answers[2]}" name="answer" required>
				<span>${STORE[questionNumber].answers[2]}</span>
			</label>
			<label class ="answerOption">
				<input type= "radio" value="${STORE[questionNumber].answers[3]}" name="answer" required>
				<span>${STORE[questionNumber].answers[3]}</span>
			</label>
			<button type="submit" class="submitButton">Submit</button>
		</fieldset>
	</form>
	`;
}

function startButton() {
	$('.quizStart').on('click', '.startButton', function (event) {
		$('.quizStart').remove();
  });
} 

function renderQuestion() {
	$('.questionAnswerForm').html(generateQuestion());
}

function submitAnswer() {
    //This function is responsible for a event that starts when a user presses submit after choosing multiple choice question.
    console.log('`submitAnswer`, ran')
}

function nextButton() {
    //This function is responsible for handling the next button.
    console.log('`nextButton`, ran')
}

function restartQuiz(){
    //This function is responsible for restarting the quiz when pressing button.
    console.log('`restartQuiz`, ran')
}

function handleQuiz() {
	startButton();
	renderQuestion();
}

$(handleQuiz);