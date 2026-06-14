// Function using rest params
function sum(...nums) {
  // Displays an actual array
  console.log(nums);

  // Chain array method ".reduce()" on the rest params "nums"
  return nums.reduce((total, el) => total + el, 0);
}
console.log(sum());
console.log(sum(4, 5));
console.log(sum(34, 3, 4, 23, 23, 23, 23, 23, 23));

function raceResults(gold, silver, ...everyoneElse) {
  console.log(`Gold medal goes to: ${gold}`);
  console.log(`Silver medal goes to: ${silver}`);
  console.log(`And thanks to everyone else: ${everyoneElse}`);
}
raceResults("Tammy", "Todd", "Tina", "Trevor", "Travis");
