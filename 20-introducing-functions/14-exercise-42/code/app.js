// DEFINE YOUR FUNCTION BELOW:
function sumArray(numbers) {
  let total = 0;

  for (let index = 0; index < numbers.length; index++) {
    total += numbers[index];
  }

  return total;
}

// Test case
let sum = 0;

sum = sumArray([1, 2, 3]);
console.log(sum); // 6

sum = sumArray([2, 2, 2, 2]);
console.log(sum); // 8

sum = sumArray([50, 50, 1]);
console.log(sum); // 101
