// Function w/ multiple parameter variables
function add(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "A non-number input detected!";
  }

  return num1 + num2;
  console.log("This line of code will NEVER run");
}

let sum = add(5, 5);
console.log(sum);

sum = add(1, "1");
console.log(sum);
