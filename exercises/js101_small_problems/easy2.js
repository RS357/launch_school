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

