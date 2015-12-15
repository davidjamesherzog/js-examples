'use strict'

let name = 'Dave';

console.log('Name: ' + name);
printName();

function printName() {
  let name = 'Bob';
  
  {
    let name = 'Steve';
    console.log('Name: ' + name);
  }
  
  console.log('Name: ' + name);
}
	