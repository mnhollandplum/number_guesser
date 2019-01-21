function yourGuess() {
    var guess = document.getElementById("guess").value;
    var guesses = document.getElementById("output");
    document.getElementById("resetButton").disabled = false;
    document.getElementById("clearButton").disabled = false;
    if (guess == numToGuess) {
        winCondition();
        alert("Boom " + guess + " is correct! A new range has been set." )
        guesses.value = ("Your new range is " + minSet + " to " + maxSet);
    } else if(isNaN(guess)) {
        alert("That is not a valid number");
        guess.value = '';
        return;
    } else if(guess > maxSet || guess < minSet) {
        alert(guess + " is not within the accepted range, please pick a number between " + minSet + " and " + maxSet);
        guessField.value = '';
        return;
    } else if (guess > numToGuess) {
        guesses.value = "Your last guess was " + guess + " that is too high";
    } else {
        guesses.value = "Your last guess was " + guess+ " that is too low";
    }
}

var minSet = parseInt(document.getElementById("min").value);
var maxSet = parseInt(document.getElementById("max").value);
numToGuess = Math.floor(Math.random()* (maxSet - minSet)) + minSet;
var setButton = document.querySelector('#setRange');
setButton.addEventListener('click', setRange);

function setRange() {
    var guesses = document.getElementById("output");
    minSet = Number(min.value);
    maxSet = Number(max.value);
    numToGuess = Math.floor(Math.random() * (maxSet - minSet + 1)) + minSet;
    alert("The new range is between " + minSet + " and " + maxSet + "." + " Please submit your guess.");
    guesses.value = ("The new range is between " + minSet + " and " + maxSet + "." + " Please submit your guess.");

}

function winCondition(){
  minSet -= 11;
  maxSet += 10;
  document.getElementById("min").value = min;
  document.getElementById("max").value = max;
  numToGuess = Math.floor(Math.random() * (maxSet - minSet + 1)) + minSet;
}
