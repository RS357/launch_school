// 1) it logs 1 to the console - execcuting the foo function does not affect the output.

// 3) 

let readlinesync = require("readline-sync"); 
let multiply = (a, b) => a * b; 


let firstNum = parseFloat(readlinesync.question("Enter the first number: "));
let secondNum = parseFloat(readlinesync.question("Enter the second number: "));
console.log(`${firstNum} * ${secondNum} = ${multiply(firstNum, secondNum)}`);

// 4) It doesn't log anything. 

// 5) It doesn't log anything