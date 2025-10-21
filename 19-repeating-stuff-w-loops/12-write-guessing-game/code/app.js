// Guessing game

let userMaxNumber = parseInt(prompt("Enter the maximum  number: "));

while (!userMaxNumber) {
  userMaxNumber = parseInt(prompt("Enter a valid number!"));
}

const targetNumber = Math.floor(Math.random() * userMaxNumber) + 1;

let userGuess = parseInt(prompt("Guess the number: "));
let userAttempts = 1;

while (parseInt(userGuess) !== targetNumber) {
  if (userGuess === "q") break;

  userAttempts++;

  if (userGuess > targetNumber) {
    userGuess = prompt("Too high! Enter a new guess: ");
  } else {
    userGuess = prompt("Too low! Enter a new guess: ");
  }
}

if (userGuess === "q") {
  alert("Ok. You quit!");
} else {
  alert(`You got it! It took you ${userAttempts} guesses.`);
}
