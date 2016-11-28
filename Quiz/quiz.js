/*var correct = [""];
var other = [""];
if ('input[name="q1c"]:checked') {
correct.push ("I");
else {
	other.push ("I")
}
}
var right = $(correct).length();
var wrong = $(other).length();
$(".score").append("correct:" + right + "/" + "Incorrect:" + wrong);*/ 
/*
Task 1 = Show choices in HTML
Task 2 = On click move to next question in array i++
Task 3 = Evaluate if question is correct using if , else. 
$(document).ready(function(){
var quiz = [
{
question:"How boring is this quiz?",
choices:["kinda","very","Too boring","Very fun"],
answer: "kinda"
},

{
question:"What color is Mace Windu's Lightsaber?", 
choices:["purple", "blue", "green", "yellow"],
answer: "purple"


},

{
question:"Who purchased ATI in 2006?",
choices:['Asus', 'NZXT', 'AMD', 'HyperX'],
answer: "AMD"




},

{
question:"What is the rest of this Star Wars characters name? Jar Jar...",
choices:["Smith", "Ranks", "Banks", "Johnson"],
answer: "Banks"

},

{
question:"What color is C3PO?",
choices:["Golden", "Blue", "Orange", "Teal"],
answer: "Golden"


},

{
question:"What is missing from the quote? These are not the ____ you're looking for.",
choices:["Shirts", "Movies", "Computers", "Droids"],
answer: "Droids"



},

{
question:"What is the correct version of the characters name that starts with Jabba?",
choices:["jabba The Small", "Jabba Williams", "Jabba The Hutt", "Jabba The Clean"],
answer: "Jabba The Hutt"
},

{
question:"Which answer has the correct spelling of a characters name?",
choices:["Fiin", "Finn", "Fiinn", "Fin"],
answer: "Finn"


},

{
question:"Which of the following is not a character in Star Wars?",
choices:["Luke Skywalker", "Finn", "R2D2", "Morgan Skywalker"],
answer: "Morgan Skywalker"

},

{
question:"Is the word yes an answer for this question?",
choices:["yes", "This is the wrong answer", "This is the wrong answer", "This is the wrong answer"],
answer: "yes"

}
];

var title = document.getElementById('questionname');
var questions = document.getElementById('questions');
var i = 0;
var correct = 0;
var incorrect = -1;
var quizQuestion = 0;
var answer = quiz[i].answer;
var btn = document.getElementById('new');
var selections = [];
//$('.score').html("Correct:" + amount);

$('.btn').click(function() {
	console.log('made it here')
	event.preventDefault();
	console.log(selections)
	//for (var i = 0; i < quiz.length; i++){
		/*console.log($("input:checked").val(),'$("input:checked").val()');
		console.log(quiz[quizQuestion].answer,'quiz[i].answer');
		console.log(amount,'amount');
	if($("input:checked").val() === quiz[quizQuestion].answer){
		correct++;
		$('.score').html("Correct:" + correct + " Incorrect:" + incorrect);
		console.log(correct);
		quizQuestion++;
		fillQuestion(quizQuestion);
	}
	else if ($("input:checked").val() !== quiz[quizQuestion].answer) {
		incorrect++;
	}


//}
	});
//fillQuestion(0);
$('.btn').click(function() {
	event.preventDefault();
	fillQuestion(i);
	i++;
	/*if($("input:checked").val() == answer){
		correct.push("l");
		$('.score').html("Correct:" + amount);
		console.log("Yo");
	}
//if(i>quiz.length -1) {
//i=0;
//} 
//fillQuestion(i);
//i++;
//console.log("Hi.");
//$('.score').html("Correct:" + amount);
});

function fillQuestion(qNum){
var specificQuestion = quiz[i];
title.innerText = specificQuestion.question;

questions.innerHTML = "";
for(key in specificQuestion.choices){
var btnQuestion = "question"+i+"_choice";
var questionText = specificQuestion.choices[key];
questions.appendChild(createQuestion(btnQuestion,questionText)
);
}
}
/*for (var i = 0; i < choices.length; i++) {	
	$(title).text(quiz[0].question);
$('questions').append('<label><input type="radio" name="usernames" value="' + choices[i] + '" /> ' + choices[i] + '</label>');
  }
function createQuestion(name, questionText) {
	var e = document.createElement('li');
	var questionHTML = '<input type="radio" value="'+questionText+'" name="' + name + '"';
	questionHTML += '/>';
	questionHTML += questionText;
	e.innerHTML = questionHTML;
	return e;
}
});
	/*console.log(quiz[0].question)
$(title).text(quiz[0].question);
};
createQuestion();
});
});
*/

$(document).ready(function(){
var quiz = [
{
question:"How boring is this quiz?",
choices:["kinda","very","Too boring","Very fun"],
answer: "kinda"
},

{
question:"What color is Mace Windu's Lightsaber?", 
choices:["purple", "blue", "green", "yellow"],
answer: "purple"


},

{
question:"Who purchased ATI in 2006?",
choices:['Asus', 'NZXT', 'AMD', 'HyperX'],
answer: "AMD"




},

{
question:"What is the rest of this Star Wars characters name? Jar Jar...",
choices:["Smith", "Ranks", "Banks", "Johnson"],
answer: "Banks"

},

{
question:"What color is C3PO?",
choices:["Golden", "Blue", "Orange", "Teal"],
answer: "Golden"


},

{
question:"What is missing from the quote? These are not the ____ you're looking for.",
choices:["Shirts", "Movies", "Computers", "Droids"],
answer: "Droids"



},

{
question:"What is the correct version of the characters name that starts with Jabba?",
choices:["jabba The Small", "Jabba Williams", "Jabba The Hutt", "Jabba The Clean"],
answer: "Jabba The Hutt"
},

{
question:"Which answer has the correct spelling of a characters name?",
choices:["Fiin", "Finn", "Fiinn", "Fin"],
answer: "Finn"


},

{
question:"Which of the following is not a character in Star Wars?",
choices:["Luke Skywalker", "Finn", "R2D2", "Morgan Skywalker"],
answer: "Morgan Skywalker"

},

{
question:"Is the word yes an answer for this question?",
choices:["yes", "This is the wrong answer", "This is the wrong answer", "This is the wrong answer"],
answer: "yes"

}
];
var title = document.getElementById('questionname');
var questions = document.getElementById('questions');
var i = 0;
var correct = 0;
var incorrect = -1;
var quizQuestion = 0;
var answer = quiz[i].answer;
var btn = document.getElementById('new');
var selections = [];
var questionNumber = 0;

$('.btn').click(function(event) {
    if(quizQuestion >= quiz.length - 1) { return false; }
	event.preventDefault();
    var choice = $("input:checked").val();
    var answer = quiz[quizQuestion].answer;
    fillQuestion(quizQuestion);
  
    if(choice === answer){
      correct++;
    }
    else if (choice !== answer) {
      incorrect++;
    }
    fillQuestion(++quizQuestion);
    questionNumber++
  $('.score').html("Correct:" + correct + " Incorrect:" + incorrect + " " + questionNumber + " out of 10");

});


function fillQuestion(qNum){
  console.log('in fillQuestion' + qNum);
  var specificQuestion = quiz[qNum];
  $('#questionname').html(specificQuestion.question);

  questions.innerHTML = "";
  for(key in specificQuestion.choices){
    var btnQuestion = "question"+key+"_choice";
    var questionText = specificQuestion.choices[key];
    questions.appendChild(createQuestion(btnQuestion,questionText));
  }
}


  function createQuestion(name, questionText) {
	var e = document.createElement('li');
	var questionHTML = '<input type="radio" value="'+questionText+'" name="' + "quizchoice" + '"';
	questionHTML += '/>';
	questionHTML += questionText;
	e.innerHTML = questionHTML;
	return e;
}
});