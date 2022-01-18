// 1) [1, 2, 3] - because "hi" is truthy 
// 2) [undefined, undefined, undefined] - because map's callback doesn't return anything 
// 3) [1, 4, 9] - the callback returns a value this time 
// 4) 11 - it returns the length of the last value of the array
// 5) The callback's return value in the following code is num x 2, and the return value of every in this code is true 
// 6) [1, 1, 1, 1, 1] - Array.prototype.fill does mutate the caller
// 7) [undefined, "bear"] - because "bear" is the only array value that meets the selection criterion
//     undefined is the first value because the callback's return statement can't be reached if the 
//     selection criterion is not met - meaning the function returns undefined by default

//8)
// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
// let obj = {};
// flintstones.forEach((val, idx) => obj[val] = idx);
// console.log(obj);

// 9)
// let ages = {
//     Herman: 32,
//     Lily: 30,
//     Grandpa: 5843,
//     Eddie: 10,
//     Marilyn: 22,
//     Spot: 237
//   };

//   let total = Object.values(ages).reduce((prevVal, currentVal) => prevVal + currentVal);
//   console.log(total);

// 10)
// let min = Math.min(...Object.values(ages))
// console.log(min);

// 11)
// let statement = "The Flintstones Rock";
// let obj = {};
// statement.split('')
//          .filter(char => char !== " ")
//          .forEach(char => {
//              obj[char] = obj[char] || 0;
//              obj[char] += 1;
// });
// console.log(obj);


