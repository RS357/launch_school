/*
1) global object 

2) The code will output the obj object. This is because the object was used to call the method func - giving the 
invocation the implicit execution context of object obj. The call in problem one used parenthesis only and is not 
a method call - hence its execution context is the global object.

3) 'Hello from the global scope!' followed by 'Hello from the function scope!'

4) Function.prototype.call() and Function.prototype.apply() 

5)
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

console.log(bar.add.call(foo)); // will return 3