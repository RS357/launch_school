/*
1) 

function createPet(animal, name) {
  return {
    animal,
    name,
    sleep() {
      console.log("I am sleeping");
    },

    wake() {
      console.log("I am awake");
    }
  }
}

2)

let PetPrototype = {

  sleep() {
    console.log("I am sleeping");
  },

  wake() {
    console.log("I am awake");
  },

  init(animal, name) {
    this.animal = animal;
    this.name = name;
    return this;
  }

  3) The objects created by the factory function contain a copty of all the methods
  defined in the returned object of that function. This is expensive in terms 
  of memory and introduces reundancy. 

  The objects that inherit from petPrototype and that are created via the OLOO pattern 
  all inherit from petProtoype. All objects created via this OLOO pattern share the same methods on the prototype object.
  This uses less memory than the factory function method.
  However these objects cannot have private state. 

  */
