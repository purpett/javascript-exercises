const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b 
};

const sum = function(numeri) {
	return numeri.reduce((a,b) => {
    return a + b
  }, 0)
};

const multiply = function(numeri) {
  return numeri.reduce((a, b) => {
    return a * b
  }, 1)
};

const power = function(b, e) {
  let i = 0
  let value = 1
  while (i < e) {
    value = value * b
    i++
  } 
	return value 
};

const factorial = function(n) {
	let i = 1
  let fact = 1
  while (i <= n) {
    fact = fact * i
    i++
  }
  return fact
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
