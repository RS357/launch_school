/*
Function.prototype.bind is a method on all function objects
that allows us to hard-bind a function to a particular object.
The way this works is that you pass a context object to the bind
method and it returns a new function that is
essentially the same function but hard-bound to the
context object supplied.

Create a function myBind, that accepts two arguments:
1) The function to bind,

2) The context object, and returns a new function that's
hard-bound to the passed in context object.
*/

// function myBind(func, context) {
//   return (args) => func.apply(context, ...args);
// }

/*
Alter the myBind function written in the previous exercise
to support partial function application of additional
arguments to the original function.
*/

// function myBind(func, context, ...firstArgs) {
//   return function(...moreArgs) {
//     return func.apply(context, firstArgs.concat(moreArgs));
//   }
// }

/*
myStack
*/

// function newStack() {
//   let stack = [];

//   return {
//     push(val) {
//       stack.push(val);
//     },

//     pop() {
//       return stack.pop();
//     },

//     printStack() {
//       stack.forEach(val => console.log(val));
//     }
//   };
// }

/*
Delegate 

Write a delegate function that can be used to delegate the
behavior of a method or function to another object's method.
delegate takes a minimum of two arguments:
(1) the object and
(2) name of the method on the object.
The remaining arguments, if any, are passed — as arguments — to
the objects' method that it delegates to.

Note that this is not the same as using bind.
bind returns a new function, whereas delegate maintains the reference.

*/

// function delegate(obj, func, ...args) {
//   return () => obj[func](...args);
// }


// let foo = {
//   name: 'test',
//   bar: function(greeting) {
//     console.log(greeting + ' ' + this.name);
//   },
// };

// let baz = {
//   qux: delegate(foo, 'bar', 'hello'),
// };

// baz.qux();   // logs 'hello test';

// foo.bar = function() {
//   console.log('changed');
// };

// baz.qux();          // logs 'changed'


