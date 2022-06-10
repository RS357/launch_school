// Lettercase Percentage Ratio

// let letterPercentages = str => {
//   let count = str.length;
//   let totals = {
//     lowercase: (((str.match(/[a-z]/g) || []).length / count) * 100).toFixed(
//       2
//     ),
//     uppercase: (((str.match(/[A-Z]/g) || []).length / count) * 100).toFixed(
//       2
//     ),
//     neither: (((str.match(/[^a-z]/gi) || []).length / count) * 100).toFixed(
//       2
//     ),
//   };
//   return totals;
// };

// Triangle Sides
// let isInvalid = (num1, num2, num3) => {
//   if (num1 === 0 && num2 === 0 && num3 === 0) return true;
//   let nums = [num1, num2, num3];
//   nums.sort((a, b) => (a - b));
//   if (nums[2] >= nums[0] + nums[1]) return true;
//   return false;
// };

// let isEquilateral = (num1, num2, num3) => {
//   return (num1 === num2) && (num2 === num3);
// };

// let isIsosceles = (num1, num2, num3) => {
//   if ((num1 === num2) || (num1 === num3) || (num2 === num3)) return true;
//   return false;
// };

// let isScalene = (num1, num2, num3) => {
//   if ((num1 !== num2) && (num1 !== num3) && (num2 !== num3)) return true;
//   return false;
// };

// let triangle = (num1, num2, num3) => {
//   if (isInvalid(num1, num2, num3)) return 'invalid';
//   if (isEquilateral(num1, num2, num3)) return 'equilateral';
//   if (isScalene(num1, num2, num3)) return 'scalene';
//   if (isIsosceles(num1, num2, num3)) return 'isosceles';
// };

// let fridayThe13ths = year => {
//   let counter = 0;
//   for (let idx = 0; idx <= 11; idx += 1) {
//     let date = new Date(year, idx, 13);
//     let day = date.getDay();
//     if (day === 5) counter += 1;
//   }
//   return counter;
// }

// Next Featured Number Higher than a Given Value

// console.log(featured(12));           // 21
// console.log(featured(20));           // 21
// console.log(featured(21));           // 35
// console.log(featured(997));          // 1029
// console.log(featured(1029));         // 1043
// console.log(featured(999999));       // 1023547
// console.log(featured(999999987));    // 1023456987
// console.log(featured(9876543186));   // 9876543201
// console.log(featured(9876543200));   // 9876543201
// console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."

// Sum Square - Square Sum

// let sumSquareDifference = num => {
//   let squareOfSums = 0;
//   let sumOfSquares = 0;
//   let counter = 0;

//   while (counter <= num) {
//     squareOfSums += counter;
//     sumOfSquares += counter**2;
//     counter += 1;
//   }
//   return squareOfSums**2 - sumOfSquares;
// }

// 	Next Featured Number Higher than a Given Value

// let isOdd = num => num % 2 !== 0;
// let isMultipleOfSeven = num => num % 7 === 0;
// let isDigitsUnique = num => {
//   let obj = {};
//   let splitNum = String(num).split('');
//   splitNum.forEach(char => {
//     if (obj[Number(char)]) {
//       obj[Number(char)] += 1;
//     } else {
//       obj[Number(char)] = 1;
//     }
//   });
//   let vals = Object.values(obj);
//   for (let idx = 0; idx < vals.length; idx += 1) {
//     if (vals[idx] > 1) return false;
//   }
//   return true;
// }

// let featured = num => {
//   if (num >= 9876543201) {
//     return "There is no possible number that fulfills those requirements.";
//   }
//   for (let counter = num + 1; counter <= 9876543201; counter += 1) {
//     if (isOdd(counter) && 
//     isMultipleOfSeven(counter) && 
//     isDigitsUnique(counter)) {
//       return counter;
//     }
//   }
//   return "There is no possible number that fulfills those requirements."
// }

// Longest Sentence 

// let longestSentence = str => {
//   let longestLength = 0;
//   let longestSentence; 
//   let newSentenceStartIndex = 0;
//   let splitString = str.split('');
//   splitString.forEach((char, idx) => {
//     if (char === '!' || char === '.' || char === '?') {
//       let slicedString = splitString.slice(newSentenceStartIndex, idx + 1);
//       if (slicedString[0] === ' ') slicedString = slicedString.slice(1);
//       let sentenceString = slicedString.join('');
//       let sentenceSplitString = sentenceString.split(' ');
//       if (sentenceSplitString.length > longestLength) {
//         longestLength = sentenceSplitString.length;
//         longestSentence = sentenceSplitString.join(' ');
//       }
//       newSentenceStartIndex = idx + 1;
//     }
//   })
//   return `${longestSentence} \n \nThe longest sentence has ${longestLength} words.`;
// }

// Bubble Sort

// let bubbleSort = arr => {
//   let swapCount = 0;
//   let idx = 0;
//   let iterationCount = 0;
//   let lastIdx = arr.length - iterationCount
//   while (true) {
//     if (idx !== lastIdx) {
//       if (arr[idx + 1] < arr[idx]) {
//         let ahead = arr[idx + 1];
//         arr[idx + 1] = arr[idx];
//         arr[idx] = ahead;
//         swapCount += 1;
//       }
//       idx += 1;
//     } else if (idx === lastIdx) {
//       if (swapCount === 0) return arr;
//       swapCount = 0;
//       iterationCount += 1;
//       idx = 0;
//     }
//   }
// }


