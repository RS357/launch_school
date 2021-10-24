let readlinesync = require("readline-sync");

let age = parseInt(readlinesync.question("How old are you? "))
console.log(`You are ${age} years old.`)

for (let i = 10; i <= 40; i += 10) {
  console.log(`In ${i} years, you will be ${age + i} years old.`)
}