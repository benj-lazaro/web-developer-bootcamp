// Array Methods Slice & Splice

let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violiet"];
console.log(colors);

let coolColors = colors.slice(3);
console.log(coolColors);

// Excludes the item on the "end" index
let warmColors = colors.slice(0, 3);
console.log(warmColors);

let lastThree = colors.slice(-3);
console.log(lastThree);

// Removes the element "indigo"
let targetIndigo = colors.splice(5, 1);
console.log("Removed element: " + targetIndigo);
console.log(colors);

// Insert a new element between index 0 and 1
colors.splice(1, 0, "red-orange");
console.log(colors);

// Insert more than 1 element starting at index 3
colors.splice(4, 0, "yellow-green", "forest-green");
console.log(colors);

// Delete two elements starts at index 2 & then insert a new element in place
let deletedColors = colors.splice(2, 2, "DELETED");
console.log("Deleted colors: " + deletedColors);
console.log(colors);

let scores = [1, 70, 100, 2500, 9, -12, 0, 34];
console.log("Unsorted scores: " + scores);

scores.sort();
console.log("Sorted scores: " + scores);
