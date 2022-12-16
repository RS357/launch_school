// Hierarchy:

// Person: walks
// Student (from Person): studies
// Professor (from person): teaches
// Physics Student (from student): learnsPhysics 


// Factory Functions 

// function createPerson(name, age) {
//   return {
//     name: name,
//     age: age,

//     walks() {
//       console.log(`I am ${this.name}, I am ${this.age} age and I am walking.`);
//     },
//   }
// }


// function createStudent(name, age, status) {
//   let personObject = createPerson(name, age);

//   studentObject = {
//     status: status,

//     studies() {
//       console.log(`I am ${this.name}, I am ${this.age} age and I am a ${this.status} student. I study.`);
//     }
//   }
//   return Object.assign(personObject, studentObject);
// }

// function createProfessor(name, age, rank) {
//   let personObject = createPerson(name, age);

//   let professorObject = {
//     rank: rank,

//     teaches() {
//       console.log(`I am ${this.name}, I am ${this.age} age and I am a ${this.rank} professor. I teach.`);
//     }
//   };

//   return Object.assign(personObject, professorObject);
// }

// function createPhysicsStudent(name, age, year) {
//   let personObject = createPerson(name, age);

//   let physicsStudentObject = {
//     year: year,

//     doesPhysicsLearning() {
//       console.log(`I am ${this.name}, I am ${this.age} age and I am a ${this.year} student. I do physics learning.`);
//     }
//   };

//   return Object.assign(personObject, physicsStudentObject);
// }

// let riz = createPhysicsStudent('riz', 33, 'final year');
// riz.doesPhysicsLearning();


// Hierarchy:

// Person: name, age, walks
// Student (from Person): status, studies
// Professor (from person): rank, teaches
// Physics Student (from student): year, learnsPhysics 


// OLOO

// let personPrototype = {
//   init(name, age) {
//     this.name = name;
//     this.age = age;
//     return this;
//   },

//   walks() {
//     console.log(`Hi I am ${this.name} and I am ${this.age} years old. I walk.`);
//   }
// }

// let studentPrototype = Object.create(personPrototype);
// studentPrototype.init = function(name, age, status) {
//   Object.getPrototypeOf(this).init(name, age);
//   this.status = status;
//   return this; 
// }
// studentPrototype.studies = function() {
//   console.log(`Hi I am ${this.name}, I am ${this.age} years old and I am a ${this.status}. I study.`);
// }

// let professorPrototype = Object.create(studentPrototype);
// professorPrototype.init = function(name, age, rank) {
//   Object.getPrototypeOf(this).init(name, age);
//   this.rank = rank;
//   return this;
// }
// professorPrototype.teaches = function() {
//   console.log(`Hi I am ${this.name}, I am ${this.age} years old and I am a ${this.rank}. I teach.`);
// }

// let physicsStudentPrototype = Object.create(studentPrototype);
// physicsStudentPrototype.init = function(name, age, status, year) {
//   Object.getPrototypeOf(this).init(name, age, status); 
//   this.year = year; 
//   return this;
// }
// physicsStudentPrototype.learnsPhysics = function() {
//   console.log(`Hi I am ${this.name}, I am ${this.age} years old and I am a ${this.year} year ${this.status} student. I learn physics.`); 
// }

// let me = Object.create(physicsStudentPrototype).init('riz', 33, 'undergraduate', 'final');
// me.learnsPhysics();

// Hierarchy:

// Person: name, age, walks
// Student (from Person): status, studies
// Professor (from person): rank, teaches
// Physics Student (from student): year, learnsPhysics 


// Pseudo-Classical 

// let Person = function(name, age) {
//   this.name = name;
//   this.age = age; 
// }
// Person.prototype.walks = function() {
//   console.log(`Hi I am ${this.name} and I am ${this.age} years old. I walk.`);
// }

// let Student = function(name, age, status) {
//   Person.call(this, name, age);
//   this.status = status;
// }
// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;
// Student.prototype.studies = function() {
//   console.log(`Hi I am ${this.name}, I am ${this.age} years old and I am a ${this.status}. I study.`);
// }

// let Professor = function(name, age, rank) {  
//   Person.call(this, name, age);
//   this.rank = rank;
// }
// Professor.prototype = Object.create(Person.prototype);
// Professor.prototype.constructor = Professor 
// Professor.prototype.teaches = function() {
//   console.log(`Hi I am ${this.name}, I am ${this.age} years old and I am a ${this.rank}. I teach.`);
// }

// let PhysicsStudent = function(name, age, status, year) {
//   Student.call(this, name, age, status, year);
//   this.year = year;
// }
// PhysicsStudent.prototype = Object.create(Student.prototype);
// PhysicsStudent.prototype.constructor = PhysicsStudent; 
// PhysicsStudent.prototype.learnsPhysics = function() {
//   console.log(`Hi I am ${this.name}, I am ${this.age} years old and I am a ${this.year} year ${this.status} student. I learn physics.`); 
// }


// ES6

// Hierarchy:

// Person: name, age, walks
// Student (from Person): status, studies
// Professor (from person): rank, teaches
// Physics Student (from student): year, learnsPhysics 

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  walks() {
    console.log(`Hi I am ${this.name} and I am ${this.age} years old. I walk.`);
  }

  ages() {
    this.age += 1;
  }
}


class Student extends Person {
  constructor(name, age, status) {
    super(name, age);
    this.status = status;
  }

  studies() {
    console.log(`Hi I am ${this.name}, I am ${this.age} years old and I am a ${this.status}. I study.`);
  }
}

class Professor extends Person {
  constructor(name, age, rank) {
    super(name, age);
    this.rank = rank;
  }

  teaches() {
    console.log(`Hi I am ${this.name}, I am ${this.age} years old and I am a ${this.rank}. I teach.`);
  }
}

class PhysicsStudent extends Student {
  constructor(name, age, status, year) {
    super(name, age, status);
    this.year = year;
  }

  learnsPhysics() {
    console.log(`Hi I am ${this.name}, I am ${this.age} years old and I am a ${this.year} year ${this.status} student. I learn physics.`); 
  }
}


let person = new Person('riz', 33);
person.ages()
console.log(person.age);





































