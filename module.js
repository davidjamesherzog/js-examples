var math = (function Math() {

  var api = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide
  };
  return api;

  function add(a, b) {
    return a + b;
  }

  function subtract(a, b) {
    return a - b;
  }

  function multiply(a, b) {
    return a * b;
  }

  function divide(a, b) {
    return a / b;
  }

})();

console.log("Add 1 + 2: " + math.add(1, 2));
console.log("Subtract 5 - 2: " + math.subtract(5, 2));
console.log("Multiply 3 * 2: " + math.multiply(3, 2));
console.log("Divide 4 / 2: " + math.divide(4, 2));
