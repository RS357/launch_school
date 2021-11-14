const readline = require("readline-sync"); 

function prompt(message) { 
  console.log(`=> ${message}`);
}

prompt("Welcome to Calculator!"); 

prompt("What's the first number?"); 
let number1 = readline.question(); 

prompt("What's the second number?"); 
let number2 = readline.question();

prompt("What operation would you like to perform?\n 1) Add 2) Subtract 3) Multiply 4) Divide"); 
let operation = readline.question(); 

let output; 
switch(operation) {
  case "1":   // "1" represents addition
    output = Number(number1) + Number(number2);
    break;
  case "2": // "2" represents subtraction 
    output = Number(number1) - Number(number2);
    break;
  case "3": // "3" represents multiplication
    output = Number(number1) * Number(number2);
    break;
  case "4": // "4" represents division 
    output = Number(number1) / Number(number2);
    break; 
}

prompt(`The result is: ${output}`)