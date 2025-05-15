const dayOfWeek = prompt("Enter a day: ").toLocaleLowerCase();
if (dayOfWeek === "monday") {
  console.log("Ugh, I hate Mondays!");
} else if (dayOfWeek === "saturday") {
  console.log("Date night. Sa. Tur. Day. Night!");
} else if (dayOfWeek === "friday") {
  console.log("Thank God, it's Friday!");
} else {
  console.log("Meh!");
}

let random = Math.random();
if (random < 0.5) {
  console.log("Your number is less than 0.5");
} else {
  console.log("Your number is greater than or equal to 0.5");
}
console.log(random);

const age = 50;
if (age < 5) {
  console.log("You are a baby, so free of charge");
} else if (age < 10) {
  console.log("You are a child, pay $10.00");
} else if (age < 65) {
  console.log("You are an adult, pay $20.00");
} else {
  console.log("You are a senior, pay $10.00");
}
