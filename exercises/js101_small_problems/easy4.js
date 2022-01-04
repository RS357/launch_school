let readlineSync = require("readline-sync");

// How old is teddy? 

// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
// }


// console.log(`Teddy is ${getRandomIntInclusive(20, 120)} years old!`);
// Using Math.round() could lead to results that are larger than the "max" value. 
// return an error is min is larger than max.

// Searching 101
// let arr = [];

// let first = readlineSync.question("Please enter the first number: ");
// let second = readlineSync.question("Please enter the second number: ");
// let third = readlineSync.question("Please enter the third number: ");
// let fourth = readlineSync.question("Please enter the fourth number: ");
// let fifth = readlineSync.question("Please enter the fifth number: ");
// let last = readlineSync.question("Please enter the last number: ");
// arr.push(first, second, third, fourth, fifth);
// if (arr.includes(last)) {
//   console.log(`The number ${last} appears in ${arr.join(",")}`);
// } else {
//   console.log(`The number ${last} does not appear in ${arr.join(",")}`);
// }

// function isIncluded(arr, val) {
//   return arr.some(val => val > 25);
// }

// When Will I Retire? 

// let age = readlineSync.question("What is your age? ");
// let retirementAge = readlineSync.question("At what age would you like to retire? ");
// let currentYear = new Date().getFullYear();
// let retirementYear = Number(currentYear) + Number(retirementAge - age);
// console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`);
// console.log(`You only have ${retirementYear - currentYear} years of work to go! `);


// Palindromic Strings (Part 1)

let isPalindrome = str => {
  let loopLimit = Math.ceil(str.length / 2);
  for (let idx = 0; idx <= loopLimit; idx += 1) {
    if (str[idx] !== str[str.length - 1- idx]) {
      return false;
    }
  }
  return true;
}
console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true