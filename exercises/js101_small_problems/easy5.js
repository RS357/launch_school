// Cute Angles 

// let dms = num => {
//   let MINUTES_PER_DEGREE = 60;
//   let SECONDS_PER_MINUTE = 60;

//   if (num === 0) return `0°00'00"`;
//   if (Number.isInteger(num)) return `${num}°00'00"`;

//   let degrees = Math.floor(num);
//   let decimal = num - degrees;
//   let minutes = decimal * MINUTES_PER_DEGREE;
//   minutes = String(Math.floor(minutes)).padStart(2, "0");
//   let seconds = ((decimal * MINUTES_PER_DEGREE) - minutes) * SECONDS_PER_MINUTE;
//   seconds = String(Math.floor(seconds)).padStart(2, "0");
//   return `${degrees}°${minutes}'${seconds}"`;
// }

//Combining Arrays
// let copyNonDupes = (arr, newArr) => {
//   arr.forEach(val => {
//     if (!newArr.includes(val)) {
//       newArr.push(val);
//     }
//   });
// };

// let union = (...args) => {
//   let newArr = [];
//   args.forEach(arg => {
//     copyNonDupes(arg, newArr);
//   });
//   return newArr;
// };

// Halvsies

// let halvsies = arr => {
//   let halfway = Math.ceil(arr.length / 2);
//   return [arr.slice(0, halfway), arr.slice(halfway)];
// };

// find the duplicate
// let findDup = arr => {
//   let dups = {};
//   for (let num of arr)  {
//     if (!dups[num]) {
//       dups[num] = 1;
//     } else {
//       return num;
//     }
//   }
//   return undefined;
// };

// Combine Two Lists

// let interleave = (arr1, arr2) => {
//   let interleaved = [];

// reduce
// return arr1.reduce((returnArr, val, idx) => {
//   returnArr.push(val, arr2[idx]);
//   return returnArr;
// }, []);

// forEach
// arr1.forEach((val, idx) => interleaved.push(val, arr2[idx]));
// return interleaved;

// map
// return arr1.map((val, idx) => [val, arr2[idx]]).flat();

// for (let idx = 0; idx < arr1.length; idx += 1) {
//   interleaved.push(arr1[idx], arr2[idx]);
// }
// return interleaved;
//};

// Multiplicative Average

// let multiplicativeAverage = arr => {
//   let product = arr.reduce((prev, current) => prev * current, 1);
//   return (product / arr.length).toFixed(3);
// };

// Multiply Lists



console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77])