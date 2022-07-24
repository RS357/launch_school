/*
1) 
function createPet(animal , name) {
  return {
    animal,
    name,

    sleep() {
      console.log("I am sleeping");
    },

    wake() {
      console.log("I am awake");
    }
  };
}
2)

let PetPrototype = {
  sleep: function () {
    console.log("I am sleeping")
  },

  wake: function() {
    console.log("I am awake");
  },

  init(animal, name) {
    this.animal = animal;
    this.name = name;
    return this;
  }
};

3) The factory function is less efficient in terms of memory because every object created will
contain a full copy of every mothod in the factory function, whereas the objects created via the 
OLOO pattern won't because the methods are defined in the prototype object (which all objects share).
However factory function pattern allows you to restrict access to the object's 
properties and methods so there is more privacy in that regard. Any state storeed in the body 
of a factory function instead of the returned object can't be accessed by that 
returned object unless one of the object methods exposes that state. 
*/
