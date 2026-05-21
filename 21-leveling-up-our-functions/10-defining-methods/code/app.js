// An object literal w/ function assigned as value to properties (i.e. methods)
const myMath = {
  PI: 3.14159,
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return x * x;
  },
  cube: function (x) {
    return x ** 3;
  },
};

console.log(myMath.multiply(2, 2));
console.log(myMath.divide(4, 2));
console.log(myMath.square(5));
console.log(myMath.cube(5));

// Using the method shorthand
const customMath = {
  PI: 3.14159,
  multiply(x, y) {
    return x * y;
  },
  divide(x, y) {
    return x / y;
  },
  square(x) {
    return x * x;
  },
  cube(x) {
    return x ** 3;
  },
};
