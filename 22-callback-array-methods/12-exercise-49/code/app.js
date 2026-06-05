function validUserNames(usernames) {
  return usernames.filter((name) => name.length < 10);
}

// Test case
const userNames = [
  "mark",
  "staceysmom1978",
  "q29832128238983",
  "carrie98",
  "MoanaFan",
];

console.log(validUserNames(userNames));
