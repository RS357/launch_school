/*
1) b, 
2) d X
3) a, c
4) d, b
5) a, b, d
6) c
7) c, 
8) a
9) c X
10) c
*/

class Cat {
  constructor(name) {
    this.name = name;
  }

  miaow() {
    return `${this.name} is miaowing.`;
  }
}

describe('Cat Tests', () => {
  let kitty;

  beforeEach(() => {
    kitty = new Cat('Kitty');
  });

  test('is cat', () => {});

  test('name', () => {});

  test('miaow', () => {});

  test('raises error', () => {});
});