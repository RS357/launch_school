/*
1) It logs 2. bas doesn't have its own 'foo' property, so JavaScript looks 
up its prototype chain and evaluates boo.foo to 1 because quz.foo is assigned to 1. 
quz.foo is assigned to 1. 1 + 1 = 2. 

2) 3. 
Property assignment only assigns to the object that the assignment statement references - it doesn't assign to any of 
the objects in that object's prototype chain. So baz.foo is assigned to 2. quz.foo is already assigned to 1. 2 + 1 = 3.

3) 4. An object mantains a reference to its prototype via tha [[prototype]] property. So 
after baz is 'created' it maintains a reference to its prototype object qux. ASfter qux.foo 
is assigned to 2, baz.foo will continue to reference qux.foo because baz doesn't have its own 
foo property. So quz.foo is assigned to 2 and baz.foo evaluates to 2. 2 + 2 = 4.


5) No - they will not always log the same results to the console
If foo has any prototypes then the for/in loop will also iterate over their properties. 
Whereas Object.keys(foo) only returns an array of foo's own properties. 

6) 
let a = Object.create(null);
if Object.getPrototypeOf(a) doesn't return null then it has a prototype

*/
