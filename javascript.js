
//Overall function for user making a gues
function yourGuess() {
    //creates variable for the guess field and the output after a guess
    var guess = document.getElementById("guess").value;
    var guesses = document.getElementById("output");
    //enables the clear button and reset button upon the beginning of game play
    document.getElementById("resetButton").disabled = false;
    document.getElementById("clearButton").disabled = false;
    //if user guesses correctly the wincondition function is called and the alert is displayed
    if (guess == numToGuess) {
        winCondition();
        alert("Boom " + guess + " is correct! A new range has been set." )
        guesses.value = ("Your new range is " + minSet + " to " + maxSet);
        //if the user enters a non number the alert is shown and the value of the guess box is reset
    } else if(isNaN(guess)) {
        alert("That is not a valid number");
        guess.value = '';
        return;
        //if the user guesses out of the range set they are given this alert
    } else if(guess > maxSet || guess < minSet) {
        alert(guess + " is not within the accepted range, please pick a number between " + minSet + " and " + maxSet);
        guessField.value = '';
        return;
        //if the user guesses to high or to low they are alerted and can guess again
    } else if (guess > numToGuess) {
        guesses.value = "Your last guess was " + guess + " that is too high";
    } else {
        guesses.value = "Your last guess was " + guess + " that is too low";
    }
}

//This function is no longer needed
// function generateNumberToGuess() {
//     var guesses = document.getElementById("output");
//     guesses.value = '';
//     numToGuess = Math.floor(Math.random()* (max - min)) + min;
//     guesses.value = "New number generated.\n";
// }


// window.onload = function(){
//     generateNumberToGuess();
// }
//creates the variables needed to set min and max values
var minSet = parseInt(document.getElementById("min").value);
var maxSet = parseInt(document.getElementById("max").value);
numToGuess = Math.floor(Math.random()* (maxSet - minSet)) + minSet;
var setButton = document.querySelector('#setRange');
setButton.addEventListener('click', setRange);
//function to set the range of numbers. User enters a min and max which is set to a variable and turned into a random number to guess
function setRange() {
    var guesses = document.getElementById("output");
    minSet = Number(min.value);
    maxSet = Number(max.value);
    numToGuess = Math.floor(Math.random() * (maxSet - minSet + 1)) + minSet;
    //user is alerted and the new range is given in the output box
    alert("The new range is between " + minSet + " and " + maxSet + "." + " Please submit your guess:");
    guesses.value = ("Your new range is " + minSet + " to " + maxSet);
}
//function to minus 10 to the min and add 10 to the max each time the user wins a round
function winCondition(){
  minSet -= 11;
  maxSet += 10;
  document.getElementById("min").value = min;
  document.getElementById("max").value = max;
  numToGuess = Math.floor(Math.random() * (maxSet - minSet + 1)) + minSet;
    
}
