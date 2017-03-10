function test(y) {
  this.concat = function(x) {
    return y+x;
  }
}

var y = new String('Test');
var newresult = new test(y);
console.log(newresult.concat('foo'));
console.log(newresult.concat('bar'));
y = new String('Another Test');
console.log(newresult.concat('baz'));
