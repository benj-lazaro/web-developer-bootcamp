const button = document.querySelector("button");
const h1 = document.querySelector("h1");

button.addEventListener("click", () => {
  const newColor = makeRandomColor();
  const rgbValues = newColor.match(/-?\d+(?:\.\d+)?/g) ?? [];
  const valueSum = rgbValues.reduce((total, value) => total + Number(value), 0);

  if (valueSum < 300) {
    h1.style.color = "white";
  } else {
    h1.style.color = "black";
  }

  document.body.style.backgroundColor = newColor;
  h1.innerText = newColor;
});

// Event handler that re
const makeRandomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
};
