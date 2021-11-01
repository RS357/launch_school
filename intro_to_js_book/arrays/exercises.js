// 1) array1: 4, array2: 5, array3: 0, array4: 3, array5: 101

// 2
// let myArray = [1, 3, 6, 11, 4, 2,
//     4, 9, 17, 16, 0];
// console.log(myArray.filter(val => val %2 === 0))

//3) 

// let myArray = [
//     [1, 3, 6, 11],
//     [4, 2, 4],
//     [9, 17, 16, 0],
//   ];

// myArray.forEach(arr => arr.forEach(num => num % 2 === 0? console.log(num): undefined))

// 4) 
// let myArray = [
//     1, 3, 6, 11,
//     4, 2, 4, 9,
//     17, 16, 0,
//   ];

// let newArr = myArray.map(num => num % 2 === 0? "even": "odd");
// console.log(newArr);

// 5) {
// let findIntegers = (arr) => arr.filter(val => Number.isInteger(val));

// let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
// let integers = findIntegers(things);
// console.log(integers); // => [1, 3, -4];

// 6) 
// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// let oddLengths = (arr) => arr.map(val => val.length).filter(length => length % 2 !== 0);
// console.log(oddLengths(arr)); // => [1, 5, 3]

// 7) 
// let array = [3, 5, 7];
// let sumOfSquares = (arr) => array.reduce((accum, val) => accum + val**2, 0)
// console.log(sumOfSquares(array)); // => 83

// 8)
// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// let oddLengths = (arr) => {
//     return arr.reduce((nextArr, string) => {
//         nextArr.push(string.length);
//         return nextArr
//     }, []).reduce((nextArr2, length) => {
//         if (length % 2 !== 0) {
//             nextArr2.push(length);
//             return nextArr2;
//         }
//         else return nextArr2;
//     }, []);
// }

// console.log(oddLengths(arr)); // => [1, 5, 3]

// 9)
// let numbers1 = [1, 3, 5, 7, 9, 11];
// let numbers2 = [];
// let numbers3 = [2, 4, 6, 8];
// let nums = numbers1.concat(numbers2).concat(numbers3)
// filtered = nums.filter(val => val === 3)
// console.log(filtered.length > 0)

// 10) 
// arr[1][3] = 606;