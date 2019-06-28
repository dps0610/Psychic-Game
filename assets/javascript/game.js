//Variables
var win = 0
var loss = 0
var lettersGuessed = []
var guessesRemaining = 9
var possibleLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var randomLetter = null

//Generate Random letter from arry to start
randomLetter = possibleLetters[Math.floor(Math.random() * possibleLetters.length)];
  console.log(randomLetter)

//when user presses key, runs function
document.onkeyup = function(event) {
    var letter = event.key;
    lettersGuessed.push(letter);
    document.querySelector("#letters-guessed").innerHTML = lettersGuessed.join(", ");
    guessesRemaining--;

    // Win Condition
    if (letter === randomLetter) {
      win++;
      document.querySelector("#wins-text").innerHTML = win;
      alert("YOU WIN!")
      reset();
    }

    // Incorrect Guess
    if (letter !== randomLetter) {
      document.querySelector("#guesses-remaining").innerHTML = guessesRemaining;
    }

    // Loss Condition
    if (guessesRemaining === 0) {
        loss++;
        document.querySelector("#losses-text").innerHTML = loss;
        alert("You lose, try again.");
        reset();
    }

};

//reset and functions for the reset
var reset = function () {
    guessesRemaining = 9;
    lettersGuessed = [];
    resetRandomLetter();
    resetLettersGuessed();
    resetGuesses();
}

var resetRandomLetter = function () {
  randomLetter = possibleLetters[Math.floor(Math.random() * possibleLetters.length)];
  console.log(randomLetter)
  }

var resetLettersGuessed = function () {
  document.querySelector("#letters-guessed").innerHTML = lettersGuessed.join(", ")
}

var resetGuesses = function () {
  document.querySelector("#guesses-remaining").innerHTML = guessesRemaining
}