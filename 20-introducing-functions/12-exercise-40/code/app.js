// DEFINE YOUR FUNCTION BELOW:
function lastElement(numbers) {
  if (numbers.length > 0) {
    return numbers[numbers.length - 1];
  }
  return null;
}

// Test case
const numbersOne = [1, 2, 3, 4, 5];
const numbersTwo = [1];
const numbersThree = [];
let targetElement;

targetElement = lastElement(numbersOne);
console.log(targetElement);

targetElement = lastElement(numbersTwo);
console.log(targetElement);

targetElement = lastElement(numbersThree);
console.log(targetElement);
