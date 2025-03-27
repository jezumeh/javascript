/*
Beginning Web Programming
SP25.ITSE.1311.82701
Assignment: Strings, Numbers, Dates, and Regular Expressions
-JJVJ
*/

function dateAndGreeting(){
    var weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesay', 'Thursday', 'Friday', 'Saturday'];
    var monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var am_pm;

    var rawDate = new Date();

    var hour = rawDate.getHours(); //greeting customization
    if (hour < 7){
        am_pm = "Night";
    } else if (hour < 12){
        am_pm = "Morning";
    } else if (hour < 17){
        am_pm = "Afternoon";
    } else { //17:00-23:59
        am_pm = "Evening";
    }

    

    var nameInput = prompt("Name:");

    
    // startCase = nameInput.match(/b\w/g); // ID starting character/s
    /* startCase = nameInput.toUpperCase(); */
    // startCase.toUpperCase(); // assign start case to starting character/s

    


    document.write ("<h1>" + "Good " + am_pm + " " + nameInput + "</h1>"); //Greeting
    document.write("<h2>Today is a lovely " + weekDay[rawDate.getDay()] + " in " + monthName[rawDate.getMonth()] + ".</h2>"); //Date
}

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