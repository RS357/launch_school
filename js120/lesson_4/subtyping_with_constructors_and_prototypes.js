// function Rectangle(length, width) {
//   this.length = length;
//   this.width = width;
// }

// Rectangle.prototype.getArea = function () {
//   return this.length * this.width;
// };

// Rectangle.prototype.toString = function() {
//   return `[Rectangle ${this.length} x ${this.width}]`;
// };

// function Square(size) {
//   Rectangle.call(this, size, size);
// }

// Square.prototype = Object.create(Rectangle.prototype);
// Square.prototype.constructor = Square;

// Square.prototype.toString = function() {
//   return `[Square ${this.length} x ${this.width}]`;
// };

// let sqr = new Square(5);
// // console.log(sqr.constructor === Square);

// prototypal inheritance/prototypal delegation
// let humanPrototype = {
//   myName() { return this.name; },
//   myAge() { return this.age; },
// };

// let personPrototype = Object.create(humanPrototype);
// personPrototype.toString = function() {
//   return `My name is ${this.myName()} and I'm ${this.myAge()} years old.`;
// };

// let will = Object.create(personPrototype);
// will.name = 'William';
// will.age = 28;
// console.log(will.toString());

// // pseudo-classical object construction
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.toString = function() {
//   return `My name is ${this.name} and I'm ${this.age} years old.`;
// };

// pseudo-classical inheritance / constructor inheritance
// function Human() {}
// Human.prototype.myName = function() { return this.name; };
// Human.prototype.myAge = function() { return this.age; };

// function Person() {}2
// Person.prototype = Object.create(Human.prototype);
// Person.prototype.constructor = Person;
// Person.prototype.toString = function () {
//   return `My name is ${this.myName()} and I'm ${this.myAge()} years old.`;
// };

// let will = new Person();
// will.name = 'William';
// will.age = 28;
// console.log(will.toString()); // => My name is William and I'm 28 years old.

// pseudo-classical inheritance / constructor inheritance using classes
class Human {
  myName() { return this.name; }
  myAge() { return this.age; }
}

class Person extends Human {
  toString() {
    return `My name is ${this.myName()} and I'm ${this.myAge()} years old.`;
  }
}

let will = new Person();
will.name = 'William';
will.age = 28;
console.log(will.toString()); // => My name is William and I'm 28 years old.

// Practice problems 

function Greeting() {}

Greeting.prototype.greet = function(message) {
  console.log(message);
};

function Hello() {}

Hello.prototype = Object.create(Greeting.prototype);

Hello.prototype.hi = function() {
  this.greet('Hello!');
};

function Goodbye() {}

Goodbye.prototype = Object.create(Greeting.prototype);

Goodbye.prototype.bye = function() {
  this.greet("Goodbye");
};

//Case 5
Hello.hi();
/*
This logs a TypeError error because the Hello function does not a method hi assigned to it. 
The hi method is assigned to its prototype object. 
*/

// Case 4 
let hello = new Hello();
hello.greet('Goodbye');
/*
This logs "Goodbye" to the console 
*/

// Case 3
let hello = new Hello();
hello.greet();
/*
This code logs undefined to the console 
*/

// Case 2
let hello = new Hello();
hello.bye();
/*
This logs an TypeError to the console because the Hello function does not have a 
'bye' function assigned to it - and neither do any of the objects 
in its prototype chain. 
*/

// case 1
let hello = new Hello();
hello.hi();
/* 
The Hello constructor function is called with the 'new' keyword and 
it returns an object that is assigned to the variable hello. That 
object is then the execution context when the hi() method is called.
This calls the hi method on the Hello constructor functions' prototype, which
subsequently calls greet() with the execution context set to the hello
object. Because the greet method is not defined on Hello's prototype object, 
JavaScript looks up the prototype chain to the Greeting function (because 
Hello's prototype object inherits from Greeting's prototype object) and finds the greet() 
method on Greeting's prototype object. It then calls the greet method, which logs 
the string "Hello" which was passed to it. 
*/