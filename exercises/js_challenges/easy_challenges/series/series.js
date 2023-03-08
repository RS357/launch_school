/*

Algo: // given classNum and num
if num is longer than classNum length (classNum coerced to string), throw an error 
create empty array, seriesArr
iterate through classNum, from 0th character to the (classNum length - num) + 1th value, firstNumChar:
  create new string and set it to firstNumChar, seriesNum,
  iterate through classNum from firstNumChar as far as num -  (starting with char one ahead of firstNumChar), numChar:
    concatenate seriesNum by numChar
  split seriesNum by character into an array, seriesNumArr
  coerse every character in seriesNumArr to a number value
  push seriesNumArr to seriesArr
return seriesArr
012345 - 2: [0, 1] [1, 2] [2, 3] [3, 4] [4, 5] 
*/

class Series {
  constructor(classNum) {
    this.classNum = classNum;
  }

  slices(num) {
    if (num > String(this.classNum).length) {
      throw Error("length longer than number");
    }
    console.log(this.classNum);

    let seriesArr = [];

    for (let idx = 0; idx < this.classNum.length - num + 1; idx += 1) {
      let firstNumChar = this.classNum[idx];
      let seriesNum = firstNumChar;
      for (let jdx = idx + 1; jdx < idx + num; jdx += 1) {
        let numChar = this.classNum[jdx];
        seriesNum += numChar;
      }
      let seriesNumArr = seriesNum.split('');
      seriesNumArr = seriesNumArr.map(char => Number(char));
      seriesArr.push(seriesNumArr);
    }
    return seriesArr;
  }
}

let series = new Series('01234');
series.slices(2); // [[0, 1], [1, 2], [2, 3], [3, 4]]
module.exports = Series;

/*
Problem: Write a class that takes a number and a method called 'slices' 
that takes a number as an argument and returns all possible consecutive number
series, of the number the class was instantiated with, that is of the 
length passed to the function.

Rules: 
If the number passed to the function is longer than the number 
the class was initialised with, throw an error.

Each series should be an array, and they should be returned in an array 

if the number passed to function is same as length of number class
was initialized with, just return the number the class 
was initialized with, with each digit being a value in the 
returend array



*/