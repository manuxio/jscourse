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

  set prop(x) {
    this.counter = 3;
  }
}

const o = new MyClass();

console.log(o);
console.log(o.prop);
console.log(o.prop);
console.log(o.prop);
o.prop = '1';
console.log(o.prop);
console.log(o.prop);
console.log(o.prop);
