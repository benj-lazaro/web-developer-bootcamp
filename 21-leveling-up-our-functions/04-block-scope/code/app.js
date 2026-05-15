// Global scope
let radius = 8;

// Block scope w/in a conditional statement
if (radius > 0) {
  const PI = 3.14159;
  let msg = "Hi!";
}

console.log(`Radius: ${radius}`);
// console.log(PI); // "Uncaught ReferenceError: PI is not define"

// Function scope
for (var i = 0; i < 5; i++) {
  var msg = "Hello";
  console.log(`Messge: ${msg} ${i}`);
}

// Variables accessible outside the "for" loop
console.log(`Messge: ${msg}`);
console.log(`i: ${i}`);
