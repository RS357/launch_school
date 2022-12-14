// The 'this' keyword. 

// The this keyword represents the execution context 
// of the function it is assigned to. Specifically. 
// it represents the object it is called on.

// let func = function() {
//   console.log(this);
// }

// func(); // logs the global object (or undefined if run in strict mode)

// let obj = {
//   func() {
//     // console.log(`my execution context is ${this}`);
//     console.log(this);
//   }
// }
 
//obj.func() // outputs obj because obj is the execution context of func()
// when it is called as an object method.


// Collaborator Objects 
// Collaborator Objects are objects that give state to other objects. 
// Example: 

// let obj2 = {
//   c: 3,
//   d: 4
// }

// let obj = {
//   a: 1,
//   b: obj2
// }

// console.log(obj);
// console.log(obj2);

// Functions as object factories: 
// This is an OOP pattern whereby functions automate the creation of objects.
// Example: 

// let createPerson = function(name, age) {
//   return {
//     name: name,
//     age: age, 
//     walk() {
//       console.log(`I am ${this.name} and I can walk`);
//     }
//   }
// }

// let riz = createPerson('riz', 33);
// let tom = createPerson('tom', 23)

// riz.walk();
// tom.walk();

// Lesson 2
// Property Existence 

// There are two ways to check whether a property exists or not:
// the 'in' keyword, and Object.prototype.hasOwnProperty(prop)
let obj = {
  a: 1,
  b: 2
}

console.log('a' in obj); // true 
console.log(obj.hasOwnProperty('b')); //true 
console.log('c' in obj); // false 
console.log(obj.hasOwnProperty('d')); //false 