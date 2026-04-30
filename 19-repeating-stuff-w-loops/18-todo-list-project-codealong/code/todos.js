let input = prompt("What would you like to do?");
const todos = ["Collect Chicken Eggs", "Clean Cat Litter Box"];

while (input !== "quit" && input !== "q") {
  if (input === "list") {
    console.log("**********");

    for (let index = 0; index < todos.length; index++) {
      console.log(`${index}: ${todos[index]}`);
    }

    console.log("**********");
  } else if (input === "new") {
    const newTodo = prompt("Ok, what is the new todo?");

    todos.push(newTodo);

    console.log(`${newTodo} added to the list`);
  } else if (input === "delete") {
    const index = parseInt(prompt("Enter an index to delete"));

    if (!Number.isNaN(index)) {
      // Const "deleted" contains the element spliced out from the array
      const deleted = todos.splice(index, 1);
      console.log(`Ok, deleted ${deleted[0]}`);
    } else {
      console.log("Unknown index");
    }
  }

  input = prompt("What would you like to do?");
}

console.log("OK, YOU QUIT THE APP");
