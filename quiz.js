/*
SP25.ITSE.1311.82701
Assignment: Functions
-JJVJ
*/

//Array Declarations
var question = [
    '<h2>What is the capital of Texas?</h2>', //Austin
    
    '<h2>What is the capital of Georgia?</h2>', //Atlanta

    '<h2>What is the capital of Colorado?</h2>', //Denver
];
var answer = [
    'Austin', //Texas
    'Atlanta', //Georgia
    'Denver', //Colorado
];

document.getElementById("quizHtml").innerHTML = "Start the Quiz";

function quiz (){
    var guess = 3; //"Trys" on a Question
    var score;
    var totalPoints = 0 + subPoints;

    round = prompt(question[0]); 
    if (round == answer[0]){
        score += 1;
        alert('You are right!')
    } else{
        alert('You are wrong!')
    }


}

// set up question and matching answer arrays
var mathQuest = ['3 + 2', '7 - 4', '10 / 5', '6 X 2'];
var mathAns = ['5', '3', '2', '12'];

// math quiz function displays math questions and gives the user 2 attempts to get it right - then returns a score
function mathQuiz() {
  // initialize points
  var points = 0;
  //use a for loop to loop through each math question
  for (i = 0; i <= 3; i++) {
    //set attempts to 3
    var attempts = 3;
    // use a while loop to give the user 3 attempts to answer
    while (attempts > 0) {
      // prompt user with math question
      ans = prompt("What is " + mathQuest[i]);
      // see if the answer matches the answer array
      if (ans == mathAns[i]) {
        // if correct, add 1 to points, alert user and set attempts to 0
        points = points + 1;
        alert("Correct!");
        attempts = 0;
      } else {
        // if answer doesn't match, alert user and subtract 1 from attempts
        alert("Incorrect");
        attempts = attempts - 1;
      } // end if
    } // end while
  } // end for
  // return the points variable
  return points;
} // end mathQuiz function


