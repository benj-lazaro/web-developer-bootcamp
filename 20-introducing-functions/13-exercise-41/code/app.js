// DEFINE YOUR FUNCTION BELOW:
function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

// Test case
let wordUp;

wordUp = capitalize("eggplant");
console.log(wordUp); // "Eggplant"

wordUp = capitalize("pamplemousse");
console.log(wordUp); // "Pamplemousse"

wordUp = capitalize("squid");
console.log(wordUp); //"Squid"
