var even = function(n) {
  return n % 2 === 0;
};

var result = [0, 1, 2, 3, 4].filter(even);
console.log(result);
