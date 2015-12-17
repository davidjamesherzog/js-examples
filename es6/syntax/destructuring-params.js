var person1 = {
  name: 'Dave',
  age: 40
};
var person2 = {};

displayPerson1(person1);
//displayPerson2(person2);

function displayPerson1({name, age}) {
  console.log('Name: ' + name);
  console.log('Age: ' + age);
}

// defaults not yet supported
/*function displayPerson2({name = 'Bob', age = 20}) {
  console.log('Name: ' + name);
  console.log('Age: ' + age);
}*/