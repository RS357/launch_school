// class Rectangle {
//   constructor(length, width) {
//     this.length = length;
//     this.width = width;
//   }

//   getArea() {
//     return this.length * this.width;
//   }
// }

// let rec = new Rectangle(10, 5);
// console.log(typeof Rectangle);
// console.log(rec instanceof Rectangle);
// console.log(rec.constructor);
// console.log(rec.getArea());

// function createObject(classDef) {
//   return new classDef();
// }

// class Foo {
//   sayHi() {
//     console.log('Hi!');
//   }
// }

// let obj = createObject(Foo);
// obj.sayHi();

// console.log(typeof Foo);

// 

function Dog(name, breed, weight) {
  // deleted Object.setPrototypeOf(this, Dog.myPrototype);
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

Dog.prototype.bark = function() {
  console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
};

let maxi = new Dog('Maxi', 'German Shepherd', 32);
console.log(Dog.prototype.constructor);