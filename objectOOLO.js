var Animal = {
  init: function(name) {
    this.name = name;
  },
  run: function() {
    console.log("running "+this.name);
  }
};

var Rabbit = Object.create(Animal);
//var parentRun = Rabbit.run;
Rabbit.parentRun = Rabbit.run;
Rabbit.run = function() {
  console.log("running sub " + this.name);
  this.parentRun();
  //parentRun.apply(this);  // call parent method
};
Rabbit.bounce = function() {
  console.log("bouncing " + this.name);
};
Rabbit.info = function() {
  console.log("info");
};

var animal = Object.create(Animal);
animal.init('Fox');
animal.run();

var rabbit = Object.create(Rabbit);
rabbit.init('Rabbit');
rabbit.bounce(); // own method
rabbit.run();    // inherited method
rabbit.info();
