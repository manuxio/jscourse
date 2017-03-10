function test() {
  this.concat = function(y) {
    return x+y;
  }
}

var x = new String('Test');
var newresult = new test();
console.log(newresult.concat('foo'));
console.log(newresult.concat('bar'));
x = new String('Another test');
console.log(newresult.concat('baz'));
