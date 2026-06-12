const nums = [13, 4, 5, 21, 3, 3, 1, 2, 7, 6, 4, 2, 53456];

// Using the spread syntax on an array that is passed as an argument value to a function
console.log(Math.max(...nums));
console.log(Math.min(...nums));

// Using the spead syntax on an array of numbers;
console.log(...nums);

// Using the spread syntax on a string
console.log("hello");
console.log(..."hello");
