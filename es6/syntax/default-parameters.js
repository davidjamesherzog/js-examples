// Need to run in FF.  Not yet supported in Node 5.x

'use strict';

function sayHello(name = 'World') {
  console.log('Hello ' + name + '!');
}

sayHello();
sayHello('Dave');
sayHello(undefined);

function getRand() {
  return Math.ceil(Math.random() * 10000000) + new Date().getTime();
}

function myFunction(id = getRand()) {
  console.log('My ID: ' + id);
}

myFunction();
myFunction(1);