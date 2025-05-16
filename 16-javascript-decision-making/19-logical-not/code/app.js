// Logical NOT

console.log(!true);
console.log(!false);
console.log(!null);
console.log(!undefined);

// const firstName = prompt("Enter your first name");

// if (!firstName) {
//   firstName = prompt("Try again");
// }

const customerAge = 8;

if (!((customerAge >= 0 && customerAge < 5) || customerAge >= 65)) {
  console.log("You are not a baby or a senior");
}
