var x = 'Test';
var y = 'Test';

if (x === y) {
  console.log('X and Y are really equal');
} else {
  console.log('X and Y are not equal');
}

var z = new String('Test');
var w = new String('Test');

if (z == w) {
  console.log('Z and W are equal');
} else {
  console.log('Z and W are not equal');
}

if (x == z) {
  console.log('X and Z are equal');
} else {
  console.log('X and Z are not equal');
}
