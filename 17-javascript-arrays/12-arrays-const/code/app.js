// Arrays + Const

// Prevents the variable "nums" from being re-assigned with a new reference of a (different) array
const nums = [1, 2, 3];
console.log(nums);

// Add a new element to the array
nums.push(4);
console.log(nums);

// Attempt to re-assign a new reference of a brand-new array
nums = [10, 20, 30];
