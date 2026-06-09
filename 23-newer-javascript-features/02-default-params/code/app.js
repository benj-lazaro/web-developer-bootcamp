// Function w/ a default param value
function rollDie(numSides = 6) {
  return Math.floor(Math.random() * numSides) + 1;
}

console.log(rollDie(20));
console.log(rollDie());
console.log(rollDie(200));

// Order of argument values passed to parameters is IMPORTANT
function greet(person, msg = "hey", punctuation = "!") {
  console.log(`${person}, ${msg}${punctuation}`);
}

greet("Macie");
greet("Mr. Wick", "welcome back", ".");
greet("Dude", "where is my car", "?");
