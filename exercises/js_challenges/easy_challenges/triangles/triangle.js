'use strict';
/*eslint-disable*/ 
/*
Write a program to determine whether a triangle is equilateral, isosceles, or scalene.
An equilateral triangle has all three sides the same length.
An isosceles triangle has exactly two sides of the same length.
A scalene triangle has all sides of different lengths.
Note: For a shape to be a triangle at all, all sides must be of length > 0,
and the sum of the lengths of any two sides must be greater than the length of the third side.

Problem: Write a program to determine whether a triangle is equilateral, isosceles or scalene 
Rules:
1) An equilateral triangle has all three sides the same length
2) An isosceles traingle has exactly two sides of the same length
3) A scalene triangle has all sides of different lengths
4) It is only a triangle if: 
  - all sides are length > 0
  - the sum of two lengths of any two sides must be greater than length of third side

Algo: (three arguments: side1, side1, side3)
  if either of side1, side2 or side3 are less than or equal to 0: 
    throw error
  if side1 + side 2 is less than side3 OR side1 + side3 is less than side2 OR side2 + side3 is les than side1: 
    throw error

  if side 1 is same as side 2 and side 2 is same as side 3:
    return 'equilateral'
  else if side 1 is same as side 2 or side 1 is same as side 3 or side 2 is same as side 3:
    return 'isosceles'
  else if side1 is not same as side 2 and side 2 is not same as side 3 and side 3 is not same as side 1:
    return 'scalene'
  
*/

/*eslint-enable*/

class Triangle {
  constructor(side1, side2, side3) {
    this._checkSideLengths(side1, side2, side3);
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  _checkSideLengths(side1, side2, side3) {
    if (side1 === 0 || side2 === 0 || side3 === 0) {
      throw new Error('none of the sides can be of length 0');
    }
    if (side1 + side2 <= side3 ||
      side1 + side3 <= side2 ||
      side2 + side3 <= side1) {
      throw new Error("Sum of two sides must be greater than third side");
    }
  }

  _equilateral() {
    if (this.side1 === this.side2 &&
      this.side2 === this.side3 &&
      this.side3 === this.side1) {
      return 'equilateral';
    } else return null;
  }

  _isoceles() {
    if (this.side1 === this.side2 ||
      this.side1 === this.side3 ||
      this.side2 === this.side3) {
      return 'isosceles';
    } else return null;
  }

  _scalene() {
    if (this.side1 !== this.side2 &&
      this.side2 !== this.side3 &&
      this.side3 !== this.side1) {
      return 'scalene';
    } else return null;
  }

  kind() {
    return this._equilateral() || this._isoceles() || this._scalene();
  }
}

module.exports = Triangle;