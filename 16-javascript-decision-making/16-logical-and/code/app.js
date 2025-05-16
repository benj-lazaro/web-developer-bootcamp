// Logical AND

const userPassword = prompt("Enter your password");

if (userPassword.length >= 6 && userPassword.indexOf(" ") === -1) {
  console.log("Password is valid");
} else {
  console.log("Incorrect password format");
}
