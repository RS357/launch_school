class Octal {
  constructor (numStr) {
    this.numStr = numStr;
  }
  toDecimal() {
    if (this.numStr.match(/[^0-7]/g)) return 0;
    let splitReversedOctal = this.numStr.split('').reverse().map(num => Number(num));
    return splitReversedOctal.reduce((accum, val, idx) =>  {
      return accum + (val * (8 ** idx));
    });
  }
}

module.exports = Octal;

/*
problem: write a function that converts the octal number the class was instantiated with 
and returns a decimal number.

input: string 
output: number 

Rules: 
- don't use any library or built in methods
- Multiply the right most digit by 8 to the power of 0, and the second rightmost digit by 8^1, etc. Sum them
- if any character in input string is not a number, return 0
- if any digit in the input number is >= 8, return 0
- only positive numbers inputted 

Algo:
create variable decimalNum, set it to 0
if any character in input string is not a digit between 0 and 7, return 0 (regex)
create variable splitReversedOctal, set it to input string reversed and split to array
for every character in splitReversedOctal, char:
  coerce it to number, multiply it by the power of the index value e.g. 8 ^ idx and add that value to decimalNum
return decimalNum

*/