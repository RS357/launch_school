const readline = require('readline-sync');

function createScore() {
  return {
    score: 0,

    incrementScore() {
      this.score += 1;
    },

    resetScore() {
      this.score = 0;
    }
  };
}

function createPlayer() {
  let scoreObject = createScore();

  let playerObject = {
    move: null,
  };
  return Object.assign(scoreObject, playerObject);
}

function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {
    choose(moves, previousMoves) {
      let choices = [];
      if (previousMoves.computerLoseMoves.length > 0) {
        previousMoves.computerLoseMoves.forEach(previousMove => {
          let filteredMoves = moves.filter(move => move !== previousMove);
          choices = choices.concat(filteredMoves, moves);
        });
      } else {
        choices = choices.concat(moves);
      }
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIndex];
    },
  };
  return Object.assign(playerObject, computerObject);
}

function createHuman() {
  let playerObject = createPlayer();
  let humanObject = {
    choose(moves, movesAbbreviations) {
      let choice;
      while (true) {
        console.log('Please choose rock, paper, scissors, lizard or spock.');
        choice = readline.question().toLowerCase();
        if (moves.includes(choice) ||
        Object.keys(movesAbbreviations).includes(choice)) {
          break;
        }
        console.log('Sorry, invalid choice');
      }
      if (Object.keys(movesAbbreviations).includes(choice)) {
        this.move = movesAbbreviations[choice];
      } else {
        this.move = choice;
      }
    }
  };
  return Object.assign(playerObject, humanObject);
}

function createPreviousMovesStore() {
  return {
    moves: {},
    computerLoseMoves: [],

    generateNewStore() {
      this.moves = {};
    },

    store(humanMove, computerMove, matchCount, mostRecentWinner) {
      this.moves[`Round ${matchCount}`] = {
        human: humanMove,
        computer: computerMove,
        winner: mostRecentWinner
      };

      if (mostRecentWinner === 'human') {
        this.computerLoseMoves.push(computerMove);
      }
    },
  };
}

const RPSGame = {
  moves: ['rock', 'paper', 'scissors', 'lizard', 'spock'],

  movesAbbreviations: {
    r: 'rock',
    p: 'paper',
    sc: 'scissors',
    l: 'lizard',
    sp: 'spock'
  },

  maxScore: 5,

  human: createHuman(),
  computer: createComputer(),

  winningCombos: {
    rock: ['scissors', 'lizard'],
    paper: ['spock', 'rock'],
    scissors: ['paper', 'lizard'],
    lizard: ['paper', 'spock'],
    spock: ['rock', 'scissors']
  },

  previousMoves: createPreviousMovesStore(),

  matchCount: 1,
  mostRecentWinner: null,

  resetMatchCount() {
    this.matchCount = 1;
  },

  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors, Lizard, Spock!');
    console.log(`First to win ${this.maxScore} games wins the match!`);
  },

  displayGoodByeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors, Lizard, Spock. Goodbye!');
  },

  updateWinner(winner) {
    this.mostRecentWinner = winner;
  },

  displayRoundWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    console.log(`You chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);

    if (this.winningCombos[humanMove].includes(computerMove)) {
      this.human.incrementScore();
      this.updateWinner('human');
      console.log("You win this round!");
    } else if (this.winningCombos[computerMove].includes(humanMove)) {
      this.computer.incrementScore();
      this.updateWinner('computer');
      console.log("Computer wins this round!");
    } else {
      console.log("It's a tie!");
      this.updateWinner('tie');
    }
    console.log(`Score: Human ${this.human.score}, Computer: ${this.computer.score}`);
  },

  displayWinner() {
    if (this.human.score === this.maxScore) {
      console.log(`You win best of ${this.maxScore}!`);
    } else if (this.computer.score === this.maxScore) {
      console.log(`Computer wins best of ${this.maxScore}!`);
    }
  },

  playAgain() {
    while (true) {
      console.log('Would you like to play again? (y/n)');
      let answer = readline.question();
      if (answer.toLowerCase() === 'n' ||
          answer.toLowerCase() === 'y' ||
          answer.toLowerCase() === 'yes' ||
          answer.toLowerCase() === 'no' ) {
        return answer.toLowerCase()[0].toLowerCase() === 'yes' ||
        answer.toLowerCase()[0].toLowerCase() === 'y';
      } else {
        console.log("Invalid answer. Please enter y/n");
      }
    }
  },

  incrementMatchCount() {
    this.matchCount += 1;
  },

  showMoveHistory() {
    Object.keys(this.previousMoves.moves).forEach(key => {
      let subObj = this.previousMoves.moves[key];
      console.log(
        `${key}: human: ${subObj.human}, ` +
        `computer: ${subObj.computer}, ` +
        `winner: ${subObj.winner}`
      );
    });
  },

  promptViewMoveHistory() {
    while (true) {
      console.log("Do you want to see this game's move history? (y/n)");
      let answer = readline.question().toLowerCase();
      if (answer === 'y' || answer === 'yes') {
        this.showMoveHistory();
        break;
      } else if (answer === 'n' || answer === 'no') {
        break;
      } else {
        console.log('Please enter y/n');
      }
    }
  },

  playRound() {
    this.human.choose(this.moves, this.movesAbbreviations);
    this.computer.choose(this.moves, this.previousMoves);
    this.displayRoundWinner();
    this.previousMoves.store(this.human.move, this.computer.move,
      this.matchCount, this.mostRecentWinner);
    this.promptViewMoveHistory();
    this.incrementMatchCount();
  },

  play() {
    while (true) {
      console.clear();
      this.displayWelcomeMessage();
      while (this.computer.score < this.maxScore &&
        this.human.score < this.maxScore) {
        this.playRound();
      }
      this.displayWinner();
      if (!this.playAgain()) {
        this.displayGoodByeMessage();
        break;
      }
      this.human.resetScore();
      this.computer.resetScore();
      this.resetMatchCount();
      this.previousMoves.generateNewStore();
    }
  }
};

RPSGame.play();