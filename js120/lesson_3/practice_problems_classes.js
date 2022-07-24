/*
1) Classes can be passed to functions as arguments, returned from functions and assigned to variables and properties. We can treat 
JavaScript classes like any other JavaScript value. 

2) The static modifier defines its properties and methods as class properties and methods - as opposed to instance 
properties and methods. Properties and methods defined with the static modifier are defined directly 
on the class.
*/

class Television {
  static manufacturer() {
    // omitted code
  }

  model() {
    // method logic
  }
}

Television.manufacturer();