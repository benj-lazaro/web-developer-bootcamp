// DEFINE YOUR FUNCTION BELOW:
function isShortsWeather(temperature) {
  if (temperature >= 75) return true;
  return false;
}

// Test case
let shortsSeason = isShortsWeather(75);
console.log(shortsSeason);

shortsSeason = isShortsWeather(70);
console.log(shortsSeason);
