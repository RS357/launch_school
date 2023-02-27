// IIFEs
// Coding challenge structure 
// Help Riz find holes in his knowledge base

// (function sayMessage(message) {
//   console.log(message);
// })('hello');

// Functions that will only ever be invoked _once_. 
// 

(function welcomeUser() {
  prompt('welcome to calculator');
})();

prompt('welcome to calculator');


const RPSGame = (function makeRPSGame() {
  const player = makePlayer();
  const computer = makeComputer();

  const newRPSGame = {
    // methods that use player and computer 
  };

  return newRPSGame;
})();


// const makeUniqueId = (function() {
//   let count = 0;
//   return function() {
//     ++count;
//     return count;
//   };
// })();

// // let makeUniqueId = makeUniqueIdGenerator();  // Needed with old version 

// makeUniqueId(); // => 1
// makeUniqueId(); // => 2

// ------------------------------------------

// Original code:
var message = 'hello';
var message = 'goodbye';

message();

function message() {
  console.log('hello');
}

// What the creation phase sees: 
var message;
var message;

function message() {
  console.log('hello');
}

// During the creation phase, identifers are 'noticed' by the JS engine and their scopes are defined. 
// First we see, `var message` and we create the message identifier and init it to `undefined`
// We see `var message` again and ignore it because we've already got a `message` identifier in scope.
// Line 50 is skipped over in the creation phase  - It's an execution detial but ignored. 
// Then it sees the function declaration for `message` and reassigns `message` from `undefined` to the function object. 

// What the execution phase sees:
message = 'hello';
message = 'goodbye';

message();

// During the execution phase, we execute code. Declarations are ignored.  
// `message` is reassigned from the function object  to `'hello'`
// `message` is reassigned from `'hello'` to `'goodbye'`
// `message` is invoked, and throws and error because it's no longer a function.
