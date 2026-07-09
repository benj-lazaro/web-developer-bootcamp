const firstLink = document.querySelector("a");
console.log(firstLink);

// Access attribute "href" as a property of the selected "Element" object
console.log(firstLink.href);

// Access attribute "href" using ".getAttribute()"
console.log(firstLink.getAttribute("href"));

// Set a new value to the attribute "href" using ".setAttribute()"
firstLink.setAttribute("href", "https://www.google.com");
console.log(firstLink.getAttribute("href"));

// Access the last HTML element <input>
const lastInput = document.querySelector("input[type='text']");
console.log(lastInput);

// Change the attribute "type" as a property
lastInput.type = "password"; // Password field
lastInput.type = "color"; // Color picker

// Set attribute "type" back to get again using ".setAttribute()"
lastInput.setAttribute("type", "text");
