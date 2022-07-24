function Supertype(name, age, profession) {
  this.name = name;
  this.age = age;
  this.profession = profession;
}

Supertype.prototype.sayHi = () => {
  return "Hi!";
}

function Subtype() {}

Subtype.prototype = new Supertype();
console.log(Subtype.hasOwnProperty('sayHi'));
// Supertype { name: undefined, age: undefined, profession: undefined }