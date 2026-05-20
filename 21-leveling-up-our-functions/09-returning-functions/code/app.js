// Factory function pattern
function makeBetweenFunc(min, max) {
  // Returns a function that returns a value
  return function (num) {
    return num >= min && num <= max;
  };
}

isChild = makeBetweenFunc(0, 18);
console.log(`isChild: ${isChild(7)}`);

isAdult = makeBetweenFunc(19, 64);
console.log(`isAdult: ${isAdult(52)}`);

isSenior = makeBetweenFunc(65, 102);
console.log(`isSenior: ${isSenior(92)}`);
