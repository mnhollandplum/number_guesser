function yourGuess() {
    var guess = document.getElementById("guess").value;
    var guesses = document.getElementById("output");
    if (guess == numToGuess) {
        guesses.value = guesses.value + "\r" + "You have guessed correctly! ("+guess+")";
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
