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

//   do 
//     fibonacci = first + second;
//     first = second;
//     second = fibonacci;
//     count += 1n;
//   } while (String(second).length < num);

//   return count;
// };

// Right Triangles 

// let triangle = num => {
//   let counter = 1;
//   while (counter <= num) {
//     console.log(`${" ".repeat(num - counter)}${"*".repeat(counter)}`);
//     counter += 1;
//   }
// };


// Madlibs

// let readLine = require("readline-sync");

// let noun = readLine.question("Please enter a noun: ");
// let verb = readLine.question("Please enter a verb: ");
// let adjective = readLine.question("Please enter an adjective: ");
// let adverb = readLine.question("Please enter a adverb: ");

// console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);
// console.log(`The ${adjective} ${noun} ${verb}s ${adverb} over the lazy ${noun}.`);
// console.log(`The ${noun} quickly ${verb}s up ${adjective} Joe's turtle.`);


// Double Doubles

// let twice = num => {
//   let stringNum = String(num);
//   if (stringNum.length % 2 !== 0) return num * 2;
//   let firstHalfStringNum = stringNum.slice(0, ((stringNum.length - 1) / 2) + 1);
//   // console.log(`stringNum: ${stringNum},  firstHalfStringNum: ${firstHalfStringNum}`);
//   if ((firstHalfStringNum + firstHalfStringNum) === String(num)) return num;
//   return num * 2;
// };

// let calculateGrade = num => {
//   switch (true) {
//     case 90 <= num && num <= 100:
//       console.log("A");
//       break;
//     case 80 <= num && num < 90:
//       console.log("B");
//       break;
//     case 70 <= num && num < 80:
//       console.log("C");
//       break;
//     case 60 <= num && num < 70:
//       console.log("D");
//       break;
//     case 0 <= num && num < 60:
//       console.log("F");
//       break;
//   }
// }

// let getGrade = (num1, num2, num3) => {
//   let mean = (num1 + num2 + num3) / 3;
//   calculateGrade(mean);
// };

// Clean up the words 

// let isUpperCaseAlphabetic = str => {
//   return str >= "A" && str <= "Z";
// };

// let isLowerCaseAlphabetic = str => {
//   return str >= "a" && str <= "z";
// };

// let cleanUp = str => {
//   let arr = str.split("");
//   for (let ind = arr.length - 1; ind >= 0; ind -= 1) {
//     if (!isLowerCaseAlphabetic(arr[ind]) && !isUpperCaseAlphabetic(arr[ind])) {
//       arr[ind] = " ";
//     }
//   }

//   for (let ind = arr.length - 1; ind >= 0; ind -= 1) {
//     if (arr[ind] === " " && arr[ind - 1] === " ") {
//       arr.splice(ind, 1);
//     }
//   }
//   return arr.join("");
// };

// What Century is that?

let calculateSingleDigitCentury = century => {
  if (century === 1) {
    return "1st";
  } else if (century === 2) {
    return "2nd";
  } else if (century === 3) {
    return "3rd";
  } else {
    return `${String(century)}th`;
  }
};

let calculateDoubleDigitCentury = century => {
  let ones = century % 10;
  let tens = century % 100;

  if (ones === 1 && tens !== 11) {
    return `${String(century)}st`;
  } else if (ones === 2 && tens !== 12) {
    return `${String(century)}nd`;
  } else if (ones === 3 && tens !== 13) {
    return `${String(century)}rd`;
  } else {
    return `${String(century)}th`;
  }
};

let century = year => {
  if (year <= 100) return "1st";
  let century;
  if (year % 100 >= 1) {
    century = Math.floor(year / 100) + 1;
  } else {
    century = year / 100;
  }

  if (century < 10) {
    return calculateSingleDigitCentury(century);
  } else {
    return calculateDoubleDigitCentury(century);
  }
};


console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"