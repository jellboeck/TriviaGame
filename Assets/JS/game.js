//Variables
var timer = 60;
var correctAnswer;
var userAnswer;
var correct = 0;
var incorrect= 0;
var unanswered = 0;

//Array to hold the Quiz Questions
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

//starts the game
$("#start-button").on("click", function () {
    start()
    displayQuestions()
})


// pull questions from the array of questions, loop through them, and display for the user
function displayQuestions() {
    var questionBox = $("#question-box");
    questionBox.append('<h2>Answer the following questions:</h2>');

    for (var i = 0; i < questions.length; i++) {

        questionBox.append('<div id="question-box">' + questions[i].question + '</div>');

        var answer1 = questions[i].answerOptions[0];
        var answer2 = questions[i].answerOptions[1];
        var answer3 = questions[i].answerOptions[2];
        var answer4 = questions[i].answerOptions[3];

        questionBox.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + answer1 + '</label></div>');
        questionBox.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + answer2 + '</label></div>');
        questionBox.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + answer3 + '</label></div>');
        questionBox.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + answer4 + '</label></div>');
    }

    // Adds a button to the end of the page to submit the answeres before time is up
    var submitButton = '<button class="btn btn-primary" id="submit-button" type="submit">Submit Answers!</button>';
    questionBox.append(submitButton);
    $("#submit-button").on("click", );
}



function start() {
    $("#timer").text("Time Remaining: " + timer);
    setInterval(counter, 1000);
    $("#start-page").hide();

}

function counter() {
    timer--;
    $("#timer").text("Time Remaining: " + timer);
    if (timer === 0) {
        endTimer()
       
    }
}
function endTimer() {
    clearInterval();
    $("#timer").text("Time is up!");

}


