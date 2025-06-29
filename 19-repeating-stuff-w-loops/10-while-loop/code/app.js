// while loops

let count = 0;
while (count < 10) {
  console.log(count);
  count++;
}

const SECRET = "123";
let userInput = "";
while (userInput !== SECRET) {
  userInput = prompt("Enter the secret code: ");
}
console.log("Access Granted!");
