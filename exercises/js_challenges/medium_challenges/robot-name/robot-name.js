class Robot {
  
  static NAME_RECORD = {};

  name() {
    if (this.robotName === undefined) {
      this.robotName = this._generateName();
    }
    return this.robotName;
  }

  reset() {
    delete Robot.NAME_RECORD[this.robotName]
    this.robotName = undefined;
  }

  _generateName() {
    let nameStr;
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    while (true) {
      nameStr = '';
      for (let alphaCount = 0; alphaCount < 2; alphaCount += 1) {
        nameStr += alphabet[Math.floor(Math.random() * alphabet.length)];
      }

      for (let numCount = 0; numCount < 3; numCount += 1) {
        nameStr += numArr[Math.floor(Math.random() * numArr.length)];
      }

      if (!Robot.NAME_RECORD.hasOwnProperty(nameStr)) {
        Robot.NAME_RECORD[nameStr] = 1;
        return nameStr;
      }
    }
  }
}

// let r = new Robot();
// console.log(r._generateName());

module.exports = Robot;

/*

Algo:
class constructor function: 
  calls generateName and assigns returned value to name property, name

STATIC: create empty object, NAME_RECORD

function name: 
  if name is undefined:
    call generateName helper function
  return instance property name 

function reset: 
  set instance property name to undefined
  delete instance property robotName from static NAME_RECORD


helper functions:
generateName: 
  create a variable nameStr and set it to undefined
  create uppercase alphabet string and split it to an array of characters by char, alphabet
  create an array of numbers from 0 - 9, numArr
  loop infinitelty:
    set nameStr to empty string    
    select random value from alphabet, concatenate it to nameStr
    select random value from alphabet, concatenate it to nameStr
    select random value from numArr, concatenate it to nameStr
    select random value from numArr, concatenate it to nameStr
    select random value from numArr, concatenate it to nameStr
    if nameStr is not a property in nameRecord instance object:
      return nameStr 



Problem: Write a function that returns a string that starts with two capital letters 
and ends with 3 single digits. 


instance methods: 
name - input: nothing, output: string 
reset input: nothing, output: nothing 

Rules: 
A robot's name is unset upon instantiation and is set when name is called for the first time
The name method will return the robot's name  DONE 
No two robots will have the same name (store names in object and lookup when generating?) DONE
The reset instance method deletes the name. If the name method is called afterwards,  DONE
a new name is generated for the robot and returned by the name method. DONE


*/