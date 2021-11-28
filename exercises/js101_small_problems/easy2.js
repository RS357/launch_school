let readlineSync = require("readline-sync");

// Welcome stranger 
// let greetings = (names, job) => console.log(`Hello, ${names.join(" ")}! Nice to have a ${job.title} ${job.occupation} around.`)

// Greeting a User 
// let greeting = () => {
//   console.log("What is your name?");
//   let name = readlineSync.prompt(); 
//   if (name[name.length - 1] === "!") {
//     name = name.slice(0, -1)
//     console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`)
//   } else {
//     console.log(`Hello ${name}`);
//   }
// }

// Multiplying Two Numbers 
// let multiply = (num1, num2) => num1 * num2;

// Squaring an argument 
// let square = num => multiply(num, num);

// What if we wanted generalize this function to a "power to the n" type function: cubed, 
// to the 4th power, to the 5th, etc. How would we go about doing so while still using 
// the multiply() function?
// let power = (num, power) => {
//   if (power <= 2) return multiply(number, power);
//   power = power - 1; 
//   product = 0
//   for (let i = 0; i < power; i = i + 2) {
//     product += multiply(num, num)
//   }
//   return product * num;
// }

// Arithmetic Integer
// let prompt = message => `==> ${message}`;
// console.log(prompt("Enter the first number:"));
// let firstNumber = parseInt(readlineSync.prompt(), 10);
// console.log(prompt("Enter the second number:"));
// let secondNumber = parseInt(readlineSync.prompt(), 10);
// console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
// console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
// console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
// console.log(`${firstNumber} / ${secondNumber} = ${Math.floor(firstNumber / secondNumber)}`);
// console.log(`${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
// console.log(`${firstNumber} ** ${secondNumber} = ${firstNumber ** secondNumber}`);

// The End is Near But Not Here 
// let penultimate = word => {
//   let wordCollection = word.split(" ");
//   return wordCollection[wordCollection.length - 2]
// }

// console.log(penultimate("last word") === "last"); // logs true
// console.log(penultimate("Launch School is great!") === "is"); // logs true

// Suppose we need a function that retrieves the middle word of a phrase/sentence. 
// What edge cases need to be considered? How would you handle those edge 
// cases without ignoring them? Write a function that returns the middle 
// word of a phrase or sentence. It should handle all of the edge cases 
// you thought of.

// let middle = str => {
//   if (!(typeof str === "string")) return "please pass in a string";
//   if (!str.includes(" ")) return str; 
  
//   let splitStr = str.split(" ");
//   if (splitStr.length % 2 === 0) {
//     return "Please enter a string containing an odd number of words"
//   } 
//   return splitStr[Math.round(splitStr.length / 2) - 1]
// }

// let xor = (val1, val2) => {
//   if ((!val1 && val2) || (val1 && !val2)) return true;
//   return false;
// }

// Odd Lists
// let oddities = arr => {
//   if (arr.length <= 1) return arr;
//   if (arr.length === 2) return arr.slice(0, 1);
//   let returnArr = [];
//   for (let idx = 0; idx < arr.length; idx += 2) {
//     returnArr.push(arr[idx]);
//   }
//   return returnArr;
// };

//Further Exploration
// let evens = arr => {
//   if (arr.length <= 1) return arr;
//   if (arr.length === 2) return arr.slice(1, 2);
//   let returnArr = [];
//   arr.forEach((val, index) => {
//     if (index % 2 !== 0) returnArr.push(val);
//   });
//   return returnArr;
// };


// Convert a string to a number
// let createNumObj = () => {
//   let numObj = {
//     0: 0,
//     1: 1,
//     2: 2,
//     3: 3,
//     4: 4,
//     5: 5,
//     6: 6,
//     7: 7,
//     8: 8,
//     9: 9,
//   };
//   return numObj;
// };

// let stringToInteger = str => {
//   let numObj = createNumObj();
//   let total = 0;
//   let counter = 0;
//   for (let ind = str.length - 1; ind >= 0; ind -= 1) {
//     total += (numObj[str[ind]]) * (10 ** counter);
//     counter += 1;
//   }
//   return total;
// };
// console.log(stringToInteger("4321") === 4321); // logs true
// console.log(stringToInteger("570") === 570); // logs true

// let createHexNumObj = () => {
//   let numObj =  {
//     1: 1,
//     2: 2,
//     3: 3,
//     4: 4,
//     5: 5,
//     6: 6,
//     7: 7,
//     8: 8,
//     9: 9,
//     A: 10,
//     B: 11,
//     C: 12,
//     D: 13,
//     E: 14,
//     F: 15
//   };
//   return numObj;
// };

// let hexadecimalToInteger = str => {
//   let numObj = createHexNumObj();
//   let total = 0;
//   let counter = 0;
//   for (let ind = str.length - 1; ind >= 0; ind -= 1) {
//     total += (numObj[str.toUpperCase()[ind]]) * (16 ** counter);
//     counter += 1;
//   }
//   return total;
// };

// console.log(hexadecimalToInteger('4D9f') === 19871);

// Convert a String to a Signed Number

// let stringToSignedInteger = str => {
//   if (str[0] === "+") return stringToInteger(str.slice(1));
//   if (str[0] === "-") return -stringToInteger(str.slice(1));
//   return stringToInteger(str);
// };

// console.log(stringToSignedInteger("4321") === 4321); // logs true
// console.log(stringToSignedInteger("-570") === -570); // logs true
// console.log(stringToSignedInteger("+100") === 100); // logs true

// Convert a Number to a String!
let integerToString = num => {
  let str = "";
  const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  if (num === 0) return "0";
  while (num > 0) {
    let digit = num % 10;
    str = DIGITS[digit] + str;
    num = Math.trunc(num / 10);
  }
  return str;
};

// console.log(integerToString(4321));        // "4321"
// console.log(integerToString(0));           // "0"
// console.log(integerToString(5000));        // "5000"
// console.log(integerToString(1234567890));  // "1234567890"

// Convert Signed Number to a String
// let signedIntegerToString = num => {
//   switch (true) {
//     case num === 0:
//       return "0";
//     case num > 0:
//       return `+${integerToString(num)}`;
//     case num < 0:
//       return `-${integerToString(-num)}`;
//   }
// };

// console.log(signedIntegerToString(4321) === "+4321");
// console.log(signedIntegerToString(-123) === "-123");
// console.log(signedIntegerToString(0) === "0");