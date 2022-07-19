// OO RPS with constructors and prototypes 
// let readline = require('readline-sync');

// function Player() {
//   this.move = null;
// }

// function Computer() {
//   Player.call(this);
// }

// Computer.prototype.choose = function() {
//   const choices = ['rock', 'paper', 'scissors'];
//   let randomIndex = Math.floor(Math.random() * choices.length);
//   this.move = choices[randomIndex];
// }

// function Human() {
//   Player.call(this);
// }

// Human.prototype.choose = function() {
//   let choice;

//   while (true) {
//     console.log('Please choose rock, paper, or scissors:');
//     choice = readline.question();
//     if (['rock', 'paper', 'scissors'].includes(choice)) break;
//     console.log('Sorry, invalid choice.');
//   }
//   this.move = choice;
// }

// function RPSGame() {
//   this.human = new Human();
//   this.computer = new Computer();
// }

// RPSGame.prototype.displayWelcomeMessage = function() {
//   console.log('Welcome to Rock, Paper, Scissors!');
// };

// RPSGame.prototype.displayGoodbyeMessage = function() {
//   console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
// };

// RPSGame.prototype.displayWinner = function() {
//   console.log(`You chose: ${this.human.move}`);
//   console.log(`The computer chose: ${this.computer.move}`);

//   let humanMove = this.human.move;
//   let computerMove = this.computer.move;

//   if ((humanMove === 'rock' && computerMove === 'scissors') ||
//       (humanMove === 'paper' && computerMove === 'rock') ||
//       (humanMove === 'scissors' && computerMove === 'paper')) {
//     console.log('You win!');
//   } else if ((humanMove === 'rock' && computerMove === 'paper') ||
//              (humanMove === 'paper' && computerMove === 'scissors') ||
//              (humanMove === 'scissors' && computerMove === 'rock')) {
//     console.log('Computer wins!');
//   } else {
//     console.log("It's a tie");
//   }
// },

// RPSGame.prototype.playAgain = function() {
//   console.log('Would you like to play again? (y/n)');
//   let answer = readline.question();
//   return answer.toLowerCase()[0] === 'y';
// },

// RPSGame.prototype.play = function() {
//   this.displayWelcomeMessage();
//   while (true) {
//     this.human.choose();
//     this.computer.choose();
//     this.displayWinner();
//     if (!this.playAgain()) break;
//   }

//   this.displayGoodbyeMessage();
// },

// RPSGame.prototype.constructor = RPSGame;

// game = new RPSGame

// game.play();
// console.log(game.__proto__);
// console.log(game.constructor);
// console.log(RPSGame.prototype.constructor);

// OO RPS with Classes

let readline = require('readline-sync');

class Player() {
  return {
    move: null,
  };
}

class Computer() {
  let playerObject = Player();

  let computerObject = {
    choose() {
      const choices = ['rock', 'paper', 'scissors'];
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIndex];
    },
  };

  return Object.assign(playerObject, computerObject);
}

class Human() {
  let playerObject = Player();
  let humanObject = {
    choose() {
      let choice;

      while (true) {
        console.log('Please choose rock, paper, or scissors:');
        choice = readline.question();
        if (['rock', 'paper', 'scissors'].includes(choice)) break;
        console.log('Sorry, invalid choice.');
      }

      this.move = choice;
    },
  };

  return Object.assign(playerObject, humanObject);
}

class RPSGame = {
  human: Human(),
  computer: Computer(),

  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors!');
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
  },

  displayWinner() {
    console.log(`You chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);

    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    if ((humanMove === 'rock' && computerMove === 'scissors') ||
        (humanMove === 'paper' && computerMove === 'rock') ||
        (humanMove === 'scissors' && computerMove === 'paper')) {
      console.log('You win!');
    } else if ((humanMove === 'rock' && computerMove === 'paper') ||
               (humanMove === 'paper' && computerMove === 'scissors') ||
               (humanMove === 'scissors' && computerMove === 'rock')) {
      console.log('Computer wins!');
    } else {
      console.log("It's a tie");
    }
  },

  playAgain() {
    console.log('Would you like to play again? (y/n)');
    let answer = readline.question();
    return answer.toLowerCase()[0] === 'y';
  },

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      if (!this.playAgain()) break;
    }

    this.displayGoodbyeMessage();
  },
};

RPSGame.play();