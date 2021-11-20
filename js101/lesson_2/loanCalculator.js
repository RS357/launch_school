let readlineSync = require("readline-sync");

let prompt = message => console.log(`==> ${message}`);

let isPositiveInteger = int => ((int > 0) && (Number.isInteger(int)));

let isTwoDecimalPlaces = num => {
  let numArr = num.toString().split("");
  return numArr[numArr.length - 3] === ".";
};

let loanAmount;
while (!loanAmount) {
  prompt("Enter loan amount:");
  let loanAmountInput = parseFloat(readlineSync.prompt());
  if ((isPositiveInteger(loanAmountInput))
  || (isTwoDecimalPlaces(loanAmountInput))) {
    loanAmount = loanAmountInput;
  } else {
    prompt("Please enter a whole dollar number or to two decimal places");
    prompt("that includes cents.");
  }
}

let apr;
while (!apr) {
  prompt("Please enter the Annual Percentage Rate:");
  let aprInput = parseFloat(readlineSync.prompt());
  if (isPositiveInteger(aprInput)) {
    apr = aprInput / 100;
  } else {
    prompt("Please enter a positive number");
  }
}

let loanDuration;
while (!loanDuration) {
  prompt("Enter loan duration in months - not years:");
  let loanDurationInput = parseFloat(readlineSync.prompt());
  if (isPositiveInteger(loanDurationInput)) {
    loanDuration = loanDurationInput;
  } else {
    prompt("Please enter a number greater than 0");
  }
}

let monthlyInterestRate = apr / 12;
let monthlyPayment = loanAmount
* (monthlyInterestRate
  / (1 - Math.pow((1 + monthlyInterestRate), (-loanDuration))));

prompt(`Your monthly payment is $${monthlyPayment.toFixed(2)}`);