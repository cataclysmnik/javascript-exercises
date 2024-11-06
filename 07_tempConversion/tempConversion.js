const convertToCelsius = function(f) {
  let c = (f - 32) * (5 / 9);
  if (Math.floor(c) != c) {
    return Number(c.toFixed(1));
  }
  return c;
};

const convertToFahrenheit = function(c) {
  let f = c * (9 / 5) + 32;
  if (Math.floor(f) != f) {
    return Number(f.toFixed(1));
  }
  return f;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
