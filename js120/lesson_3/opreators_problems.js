/*
1) the first letter of a constructor function's name is capitalised 
2) An error is thrown because the Lizard constructor function
was not called with 'new' so it returns undefined which is what the lizzy variable is 
then assigned to. As a result, the scamper() call on line 8 results in an error. You 
can't call a method on undefined. 
3)
*/

function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

let lizzy = new Lizard();
lizzy.scamper(); 