// 1st pattern of using .removeChild()
const firstLi = document.querySelector("li");
const ul = firstLi.parentElement;
ul.removeChild(firstLi);

// 2nd pattern of using .removeChild()
const firstB = document.querySelector("b");
firstB.parentElement.removeChild(firstB);

// Using .remove()
const firstImage = document.querySelector("img");
firstImage.remove();
