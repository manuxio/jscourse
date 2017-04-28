function* doSomething() {
  console.log('Sto per restituire uno');
  yield 'uno';
  console.log('Adesso il due...');
  yield 'due';
  console.log('...e per finire il tre!');
  const input = yield 'tre!';
  console.log('In entrata ho ricevuto', input);
}

var gen = doSomething();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
setTimeout(() => {
  gen.next('arg');
}, 1000);
