/*
1) The global object 

2) It returns the obj object - in problem 1 func is called with the global 
object set as the execution context 
(because it is called as a stand alone function)
whereas in problem 2 func is called with a 
method execution context that is set to obj.

3) 
"Hello from the global scope!"
"Hello from the function scope!"

4) call and apply

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

bar.add.call(foo); // 3