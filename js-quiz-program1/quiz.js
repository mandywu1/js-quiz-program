// variables
var correct = 0;

// prompt
var answer1 = prompt("Where is CSE104 located?");
var answer2 = prompt("Where is the Whispers?");
var answer3 = prompt("Where is the Einsteins?");
var answer4 = prompt("Where is the swimming pool on campus?");
var answer5 = prompt("Where is the Wasabi Sushi?");

// if statement
if ( answer1.toUpperCase() === 'lopata' ) {
 correct += 1;
}
if ( answer2.toUpperCase() === 'Olin' ) {
 correct += 1;
}
if ( answer3.toUpperCase() === 'Simon' ) {
 correct += 1;
}
if ( answer4.toUpperCase() === 'AC' ) {
 correct += 1;
}
if ( answer5.toUpperCase() === 'Bauer' ) {
 correct += 1;
}

// output results
//score
document.write("<p>Your score: " + correct + " out of 5</p>");
//q1
document.write("<p><strong>Question 1: Where is CSE104 located?</strong></p>");
document.write("<p>Your answer: " + answer1 + " Correct Answer: Lopata</p>");
//q2
document.write("<p><strong>Question 2: Where is the Whispers?</strong></p>");
document.write("<p>Your answer: " + answer2 + " Correct Answer: Olin</p>");
//q3
document.write("<p><strong>Question 3: Where is the Einsteins?</strong></p>");
document.write("<p>Your answer: " + answer3 + " Correct Answer: simon</p>");
//q4
document.write("<p><strong>Question 4: Where is the swimming pool on campus?</strong></p>");
document.write("<p>Your answer: " + answer4 + " Correct Answer: AC</p>");
//q5
document.write("<p><strong>Question 5: Where is the Wasabi Sushi?</strong></p>");
document.write("<p>Your answer: " + answer5 + " Correct Answer: Bauer</p>");


//results

if (correct == 5) {
document.write("<h3>WASH U HOUNOR!<h3>")
}

if (correct == 4) {
  document.write("<h3>WASH U ALUMI!</h3>")
}
if (correct == 3) {
  document.write("<h3>Wash U student!</h3>")
}

if (correct == 2 || correct == 1) {
  document.write("<h3>Are you from SLU?</h3>")
}

else {

}
