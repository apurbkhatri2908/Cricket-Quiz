var questions = [{
	question: "1. How many teams played the 2007 T20 World Cup?",
	choices: ["8","10","12","14"],
	correctAnswer: 2
},
	{
	question: "2. Who bowled the first ball at the inaugural T20 World Cup?",
	choices: ["Shaun Pollock","Makhaya Ntini","Ravi Rampaul","Morne Morkel"],
	correctAnswer: 0
},
	{
	question: "3. The first T20I hundred was recorded in the first match of this World Cup. Who scored the century?",
	choices: ["Chris Gayle","Virender Sehwag","Imran Nazir","Suresh Raina"],
	correctAnswer: 0
},
	{
	question: "4. The first T20 World Cup wicket came only in the 14th over. Who was the bowler?",
	choices: ["Vernon Philander","Makhaya Ntini","Ravi Rampaul","Morne Morkel"],
	correctAnswer: 0
},
	{
	question: "5. India and Pakistan played the first tied game. How was the winner decided?",
	choices: ["Points Shared","One-Over Bowl-Out","Super Over","Toss of a Coin"],
	correctAnswer: 1
},
	{
	question: "6. Who was the leading wicket-taker in the 2007 T20 World Cup?",
	choices: ["RP Singh","Shaun Pollock","Shahid Afridi","Umar Gul"],
	correctAnswer: 3
},
	{
	question: "7. Name the batsman who scored the most runs in the tournament.",
	choices: ["Matthew Hayden","Yuvraj Singh","Misbah-ul-Haq","Kevin Pietersen"],
	correctAnswer: 0
},
	{
	question: "8. Ashraful made 61 off 27 balls in Bangladesh's win v West Indies. What was special about the knock?",
	choices: ["First Half-Century of the T20 WC","Fastest T20I Fifty at the time","Included five sixex in a row","Had only sixex,no fours"],
	correctAnswer: 1
},
	{
	question: "9. Who was the Player of the Match in Zimbabwe's thrilling win over Australia?",
	choices: ["Gary Brent","Brendan Taylor","Hamilton Masakadza","Elton Chigumbura"],
	correctAnswer: 1
},
	{
	question: "10. Which match witnessed the highest margin of victory – a record that stood until 2019?",
	choices: ["Sri Lanka v Kenya","England v Australia","India v Scotland","South Africa v West Indies"],
	correctAnswer: 0
}];




var currentQuestion = 0;
var correctAnswer = 0;
var quizOver = false;

$(document).ready(function () {
	displayCurrentQuestion();
	$(this).find(".quizMessage").hide();
	$(this).find(".nextButton").on("click", function(){
		if(!quizOver){
			value = $("input[type='radio']:checked").val();
			if(value == undefined){
				$(document).find(".quizMessage").text("Please Select an Answer");
				$(document).find(".quizMessage").show();
			 } else {
				$(document).find(".quizMessage").hide();
				if(value == questions[currentQuestion].correctAnswer){
					correctAnswer++;
				}
				currentQuestion++;
				if(currentQuestion < questions.length){
					displayCurrentQuestion();
				} else{
					displayScore();
					$(document).find(".nextButton").text("Play Again");
					quizOver = true;
				}
			}
		} else{
			quizOver = false;
			$(document).find(".nextButton").text("Next Question");
			resetQuiz();
			displayCurrentQuestion();
			hideScore();
		}
});


	});
		

function displayCurrentQuestion() {

	console.log("In display current question");

	var question = questions[currentQuestion].question;
	var questionClass = $(document).find(".quizContainer > .question");
	var choiceList = $(document).find(".quizContainer > .choiceList");
	var numChoices = questions[currentQuestion].choices.length;


	$(questionClass).text(question);
	


	$(choiceList).find("li").remove();

	var choice;
		for(i=0; i < numChoices; i++){
			choice = questions[currentQuestion].choices[i];
			$('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>' ).appendTo(choiceList);
		}
}
function resetQuiz() {
	currentQuestion = 0;
	correctAnswer = 0;
	hideScore();	
}
function displayScore(){
	$(document).find(".quizContainer > .result").text("You Scored: " + correctAnswer + " out of: " + questions.length);
	$(document).find(".quizContainer > .result").show();
}

function hideScore() {
	$(document).find(".result").hide();
}