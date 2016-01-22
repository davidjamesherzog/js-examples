// Need to run in FF.  Not yet supported in Node 5.x

var nums = [1,2,3,4,5,6,7,8,9,10];

var [first, second,,,,,,,tenth] = nums;

console.log('first: ' + first);
console.log('second: ' + second);
console.log('tenth: ' + tenth);

// swap variables

var a = 1, b = 2;

[b, a] = [a, b];

console.log('a: ' + a);
console.log('b: ' + b);

// method signature

var nums = [1, 2, 3, 4];
doSomething(nums);

function doSomething([first, second, ...others]) {
  console.log('first: ' + first);
  console.log('second: ' + second);
  console.log('others: ' + others);
}

// nested arrays

var nums = [1, 2, [3, 4, [5, 6]]];

var [one,, [three,,[,six]]] = nums;

console.log('one: ' + one);
console.log('three: ' + three);
console.log('six: ' + six);

// pattern errors (refute) - does not seem to work in FF

let [x, y, z] = [1, 2]; // should throw error

let ?[x, y, z] = [1, 2];

console.log('x: ' + x);  // 1
console.log('y: ' + y);  // 2
console.log('z: ' + z);  // undefined

let [x, y, ?z] = [1, 2];

console.log('x: ' + x);  // 1
console.log('y: ' + y);  // 2
console.log('z: ' + z);  // undefined
