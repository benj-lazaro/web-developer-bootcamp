// DEFINE YOUR FUNCTION BELOW:
function returnDay(day) {
  const daysOfTheWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  if (day < 1 || day > 7) return null;

  return daysOfTheWeek[day - 1];
}

// Test case
console.log(returnDay(0)); // null
console.log(returnDay(8)); // null
console.log(returnDay(1)); // "Monday"
console.log(returnDay(7)); // "Sunday"
console.log(returnDay(4)); // "Thrusday"
