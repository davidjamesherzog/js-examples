// Need to run in FF.  Not yet supported in Node 5.x

function getAddress() {
  return {
    'city': 'Anytown',
    'state': 'PA',
    'zip': 55555
  }
}

let {city, state, zip} = getAddress();
console.log('city: ' + city);
console.log('state: ' + state);
console.log('zip: ' + zip);

let {city: c, state: s, zip: z} = getAddress();
console.log('city: ' + c);
console.log('state: ' + s);
console.log('zip: ' + z);

// destructure nested object
let person = {
  name: 'Aaron',
  age: 35,
  address: {
    city: 'Philly',
    state: 'PA',
    zip: 11111
  }
}

let {pname, page, address: {pcity, pstate, pzip}} = person;
console.log('name: ' + pname);
console.log('page: ' + page);
console.log('city: ' + pcity);
console.log('state: ' + pstate);
console.log('zip: ' + pzip);