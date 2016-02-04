'use strict';

class Person {
  
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  
  get name() {
    return this.first + ' ' + this.last;
  }
  
  set firstName(first) {
    this.first = first;
  }
  
  set lastName(last) {
    this.last = last;
  }
  
}

let person = new Person('Jim', 'Smith');
console.log('Name: ' + person.name);

person.firstName('Bob');
person.firstName('Jones');
console.log('Name: ' + person.name);
