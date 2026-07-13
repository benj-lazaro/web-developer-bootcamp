// Create a new HTML element <img> & set attribute "src"
const newImage = document.createElement("img");
newImage.src =
  "https://images.unsplash.com/photo-1552933529-e359b2477252?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

// Append as the last child & set attribute "class"
document.body.appendChild(newImage);
newImage.classList.add("square");

// Create a new HTML element <h3>, set inner text & append as last child
const newH3 = document.createElement("h3");
newH3.innerText = "I am the new!";
document.body.appendChild(newH3);

// Select the 1st matching HTML element <p> & append two (2) text values
const p = document.querySelector("p");
p.append("I AM A NEW TEXT! YEAH!!! ", "I AM THE 2ND TEXT!");

// Create a new HTML element <b>, assign a text value & append as 1st child
const newB = document.createElement("b");
newB.append("Hi!");
p.prepend(newB);

// Create a new HTML element <h2> & assign a text value
const newH2 = document.createElement("h2");
newH2.append("Are adorable chickens");

// Select HTML element <h1>
const h1 = document.querySelector("h1");

// Insert the new HTML element <h2> RIGHT AFTER the HTML element <h1>
h1.insertAdjacentElement("afterend", newH2);

// To verify insertion of adjacent (sibling) element
console.log(h1.nextElementSibling);

// Create another HTML element <h3>, set inner text
const anotherH3 = document.createElement("h3");
anotherH3.innerText = "I AM THE OTHER <h3>.";

// Insert after the HTML element <h1>
h1.after(anotherH3);
