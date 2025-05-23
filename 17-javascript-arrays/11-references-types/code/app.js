// Reference Types & Equality Testing

let arrayOriginal = ["hi", "bye"];
let arrayCopy = ["hi", "bye"];

// Compares the arrays' respective references, NOT elements
console.log(arrayOriginal == arrayCopy);
console.log(arrayOriginal === arrayCopy);

// The variables nums & numsCopy references the same array
let nums = [1, 2, 3];
let numsCopy = nums;
console.log(nums);
console.log(numsCopy);

console.log(nums == numsCopy);
console.log(nums === numsCopy);

numsCopy.push(4);

console.log(nums);
console.log(numsCopy);
