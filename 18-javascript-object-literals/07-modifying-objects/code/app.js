// Modifying Objects

const midterms = {
  danielle: 96,
  thomas: 78,
};

console.log(midterms);

// Update the value of property "thomas" using the dot notation
midterms.thomas = 79;
console.log(midterms);

// Update the value of properties using the square bracket notation
midterms["thomas"] = "C+";
midterms["danielle"] = "A";
console.log(midterms);

// Adding a new property using the dot notation
midterms.ezra = "B+";
console.log(midterms);

// Adding a new property using the square bracket notation
midterms["antionio"] = "A-";
console.log(midterms);
