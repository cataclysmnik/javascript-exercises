const add = function(x, y) {
	return Number(x + y);
};

const subtract = function(x, y) {
  return Number(x - y);
};

const sum = function(arr) {
  let result = 0;
  for (i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
	
};

const multiply = function(arr) {
  let result = 1;
  for (i = 0; i < arr.length; i++) {
    result *= arr[i];
  }
  return result;
};

const power = function(x,y) {
  return x ** y;
};

const factorial = function(n) {
  let fac = 1
	if (n == 0) {
    return 1;
  }
  for (i = 1; i <= n; i++) {
    fac *= i
  }
  return fac;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
