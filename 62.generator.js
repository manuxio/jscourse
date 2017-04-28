function* doSomething() {
  console.log('Sto per restituire uno');
  yield 'uno';
  console.log('Adesso il due...');
  yield 'due';
  console.log('...e per finire il tre!');
  yield 'tre!';
}

var gen = doSomething();

console.log(gen.next().value);
console.log(gen.next().value);
setTimeout(() => {
  console.log(gen.next().value);
}, 1000);
