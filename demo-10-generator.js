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

function* myGenerator() {
	yield 1;
	yield 2;
	yield 3;
	yield 4;
}

var result = evenSquaresProduct(myGenerator());
result.map(_.log).resume();
