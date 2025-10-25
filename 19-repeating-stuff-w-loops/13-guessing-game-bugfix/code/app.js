// Guessing game

let userMaxNumber = parseInt(prompt("Enter the maximum  number: "));

while (!userMaxNumber) {
  userMaxNumber = parseInt(prompt("Enter a valid number!"));
}

const targetNumber = Math.floor(Math.random() * userMaxNumber) + 1;

let userGuess = prompt("Enter your first guess! (Type 'q' to quit). ");
let userAttempt = 1;

while (parseInt(userGuess) !== targetNumber) {
  if (userGuess === "q") break;

  userGuess = parseInt(userGuess);

  if (userGuess > targetNumber) {
    userGuess = prompt("Too high! Enter a new guess: ");
    userAttempt++;
  } else if (userGuess < targetNumber) {
    userGuess = prompt("Too low! Enter a new guess: ");
    userAttempt++;
  } else {
    userGuess = prompt(
      "Invalid guess. Please enter a number (or 'q' to quit): "
    );
  }
}

if (userGuess === "q") {
  alert("Ok. You quit!");
} else {
  alert(`You got it! It took you ${userAttempt} guesses.`);
}
