var product = function(a, b) {
  return a * b;
};

var result = [1, 2, 3, 4].reduce(product, 1);
console.log(result);
