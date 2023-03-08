class SumOfMultiples {
  static to(num) {
    return new SumOfMultiples().to(num);
  }
  constructor(...args) {
    this.set = args;
  }

  _filterMultiples(multiples) {
    let filteredMultiples = [];
    multiples.forEach(num => {
      if (!filteredMultiples.includes(num)) {
        filteredMultiples.push(num);
      }
    });
    return filteredMultiples;
  }

  to(num) {
    if (num < 3) return 0;
    if (this.set.length === 0) {
      this.set = [3, 5];
    }
    let multiples = [];
    this.set.forEach(setNum => {
      let currentSetNum = setNum;
      while (currentSetNum < num) {
        multiples.push(currentSetNum);
        currentSetNum += setNum;
      }
    });
    let filteredMultiples = this._filterMultiples(multiples);
    return filteredMultiples.reduce((accum, val) => accum + val);
  }
}

/*eslint-disable*/

module.exports = SumOfMultiples;

/*
Problem: write a function that takes a set of numbers
the class is instantiated with, and finds the sum of every multiple,
of each of those numbers, that is less than the number passed to the function.

Rules:
If the set of numbers is not given, use 3 and 5
Multiples are unique 

Algo // given set and number
if no set, set set to an array containing 3 and 5
create variable sum and set it to 0
create empty array multiples 
iterate through set, setNum:
  create variable currentSetNum and set it to setNum
  push currentSetNum to multiples array
  while currentSetNum is less than num:
    currentSetNum += currentSetNum
    push currentSetNum to multiples array 

create variable filteredMultiples and set it to return value of calling 
  filterMultiples helper function and pasing it the multiples array 
return sum of filterMultiples using reduce
*/