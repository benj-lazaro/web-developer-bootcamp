document.querySelector("button").addEventListener("click", (event) => {
  console.log(event); // Shows a PointerEvent object (formerly named MouseEvent)
});

const input = document.querySelector("input");

input.addEventListener("keydown", (event) => {
  console.log(event);
  console.log(`You pressed ${event.key} and ${event.code}`);
});

// input.addEventListener("keyup", (event) => {
//   console.log("KEY UP");
// });

window.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "ArrowUp":
      console.log("UP!");
      break;
    case "ArrowDown":
      console.log("DOWN!");
      break;
    case "ArrowRight":
      console.log("RIGHT!");
      break;
    case "ArrowLeft":
      console.log("LEFT!");
      break;
    default:
      console.log("IGNORED!");
  }
});
