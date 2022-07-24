/*
1) NaN and NaN. This is because RECTANGLE.area() and RECTANGLE.area() are called with RECTANGLE 
as their execution contexts on lines 13 and 14 in Rectangle() after Rectangle() is called with the new operator on line 17. 
The RECTANBLE object does not define width or height properties. And a numerical operation 
on undefined results in NaN. So the new object returned by calling Rectangle 
with the 'new' keyword has its area and perimeter properties set to NaN - remember 
that when calling a constructor function with the 'new' operator the execution context 
of that function is set to the object it returns (in this case, the object assigned to 
  the rect1 variable on line 17).

2)

let RECTANGLE = {
  area: function() {
    return this.width * this.height;
  },
  perimeter: function() {
    return 2 * (this.width + this.height);
  },
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area.call(this);
  this.perimeter = RECTANGLE.perimeter.call(this);
}

let rect1 = new Rectangle(2, 3);

console.log(rect1.area);
console.log(rect1.perimeter);

3)

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.area = function() {
  return Math.PI * (this.radius * this.radius);
};

let a = new Circle(3);
let b = new Circle(4);

console.log(a.area().toFixed(2)); // => 28.27
console.log(b.area().toFixed(2)); // => 50.27
console.log(a.hasOwnProperty('area')); // => false

4) This function will log true to the console because 
on line 5 the Ninja function is called as a constructor function 
using the 'new' operator. This results in that object having  property swung defined on it 
and ait is assigned to true as per line 2 in the constructor function. On line 7, 
the swingsword property of Ninja's prototype object is assigned to a function that 
returns the swung property defined on its execution context. 
The console.log() call on line 11 thus calls the function assigned to the swingsword property 
of the ninja object's prototype (this function is not assigned to a property of the Ninja constructor
  function so JavaScript looks up the prototype chain to Ninja.prototype after searching for it in the ninja object)
and this function returns true.

5) This code will output TypeError because the Ninja constructor function's prototype property is 
assigned to a new object on line 7 rather than being mutated - this means that the __proto__ property of ninja is 
no longer assigned to the Ninja constructor function's prototype property (it continues to point to Ninja's original prototype object). 
This means JavaScript cannot find  the swordFish function when looking up the prototype chain from the ninja object.

6)

function Ninja() {
  this.swung = false;
}

Ninja.prototype.swing = function() {
  this.swung = true;
  return this;
};

// Add a swing method to the Ninja prototype which
// modifies `swung` and returns the calling object

let ninjaA = new Ninja();
let ninjaB = new Ninja();

console.log(ninjaA.swing().swung);      // logs `true`
console.log(ninjaB.swing().swung);      // logs `true`

7)


let ninjaA;

{
  const Ninja = function() {
    this.swung = false;
  };

  ninjaA = new Ninja();
}

// create a `ninjaB` object here; don't change anything else
//let ninjaB = ninjaA.constructor();
let ninjaB = new ninjaA.constructor();
console.log(ninjaA.constructor === ninjaB.constructor); // => true

8)
*/

// function User(first, last) {
//   if (this instanceof User) {
//     // function was called with new
//     this.name = `${first} ${last}`;
//   } else {
//     // function was not called with new
//     return new User(first, last);
//   }
// }

// let name = 'Jane Doe';
// let user1 = new User('John', 'Doe');
// let user2 = User('John', 'Doe');

// console.log(name);         // => Jane Doe
// console.log(user1.name);   // => John Doe
// console.log(user2.name);   // => John Doe



