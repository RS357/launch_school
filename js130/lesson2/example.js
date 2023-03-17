/*eslint-disable*/ 
// 'use strict';

/*
1) D           X
2) B
3) A, C
4) B, D
5) A, B, D,
6) C
7) C,
8) A
9) B, C
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