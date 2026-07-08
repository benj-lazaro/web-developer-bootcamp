// Select an "Element" object by its attribute "title"
const findElement = document.querySelector("a[title='Java']");
console.log(findElement);

// Select "Element" objects using a HTML tag name
const anchorElements = document.querySelectorAll("a");
console.log(anchorElements);

// Select "Element" object using a CSS Descendant selector
const links = document.querySelectorAll("p a");
console.log(links);

// Iterate through the NodeList
for (let link of links) {
  // Display individual attribute "src" value
  console.log(link.href);
}
