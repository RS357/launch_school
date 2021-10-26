// 1)
// false || (true && false); -> false
// true || (1 + 2);          -> true
// (1 + 2) || true;          -> 3
// true && (1 + 2);          -> 3
// false && (1 + 2);         -> false
// (1 + 2) && true;          -> true 
// (32 * 4) >= 129;          -> false 
// false !== !true;          -> false 
// true === 4;               -> false 
// false === (847 === '847');-> true 
// false === (847 == '847'); -> false 
// (false || (false) || (true) || false; -> true

// 2) 3)
// function evenOrOdd(number) {
//   if (!Number.isInteger(number)) {
//     console.log("That isn't a number");
//   }
//   if (number % 2 === 0) {
//     console.log('even');
//   } else {
//     console.log('odd');
//   }
// }

// 4) It logs all the console.log calls in the switch statement because it doesn't contain any break statements

// 5)
// if (foo()) {
//    return "bar";
// } 
// else {
//   return qux();
// }

// 6) "Not Empty"

// 7)
// let capitalise = (word) => word.length > 10? word.toUpperCase(): word; 

// console.log(capitalise("Sue Smith"));     // => Sue Smith
// console.log(capitalise("Sue Robertson")); // => SUE ROBERTSON
// console.log(capitalise("Joe Thomas"));    // => Joe Thomas
// console.log(capitalise("Joe Stevens"));   // => JOE STEVENS

//8) 
// Write a function that logs whether a number is between 0 and 50 (inclusive), between 51 and 100 (inclusive), greater than 100, or less than 0.

let numberRange = (num) => {
  switch(true) {
    case (num < 0): 
      console.log(`${num} is less than 0`);
      break 
    case (num >= 0 && num <= 50): 
      console.log(`${num} is between 0 and 50`);
      break;
    case (num >= 51 && num <= 100): 
      console.log(`${num} is between 51 and 100`);
      break 
    case(num > 100): 
      console.log(`${num} is greater than 100`);
      break 
  }
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);