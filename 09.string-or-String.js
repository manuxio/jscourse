var x = 'My string';
var y = new String('My string');

console.log(x);
console.log(y);
console.log(typeof x);
console.log(typeof y);  // Logs "object"

console.log(y.valueOf());
console.log(x.valueOf());

if (x == 'My string') {
  console.log('Yes, x equals to My string');
} else {
  console.log('No, sorry, x is not equal to My string')
}

if (y == 'My string') {
  console.log('Yes, y equals to My string');
} else {
  console.log('No, sorry, y is not equal to My string')
}

if (x === 'My string') {
  console.log('Yes, x equals to My string');
} else {
  console.log('No, sorry, x is not equal to My string')
}

if (y === 'My string') {
  console.log('Yes, y equals to My string');
} else {
  console.log('No, sorry, y is not equal to My string')
}
