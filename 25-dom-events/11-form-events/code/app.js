const form = document.getElementById("shelterForm");
const input = document.querySelector("input");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Submitted!");
  input.value = "";
});
