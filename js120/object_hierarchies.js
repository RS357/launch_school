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

// OLOO

// Pseudo-Classical 

// ES6











































