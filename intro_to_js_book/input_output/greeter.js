let readlinesync = require("readline-sync"); 
let firstname = readlinesync.question("What is your first name?");
let lastname = readlinesync.question("What is your last name?");
console.log(`Hello, ${firstname} ${lastname}!`);
