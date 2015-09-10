function Animal(name) {
  this.name = name;

  this.run = function() {
    console.log("running "+this.name);
  };
}

function Rabbit(name) {

  Animal.call(this, name); // inherit

  var parentRun = this.run;  // keep parent method

  this.run = function() {
    console.log("running sub " + this.name);
    parentRun.apply(this);  // call parent metho
  };

  this.bounce = function() {
    console.log("bouncing " + this.name);
  };
}

Rabbit.prototype.info = function() {
  console.log("info");
};

var animal = new Animal('Fox');
animal.run();

var rabbit = new Rabbit("Rabbit");
rabbit.bounce(); // own method
rabbit.run();    // inherited method
rabbit.info();
rabbit.test = function() {
  console.log("test");
}
rabbit.test();

var rabbit2 = new Rabbit("Rabbit2");
rabbit2.bounce(); // own method
rabbit2.run();    // inherited method
rabbit2.info();
