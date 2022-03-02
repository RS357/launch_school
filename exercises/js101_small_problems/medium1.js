// Rotation (Part 1)

// let rotateArray = arr => {
//   if (!Array.isArray(arr)) return undefined;
//   if (arr.length <= 1) return arr.slice();
//   let rotated = arr.slice();
//   rotated.push(rotated.shift());
//   return rotated;
// }

// Rotation (Part 2) 

// let rotateRightmostDigits = (number, count) => {
//   let splitNum = String(number).split('');
//   let countIndex = splitNum.length - count;
//   let rotatedSplitNum = splitNum.slice(0, countIndex).concat(
//     rotateArray(splitNum.slice(countIndex))
//   );
//   return Number(rotatedSplitNum.join(''))
// }

// Rotation Part 3

// let maxRotation = num => {
//   let stringNum = String(num);
//   let counter = stringNum.length;
//   while (counter > 1) {
//     num = rotateRightmostDigits(num, counter);
//     counter -= 1;
//   }
//   return num;
// }

// const TOKENFUNCS =  {
//   PUSH:        (memory) => memory.stack.push(memory.register),
//   ADD:         (memory) => (memory.register += memory.stack.pop()),
//   SUB:         (memory) => (memory.register -= memory.stack.pop()),
//   MULT:        (memory) => (memory.register *= memory.stack.pop()),

//   DIV:         (memory) => {
//     memory.register = Math.trunc(memory.register / memory.stack.pop());
//   },

//   REMAINDER:   (memory) => (memory.register %= memory.stack.pop()),
//   POP:         (memory) => (memory.register = memory.stack.pop()),
//   PRINT:       (memory) => console.log(memory.register)
// }


// let minilang = program => {
//   let memory = {
//     register: 0,
//     stack: []
//   };

//   let tokens = program.split(' ');
//   tokens.forEach(token => {
//     if (Number.isNaN(Number(token))) {
//       TOKENFUNCS[token](memory);
//     } else {
//       memory.register = Number(token);
//     }
//   });
// };

// Word to Digit 

// let wordToDigit = str => {
//   let obj = {
//     zero: 0,
//     one: 1,
//     two: 2,
//     three: 3,
//     four: 4,
//     five: 5,
//     six: 6,
//     seven: 7,
//     eight: 8,
//     nine: 9,
//     ten: 10
//   };

//   for (let numberWord in obj) { 
//     str = str.replace(RegExp('\\b' + numberWord + '\\b', 'g'), obj[numberWord]);
//   }
//   return str;
// }


// Fibonacci Numbers (recursion)

// let fibonacci = num => {
//   if (num <= 2) return 1;
//   return fibonacci(num - 1) + fibonacci(num - 2);
// }

// Fibonacci Numbers (Procedural)


// let fibonacci = num => {
  // let counterA = 1;
  // let counterB = 1;
  // let nCounter = 2;
  // if (num <= 2) return 1;
  // while (nCounter < num) {
  //   let Bholder = counterB;
  //   counterB += counterA; 
  //   counterA = Bholder;
  //   nCounter += 1;
  // }
  // return counterB;

  // let previousTwo = [1, 1];

  // for (let counter = 3; counter <= num; counter += 1) {
  //   previousTwo = [previousTwo[1], previousTwo[0] + previousTwo[1]];
  // }

  // return previousTwo[1];

// }

// Fibonacci Numbers (Memoization)
// let memo = {}
// let fibonacci = (num) => {
//   if (num <= 2) return 1;
//   if (memo[num]) return memo[num];
//   memo[num] = fibonacci(num - 1) + fibonacci(num - 2);
//   return memo[num];
// }

