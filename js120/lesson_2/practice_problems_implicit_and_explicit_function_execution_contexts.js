/*
1) global object

2) Whilst the function in problem 1 is called as a function and so 
implicitly given a global execution context, the anonymous function/method
assigned to func in the obj object in problem 2 is called as a method, and so 
its execution context is implicitly set as obj. 
It will output obj.

3)
"Hello from the global scope!"
"Hello from the function scope!"

4) apply() and call() <- both methods of the function object prototype

5) it will return 3
*/

let foo = {
  a: 1,
  b: 2,
};

let bar = {
   a: 'abc',
   b: 'def',
   add: function() {
     return this.a + this.b;
   },
};

console.log(bar.add.call(foo));