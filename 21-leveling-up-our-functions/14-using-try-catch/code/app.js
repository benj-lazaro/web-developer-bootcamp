try {
  // Intentional ReferenceError
  hello.toUpperCase();
} catch {
  console.log("Error! Detected a non-existent object.");
}

// To check that the code didn't break
console.log("After the 'try..catch' statement");

function yell(msg) {
  try {
    console.log(msg.toUpperCase().repeat(3));
  } catch (e) {
    // To show the actual error message
    // console.log(e);
    console.log("ERROR: Please pass a string as an argument value.");
  }
}

// Test case
yell("Hello! ");
yell();
yell(123456789);
yell(true);
yell([]);
