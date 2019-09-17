//Object holding the questions, answers and answer index//
var questions = [{
    question: "During season eight, Kramer lost plenty of sleep due to this fast food chain's neon sign",
    answerOptions: ["Qdoba", "Boston Market", "Kenny Rogers Roasters", "Arby's"],
    answer: 2
}, {
    question: "When trying to fool an unemployment office, which job does George tell them he is applying for with Vandelay Industries?",
    answerOptions: ["Importer/Exporter", "Latex Salesman", "Mansierre Salesman", "Architect"],
    answer: 1

}, {
    question: "In the episode “The Opposite,” Elaine’s consumption of which chewy candy inadvertently leads to her losing both her boyfriend and her job?",
    answerOptions: ["Junior Mints", "Starburst", "Raisinets", "Jujyfruits"],
    answer: 3

}, {
    question: "Which of Seinfeld’s four main characters did not appear in the show’s first episode?",
    answerOptions: ["Jerry", "Elaine", "George", "Kramer"],
    answer: 1

}, {
    question: "Which film does Elaine want to see before being forced into watching The English Patient when her preferred movie sells out?",
    answerOptions: ["Sack Lunch", "Cry, Cry Again", "Chunnel", "Prognosis Negative"],
    answer: 0

}, {
    question: "Which Seinfeld writer voiced George Steinbrenner on and off from seasons five through nine?",
    answerOptions: ["Larry Charles", "Peter Mehlman", "Spike Feresten", "Larry David"],
    answer: 3

}, {
    question: "How does Mr. Pitt eat his Snickers?",
    answerOptions: ["Frozen", "In One Bite", "With a Fork and Knife", "Melted into Icecream"],
    answer: 2

}, {
    question: "In the episode 'The Parking Garage' why is Elaine in a rush to get home?",
    answerOptions: ["She doesn’t want her new goldfish to die", "She has a date", "She is claustrophobic", "She is late for work"],
    answer: 0

}, {
    question: "In season six’s 'The Doorman' Kramer and Frank Costanza invent a chest-support garment. Kramer wants to name it...",
    answerOptions: ["The Cup", "The Bro", "Man's Best Friend", "The Manssiere"],
    answer: 1

}]

//variables
var currentQuestion = 0;
var correctAnswer = 0;
var incorrectAnswer = 0;
var unanswered = 0;
var answered = true;
var seconds;
var time;
var userAnswer;
var messages = {
    correct: "You got it right!",
    incorrect: "Incorrect!",
    endTime: "Out of time!",
}
//starts the quiz
$("#start-button").on('click', function () {
    $("#start-page").hide();
    newQuestion();
});

//resets the variables and starts the quiz over
$("#restart").on("click", function () {
    $(this).hide();
    currentQuestion = 0;
    correctAnswer = 0;
    incorrectAnswer = 0;
    unanswered = 0;
    $("#correct-answers").empty();
    $("#incorrect-answers").empty();
    $("#unanswered").empty();
    newQuestion();
});

function newQuestion() {
    $("#message").empty();
    $("#correctedAnswer").empty();
    // $("#nextQuestion").empty();

    //sets up new questions & answerList
    $("#currentQuestion").html("Question #" + (currentQuestion + 1) + "/" + questions.length);
    $("#question").html("<h3>" + questions[currentQuestion].question + "</h3>");
    console.log(question)
    for (var i = 0; i < 4; i++) {
        var choices = $("<div>");
        choices.text(questions[currentQuestion].answerOptions[i]);
        choices.attr({ "data-index": i });
        choices.addClass("answer");
        $("#answerOptions").append(choices);
    }
    countdown();
    //clicking an answer will pause the time and setup answerPage
    $(".answer").on("click", function () {
        userAnswer = $(this).data("index");
        clearInterval(time);
        answerPage();
    });
}

function countdown() {
    seconds = 15;
    $("#timeLeft").html("<h3>Time Remaining: " + seconds + "</h3>");
    time = setInterval(showCountdown, 1000);
}

function showCountdown() {
    seconds--;
    $("#timeLeft").html("<h3>Time Remaining: " + seconds + "</h3>");
    if (seconds < 1) {
        clearInterval(time);
        answered = false;
        answerPage();
    }
}

function answerPage() {
    //clears the answer options and question before displaying the message and correct answer
    $("#question").empty();
    $(".answer").empty();

    //creates variables that hold the index and the text of the correct answer so that it can be compared and then displayed for the user
    var answerText = questions[currentQuestion].answerOptions[questions[currentQuestion].answer];
    var answerIndex = questions[currentQuestion].answer;
    //checks to see if answer was correct, incorrect, or left unanswered
    //displays the message and correct answer
    if ((userAnswer === answerIndex) && (answered === true)) {
        correctAnswer++;
        $("#message").html("<h4>" + messages.correct + "</h4>");
        $("#correctedAnswer").html("<h4>" + "The answer was: " + "</h4>" + answerText);
    } else if ((userAnswer !== answerIndex) && (answered === true)) {
        incorrectAnswer++;
        $("#message").html("<h4>" + messages.incorrect + "</h4>");
        $("#correctedAnswer").html("<h4>" + "The correct answer was: " + "</h4>" + answerText);
    } else {
        unanswered++;
        $("#message").html("<h4>" + messages.endTime + "</h4>");
        $("#correctedAnswer").html("<h4>" + "The correct answer was: " + "</h4>" + answerText);
        answered = true;
    }

    if (currentQuestion === (questions.length - 1)) {
        setTimeout(scoreboard, 3000)
    } else {
        currentQuestion++;
        setTimeout(newQuestion, 3000);
        // $("#nextQuestion").html("<button class='btn btn-primary' id='nextQuestion-button'>" + "Next Question" + "</button>")
        // $("#nextQuestion-button").on("click", function () {
        //     newQuestion();
    }
}

function scoreboard() {
    //clears the questions, timer, and message and displays the game totals
    $("#timeLeft").empty();
    $("#currentQuestion").empty();
    $("#message").empty();
    $("#correctedAnswer").empty();
    $("#correct-answers").html("Correct Answers: " + correctAnswer);
    $("#incorrect-answers").html("Incorrect Answers: " + incorrectAnswer);
    $("#unanswered").html("Unanswered Questions: " + unanswered);
    //shows the restart div and then creates a button for the user to click to restart the game
    $("#restart").show();
    $("#restart").html("<button class='btn btn-primary' id='restart-button'>" + "Play Again?" + "</button>");
}