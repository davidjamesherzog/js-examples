'use strict';

const NAME = 'Dave';

console.log('Name: ' + NAME);

// cannot reassign value to constant
try {
  NAME = 'Steve';
  console.log('Name: ' + NAME);
} catch (error) {
  console.log('Cannot reassign constant');
}
