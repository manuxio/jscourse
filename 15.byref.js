function Atest(x) {
  this.sum = function(y) {
    x = x + y;
    return x;
  }
}


var i = 10;
var z = 20;

var o = new Atest(i);
console.log(o.sum(z));
console.log(i);
console.log(z);

console.log('-------------------');

function Btest(x) {
  this.sum = function(y) {
    x.value = x.value + y.value;
    return x.value;
  }
}



i = {
  value: 10
};
z = {
  value: 20
}
o = new Btest(i);
console.log(o.sum(z));
console.log(i.value);
console.log(z.value);

console.log('-------------------');

function Ctest(x) {
  this.sum = function(y) {
    x.value = y;
    y.value = 11;
  }
}



i = {
  value: 10
};
z = {
  value: 20
}
o = new Ctest(i);
o.sum(z);
console.log(i.value.value);
console.log(z.value);
