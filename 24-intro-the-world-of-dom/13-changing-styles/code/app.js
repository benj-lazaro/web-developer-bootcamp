const header = document.querySelector("h1");

// Fetch values from Inline CSS properties ONLY; otherwise returns NO value
console.log(header.style.fontSize); // NO value

// Fetch computed styles
console.log(window.getComputedStyle(header).fontSize);
console.log(window.getComputedStyle(header).fontFamily);
console.log(window.getComputedStyle(header).margin);

// Set (Inline) CSS styles
header.style.color = "green";
header.style.fontSize = "3em";
header.style.border = "2px solid pink";

const allLinks = document.querySelectorAll("a");

for (let link of allLinks) {
  link.style.color = "rgb(0, 108, 134)";
  link.style.textDecorationColor = "magenta";
  link.style.textDecorationStyle = "wavy";
}
