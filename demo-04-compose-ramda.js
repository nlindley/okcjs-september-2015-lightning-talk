var R = require('ramda');

var square = function(n) {
  return n * n;
};

var product = function(a, b) {
  return a * b;
};

var even = function(n) {
  return n % 2 === 0;
};

var evenSquaresProduct = R.compose(
  R.reduce(product, 1),
  R.map(square),
  R.filter(even)
);

var result = evenSquaresProduct([1, 2, 3, 4]);
console.log(result);

module.exports = evenSquaresProduct;
