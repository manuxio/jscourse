function test(y) {
  this.concat = function(x) {
    return y+x;
  }
}

var y = 'Test';
var newresult = new test(y);
console.log(newresult.concat('foo'));
console.log(newresult.concat('bar'));
y = 'Another test';
console.log(newresult.concat('baz'));
