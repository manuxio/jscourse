const foo = 'test';
const myObject = {
  bar: 'BAR',
  foo: foo,
  [foo]: foo
};

console.log(myObject);
