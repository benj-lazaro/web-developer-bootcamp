// Function w/ multiple parameter variables
function greet(firstName, lastName) {
  console.log(`Hey there, ${firstName} ${lastName}`);
}

// Function call w/ multiple argument values
greet("Tim", "Horton");
greet("Anya", "Taylor-Smith");

// Function call w/ lacking argument value
greet("Anya");

// Function that repeats a string message for the nth number of times
function repeat(messageString, numTimes) {
  let result = "";

  for (let i = 0; i < numTimes; i++) {
    result += messageString;
  }

  console.log(`${result}`);
}

repeat("Hi! ", 5);
