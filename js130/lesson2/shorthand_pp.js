// 1)

// function foo(bar, qux, baz) {
//   return {
//     bar: bar,
//     baz: baz,
//     qux: qux
//   }
// }

// 2)

// function foo() {
//   return {
//     bar: function() {
//       console.log("bar");
//     },
//     qux: function(arg1) {
//       console.log("qux");
//       console.log(arg1);
//     },
//     baz: function(arg1, arg2) {
//       console.log("baz");
//       console.log(arg1);
//       console.log(arg2);
//     },
//   };
// }

// 3)

// function foo(one, two, three) {
//   return {
//     bar: one,
//     baz: two,
//     qux: three
//   };
// }

// let obj = foo(1, 2, 3);
// let bar = obj.bar;
// let baz = obj.baz;
// let qux = obj.qux;

// 4)

// 5)

// function product(arr) {
//   return arr[0] * arr[1] * arr[2];
// }

// let array = [2, 3, 5];
// let result = product(array);

// 6)

// function product(numbers) {
//   return numbers.reduce((total, number) => total * number);
// }

// let result = product([2, 3, 4, 5]);

// function product() {
//   let numbers = Array.from(arguments);
//   return numbers.reduce((total, number) => total * number);
// }

// let result = product(2, 3, 4, 5);

// 7)

// const {foo, ...rest} = { foo: 42, bar: 3.1415, qux: "abc" };
// console.log(foo);         // 42
// console.log(rest);        // { bar: 3.1415, qux: 'abc' }

// 8)



// 9)

// 10) 

/*
OPTIONAL Write a function that takes 5 string arguments, and returns an object with 3 properties:

first: the first argument
last: the last argument
middle: the middle 3 arguments as a sorted array
After writing the function, write some code to call the function. 
The arguments you provide should come from an array. 
You should create local variables named first, last, and middle from the return value.

Use shorthand syntax wherever you can.
*/

// function func(first, second, third, forth, fifth) {
//   return {
//     first: first,
//     last: fifth,
//     middle: [second, third, forth].sort()
//   }
// }
// let arr = ['a', 'b', 'c', 'd', 'e'];
// let {first, middle, last} = func(...arr);

// console.log(first); // a
// console.log(last); // ['b', 'c', 'd']
// console.log(middle); // e

console.log(module);
console.log(exports);
console.log(require);
console.log(__dirname);
console.log(__filename);