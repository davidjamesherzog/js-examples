// Need to run in FF.  Not yet supported in Node 5.x

function logPerson(first, last, ...attrs) {
  console.log('First Name: ' + first);
  console.log('Last Name: ' + last);
  console.log('Attributes: ' + attrs);
}

logPerson('Dave', 'Herzog', '40', '6ft', 'Blonde');