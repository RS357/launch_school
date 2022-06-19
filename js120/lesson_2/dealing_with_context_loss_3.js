let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    console.log('this in foo: ', this);
    [1, 2, 3].forEach((number) => {
      console.log(String(number) + ' ' + this.a + ' ' + this.b);
    });
  }
};

obj.foo();

// => 1 undefined undefined
// => 2 undefined undefined
// => 3 undefined undefined