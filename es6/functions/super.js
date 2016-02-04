'use strict';

class Shape { 
  constructor(type) {
    this.type = type;
  }
  
  toString() {
    console.log('Shape is a ' + this.type);
  }
}

class Square extends Shape {
  
  constructor(type) {
    super('Square');
  }
  
  toString() {
    super.toString();
    console.log('This is a square');
  }
}

let shape = new Shape('Circle');
let square = new Square();

shape.toString();
square.toString();