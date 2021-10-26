//2) 
// let factorial = (num) => {
//   for (let i = num - 1; i > 0; i -= 1) {
//     num *=  i; 
//   }
//   return num
// }

// console.log(factorial(1));     // => 1
// console.log(factorial(2));     // => 2
// console.log(factorial(3));     // => 6
// console.log(factorial(4));     // => 24
// console.log(factorial(5));     // => 120
// console.log(factorial(6));     // => 720
// console.log(factorial(7));     // => 5040
// console.log(factorial(8));     // => 40320

// 3) The while condition will always return true when the 1 is assigned to counter. 
//   Also the test on line 7 never passes i.e. counter is never greater than 2.

// 4) It produces no error and sends 5 to the console. 

// 5) 

// function randomNumberBetween(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// let tries = 0;
// let result;

// do {
//   result = randomNumberBetween(1, 6);
//   tries += 1;
// } while (result <= 2);

// console.log('It took ' + String(tries) + ' tries to get a number greater than 2');

// 6) 

let factorial = (num) => {
  if (num === 1) return num;

  return num * factorial(num - 1)
}

console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320
