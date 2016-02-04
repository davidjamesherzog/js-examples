'use strict';

let animalSounds = new Map();

// add elements
animalSounds.set('dog', 'woof');
animalSounds.set('cat', 'meow');
animalSounds.set('frog', 'ribbit');

console.log('size: ' + animalSounds.size); //logs 3
console.log('has dog: ' + animalSounds.has('dog')); //logs true

// iterate over array

//for (let [key, value] of animalSounds) {
//  console.log(key + " = " + value);
//}
animalSounds.forEach(function (value, key) {
    console.log(key, ' = ', value);
});
// Will show 2 logs; first with "0 = zero" and second with "1 = one"

for (let key of animalSounds.keys()) {
  console.log(key);
}
// Will show 2 logs; first with "0" and second with "1"

for (let value of animalSounds.values()) {
  console.log(value);
}
// Will show 2 logs; first with "zero" and second with "one"

//for (let [key, value] of animalSounds.entries()) {
//  console.log(key + " = " + value);
//}

// remove element
animalSounds.delete('dog');

console.log('size -1: ' + animalSounds.size); //logs 2
console.log('has dog:' + animalSounds.has('dog')); //logs false

animalSounds.clear();
console.log('size cleared:' + animalSounds.size); //logs 0
