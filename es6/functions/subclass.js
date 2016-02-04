'use strict';

class Animal { 
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + ' barks.');
  }
}

let animal = new Animal('Rex');
let dog = new Dog('Skippy');

animal.speak();
dog.speak();
