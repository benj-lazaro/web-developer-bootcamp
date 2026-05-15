// Parent (ancestor) function
function bankRobbery() {
  const heroes = ["Spiderman", "Wolverine", "Black Panther", "Batwoman"];

  // Nested child (descendant) function
  function cryForHelp() {
    // Parent (ancestor) function has NO access to this variable
    let color = "purple";

    // Nested child (descendant) function
    function inner() {
      // Has access to the constant declared w/in the scope of the ancestor function
      for (const hero of heroes) {
        console.log(`Please help us, ${hero}!`);
      }
    }

    inner();
  }

  cryForHelp();
}

bankRobbery();
