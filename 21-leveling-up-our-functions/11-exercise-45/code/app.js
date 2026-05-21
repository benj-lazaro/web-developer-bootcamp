const square = {
  area(side) {
    return side * side;
  },

  perimeter(side) {
    return side * 4;
  },
};

// Test case
console.log(square.area(10));
console.log(square.perimeter(10));
