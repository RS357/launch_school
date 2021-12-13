const readline = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  switch (true) {
    // Winning cases
    case (choice === "rock" && computerChoice === "lizard"):
      prompt("You win!");
      break;
    case (choice === "rock" && computerChoice === "scissors"):
      prompt("You win!");
      break;
    case (choice === "lizard" && computerChoice === "spock"):
      prompt("You win!");
      break;
    case (choice === "lizard" && computerChoice === "paper"):
      prompt("You win!");
      break;
    case (choice === "spock" && computerChoice === "scissors"):
      prompt("You win!");
      break;
    case (choice === "spock" && computerChoice === "rock"):
      prompt("You win!");
      break;
    case (choice === "scissors" && computerChoice === "paper"):
      prompt("You win!");
      break;
    case (choice === "scissors" && computerChoice === "lizard"):
      prompt("You win!");
      break;
    case (choice === "paper" && computerChoice === "rock"):
      prompt("You win!");
      break;
    case (choice === "paper" && computerChoice === "spock"):
      prompt("You win!");
      break;
    case (choice === "rock" && computerChoice === "lizard"):
      prompt("You win!");
      break;
    case (choice === "rock" && computerChoice === "scissors"):
      prompt("You win!");
      break;
    case (choice === "lizard" && computerChoice === "spock"):
      prompt("You win!");
      break;
    case (choice === "lizard" && computerChoice === "paper"):
      prompt("You win!");
      break;
    case (choice === "spock" && computerChoice === "scissors"):
      prompt("You win!");
      break;
    case (choice === "spock" && computerChoice === "rock"):
      prompt("You win!");
      break;
    case (choice === "scissors" && computerChoice === "paper"):
      prompt("You win!");
      break;
    case (choice === "scissors" && computerChoice === "lizard"):
      prompt("You win!");
      break;
    case (choice === "paper" && computerChoice === "rock"):
      prompt("You win!");
      break;
    case (choice === "paper" && computerChoice === "spock"):
      prompt("You win!");
      break;
    //Losing Cases
    case (choice === "lizard" && computerChoice === "rock"):
      prompt("Computer wins!");
      break;
    case (choice === "scissors" && computerChoice === "rock"):
      prompt("Computer wins!");
      break;
    case (choice === "spock" && computerChoice === "lizard"):
      prompt("Computer wins!");
      break;
    case (choice === "paper" && computerChoice === "lizard"):
      prompt("Computer wins!");
      break;
    case (choice === "scissors" && computerChoice === "spock"):
      prompt("Computer wins!");
      break;
    case (choice === "rock" && computerChoice === "spock"):
      prompt("Computer wins!");
      break;
    case (choice === "paper" && computerChoice === "scissors"):
      prompt("Computer wins!");
      break;
    case (choice === "lizard" && computerChoice === "scissors"):
      prompt("Computer wins!");
      break;
    case (choice === "rock" && computerChoice === "paper"):
      prompt("Computer wins!");
      break;
    case (choice === "spock" && computerChoice === "paper"):
      prompt("Computer wins!");
      break;
    default:
      prompt("It's a tie");
  }
};

function prompt(message) {
  console.log(`=> ${message}`);
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(", ")}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.round(Math.random() * VALID_CHOICES.length);
  console.log(`random index: ${randomIndex}`);
  if (randomIndex === 3) randomIndex = 2;
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  prompt("Do you want to play again (y/n)?");
  let answer = readline.question().toLowerCase();
  while (answer[0] !== "n" && answer[0] !== "y") {
    prompt("Please enter 'y' or 'n'.");
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== "y") break;
}