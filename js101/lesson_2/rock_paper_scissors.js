const readline = require("readline-sync");
const VALID_CHOICES = {
  rock: "r",
  paper: "p",
  scissors: "sc",
  lizard: "l",
  spock: "sp"
};

let computerWinCount = 0;
let humanWinCount = 0;

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  switch (true) {
    // Winning cases
    case (choice === "rock" && computerChoice === "lizard"):
      prompt("You win!");
      return "human";
    case (choice === "rock" && computerChoice === "scissors"):
      prompt("You win!");
      return "human";
    case (choice === "lizard" && computerChoice === "spock"):
      prompt("You win!");
      return "human";
    case (choice === "lizard" && computerChoice === "paper"):
      prompt("You win!");
      return "human";
    case (choice === "spock" && computerChoice === "scissors"):
      prompt("You win!");
      return "human";
    case (choice === "spock" && computerChoice === "rock"):
      prompt("You win!");
      return "human";
    case (choice === "scissors" && computerChoice === "paper"):
      prompt("You win!");
      return "human";
    case (choice === "scissors" && computerChoice === "lizard"):
      prompt("You win!");
      return "human";
    case (choice === "paper" && computerChoice === "rock"):
      prompt("You win!");
      return "human";
    case (choice === "paper" && computerChoice === "spock"):
      prompt("You win!");
      return "human";
    case (choice === "rock" && computerChoice === "lizard"):
      prompt("You win!");
      return "human";
    case (choice === "rock" && computerChoice === "scissors"):
      prompt("You win!");
      return "human";
    case (choice === "lizard" && computerChoice === "spock"):
      prompt("You win!");
      return "human";
    case (choice === "lizard" && computerChoice === "paper"):
      prompt("You win!");
      return "human";
    case (choice === "spock" && computerChoice === "scissors"):
      prompt("You win!");
      return "human";
    case (choice === "spock" && computerChoice === "rock"):
      prompt("You win!");
      return "human";
    case (choice === "scissors" && computerChoice === "paper"):
      prompt("You win!");
      return "human";
    case (choice === "scissors" && computerChoice === "lizard"):
      prompt("You win!");
      return "human";
    case (choice === "paper" && computerChoice === "rock"):
      prompt("You win!");
      return "human";
    case (choice === "paper" && computerChoice === "spock"):
      prompt("You win!");
      return "human";
    //Losing Cases
    case (choice === "lizard" && computerChoice === "rock"):
      prompt("Computer wins!");
      return "computer";
    case (choice === "scissors" && computerChoice === "rock"):
      prompt("Computer wins!");
      return "computer";
    case (choice === "spock" && computerChoice === "lizard"):
      prompt("Computer wins!");
      return "computer";
    case (choice === "paper" && computerChoice === "lizard"):
      prompt("Computer wins!");
      return "computer";
    case (choice === "scissors" && computerChoice === "spock"):
      prompt("Computer wins!");
      return "computer";
    case (choice === "rock" && computerChoice === "spock"):
      prompt("Computer wins!");
      return "computer";
    case (choice === "paper" && computerChoice === "scissors"):
      prompt("Computer wins!");
      return "computer";
    case (choice === "lizard" && computerChoice === "scissors"):
      prompt("Computer wins!");
      return "computer";
    case (choice === "rock" && computerChoice === "paper"):
      prompt("Computer wins!");
      return "computer";
    case (choice === "spock" && computerChoice === "paper"):
      prompt("Computer wins!");
      return "computer";
    default:
      prompt("It's a tie");
  }
};

function prompt(message) {
  console.log(`=> ${message}`);
}

while (true) {
  let validChoicesKeys = Object.keys(VALID_CHOICES);
  let validChoicesVals = Object.values(VALID_CHOICES);

  prompt(`Choose one: ${validChoicesKeys.join(", ")}`);
  let choice = readline.question();

  while (!validChoicesKeys.includes(choice) &&
   !validChoicesVals.includes(choice)) {
    if (choice === "s") {
      prompt("two options begin with s - please enter the first and second letter");
    } else {
      prompt("That's not a valid choice");
    }
    choice = readline.question();
  }

  let randomIndex = Math.round(Math.random() * validChoicesKeys.length);
  if (randomIndex === 5) randomIndex = 4;
  console.log(`randomIndex is ${randomIndex}`);
  console.log(`validChoicesVals[randomIndex] is: ${validChoicesKeys[randomIndex]}`);
  let computerChoice = validChoicesKeys[randomIndex];

  let winner = displayWinner(choice, computerChoice);
  if (winner === "human") humanWinCount += 1;
  if (winner === "computer") computerWinCount += 1;

  if (humanWinCount === 3 || computerWinCount === 3) {
    prompt(`best of three reached - ${winner} wins!`);
    prompt("Game over!");
    break;
  }

  prompt("Do you want to play again (y/n)?");
  let answer = readline.question().toLowerCase();
  while (answer[0] !== "n" && answer[0] !== "y") {
    prompt("Please enter 'y' or 'n'.");
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== "y") break;
}