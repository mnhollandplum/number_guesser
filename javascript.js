function yourGuess() {
    var guess = document.getElementById("guess").value;
    var guesses = document.getElementById("output");
    if (guess == numToGuess) {
        guesses.value = guesses.value + "\r" + "BOOM! ("+guess+")";
    } else if(isNaN(guess)) {
        alert("That is not a valid number");
        guessField.value = '';
        return;
    } else if(guess > 100 || guess < 0) {
        alert(guess + " is not within the accepted range, please pick a number between 1 and 100");
        guessField.value = '';
        return;
    } else if (guess > numToGuess) {
        guesses.value = "Your last guess was "+guess+" That is too high";
    } else {
        guesses.value = "Your last guess was "+guess+" That is too low";
    }
}

function generateNumberToGuess() {
    var guesses = document.getElementById("output");
    guesses.value = '';
    numToGuess = Math.floor(Math.random()*100);
    guesses.value = "New number generated.\n";
}


window.onload = function(){
    generateNumberToGuess();
}
