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

function timeStamp(){
    var now = new Date(); // As taught by McFarland (2014, p. 492).
    var month = monthName[now.getMonth()]; // i = 0-11/January-December

    document.write('<p><i>' + month + ' ' + now.getDate() + ', ' + now.getFullYear() + '.</i></p>'); // e.g. "<p><i>November 1, 2026.</i></p>"
}

// REQUIREMENT: Create a personalized greeting.

function personalizedGreeting(){
    var now = new Date();
    var hour = now.getHours();
    var amPm; //Based on McFarland (2014, p. 495, 503)

    /* Replaced with a switch statement
    if (hour < 6){ // 00:00-05:59
        amPm = 'Night'; 
    } else if (hour < 12){ // 06:00-11:59
        amPm = 'Morning';
    } else if (hour < 17){ // 12:00-16:59
        amPm = 'Afternoon';
    } else { // 17:00-23:59
        amPm = 'Evening';
    }
    */

    var introGreeting;

    switch (true) { //If it is true that var hour is less than #, the greeting customizes.
        case (hour < 6):
            introGreeting = 'Good night, ';
            break;
        case (hour < 12):
            introGreeting = 'Good morning, ';
            break;
        case (hour < 17): 
            introGreeting = 'Good evening, ';
            break;
        default: 
            introGreeting = 'Good night, ';
    }

    function capitalizeName (displayName){
        displayName = displayName.trim();
        return displayName.charAt(0).toUpperCase() + displayName.slice(1).toLowerCase();
    }
   
    var displayName = prompt('Enter your name.'); //get someone's name

    while (displayName.trim() === "" || displayName.includes(" ")) {
        displayName = prompt ("Please enter only one name.");
    }

    displayName = capitalizeName(displayName);

    /*
    This version no longer applies

    document.write('<p>Good ' + amPm + ', ' + displayName + '.</p>');
    */

    document.write('<p>' + introGreeting + displayName + '.</p>');
}

// REQUIREMENT: User Information

var userEmail;
var emailParts;
var userName;
var domainName;

function validateEmail() { //emailRegex is from McFarland (2014, p. 480)
    emailRegex = /^[\w!#$%&\'*+\/=?^`{|}~.-]+@(?:[a-z\d][a-z\d-]*(?:\.[a-z\d][a-z\d-]*)?)+\.(?:[a-z][a-z\d-]+)$/i;
    return emailRegex.test(userEmail);
}

        function userInformation() {
            userEmail = prompt('What is your email?'); //prompt for email
            while (!validateEmail(userEmail)){ //fail
                userEmail = prompt("Please enter a valid email address (e.g. jane.doe@email.com).")
            }

            emailParts = userEmail.split("@"); //separates email b4 & after @

            userName = emailParts[0]; // ...@
            domainName = emailParts[1]; // @...

            document.write('<p><b>Username:</b> ' + userName + '. <b>Domain:</b> ' + domainName + '.</p>');
        }

// REQUIREMENT: Quote of the Day

// inspired from McFarland (2014, p. 491)
var dailyQuote = [
    "&quot;It always seems impossible until it's done.&quot; &mdash;Nelson Mandela",
    "&quot;Success consists of going from failure to failure without loss of enthusiasm.&quot; &mdash;Winston Churchill",
    "&quot;Energy and persistence conquer all things.&quot; &mdash;Benjamin Franklin",
    "&quot;Knowing trees, I understand the meaning of patience. Knowing grass, I can appreciate persistence.&quot; &mdash;Hal Borland",
    "&quot;The best way out is always through.&quot; &mdash;Robert Frost"
]
var random; // creates random # to pick from.
var rndQuote; // Selects random quote.

function quoteOfTheDay(){
    random = Math.floor(Math.random() * dailyQuote.length);
    rndQuote = dailyQuote[random];

    document.write('<p>' + rndQuote + '</p>');
}

// REQUIREMENT: Trivia Quiz Improved

var score = 0;
var percentage; // to be calculated
var guesses = 3;
var gL = ['guesses left)', ' guess left)']; // guesses left [gL] (e.g. "2 guesses left").

var statesAndCapitals = [
    ['What is the capital of Texas?', 'austin'], // i=0
    ['What is the capital of Georgia?', 'atlanta'], // i=1
    ['What is the capital of Colorado?', 'denver'] // i=2
]

function Quiz(instance){ //instance will be var statesAndCapitals
    guesses = 3;
    while (guesses > 0){
        var answer = prompt(instance[0], '');

        if (answer !== null){ //if a guess was given...
            answer = answer.toLowerCase();
        }

        if (answer === instance[1]){ //if answer strictly equals instance...
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

alert('STATE CAPITAL QUIZ\r\rCheck if you know the names of three states\' capital cities.\r\rGood luck!'); // Intro to quiz

for (i=0; i<statesAndCapitals.length; i++){
    Quiz(statesAndCapitals[i]);
}

percentage = (score/9)*100; // calc. %
percentage = percentage.toFixed(2); // round by 2 decimal points\