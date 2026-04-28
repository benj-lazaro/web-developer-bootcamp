const todoList = [];
let command = "";

while (command !== "quit") {
  command = prompt("What would you like to do?").toLowerCase();

  if (command === "new") {
    userInput = prompt("Enter new todo");

    todoList.push(userInput);
    console.log(`${userInput} added to list`);
  } else if (command === "list") {
    let indexCount = 0;

    console.log("**********");

    for (let list of todoList) {
      console.log(`${indexCount}: ${list}`);
      indexCount++;
    }

    console.log("**********");
  } else if (command === "delete") {
    let indexToDelete = prompt("Enter index of todo to delete");

    todoList.splice(indexToDelete, 1);
    console.log("Todo Removed");
  }
}

console.log("OK, YOU QUIT THE APP");
