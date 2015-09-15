var _ = require('highland');

var square = function(n) {
  return n * n;
};

var product = function(a, b) {
  return a * b;
};

var even = function(n) {
  return n % 2 === 0;
};

var evenSquaresProduct = _.compose(
  _.reduce(1, product),
  _.map(square),
  _.filter(even)
);

var result = evenSquaresProduct([1, 2, 3, 4]);
result.invoke('toString', [10]).pipe(process.stdout);
