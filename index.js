function startButton() {
    $('.quizStart').on('click', '.startButton', function (event) {
        $('quizStart').remove();
        $('.questionAnswerForm').css('display', 'block');
        $('questionNumber').text(1);
        console.log("Hello");
    });
} 

startButton();