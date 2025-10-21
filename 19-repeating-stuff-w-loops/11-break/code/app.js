// Break statement

// Working with while loop
let input = prompt("Hey, say something! ");

while (true) {
  input = prompt(input);

  if (input.toLowerCase() === "stop") break;
}

console.log("Ok you win!");

// Working with for loop
for (let i = 0; i < 1000; i++) {
  console.log(i);

  if (i === 100) break;
}
