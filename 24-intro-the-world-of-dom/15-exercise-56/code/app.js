const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]; //PLEASE DON'T CHANGE THIS LINE!

//YOUR CODE GOES HERE:
const rainbowText = document.querySelectorAll("span");
let counter = 0;

for (let letter of rainbowText) {
  letter.style.color = colors[counter];
  counter++;
}
