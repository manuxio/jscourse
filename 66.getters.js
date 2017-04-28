class MyClass {
  constructor() {
    this.foo = 'Foo!';
    this.counter = 3;
  }
  get prop() {
    this.counter--;
    if (this.counter > 0) {
      return 'Ancora...';
    }
    return 'Basta!';
  }
}

const o = new MyClass();

console.log(o);
console.log(o.prop);
console.log(o.prop);
console.log(o.prop);
