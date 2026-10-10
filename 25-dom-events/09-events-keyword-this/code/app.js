// Arrow function that returns a random color
const makeRandomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
};

// Select ALL HTML element <h1>
// Yes this is bad practice; should ONLY have ONE <h1> per HTML document
const h1s = document.querySelectorAll("h1");

// Select ALL HTML element <button>
const buttons = document.querySelectorAll("button");

// Attach an Event Listener for the "click" Event on selected HTML elements
for (const h1 of h1s) {
  h1.addEventListener("click", changeColor);
}

for (const button of buttons) {
  button.addEventListener("click", changeColor);
}

// Event Handler that changes the background & foreground color of what the keyword "this" refers to
function changeColor() {
  console.log(this);
  this.style.backgroundColor = makeRandomColor();
  this.style.color = makeRandomColor();
}
