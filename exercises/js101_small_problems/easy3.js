// let crunch = str => {
//   if (str === '') return '';
//   let strArr = str.split("");
//   for (let ind = strArr.length - 1; ind >= 0; ind -= 1) {
//     if (strArr[ind] === strArr[ind + 1]) {
//       strArr.splice(ind, 1);
//     }
//   }
//   return strArr.join("");
// };

// console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
// console.log(crunch('4444abcabccba'));              // "4abcabcba"
// console.log(crunch('ggggggggggggggg'));            // "g"
// console.log(crunch('a'));                          // "a"
// console.log(crunch(''));                           // ""

// Bannerizer
// let logInBox = (str, length = null) => {
//   let charNum = 0;
//   let maxLineLength = 41;
//   if (length && (str.length > length)) str = str.slice(0, length);
//   if (str.length > 1) charNum = str.length + 2;
//   if (str.length > maxLineLength) charNum = maxLineLength;
//   console.log(`+${"-".repeat(charNum)}+`);
//   console.log(`|${" ".repeat(charNum)}|`);
//   while (str.length > maxLineLength) {
//     let stringToPrint = str.slice(0, maxLineLength - 1);
//     console.log(`| ${stringToPrint} |`);
//     str = str.slice(maxLineLength - 1);
//   }
//   if (str.length > 0) console.log(`|${str}|`);

//   console.log(`|${" ".repeat(charNum)}|`);
//   console.log(`+${"-".repeat(charNum)}+`);
// };

// Stringy strings

// let stringy = num => {
//   let result = "1";
//   num -= 1;
//   while (num > 0) {
//     let lastChar = result[result.length - 1];
//     let numToAppend = Number(lastChar) % 2 === 0 ? 1 : 0;
//     num -= 1;
//     result += numToAppend;
//   }
//   return result;
// };

// console.log(stringy(6));    // "101010"
// console.log(stringy(9));    // "101010101"
// console.log(stringy(4));    // "1010"
// console.log(stringy(7));    // "1010101"

// Fibonacci Number Location By Length

// let findFibonacciIndexByLength = num => {
//   let first = 1n;
//   let second = 1n;
//   let count = 2n;
//   let fibonacci;

//   do {
//     fibonacci = first + second;
//     first = second;
//     second = fibonacci;
//     count += 1n;
//   } while (String(second).length < num);

//   return count;
// };

// Right Triangles 

// let triangle = num => {
//   while (num > 0) {
//     console.log(`${" ".repeat}`)
//   }
// }
