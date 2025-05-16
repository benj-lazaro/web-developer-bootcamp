// Truthy & Falsy Values

let userInput = "test";
if (userInput) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}

userInput = "";
if (userInput) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}

userInput = 0;
if (userInput) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}

userInput = null;
if (userInput) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}

userInput = NaN;
if (userInput) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}

userInput = undefined;
if (userInput) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}
