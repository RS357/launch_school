/*
1) If we add a play method to the Bingo class 
and Bingo is instantiated and that  play 
is called on that instance, the play instance method referenced 
on the Bingo class will be called instead 
of the play instance method referenced on the Game class.
When a class redefined a method that a superclass defines,
we call it 'method overriding'. 

2)
*/

class Greeting {
  greet(str) {
    console.log(str);
  }
}

class Hello extends Greeting {
  hi() {
    this.greet("Hello");
  }
}

class Goodybe extends Greeting {
  bye() {
    this.greet("Goodbye");
  }