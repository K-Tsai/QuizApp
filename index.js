let questionNumber = 0;
let score = 0;

function generateQuestions(correctAnswers, questionStore, questionsAnswered) {
	return `
  <section id="questionHeader">
  <h2 id= "questionText"> ${questionStore.question}</h1>
  <form>
    <fieldset>
      <label>
          <input class="answer" type="radio" name="option" checked></input>
          <span>${questionStore.a}</span>
      </label>
			<label>
				<input class ="answer" type="radio" name="option" checked></input>
				<span>${questionStore.b}</span>
			</label>
			<label>
				<input class= "answer" type="radio" name="option" checked></input>
				<span>${questionStore.c}</span>
			</label>
			<label>
				<input class = "answer" type="radio" name= "option" checked></input>
				<span>${questionStore.d}</span>
			</label>
    </fieldset>
    </form>
	</section>
	`;	
}

function startButton() {
  $('.startButton').on('click', function (event) {
		nextQuestion()
	});
} 

function nextQuestion(){
	$('.main').html(generateQuestions(correctAnswers, questionStore, questionsAnswered));
}

function submitAnswer() {
    //This function is responsible for a event that starts when a user presses submit after choosing multiple choice question.
}

function answerWrong() {
    //This function is responsible for deciding if a answer is wrong.
}

function answerCorrect() {
    //This function is responsible for deciding if a answer is right.
}

function nextButton() {
    //This function is responsible for handling the next button.
}

function restartQuiz(){
    //This function is responsible for restarting the quiz when pressing button.
}

function handleQuiz(){
    startButton();
    submitAnswer();
    nextButton();
    restartQuiz();
}

$(handleQuiz);