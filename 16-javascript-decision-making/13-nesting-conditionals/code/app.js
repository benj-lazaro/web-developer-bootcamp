// Nested conditionals

const userPassword = prompt("Please enter a new password");

// Password must be 6+ characters
if (userPassword.length >= 6) {
  // Password cannot include space
  if (userPassword.indexOf(" ") === -1) {
    console.log("Valid password");
  }
} else {
  console.log("Password must be 6+ characters");
}
