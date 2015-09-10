function add(a, b) {
  return a + b;
}

console.log(add.call(this, 1, 2));
var array = [];
array[0] = 1;
array[1] = 3;
console.log(add.apply(this, array));
