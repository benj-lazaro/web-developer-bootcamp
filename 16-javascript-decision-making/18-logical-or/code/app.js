// Logical OR

console.log(true || false);
console.log(false || true);
console.log(false || false);

const customerAge = -10;

if ((customerAge >= 0 && customerAge < 5) || customerAge >= 65) {
  console.log("Ride is free");
} else if (customerAge >= 5 && customerAge <= 10) {
  console.log("Ride is $10.00");
} else if (customerAge > 10 && customerAge < 65) {
  console.log("Ridei is $20.00");
} else {
  console.log("Invalid age");
}
