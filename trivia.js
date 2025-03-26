/*
Beginning Web Programming
SP25.ITSE.1311.82701
Assignment: Strings, Numbers, Dates, and Regular Expressions
-JJVJ
*/

//Assignment Task: Use the Date Object Methods
var todaysDate = new Date();

//Array and Variable Declarations
var question = [
    'What is the capital of Texas?', //Austin
    'What is the capital of Georgia?', //Atlanta
    'What is the capital of Colorado?' //Denver
];
var answer = [
    'Austin', //Texas
    'Atlanta', //Georgia
    'Denver' //Colorado
];
var aL = [' trys left)', ' try left)']; // user feedback in prompts (i.e. "3 trys left")

function stateQuiz(){
    var points = 0;

    alert('STATE CAPITAL QUIZ\r\rCheck if you know the names of three states\' capital cities. Make sure you spell each guess correctly and capitalize it.\r\rGood luck!');

    for (var i = 0; i <= 2; i++){
        var attempt = 3;
        var b = i; // Numbers each prompt (i.e. "1. Question...?"")

        while (attempt > 0){ //round of a question

            if (attempt > 1){ //further customizes user feedback
                n = 0;
            } else{
                n = 1;
            }

            promptQuestion = prompt((b+=1) + '. ' + question[i] + ' (' + attempt + aL[n]); //question prompt
            
            if (promptQuestion == answer[i]){ //check arrays
                points += attempt;
                alert('That is right! Points: ' + points);
                attempt = 0;
            } else{
                alert('That is wrong.');
                attempt -= 1;
            }
        }
    }
    document.write('<h2 class="hdg">' + 'Final Score: ' + points + '/9 Points!' + '</h2>'); //final score appears on front end
}