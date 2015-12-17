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