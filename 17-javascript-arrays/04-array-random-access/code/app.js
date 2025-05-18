// Array Random Access

let days = ["Monday", "Tuesday", "Wednesday"];
console.log(days);

// Accessing the 1st element of the array "days"
console.log(days[0]);

// Accessing the last element of the array "days"
console.log(days[2]);

// Accessing a non-existent element
console.log(days[47]);

// Accessing the 1st letter of the 1st element of the array "days"
console.log(days[0][0]);

// Accessing the 1st letter of the 2nd element of the array "days"
console.log(days[1][0]);

let colors = ["rad", "orange", "green", "yellow"];
console.log(colors);

// Updating the 1st element with the correct spelling
colors[0] = "red";
console.log(colors);

// Adding a new element to a non-existent index value
console.log(colors.length);
console.log(colors);
colors[10] = "Indigo";
console.log(colors);
console.log(colors.length);

let beatles = ["paul", "john", "george"];
console.log(beatles);

beatles[beatles.length] = "ringo";
console.log(beatles);
