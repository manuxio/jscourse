var obj = {
  foo: 'bar',
  tmp: 1
};

console.log('Foo: ' + obj.foo);
console.log('Tmp: ' + obj.tmp);
if (obj && obj.bar && obj.bar.baz) {
  console.log('Bar: ' + obj.bar.baz);
}
console.log('Object', obj);
