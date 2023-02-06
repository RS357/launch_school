// 1)

// let counter = 0;

// function makeCounter() {
//   return function() {
//     counter += 1;
//     return counter;
//   }
// }

// let incrementCounter = makeCounter();
// console.log(incrementCounter()); // 1
// console.log(incrementCounter()); // 2

// incrementCounter = makeCounter();
// console.log(incrementCounter()); // 3
// console.log(incrementCounter()); // 4

// 2)

// function makeCounter() {
//   return function() {
//     let counter = 0;
//     counter += 1;
//     return counter;
//   }
// }

// let incrementCounter = makeCounter();
// console.log(incrementCounter()); // 1
// console.log(incrementCounter()); // 1

// incrementCounter = makeCounter();
// console.log(incrementCounter()); //1
// console.log(incrementCounter()); // 1


// 3)

// function makeCounter() {
//   let counter = 0;

//   return function() {
//     counter += 1;
//     return counter;
//   }
// }

// let incrementCounter = makeCounter();
// console.log(incrementCounter()); // 1
// console.log(incrementCounter()); // 2

// incrementCounter = makeCounter();
// console.log(incrementCounter()); // 1
// console.log(incrementCounter()); // 2

// 4)

// function makeCounter() {
//   let counter = 0;

//   return function() {
//     counter += 1;
//     return counter;
//   }
// }

// let incrementCounter1 = makeCounter();
// let incrementCounter2 = makeCounter();

// console.log(incrementCounter1()); // 1
// console.log(incrementCounter1()); // 2

// console.log(incrementCounter2()); // 1
// console.log(incrementCounter2()); // 2

// 5)

/*
Write a function named makeMultipleLister that you can call
with a number as an argument. The function should return
a new function that, when invoked, logs every positive integer
multiple of that number less than 100.
It should work like this:
*/

// function makeMultipleLister(num) {
//   return function() {
//     for (let result = num; result < 100; result += num) {
//       console.log(result);
//     }
//   };
// }

// let lister = makeMultipleLister(17);
// lister();


// 6)

/*
Write a program that uses two functions, add and subtract,
to manipulate a running total. When you invoke either
function with a number, it should add or subtract
that number from the running total and log the new
total to the console. It should work like this:
*/

// let total = 0;

// function add(num) {
//   total += num;
//   console.log(total);
// }

// function subtract(num) {
//   total -= num;
//   console.log(total);
// }

// 7)

// function foo(start) {
//   let prod = start;
//   return function (factor) {
//     prod *= factor;
//     return prod;
//   };
// }

// let bar = foo(2); // prod: 2, 
// let result = bar(3); // prod: 6, result: 6
// result += bar(4); // prod: 24, result: 30
// result += bar(5); // prod: 120, result: 150
// console.log(result);
// // 150

/*
Foo is invoked with 2 passed to it as an argument.
It returns a function whose closure contains a reference
to foo's local variable prod, which is assigned to 2 i.e. the argument
passed to foo..
This function is assigned to the global variable bar.

The global variable result is assigned to the
value returned by calling the function assigned to the bar variable
with 3 passed as an argument. Said function multiplies
3 by the prod reference in its closure which results in
6, which is what this function call returns and assigns to the
global variable result.

The global result variable is reassigned to the result of calling the
function bar with 4 passed to it and added to the previous value of result.
bar's closure references the foo's local variable prod, which now points to
6. 6 * 4 is 24 and result is asssigned to this value plus its
previous value 6 i.e. 30.

Again, result is reassigned to its value plus the value that
the function assigned to bar returns after being passed 5 when invoked.
The function call returns 120 because its closure references foo's
local variable prod, which is assigned to 24 and this function multiplies
the value assigned to prod by its argument i.e. it multiplies 24 by 5,
and then returns that value. As a result, it returns
120 and the global result variable is reassigned to its original value
(30) plus the value returned after calling the function assigned
to bar (120). 120 + 30 is 150, which is the value assigned to the
global variable result.

The global variable result is then logged i.e. 150 is logged.
*/

// 8)

/*
Write a function named later that takes two
arguments: a function and an argument for that function.
The return value should be a new function that
calls the input function with the provided
argument, like this:
*/

// function later(func, funcArg) {
//   return () =>  func(funcArg);
// }

// const logger = message => console.log(message);
// let logWarning = later(logger, "The system is shutting down!");
// logWarning(); // The system is shutting down!

/*
9) 

Write a function named later2 that takes two arguments: a
function and an argument for that function. The return value
should be a new function that also takes an argument.
The new function should call the input function with
the argument provided to later2 and the argument provided
to the returned function. For example:
*/

// function later2(func, funcArg) {
//   return (newArg) => func(funcArg, newArg);
// }

// const notify = function(message, when) {
//   console.log(`${message} in ${when} minutes!`);
// };

// let shutdownWarning = later2(notify, "The system is shutting down");
// shutdownWarning(30); // The system is shutting down in 30 minutes!


// 10)

/*
The built-in Function.prototype.bind method performs partial function
application by allowing you to specify some of the function's
arguments when you invoke bind. It also permanently binds
the new function to a specific execution context with its
first argument. That binding is, in a sense, also an
example of partial function application. Here,
the "argument" we're applying to the function is the
function's execution context.

Write a function that emulates the context binding aspect
of bind. That is, your version of bind should merely
call the function with the desired context; it doesn't
need to pass any arguments to the function.
Here's how you can use your function:
*/


// "use strict";

// function bind(context, func) {
//   return function() {
//     func.call(context);
//   }
// } 

// let obj = {};
// let boundFunc = bind(obj, function() {
//   this.foo = "bar";
// });

// boundFunc();
// console.log(obj); // { foo: 'bar' }
