var util = require('util');
var obj = {
  foo: 'bar',
  tmp: 'baz',
  subvalue: {
    test: 'this is a test',
    anotherSubObject: {
      a: '1',
      b: '2',
      subSubObject: {
        1: 1,
        2: 2
      }
    }
  }
};
console.log(obj);
console.log(util.inspect(obj, { depth: null }));
