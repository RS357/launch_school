// 1) No it will throw an error because the function is not surrounded
// by parentheses and it is at the beginning of the line. A function
// declaration must be converted to a function expression before you can
// invoke it with immediate invocation syntax. 

/*
2) 
*/

// (function() {
//   console.log("Sometimes, syntax isn't intuitive!");
// })();

// 3)
/*
Why does this code produce an error? Correct the problem by using an IIFE.
*/

// let sum = 0;
// sum += 10;
// sum += 31;

// let numbers = [1, 7, -3, 3];

// sum += (function sum(arr) {
//   return arr.reduce((sum, number) => {
//     sum += number;
//     return sum;
//   });
// })(numbers);

// console.log(sum);

/*
this code produces an error because at the point 
of the invocation of sum on the last line, the sum variable 
is assigned to the number 0 - not to a function definition.
A number cannot be called and so an error is thrown.
*/

// 4)

// (function(num) {
//   while (num >= 0) {
//     console.log(num);
//     num -= 1;
//   }
// })(7);
// // 7
// // 6
// // 5
// // 4
// // 3
// // 2
// // 1
// // 0

//5) no

// 6)

// let bar = (function (start) {
//   let prod = start;
//   return function (factor) {
//     prod *= factor;
//     return prod;
//   };
// })(2);

// let result = bar(3);
// result += bar(4);
// result += bar(5);
// console.log(result);

// 7)

(function counter(num) {
  console.log(num);
  if (num !== 0) counter(num - 1);
})(7);