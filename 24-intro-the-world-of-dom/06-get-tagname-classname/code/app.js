// Select "Element" objects matching the tag name "img"
const allImages = document.getElementsByTagName("img");

// Iterate through the returned HTMLCollection
for (let image of allImages) {
  // Display individual property "src"
  console.log(image.src);
}

// Select "Element" objects matching the class name "square"
const squareImages = document.getElementsByClassName("square");

// Iterate through the returned HTMLCollection
for (let image of squareImages) {
  // Assign a new value
  image.src =
    "https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80";
}
