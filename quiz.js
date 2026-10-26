/*
Lesson 6: Functions
JJVJ
2026FA-ITSE-1311-1 Beginning Web Programming
Professor [add name]
October 25, 2026
*/

//Array and Variable Declarations
/* old, separate arrays for q/a
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
*/

var score = 0;
var guesses = 3; //previously var attempt
var gL = ['guesses left)', ' guess left)']; // attempts left [aL]. User feedback in prompts (e.g. "3 trys left")

//New Q/A nested array, inspired from textbook
var statesAndCapitals = [
    ['What is the capital of Texas?', 'Austin'], //i=0
    ['What is the capital of Georgia?', 'Atlanta'], //i=1
    ['What is the capital of Colorado?', 'Denver'] //i=2
]

function stateQuiz(instance){ //instance will be var statesAndCapitals
    guesses = 3;
    while (guesses > 0){
        var answer = prompt(instance[0], ''); // '' is an empty string in the response box
        /*score = guesses;*/
        if (answer == instance[1]){
            score += guesses;
            alert('That is right! Your score is ' + score + '.');
            guesses = 0; //resets loop
        } else{ //future task: fix case-sensitive errors
            guesses -= 1;
            if (guesses > 1){
                
                alert('Try again. You have ' + guesses + ' guesses left.');
            } else if (guesses == 1){
                alert('Last chance. You have ' + guesses + ' guess left.');
            } else{
                alert('So sorry. You have ' + guesses + ' guesses left. Next question!');
            }
        }
    }
    
}

alert('STATE CAPITAL QUIZ\r\rCheck if you know the names of three states\' capital cities. Make sure you spell each guess correctly and capitalize it.\r\rGood luck!'); // Intro to quiz
for (i=0; i<=statesAndCapitals.length; i++){
    stateQuiz(statesAndCapitals[i]);
}

/*
var aL = [' trys left)', ' try left)']; // attempts left [aL]. User feedback in prompts (e.g. "3 trys left")

function stateQuiz(){
    var points = 0;

    alert('STATE CAPITAL QUIZ\r\rCheck if you know the names of three states\' capital cities. Make sure you spell each guess correctly and capitalize it.\r\rGood luck!');

    for (var i = 0; i <= 2; i++){ /* R: change to i <= question.length I think
        var attempt = 3;
        var queNum = i; // Question Number [queNum] (e.g. "1. Question...?"")

        while (attempt > 0){ //round of a question

            if (attempt > 1){ // Makes aL singular or plural
                n = 0; // "# trys left"
            } else{
                n = 1; // "# try left"
            }

            promptQuestion = prompt((queNum+=1) + '. ' + question[i] + ' (' + attempt + aL[n]); //question prompt (e.g. "1. What is the capital of Texas? (1 try left)")
            
            if (promptQuestion == answer[i]){ //check array match
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
*/
