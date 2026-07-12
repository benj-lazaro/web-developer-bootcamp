const firstBold = document.querySelector("b");

// Traverse to the parent element (i.e. traversing upwards)
console.log(firstBold.parentElement);

// Traverse to the selected element grandparent
console.log(firstBold.parentElement.parentElement);

// Traverse to the selected element great grandparent
console.log(firstBold.parentElement.parentElement.parentElement);

// Select the parent element of the selcted "element" object
const paragraph = firstBold.parentElement;
console.log(paragraph.children);

// Check how many child elements are there
console.log(`Child element count: ${paragraph.childElementCount}`);

// Look at the 1st child element of the parent element "p"
console.log(paragraph.children[0]);

// Select the 1st image w/ the class of "square"
const squareImage = document.querySelector(".square");
console.log(squareImage);

// Access previous DOM Node sibling
console.log(squareImage.previousSibling); // A return character

// Access previous Element sibling
console.log(squareImage.previousElementSibling);

// Access next DOM Node sibling
console.log(squareImage.nextSibling); // A line break character

// Access next Element sibling
console.log(squareImage.nextElementSibling);
