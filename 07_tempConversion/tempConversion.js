const ftoc = function(farenheit) {
  let conversionC = (farenheit - 32) * (5/9);
  return Math.round(conversionC * 10) / 10
};

const ctof = function(celsius) {
  let conversionF = celsius * (9/5) + 32;
  return Math.round(conversionF * 10) / 10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
