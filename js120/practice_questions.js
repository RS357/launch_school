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
// let obj = {
//   a: 1,
//   b: 2
// }

// console.log('a' in obj); // true 
// console.log(obj.hasOwnProperty('b')); //true 
// console.log('c' in obj); // false 
// console.log(obj.hasOwnProperty('d')); //false 

// Prototypes
// A prototype object is an object that another object inherits from i.e. 
// that object's internal [[Prototype]] property points to the prototype object 

// let obj1 = {};
// let obj2 = Object.create(obj1);
// obj1.a = 1;
// console.log(obj1.hasOwnProperty(a)); => true
// console.log(obj2.hasOwnProperty(a)); => false

// A prototype object on a constructor function is where instance methods 
// are assigned. When an instance of the constructor is instantiated with 
// the new keyword, the internal [[Prototype]] property of that instance 
// is set to point to that constructor's prototype property. 
//Example: 

// function Human(age) {
//   this.age = age;
// }

// Human.prototype.ages = function() {
//   this.age += 1;
// }

// let riz = new Human(33);
// console.log(Object.getPrototypeOf(riz).constructor.name);
// riz.ages();
// console.log(riz.age); // 34

// The Default Prototype
// All Javascript objects (except bare ones) can delegate method and property 
// access to the prototype object of the Object constructor (i.e. Object.prototype).
// Example: 
// let obj1 = {}
// console.log(obj1.constructor) // Object - this is because the internal [[Prototype]] 
// // property of all objects created using the object literal syntax points to 
// // Object.prototype. 
// console.log(Object.getOwnPropertyNames(obj1.constructor.prototype)); // will be an
// // array of all the properties defined on Object.prototype...
// console.log(Object.getPrototypeOf(obj1)); // This returns the Object.prototype obj.

// Iterating over objects with prototypes. 
// You can iterate over objects and their prototypes using the for/in loop.
// The for-in loop iterates over all enumerable properties in an object's 
// chain (including Object.prototype)

// let obj1 = {
//   a: 1,
//   b: 2
// }

// let obj2 = Object.create(obj1);
// obj2.c = 3;
// obj2.d = 4;

// Object.prototype.f = 5

// // for (let prop in obj2) {
// //   console.log(prop);
// // } // => c, d, a, b, f

// // Whilst both for/in loops and the Object.keys() method iterate over/return a list 
// // an object's own property keys, Object.keys() does not return the keys of an 
// // object's prototype(s)

// console.log(Object.keys(obj2));


// Prototype Chain
/*
Objects can inherit from each other in a hierarchical chain of objects via 
prototypal inheritance and their internal [[Prototype]] properties. A 
// prototype object can itself inherit from another prototype object.
Examples: 
*/

// let obj1 = {
//   a: 1
// }

// let obj2 = {
//   b: 2
// }

// Object.setPrototypeOf(obj2, obj1);

// let obj3 = {
//   c: 3
// }

// Object.setPrototypeOf(obj3, obj2);
// console.log(obj3.hasOwnProperty('c')) // true
// console.log(obj3.a); // 1
// console.log(obj3.hasOwnProperty('a')); // false

// In this example, obj3 can delegate property access 
// to obj2 AND obj1. obj1 and obj 2 are both part of the prototype 
// chain of obj3. The complete prototype chain also includes the 
// prototype of the Object constructor, which is the prototype 
// of obj1.

// The complete prototype chain of obj3 looks like this: 
// obj3 -> obj2 -> obj1 -> Object.prototype -> null

// The __proto__ keyword
// The proto keyword is a non-hidden version of the [[Prototype]] property. 
// It is deprecated and should not be used. 
// Example:
// let obj1 = {a: 1};
// let obj2 = {};
// Object.setPrototypeOf(obj2, obj1);
// console.log(obj2.__proto__) // obj1

// In this example, the internal [[Prototype]] property 
// of obj2 is set to point to obj1. __proto__ will also point to obj1.
// As a result, 
// the log statement on line 187 will output obj1

/* Property look-up in the prototype chain. 
When your code references a property on an object,
Javascript first looks in that object for the property.
If it doesn't find that property in the object, it looks up the prototype chain.
If JavaScript cannot find that property, it returns undefined.

Example:

*/

// let obj1 = {
//   a: 1
// }

// let obj2 = Object.create(obj1); 
// console.log(obj2.a); // 1
// console.log(obj2.hasOwnProperty('a')); // false

// obj2.a = 2
// console.log(obj2.a) // 2
// console.log(obj2.hasOwnProperty('a')); // true


// console.log(obj2.riz); // undefined 

/*
In the above code, JavaScript looks up the prototype chain
of obj2 to find the property 'a' after it is referenced on line 208, and 
so the console.log() call outputs 1 after Javascript finds it on obj1.

After defining a property called 'a' on obj2 and assigning it to 2, 
JavaScript does not look up
the prototype chain to find the property 'a' when it is referenced on line 211
because it is defined on obj2. As a result the console.log call on line 211 outputs 2.

When referencing the property 'riz' on obj2 on line 213, JavaScript 
looks up the prototype chain all the way to Object.prototyp and doesn't find a 
property named 'riz', and so the property access
evaluates to undefined and console.log outputs undefined on line 213. 
*/

/*
Objects without prototypes: 

You can also create objects that don't have prototypes. These 
are referred to as 'bare' objects. You can create them by passing 
'null' to the Object.create() method:
*/ 

// let obj1 = Object.create(null); // bare object
// let obj2 = {}; // object whose prototype is Object.prototype

// console.log(Object.getPrototypeOf(obj1)); // null because obj1 is a bare object
// // and so doesn't have a prototype - so its internal [[Prototype]] property is 
// // assigned to null. 

// console.log(Object.getPrototypeOf(obj2)); // logs Object.prototype because 
// // obj1 is not a bare object and was created using the object literal syntax. 


/*
Function declarations vs function expressions
A function declaration is a function definition. It is hoisted before JavaScript 
executes and so can be called before it is defined. This is a way to test
if a function is defined via a declaration instead of via an expression. 
A function declaration will be the first thing on its line. 
Example:
*/

// func() 

// function func() {
//   console.log('I am a declaration');
// }

// /*
// A function expression is a function declaration where there is some kind of character
// in the statment before the definition begins (on the same line). Function expressions are not hoisted.
// Example:
// */

// // func2() // will throw an error

// let func2 = function() {
//   console.log('I am an expression');
// }

// func2();

// First Class functions 
/*
In JavaScript functions are first class values. This means they can be assigned to
variables, passed to other functions as arguments and returned from functions. 

Example:
*/

// let func = function() {
//   console.log(`I am ${this.name}`);
// }

// let funcVar = func;
// funcVar(); // will call func

// let func2 = function(func) {
//   return func;
// }

// let funcVar2 = func2(func);
// funcVar2(); // will call func

// Type of a function value 
/*
In Javascript a function value is type 'function'. 
*/

// Higher Order Functions 
/*
A higher order function is a function that takes at least one function as an argument,
returns at least one function or does both.

This is an example of a higher order function that 
takes another function as an argument:
*/

// function callFuncOnListVals (func, list) {
//   for (let idx = 0; idx < list.length; idx += 1) {
//     func(list[idx]);
//   }
// }

// callFuncOnListVals((val) => console.log(val), [1, 2, 3])

// Another example, this time of a function that can return another function,
// is below:

// let greeting = function(lang) {
//   if (lang === 'English') {
//     return () => console.log("Hello")
//   } else if (lang === 'French') {
//     return () => console.log("Bonjour")
//   }
// }

// let greetEnglish = greeting("English");
// greetEnglish();

// The Global Object