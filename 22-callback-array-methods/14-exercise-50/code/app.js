function allEvens(numbers) {
  return numbers.every((number) => number % 2 === 0);
}

// Test case
console.log(allEvens([2, 4, 6, 8])); // true
console.log(allEvens([1, 4, 6, 8])); // false
console.log(allEvens([1, 2, 3])); // false
