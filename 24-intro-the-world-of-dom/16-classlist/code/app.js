const header2 = document.querySelector("h2");
console.log(header2);

// Add the pre-defined classes ".purple" & ".border"
header2.classList.add("purple", "border");

// Checks the existence of the added classes
console.log(header2.classList.contains("purple", "border"));

// Remove the class ".border" from the classList
header2.classList.remove("border");

// Toggle the class ".border" on the classList
header2.classList.toggle("border");
