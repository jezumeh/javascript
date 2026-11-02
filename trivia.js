/*
Lesson 7: Strings, Numbers, Dates, and Regular Expressions
JJVJ
2026FA-ITSE-1311-1 Beginning Web Programming
Professor Hyson
November 1, 2026
*/

// REQUIREMENT: Use the Date Object Methods.

var weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesay', 'Thursday', 'Friday', 'Saturday'];
var monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var am_pm = ['Night', 'Morning', 'Afternoon', 'Evening'];

var now = new Date(); // As taught by McFarland (2014, p. 492).

var month = monthName[getMonth()]; // i = 0-11/January-December
var day = weekday[getDay()]; // i = 0-6/Sunday-Saturday

var time = getHours(); // i = 0-23

function timeStamp(){
    document.write('<p><i>' + month + ' ' + getDate() + ', ' + getFullYear() + '.</i></p>'); // e.g. "<p><i>November 1, 2026.</i></p>"
}

var inputName;

// REQUIREMENT: Create a personalized greeting.

function personalizedGreeting (){
    //get someone's name and capitalize it

    //get date x time
    //make custom greeting
    document.write('<p>' + 'Good' + am_pm[] + ', '); //customize time
    document.write(displayName + '. '); //customize name
    document.write('Today is a lovely ' + weekDay + ' in ' + monthName + '.</p>'); //customize month/date)
    
};

// REQUIREMENT: User Information

// REQUIREMENT: Quote of the Day

// REQUIREMENT: Trivia Quiz Improved

var score = 0;
var guesses = 3; //previously var attempt
var gL = ['guesses left)', ' guess left)']; // guesses left [gL] (e.g. "2 guesses left").

var statesAndCapitals = [
    ['What is the capital of Texas?', 'Austin'], //i=0
    ['What is the capital of Georgia?', 'Atlanta'], //i=1
    ['What is the capital of Colorado?', 'Denver'] //i=2
]

function stateQuiz(instance){ //instance will be var statesAndCapitals
    guesses = 3;
    while (guesses > 0){
        var answer = prompt(instance[0], ''); // '' is an empty string in the response box
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