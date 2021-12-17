const readline = require("readline-sync");
const VALID_CHOICES = {
  r: "rock",
  p: "paper",
  sc: "scissors",
  l: "lizard",
  sp: "spock"
};

const WINNING_COMBOS = {
  rock:     ["scissors",    "lizard"],
  paper:    ["rock",        "spock"],
  scissors: ["paper",       "lizard"],
  lizard:   ["spock",       "paper"],
  spock:    ["scissors",    "rock"]
};

const GOAL_WINS = 3;

let scores = {
  player: 0,
  computer: 0
};

function playerWins(choice, computerChoice) {
  return WINNING_COMBOS[choice].includes(computerChoice);
}

function displayChoices(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
}

function result(choice, computerChoice) {
  if (playerWins(choice, computerChoice)) {
    return "player";
  } else if (choice === computerChoice) {
    return "tie";
  } else {
    return "computer";
  }
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function incrementScore(scores, winner) {
  scores[winner] += 1;
}

function setScore(scores, winner) {
  incrementScore(scores, winner);
}

function printScore (winner) {
  if (winner === "player") {
    prompt("You win!");
  } else if (winner === "computer") {
    prompt("You lose");
  } else {
    prompt("It's a tie!");
  }
  prompt(`You've won ${scores.player} games so far.`);
  prompt(`computer has won ${scores.computer} games so far`);
}

function randomChoice() {
  let validChoicesVals = Object.values(VALID_CHOICES);
  let randomIndex = Math.round(Math.random() * validChoicesVals.length);
  if (randomIndex === validChoicesVals.length) {
    randomIndex = validChoicesVals.length - 1;
  }
  return validChoicesVals[randomIndex];
}

function retrieveChoice() {
  let validChoicesKeys = Object.keys(VALID_CHOICES);
  let validChoicesVals = Object.values(VALID_CHOICES);
  prompt(`Choose one: ${validChoicesVals.join(", ")}`);
  let choice = readline.question();

  while (!validChoicesKeys.includes(choice) &&
   !validChoicesVals.includes(choice)) {
    if (choice === "s") {
      prompt("two options begin with s - please enter the first and second letter");
    } else {
      prompt("That's not a valid choice");
    }
    choice = readline.question();
    if (choice.length <= 2) choice = VALID_CHOICES[choice];
  }
  if (choice.length <= 2) choice = VALID_CHOICES[choice];
  return choice;
}

function someoneGrandWinner() {
  return (scores.player === GOAL_WINS) || (scores.computer === GOAL_WINS);
}

function displayGrandWinner() {
  let winner;
  if (scores.player === GOAL_WINS) {
    winner = "player";
  } else {
    winner = "computer";
  }
  prompt(`best of three reached - ${winner} wins!`);
  prompt("Game over!");
}

function retrievePlayAgainChoice() {
  prompt("Do you want to play again (y/n)?");
  let answer = readline.question().toLowerCase();
  while (answer[0] !== "n" && answer[0] !== "y") {
    prompt("Please enter 'y' or 'n'.");
    answer = readline.question().toLowerCase();
  }
  return answer[0];
}

while (true) {
  let choice = retrieveChoice();

  let computerChoice = randomChoice();

  displayChoices(choice, computerChoice);

  let winner = result(choice, computerChoice);

  setScore(scores, winner);

  printScore(winner);

  if (someoneGrandWinner()) {
    displayGrandWinner();
  }

  let playAgainChoice = retrievePlayAgainChoice();

  if (playAgainChoice !== "y") break;
}