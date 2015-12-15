function spread(a, b, c) {
  console.log('a: ' + a);
  console.log('b: ' + b);
  console.log('c: ' + c);
}

var args = [0, 1];

console.log('New Way...');
spread(-1, ...args);

console.log('Old Way...');
spread(-1, args[0], args[1]);
