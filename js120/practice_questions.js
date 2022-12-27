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

/*
The global object is created when JavaScript starts running and 
is the implicit execution context for all functions called as stand-alone 
functions. In node, the global object is called global. In the browser, it
is called window.

Example:
*/

// function func() {
//   console.log(this);
// }

// func();

/*
the global object is available everywhere in your program and is where 
many important properties are defined.
*/
// console.log(global.isNaN);
// console.log(Object.getOwnPropertyNames(global));


// Undeclared variables on the global object 
/*
Variables declared without the let, const or var keywords
are decared on the global object by default.

Examples:
*/

// let a = 1;
// const b = 2;
// var c = 3;
// d = 4
// console.log(global.a);
// console.log(global.b);
// console.log(global.c);
// console.log(global.d);

/*
Whenever you try to access properties that are no local or global variables, JavaScript 
looks for it on the global object. The global object is accessible everywhere 
in your program.
*/

/*
Implicit and Explicit Execution Context
The execution context of a function is the object represented
by the 'this' keyword. Execution context can be set implicitly and explicitly.

When a function is called as a stand-alone function, its execution context is 
implicitly set to the global object:
*/

// function func() {
//   console.log(this);
// }

// func() // logs the global object 

/*
Another way to set a function's execution context implicitly is to call it using
a method (this is called 'method execution context'): 
*/

// let obj = {
//   func() {
//     console.log(this);
//   }
// }

// obj.func(); // logs the obj object

/*
A function's execution context can also be set explicitly.. This can 
be done using the call, apply and bind methods:
*/

// let obj = {
//   a: 1
// }

// function func() {
//   console.log(this.a);
// }

// func.call(obj);
// func.apply(obj);
// let bound = func.bind(obj);
// bound();

/*
Strict mode and execution context
When JavaScript runs in strict mode, the implicit 'this'
of functions called as stand-alone functions is not set to the global object
 - it is set to undefined. 

 Example:
*/

// "use strict"
// function func() {
//   console.log(this);
// }
// func()

// Hard binding functions with contexts 
/*
You can bind functions to objects using the bind method. This returns a function that 
will always be bound to that object - no matter where it is called. 
Example:
*/

// function func() {
//   console.log(this.a);
// }
// let obj = {
//   a: 1
// }
// let copiedFunc = func.bind(obj); 
// // copiedFunc();

// /*
// Even if you call the function, returned by the bind call, and explicitly set 
// its execution context to another object it will remain bound to the object 
// it was originally bound to:
// */
// let obj2 = {
//   a: 2
// }

// let copiedFunc2 = copiedFunc.bind(obj2);
// copiedFunc2(); // logs 1

// Dealing with Context Loss

// Method copied from object (and passed to another function as an argument)
/*
the problem is that when objects are copied out their objects they lose their context. 
In this example the function is passed to another function as an argument and so 
loses its context. 
*/
// function callThreeTimes(func) {
//   func();
//   func();
//   func();
// }

// let obj = {
//   a: 1,
//   objFunc() {
//     console.log(this.a);
//   },
// }

// callThreeTimes(obj.objFunc);

// Solutions:
// 1) Pass the execution context along with the function and then explicitly 
// bind it to that execution context. 

// function callThreeTimes(func, context) {
//   func.call(context);
//   func.call(context);
//   func.call(context);
// }

// let obj = {
//   a: 1,
//   objFunc() {
//     console.log(this.a);
//   },
// }

// callThreeTimes(obj.objFunc, obj);


// 2) bind the function to its context before passing it

//function callThreeTimes(func) {
//   func();
//   func();
//   func();
// }

// let obj = {
//   a: 1,
//   objFunc() {
//     console.log(this.a);
//   },
// }

// callThreeTimes(obj.objFunc.bind(obj));


// Inner function not using the surrounding context 

// let obj = {
//   a: 1,
//   outterFunc() {
//     function innerFunc() {
//       console.log(this.a);
//     }
//     innerFunc();
//   }
// }

// obj.outterFunc();

// Solutions:

// use lexical scoping rules to preserve context 

// let obj = {
//   a: 1,
//   outterFunc() {
//     let self = this; 
//     function innerFunc() {
//       console.log(self.a);
//     }
//     innerFunc();
//   }
// }

// obj.outterFunc();

// use the call method to set innerFunc's context explicitly. 

// let obj = {
//   a: 1,
//   outterFunc() {
//     function innerFunc() {
//       console.log(this.a);
//     }
//     innerFunc.call(this);
//   }
// }

// obj.outterFunc();


// use the call method to set innerFunc's context explicitly. 

// let obj = {
//   a: 1,
//   outterFunc() {
//     function innerFunc() {
//       console.log(this.a);
//     }
//     innerFunc.bind(this)();
//   }
// }

// obj.outterFunc();

// Use an arrow Function

// let obj = {
//   a: 1,
//   outterFunc() {
//     // function innerFunc() {
//     //   console.log(this.a);
//     // }
//     let innerFunc = () => console.log(this.a);
//     innerFunc();
//   }
// }

// obj.outterFunc();

// Function as argument losing surrounding context 

// let obj = {
//   a: 'riz',
//   func() {
//     [1, 2, 3].forEach(function func(num) {
//       console.log(`${num}: ${this.a}`)
//     })
//   }
// }

// obj.func();

// solutions
// 1) use lexical scoping to preserve execution context:

// let obj = {
//   a: 'riz',
//   func() {
//     let self = this;
//     [1, 2, 3].forEach(function func(num) {
//       console.log(`${num}: ${self.a}`)
//     })
//   }
// }

// obj.func();

// use bind 

// let obj = {
//   a: 'riz',
//   func() {
//     [1, 2, 3].forEach(function func(num) {
//       console.log(`${num}: ${this.a}`)
//     }.bind(this))
//   }
// }

// obj.func();

// use thisArg

// let obj = {
//   a: 'riz',
//   func() {
//     [1, 2, 3].forEach(function func(num) {
//       console.log(`${num}: ${this.a}`)
//     }, this)
//   }
// }

// obj.func();


// use an arrow function


// let obj = {
//   a: 'riz',
//   func() {
//     [1, 2, 3].forEach((num) => {
//       console.log(`${num}: ${this.a}`)
//     })
//   }
// }

// obj.func();


// Lesson 3
// Constructor Functions 
/*
A constructor function is a function that is used to create objects and 
is a way to JavaScript to implement an inheritance model similar to the class-based
OOP patterns in other languages. 

This model entails constructors inheriting from each other via their prototype objects.

All functions bar arrow functions can be a constructor. This is because arrow functions 
do not have a prototype property. Constructor functions are called using the 'new'
keyword.

Example:
// this also includes most of the 'constructors with prototyps' section...
*/

// function Human(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Human.prototype.ages = function() {
//   this.age += 1; 
// }

// function Student(name, age, subject) {
//   Human.call(this, name, age);
//   this.subject = subject; 
// }

// Student.prototype = Object.create(Human.prototype);

// Student.prototype.changeSubject = function(subject) {
//   this.subject = subject; 
// }

// let riz = new Student('riz', 33, 'history')
// riz.changeSubject('maths');
// riz.ages();
// console.log(riz.subject) // 'maths' 
// console.log(riz.age) // 

// Supplying constructor arguments with plain objects 
// When you need to pass a lot of arguments to a constructor. It can 
// be easier to pass it an object instead. Functions that take a lot of arguments
// can become confusing and it is easy to pass arguments to the wrong parameters
// Example:
// let obj = {
//   name: 'riz',
//   age: 33,
// }

// function Human(args) {
//   Object.assign(this, args);
//   console.log(this);
// }

// Human.prototype.ages = function() {
//   this.age += 1; 
// }

// However, one drawback with this approach i that the args object
// may contain properties that are not relevant to Human. These properties may 
// just be excess baggage for objects to carry around but could cause trouble too. 

// let riz = new Human(obj);
// console.log(riz.age);

// Determining an object's type

/*
You can determine an object's type by using the instanceof keyword:
*/

// console.log(riz instanceof Human); // true 

// new and implicit execution context 
/*
Calling a function with new sets that function's execution 
context to the object created and then returned after it is called
with the new keyword.

Example:
*/

// let riz = new Human(obj); // logs the object returned by the constructor and assigned to the 'riz' variable

 // constructors with explicit return values 
 // if a constructor is called with the new keyword and 
 // explicitly returns that object, it will return that object 
 // instead of the one created when calling it with the new keyword:

// function Table(colour) {
//   this.colour = colour
//   return {a: 1}
// }

// let table = new Table('red');
// console.log(table);

// In all other situations, the constructor will 
// return the object created when calling it with the new keyword and 
// not the primitive.


// function Table(colour) {
//   this.colour = colour
//   return 'riz';
// }

// let table = new Table('red');
// console.log(table.colour);

// Overriding the prototype:

/*
You can override properties on an object constructor's prototype object.

In the below example, the ages property on the Student constructor's prototype object overrides 
the ages property on the Human constructor's prototype object. 
*/


// function Human(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Human.prototype.ages = function() {
//   this.age += 1; 
// }

// function Student(name, age, subject) {
//   Human.call(this, name, age);
//   this.subject = subject; 
// }

// Student.prototype = Object.create(Human.prototype);

// Student.prototype.changeSubject = function(subject) {
//   this.subject = subject; 
// }

// Student.prototype.ages = function() {
//   this.age += 2;
// }

// let riz = new Student('riz', 33, 'history');
// riz.ages();
// console.log(riz.age) // 35

// Static and Instance properties and methods

// Instance properties and methods

/*
Instance properties and methods are available on the instances of an object - they are not 
available directly on the constructor of said objects. They are defined on 
the prototype of the objects' constructor or on the instance itself.

Example:
*/

// function Human(name) {
//   this.name = name;
// }

// Human.prototype.walks = function() {
//   console.log('I walk');
// }

// let riz = new Human('riz')
// riz.walks(); // logs 'I walk
// // Human.walks() // throws error because walks is an instance method and so is not avaiable on the constructor 

// riz.func = function() {console.log('I am a func')};
// riz.func();

// Static PRoperties and Methods

// Static properties and methods are defined  on the constructor function
// and are only available on the constructor. 
// Example:

// function Human(name) {
//   this.name = name;
// }

// Human.introduce = function() {
//   console.log(`Hi, I am a ${Human.species}`);
// }

// Human.species = 'homo sapien'

// Human.prototype.walks = function() {
//   console.log('I walk');
// }

// Human.introduce(); // logs 'I exist'
// console.log(Human.species); // true 
// Human.walks() // throws error because Human.prototype.walks is an instance method - not 
// a static method available on the Human constructor. 

// Built-in Constructors
// The Array Constructor 

// You can create an array by using the array constructor.
// Passing in a series of values to the constructor 
// will mean that constructor returns an array containing those values:
// let arr = new Array(1, 2, 3)
// console.log(arr);

// If you pass one non-negative integer to the constructor,
// it will return an empty array of the length of that integer: 

// let arr = new Array(3)
// console.log(arr);

// The single number constructor, coupled with the fill method.
// allows you to fill an array of fixed length with a 
// specific value:

// let arr = (new Array(9)).fill('*')
// console.log(arr);

// Note that passing a a negative integer or a non-integer 
// to the array constructor throws an error.

// let arr = new Array(1.5);
// console.log(arr);

// You don't need to use the 'new' keyword.

// let arr = Array(1, 2, 3);
// console.log(arr);

// The Array constructor's prototype object has some 
// useful methods defined on it. An example is 
// Array.prototype.forEach, which iterates over the 
// array.

// [1, 2, 3].forEach(val => console.log(val));

// Static array methods: 

// Array.isArray()
// This method ascertains whether the argument 
// passed to it is an array:
// console.log(Array.isArray([]));

// This is necessary because using the typeof keyword
// on an array doesn't really help:

// console.log(typeof []);

// Array.from()
// Array.from takes an array-like object and returns an array
// with that object's keys (which need to be non-negative integers)
// as the index value's to those keys' respective values in the object.
// The object passed in must have a length property.  

// let arr = Array.from({0: 'a', 1: 'b', length: 2});
// console.log(arr);

// The object constructor:

// One way to create an object is by using the object literal syntax:
// let obj = {};

// Another way is by using the object constructor:

// let obj = new Object();
// // obj.a = 1;
// console.log(obj) // {a: 1}

// You can ommit the new keyword: 
// let obj = Object();
// obj.a = 1;
// console.log(obj) // {a: 1}

// There are lots of methods on the prototype object of the 
// Object constructor. One useful one is 
// Object.prototype.isPrototypeOf():

// Example: 
// let obj1 = {};
// let obj2 = Object.create(obj1);
// console.log(obj1.isPrototypeOf(obj2)); // true 

// Object.prototype.toString
// This method as defined on the Object.prototype object 
// is not very useful - it just returns [object Object]

// let obj = {};
// console.log(obj.toString());

// But other constructors override it to produce more useful
// output:

// let arr = [1, 2, 3];
// console.log(arr.toString()); // =>  '1,2,3'

// let func = function() {console.log('a')};
// console.log(func.toString()); // => function() {console.log('a')} 

// The Date constructor: 

// The date constructor is used to return an object from which
// dates and times can be extracted:

// let date = new Date('24 December 2022');
// console.log(date)
// console.log(date.getFullYear());

// The Date constructor prototype : getFullYear and getDate
// The getFullYear method on the Date.prototype object 
// returns the year of the date instance it is called on.

// let date = new Date('24 December 2022');
// console.log(date.getFullYear()); //2022
// console.log(date.getDate()); // 22 
// console.log(date.getDay()); // 6

// The String Constructor

// We know that strings are primitives because the strict
// equality operator compares strings by value rather than by
// reference: 

// console.log('riz' === 'riz'); // true

// Objects are only 'equal' in JavaScript as per the strict 
// equality operator if they have the same identity:

// let obj1 = {};
// let obj2 = {};
// console.log(obj1 === obj2); // false
// let obj3 = obj1;
// console.log(obj1 === obj3); // true

// let string = new String('abc');
// console.log(string); // string is not assigned to a string - it is
// // assigned to an object that is an instance of the String 
// constructor:
// console.log(typeof string); // object
// console.log(typeof 'riz'); // string
// console.log(string.valueOf()); // 'abc'

// Calling the string constructor without the new keyword 
// returns a string:

// let str = String('riz');
// console.log(str) // 'riz'

// How can we call methods on strings e.g. riz.toUpperCase() 
// when methods can't be defined on primitives? JavaScript 
// wraps the string in an object of String type and then 
// calls the method (which must be defined on the prototype 
// object of the String constructor):

// console.log('riz'.toUpperCase()); // 'RIZ' 

// Afterwards, JavaScript discards the wrapping object.

// The String constructor takes non-string values as arguments too.
// It then coerces them to type String:
// let num = String(12);
// let bool = String(true);
// console.log(num);  // '12'
// console.log(bool); // 'bool'

// The number and boolean constructors

// The Number constructor:
// The number constructor returns an object of type Number:

// let num = new Number('12');
// console.log(num);

// Calling the Number constructor without the new keyword
// coerces its arugment to a primitive value of Number type and 
// returns it.

// let num = Number('12');
// console.log(num);


// The boolean Constructor

// The Boolean constructor, when called with the new keyword,
// returns an object of type Boolean. When called without 
// the new keyword, it coerces the value passed to it to 
// type boolean and returns it:

// let bool1 = new Boolean('yes');
// console.log(bool1 instanceof Boolean); // true 
// let bool2 = Boolean('yes');
// console.log(bool2); // 'true

// Extending built-in prototypes: 
// We can add properties to the prototype objects of built-in
// constructors:

// Array.prototype.getFirst = function() {
//   return this[0];
// }

// let arr = [1, 2, 3];
// console.log(arr.getFirst()); // 1

// Borrowing array methods for strings
// Given array methods work on values of other types 
// whose values are indexed with integers and that 
// have a length property , we can use 
// array methods on strings by explicitly setting 
// the execution context of those methods to the string: 

// [].forEach.call('riz', val => console.log(val));

// ES6 classes

// ES6 classes are syntatic sugar over constructor functions. 
// They were implemented as a way for programmers who 
// work with other languages to transition to working with JavaScript.

// Class declarations

// class Human {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   ages() {
//     this.age += 1;
//   }
// }

// class Student extends Human {
//   constructor(name, age, subject) {
//     super(name, age);
//     this.subject = subject;
//   }

//   changeSubject(newSubject) {
//     this.subject = newSubject;
//   }
// }

// let riz = new Student('riz', 33, 'history');
// riz.ages();
// console.log(riz.age); //34
// riz.changeSubject('maths');
// console.log(riz.subject); // 'maths'

// is the same as...

// function Human(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Human.prototype.ages = function() {
//   this.age += 1;
// }

// function Student(name, age, subject) {
//   Human.call(this, name, age);
//   this.subject = subject;
// }
// Student.prototype = Object.create(Human.prototype);
// Student.prototype.constructor = Student;
// Student.prototype.changeSubject = function(newSubject) {
//   this.subject = newSubject;
// }

// let riz = new Student('riz', 33, 'history');
// riz.ages();
// console.log(riz.age); //34
// riz.changeSubject('maths');
// console.log(riz.subject); // 'maths'
// console.log(riz.constructor);

// Class expressions


// let Human = class  {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   ages() {
//     this.age += 1;
//   }
// }

// let Student = class Student extends Human {
//   constructor(name, age, subject) {
//     super(name, age);
//     this.subject = subject;
//   }

//   changeSubject(newSubject) {
//     this.subject = newSubject;
//   }
// }

// let riz = new Student('riz', 33, 'history');
// console.log(riz.age);

// Classes as first class citizens 
// First class citizens are values that can be 
// passsed to functions as arguments, returned by 
// functions, and assigned to properies. Classes
// meet this criteria and qualify as first class citizens.

// class passed to a function

// function makeHuman(humanClass) {
//   let human = new humanClass(33);
//   console.log(human.age); // 33
// }

// class Human {
//   constructor(age) {
//     this.age = age;
//   }
// }

// makeHuman(Human); // 33

// class returned from a function: 

// function makeHumanClass() {
//   return class Human {
//     constructor(age) {
//       this.age = age;
//     }
//   }
// }

// let humanClass = makeHumanClass();
// let human = new humanClass(33);
// console.log(human.age) // 

// classes assigned to properties: 
// let obj = {
//   humanClass: class Human {
//     constructor(name, age) {
//       this.name = name; 
//       this.age = age;
//     }
//     ages() {
//       this.age += 1;
//     }
//   }
// }

// let human = new obj.humanClass('riz', 33);
// human.ages();
// console.log(human.age); // 34

// Static methods and properties: 


// let Human = class  {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }


//   static func() {
//     console.log("I am func");
//   }

//   ages() {
//     this.age += 1;
//   }
// }

// Human.species = 'homo sapien';

// Human.func(); // I am func
// console.log(Human.species) // homo sapien


// Lesson 4
// The OLOO pattern 

// The OLOO pattern is an OOP pattern that entails objects
// inheriting from a 'prototype' object via their internal 
// [[Prototype]] properties: 

// let Prototype = {
//   init(name, age) {
//     // Object.assign(this, name, age);
//     this.name = name;
//     this.age = age;
//     return this;
//   }
// }

// let Human = Object.create(Prototype);

// let Student = Object.create(Human);
// Student.init = function(name, age, subject) {
//   Prototype.init.call(this, name, age);
//   this.subject = subject;
//   return this; 
// }

// let riz = Object.create(Student).init('riz', 33, 'math')
// console.log(riz.subject);



// Advantages of OLOO over Factory Functions:
/*
With factory functions the every object has 
copy of every method whereas with the OLOO pattern
objects inherit from a prototype object and 
via prototypal inheritance which means you can define 
the properties that objects need on the prototype 
object and have the objects created delegate property 
access to that prototype. this eliminates the redunancy that 
occurs when using the factory function model and saves memory 
and computing resource. 


However the factory functions pattern allows you to create objects 
with private state. 
*/


// Code reuse with mixins 
/*
 Mixins are used to get around the JavaScript's
single inhertiance rule (that is that an object can only 
have one prototype). JavaScript does not allow for multiple 
inheritance. 

Example:

*/

// function Mum() {
// }
// Mum.prototype.hair = 'curly';

// function Dad() {
// }
// Dad.prototype.eyes = 'brown';

// function Child() {

// }

// Child.prototype = Object.create(Dad.prototype);
// Object.assign(Child.prototype, Mum.prototype);
// Child.prototype.constructor = Child;


// let riz = new Child();

// console.log(riz.eyes); // 'brown'
// console.log(riz.hair); // 'curly'

// polymorphism 

// polymorphism through duck typing
/*
Polymorphism through duck typing is when objects of 
different types respond (potentially in different ways) to
the same method invocation.
*/

// class Fish {
//   breath() {
//     console.log('breathes on land')
//   }
// }

// class Mammal {
//   breath() {
//     console.log('breathes under the water');
//   }
// }

// let arr = [new Fish(), new Mammal()];
// arr.forEach(animal => animal.breath());

// polymorphism through inheritance
/*
Polymorphism through inheritance is when a method 
defined on an object's constructor's prototype object can 
be overriden (or not), giving way for objects of different types 
to respond to the same method invocation in different ways
Example:
*/

// class Animal {
//   moves(){
//     console.log('I move');
//   }
// }

// class Mammal extends Animal {
//   moves() {
//     console.log("I walk on 4 legs")
//   }
// }-

// class Human extends Mammal {
//   moves() {
//     console.log("I walk on 2 legs")
//   }
// }

// [new Animal(), new Mammal(), new Human()].forEach(
//   animal => animal.moves()
// );

/*
You have recently watched Lion King as well as Jungle Book and have decided to take the best
of both these worlds and develop some OOP magic. In this Lion King x Jungle Book world of ours, Lions have two characteristics:
1) they are friendly;
2) they are in the Lion King
Lions also have certain behavior, namely they roar and say 'Hakuna Matata'

Tigers, likewise, have two characteristics:
1) they enjoy swimming;
2) they are in the Jungle Book
Tigers also have certain behavior, namely they chase and say 'I am chasing the man-cub'

Your task, should you chose to accept it, is to create a Liger (https://en.wikipedia.org/wiki/Liger).
A Liger is an animal whose father is a Lion and whose mother is a Tiger. 
The liger you create should inherit ALL properties and functionality from its parents, as follows:

console.log(liger.roar()) // 'Hakuna Matata'
console.log(liger.chase()) // 'I am chasing the man-cub'
console.log(liger.inLionKing) // true
console.log(liger.isFriendly) // true
console.log(liger.enjoysSwimming) // true
console.log(liger.inJungleBook) // true

Please construct this relationship using the following patterns:
1) Constructor Prototypes
2) OLOO
3) Factory functions

How you set up the relationship between the child liger, and parent Lion and Tiger is up to you.
*/

// Constructor Prototypes:

// function Tiger() {

// }

// Tiger.prototype.isFriendly = true;
// Tiger.prototype.inLionKing  = true;
// Tiger.prototype.roar = function () {
//   return 'Hakuna Matata';
// }

// function Lion() {

// }
// Lion.prototype.enjoysSwimming = true;
// Lion.prototype.inJungleBook = true;
// Lion.prototype.chase = function() {
//   return 'I am chasing the man-cub';
// }

// function Liger() {

// }

// Liger.prototype = Object.create(Tiger.prototype);
// Object.assign(Liger.prototype, Lion.prototype);

// let liger = new Liger();


// function Tiger() {

// }

// Tiger.prototype.isFriendly = true;
// Tiger.prototype.inLionKing  = true;
// Tiger.prototype.roar = function () {
//   return 'Hakuna Matata';
// }

// function Lion() {

// }


// OLOO

// let Tiger = {
//   isFriendly: true,
//   inLionKing: true,
//   roar () {
//     return 'Hakuna Matata';
//   }
// };

// let Lion = {
//   enjoysSwimming: true,
//   inJungleBook: true,
//   chase: function() {
//     return 'I am chasing the man-cub';
//   }
// };

// let Liger = Object.create(Tiger);
// Object.assign(Liger, Lion);

// let liger = Object.create(Liger);


// Factory Functions 

// function createTiger() {
//   return {
//     isFriendly: true,
//     inLionKing: true,
//     roar() {
//       return 'Hakuna Matata';
//     }
//   }
// }

// function createLion() {
//   return {
//     enjoysSwimming: true,
//     inJungleBook: true,
//     chase() {
//       return 'I am chasing the man-cub';
//     }
//   }
// }

// function createLiger() {
//   let tiger = createTiger();
//   let lion = createLion();
//   return Object.assign(tiger, lion)
// }

// let liger = createLiger();

// console.log(liger.roar()) // 'Hakuna Matata'
// console.log(liger.chase()) // 'I am chasing the man-cub'
// console.log(liger.inLionKing) // true
// console.log(liger.isFriendly) // true
// console.log(liger.enjoysSwimming) // true
// console.log(liger.inJungleBook) // true

// What is encapsulation in the context of OOP?
// Encapsulation in the context of OOP is the grouping together
// of data and actions that operate on that date into a single 
// entity i.e. an object. 

// In other languages, OOP also entails the restriction of 
// access to an object's properties by code that uses that 
// object. In other words other OOP languages allow for 
// the creation of public interfaces on objects. JavaScript 
// doesn't really implement access restriction in the same
// way.

// Example:

// let human = {
//   age: 32,
//   ages: function ages() {
//     this.age += 1
//   }
// }

// let riz = human;
// riz.ages();
// console.log(riz.age); // 33

// What is inheritance in the context of JS? 
/*
Inheritance in the context of JS entails an 
object inheriting from a prototype object. This happens
when an object's internal [[Prototype]] property points to its 
prototype. This allows an object to delegate property 
access to its prototype. Objects can inherit from other objects 
that also inherit from other objects. When JavaScript 
attempts to access a property on object, if it can't
find the property on that object it searches up that object's
prototype chain and, if it cannot find the property, it returns
undefined. 
*/


// Example:
// In the below example, we set the internal [[Prototype]] property
// of obj2 to point to obj1. This means that when we try to access
// the property a on obj2 on line 1596, JavaScript looks up 
// the prototype chain (via the internal [[Prototype]] 
// property of obj2) for the property a because it is not 
// set on obj2, and finds it on obj1. 
// let obj1 = {
//   a: 1
// }

// let obj2 = Object.create(obj1);
// console.log(obj2.a); // 1

// let dogPrototype = {
//   makeSound() {
//     console.log('sound');
//   }
// }

// let dog = Object.create(dogPrototype);

// dog.makeSound(); // sound
// console.log(dog.hasOwnProperty('makeSound')); //false

// What is the difference between Object.create() and 
// Object.assign()

// The Object.create method returns an object whose internal 
// [[Prototype]] property points to the object passed to it 
// as an argument. This is demonstrated by calling 
// Object.getPrototypeOf() below. It returns the prototype 
// object of the object passed to it as an argument.

// let obj1 = {
//   a: 1
// }

// let obj2 = Object.create(obj1);
// console.log(Object.getPrototypeOf(obj2)); // obj1

// Object.assign(obj, otherObj, ...) copies the properties
// of every object passed to it (other than the first object
// argument) to the first object passed to it as an argument. 
// It returns the first object passed to it as an argument.
// Example: 

// let obj1 = {a: 1};
// let obj2 = {b: 2};
// let obj3 = {c: 3};

// let newObj1 = Object.assign(obj1, obj2, obj3);
// console.log(obj1); // {a: 1, b: 2, c:3}
// console.log(obj1 === newObj1)// true