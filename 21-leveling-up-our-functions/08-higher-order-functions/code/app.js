// A function that accepts a function as an argument value
function callTwice(func) {
  // Calls the passed function (as argument) twice
  func();
  func();
}

function callTenTimes(func) {
  for (let index = 0; index < 10; index++) {
    func();
  }
}

// Roll a 6-side die
function rollDie() {
  const roll = Math.floor(Math.random() * 6 + 1);
  console.log(`Dice roll: ${roll}`);
}

// Pass a function as an argument value to a function
callTwice(rollDie);
console.log("-------");

callTenTimes(rollDie);
console.log("-------");
