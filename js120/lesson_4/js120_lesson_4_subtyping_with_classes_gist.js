// inheritance with class declarations 
class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }


    getArea() {
        return this.length * this.width;
    }

    toString() {
        return `[Rectangle ${this.width * this.length}]`;
    }
}

class Square extends Rectangle {
    constructor(size) {
        super(size, size);
    }

    toString() {
        return `[Square] ${this.width * this.length}`;
    }
}

// inheritance with class expressions
let Person = class {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayName() {
        console.log(`My name is ${this.name}.`);
    }
};

let Student = class extends Person {
    constructor(name, age, semester) {
        super(name, age);
        this.semester = semester;
    }

    enrollInCourse(courseNumber) {
        console.log(`${this.name} has enrolled in course ${courseNumber}`);
    }
};

let student = new Student('Kim', 22, 'Fall');
student.sayName();
student.enrollInCourse('JS120');