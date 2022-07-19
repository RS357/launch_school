/*
1)
If we added a play method to the Bingo class, it will be called 
if play() is called with an instance of the Bingo class 
as the execution context. In this case JavaScript will not 
look up the prototype chain and so call the play method of the 
Game class. 

This is called 'method overriding'.

2)
*/
class Greeting {
    greet(str) {
        console.log(str);
    }
}

class Hello extends Greeting {

    hi() {
        this.greet("Hello")
    }
}

class Goodbye extends Greeting {
    bye() {
        this.greet("Goodbye");
    }
}
let hello = new Hello();
let goodbye = new Goodbye();
hello.hi();
goodbye.bye();

