'use strict';

let mySet = new Set();

// add elements
mySet.add(1);
mySet.add(5);
mySet.add('some text');
let o = {a: 1, b: 2};
mySet.add(o);

console.log('has 1: ' + mySet.has(1)); // true
console.log('has 3: ' + mySet.has(3)); // false, 3 has not been added to the set
console.log('has 5: ' + mySet.has(5));              // true
console.log('has sqrt 5: ' + mySet.has(Math.sqrt(25)));  // true
console.log('has some text: ' + mySet.has('Some Text'.toLowerCase())); // true
console.log('has object o: ' + mySet.has(o)); // true

console.log('size: ' + mySet.size); // 4

// iterate 

// logs the items in the order: 1, "some text" 
for (let item of mySet) console.log(item);

// logs the items in the order: 1, "some text" 
for (let item of mySet.keys()) console.log(item);
 
// logs the items in the order: 1, "some text" 
for (let item of mySet.values()) console.log(item);

// logs the items in the order: 1, "some text" 
//(key and value are the same here)
for (let [key, value] of mySet.entries()) console.log(key);


// Iterate set entries with forEach
mySet.forEach(function(value) {
  console.log(value);
});


// remove elements 
mySet.delete(5); // removes 5 from the set
console.log('has 5: ' + mySet.has(5));    // false, 5 has been removed

console.log('size -1: ' + mySet.size); // 3, we just removed one value