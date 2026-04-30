const todoList = [];
let command = "";

while (command !== "quit" && command !== "q") {
  command = prompt("What would you like to do?").toLowerCase();

  if (command === "new") {
    const userInput = prompt("Enter new todo");
    todoList.push(userInput);
    console.log(`${userInput} added to list`);
  } else if (command === "list") {
    if (todoList.length === 0) {
      console.log("Todo List is empty");
    } else {
      let indexCount = 0;
      console.log("**********");
      for (let list of todoList) {
        console.log(`${indexCount}: ${list}`);
        indexCount++;
      }
      console.log("**********");
    }
  } else if (command === "delete") {
    const indexToDelete = parseInt(prompt("Enter index of todo to delete"));

    if (todoList.length === 0 || indexToDelete > todoList.length) {
      console.log("No Todo item is deleted");
    } else {
      if (!Number.isNaN(indexToDelete)) {
        const deleted = todoList.splice(indexToDelete, 1);
        console.log(`Todo: ${deleted[0]} removed`);
      } else {
        console.log("Unrecognized index");
      }
    }
  }
}

console.log("OK, YOU QUIT THE APP");
