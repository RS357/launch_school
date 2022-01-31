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

// let multiplyList = (arr1, arr2) => {
//   let products = [];
//   for (let idx = 0; idx < arr1.length; idx += 1) {
//     products.push(arr1[idx] * arr2[idx]);
//   }
//   return products;
// }

// List of Digits
// let digitList = num => {
//   return String(num).split("").map(char => Number(char));
// }

// How many?

// let vehicles = ['car', 'car', "CAR", 'truck', 'car', 'SUV', 'truck',
//                 'motorcycle', 'motorcycle', 'car', 'truck'];

// let countOccurrences = arr => {
//   let occurences = {};
//   arr.forEach(val => {
//     let valLowerCase = val.toLowerCase()
//     if (occurences[valLowerCase]) {
//       occurences[valLowerCase] += 1;
//     } else {
//       occurences[valLowerCase] = 1;
//     }
//   });
//   for (let item in occurences) {
//     console.log(`${item} => ${occurences[item]}`)
//   }
// }

// countOccurrences(vehicles);

// Array Average

// let average = arr => { 
//   return Math.floor(arr.reduce((prev, current) => {
//     return prev + current;
//   }, 0) / arr.length);
// }

// After Midnight (Part 1)

// let MINUTES_IN_HOUR = 60;
// let MINUTES_IN_DAY = 24 * MINUTES_IN_HOUR;

// let roundToDay = (minutes, minutes_in_day) => {
//   if (minutes < 0) {
//     return (minutes % minutes_in_day) + minutes_in_day;
//   } else {
//     return minutes % minutes_in_day;
//   }
// }

// let timeOfDay = minutes => {
//   if (minutes === 0) return "00:00";
//   if (minutes > 0 && minutes < 60) return `00:${minutes}`;
//   if (minutes > -60 && minutes < 0) return `23:${60 + minutes}`;

//   if (minutes < MINUTES_IN_DAY || minutes > MINUTES_IN_DAY) {
//     minutes = roundToDay(minutes, MINUTES_IN_DAY);
//   }

//   let hh = Math.floor(minutes / MINUTES_IN_HOUR);
//   let mm = minutes % MINUTES_IN_HOUR;

//   hh = String(hh).padStart(2, "0");
//   mm = String(mm).padStart(2, "0");

//   return `${hh}:${mm}`;
// }

// After Midnight (Part 2)
const MINUTES_IN_HOUR = 60;
const MINUTES_IN_DAY = 24 * MINUTES_IN_HOUR;

let afterMidnight = str => {
  let splitTime = str.split(":").map(num => Number(num));
  splitTime[0] *= 60;
  return (splitTime[0] + splitTime[1]) % MINUTES_IN_DAY;
}

let beforeMidnight = str => {
  let mins = afterMidnight(str);
  if (mins === 0) {
    return 0;
  } else {
    return MINUTES_IN_DAY - mins;
  }
}

