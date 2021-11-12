// Greet 1 
// function greet(greeting = "Hello") {
//   console.log(greeting + ', world!');
// }

//Greet 2
// function greet(greeting = "Hello", recipient = "world") {
//   console.log(`${greeting}, ${recipient}!`)
// }

// Greet 3 
// function greeting() {
//   return 'Good morning';
// }

// function recipient() {
//   return 'Launch School';
// }

// function greet() {
//   console.log(`${greeting()}, ${recipient()}!`)
// }

// let calculateBMI = (heightCM, weightKG) => {
//   let heightM = heightCM / 100; 
//   return (weightKG / heightM**2).toFixed(2);
// }


// console.log(calculateBMI(180, 80)); // "24.69")

// Calculate Cat Age 
// let catAge = humanYears => {
//   switch(humanYears) {
//     case 0: 
//       return 0; 
//     case 1:
//       return 15 
//     case 2:
//       return 24 
//     default: 
//        return 24 + (4 * (humanYears - 2) );
//   }
// } 

// Remove Last Char
// let removeLastChar = str => str.slice(0, str.length - 1);
// console.log(removeLastChar('ciao!')); // 'ciao'
// console.log(removeLastChar('hello')); // 'hell'

// Arrow Functions (Part 1)
// const template = 'I VERB NOUN.';
// let sentence = (verb, noun) => template.replace('VERB', verb).replace('NOUN', noun);
// console.log(sentence('like', 'birds'));
// // logs: I like birds.

// Arrow Functions 2 
// let initGame = () => ({ 
//     level: 1,
//     score: 0
// });

// let game = initGame();

// console.log('Level: ' + game.level);
// console.log('Score: ' + game.score);