// WRITE YOUR CODE IN HERE:
const container = document.getElementById("container");
console.log(container);

for (let count = 0; count < 100; count++) {
  const newButton = document.createElement("button");
  newButton.innerText = "Hey!";
  container.append(newButton);
}
