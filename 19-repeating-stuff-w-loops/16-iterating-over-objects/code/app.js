// An object literal
const testScores = {
  keenan: 80,
  damon: 67,
  kim: 89,
  shawn: 91,
  marlon: 72,
  dwayne: 77,
  nadia: 83,
  elvira: 97,
  diedre: 81,
  vonnie: 60,
};

// Iterate over using an "for..in" loop
for (person in testScores) {
  // Access both key & value
  console.log(`${person} scored ${testScores[person]}`);
}

// Returns an array of string keys from an object literal
const students = Object.keys(testScores);
console.log(students);

// Returns an array of values from an object literal
const studentScores = Object.values(testScores);
console.log(studentScores);

// Returns an array of key-value pairs from an object literal
const arrayScores = Object.entries(testScores);
console.log(arrayScores);

// Using "for..of" w/ Object.values() on an object literal
let total = 0;
let scores = Object.values(testScores);

for (const score of scores) {
  total += score;
}

console.log(`Total: ${total}`);
console.log(`Average: ${(total / scores.length).toFixed(1)}`);
