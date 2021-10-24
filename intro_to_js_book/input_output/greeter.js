let readlinesync = require("readline-sync"); 

let getName = (prompt) => {
  let name = readlinesync.question(prompt); 
  return name
}

firstName = getName("What is your first name?");
lastName = getName("What is your last name"); 

console.log(`Hello ${firstName} ${lastName}!`)