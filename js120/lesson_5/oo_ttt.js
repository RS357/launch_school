let readline = require("readline-sync");

class Square {
  static UNUSED_SQUARE = " ";
  static HUMAN_MARKER = "X";
  static COMPUTER_MARKER = "O";

  constructor(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
  }

  toString() {
    return this.marker;
  }

  setMarker(marker) {
    this.marker = marker;
  }

  isUnused() {
    return this.marker === Square.UNUSED_SQUARE;
  }

  getMarker() {
    return this.marker;
  }
}

class Board {
  constructor() {
    this.squares = {};
    this.resetBoard();
  }

  display() {
    console.log("     |     |");
    console.log(`  ${this.squares["1"]}  |  ${this.squares["2"]}  |  ${this.squares["3"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["4"]}  |  ${this.squares["5"]}  |  ${this.squares["6"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["7"]}  |  ${this.squares["8"]}  |  ${this.squares["9"]}`);
    console.log("     |     |");
    console.log("");
  }

  getMiddleKey() {
    let boardKeys = Object.keys(this.squares);
    let middleKey = boardKeys[Math.floor(boardKeys.length / 2)];
    return middleKey;
  }

  isMiddleSquareEmpty() {
    let middleKey = this.getMiddleKey();
    return this.squares[middleKey].isUnused();
  }

  markSquareAt(key, marker) {
    this.squares[key].setMarker(marker);
  }

  isFull() {
    return this.unusedSquares().length === 0;
  }

  unusedSquares() {
    let keys = Object.keys(this.squares);
    return keys.filter(key => this.squares[key].isUnused());
  }

  countMarkersFor(player, keys) {
    let markers = keys.filter(key => {
      return this.squares[key].getMarker() === player.getMarker();
    });

    return markers.length;
  }

  displayWithClear() {
    console.clear();
    console.log("");
    console.log("");
    this.display();
  }

  resetBoard() {
    for (let counter = 1; counter <= 9; ++counter) {
      this.squares[String(counter)] = new Square();
    }
  }
}

class Player {
  constructor(marker) {
    this.marker = marker;
    this.score = 0;
  }

  getMarker() {
    return this.marker;
  }

  getScore() {
    return this.score;
  }

  incrementScore() {
    this.score += 1;
  }
}

class Human extends Player {
  constructor() {
    super(Square.HUMAN_MARKER);
  }
}

class Computer extends Player {
  constructor() {
    super(Square.COMPUTER_MARKER);
  }
}

class TTTGame {
  static POSSIBLE_WINNING_ROWS = [
    [ "1", "2", "3" ],            // top row of board
    [ "4", "5", "6" ],            // center row of board
    [ "7", "8", "9" ],            // bottom row of board
    [ "1", "4", "7" ],            // left column of board
    [ "2", "5", "8" ],            // middle column of board
    [ "3", "6", "9" ],            // right column of board
    [ "1", "5", "9" ],            // diagonal: top-left to bottom-right
    [ "3", "5", "7" ],            // diagonal: bottom-left to top-right
  ];

  static MAX_WINS = 3;
  static WINNING_ROW_LENGTH = 3;

  constructor() {
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
    this.currentPlayer = this.human;
  }

  static joinOr(arr, separator = ", ", word = "or") {
    if (arr.length === 1) return arr[0];
    if (arr.length === 2) return `${arr[0]} ${word} ${arr[1]}`;
    let strArr = arr.slice(0, arr.length - 1).join(separator);
    return `${strArr}${separator}${word} ${arr[arr.length - 1]}`;
  }

  playEngine() {
    this.gameLaunch();
    while (true) {
      this.runMatch();

      if (this.matchOver()) {
        this.displayEndOfMatchMessage();
        break;
      }

      if (this.playAgainPrompt() === 'y') {
        this.board.resetBoard();
        this.board.displayWithClear();
      } else {
        this.displayGoodbyeMessage();
        break;
      }
    }
  }

  runMatch() {
    this.play();
    this.togglePlayer();
    this.updateScores();
    this.displayMatchScore();
  }

  gameLaunch() {
    this.displayWelcomeMessage();
    this.board.display();
  }

  togglePlayer() {
    if (this.currentPlayer === this.human) {
      this.currentPlayer = this.computer;
    } else if (this.currentPlayer === this.computer) {
      this.currentPlayer = this.human;
    }
  }

  matchOver() {
    return this.human.getScore() >= TTTGame.MAX_WINS ||
    this.computer.getScore() >= TTTGame.MAX_WINS;
  }

  updateScores() {
    if (this.isWinner(this.human)) {
      this.human.incrementScore();
    } else if (this.isWinner(this.computer)) {
      this.computer.incrementScore();
    }
  }

  displayEndOfMatchMessage() {
    if (this.human.getScore() === TTTGame.MAX_WINS) {
      console.log(`Congratulations! You have won ${TTTGame.MAX_WINS} games!`);
      console.log('You win the round!');
    } else if (this.computer.getScore() === TTTGame.MAX_WINS) {
      console.log(`Computer wins ${TTTGame.MAX_WINS} games!`);
      console.log('Computer wins the round!');
    }
    console.log("Thanks for playing Tic Tac Toe! Goodbye!");
  }

  playAgainPrompt() {
    let prompt = 'play again? (y/n) ';
    while (true) {
      let answer = readline.question(prompt).toLowerCase();
      if (answer === 'y' || answer === 'n') {
        return answer;
      } else {
        console.log('That is an invalid answer. Input y/n');
      }
    }
  }

  play() {
    while (true) {
      if (this.currentPlayer === this.human) {
        this.humanMoves();
        if (this.gameOver()) break;
        this.computerMoves();
        if (this.gameOver()) break;
      } else if (this.currentPlayer === this.computer) {
        this.computerMoves();
        this.board.displayWithClear();
        if (this.gameOver()) break;
        this.humanMoves();
        if (this.gameOver()) break;
      }
      this.board.displayWithClear();
    }
    this.board.displayWithClear();
  }

  displayWelcomeMessage() {
    console.clear();
    console.log("Welcome to Tic Tac Toe!");
    console.log("");
  }

  displayGoodbyeMessage() {
    console.log(`You won ${this.human.getScore()} games.`);
    console.log(`Computer won ${this.human.getScore()} games.`);
    console.log("Thanks for playing Tic Tac Toe! Goodbye!");

  }

  displayMatchScore() {
    if (this.isWinner(this.human)) {
      console.log("You won this round! Congratulations!");
    } else if (this.isWinner(this.computer)) {
      console.log("I won this round ! I won! Take that, human!");
    } else {
      console.log("A tie game. How boring.");
    }
    console.log(`Current match score: you: ${this.human.getScore()},`
                + ` computer: ${this.computer.getScore()} `);
  }

  humanMoves() {
    let choice;

    while (true) {
      let validChoices = this.board.unusedSquares();
      const prompt = `Choose a square (${TTTGame.joinOr(validChoices)}): `;
      choice = readline.question(prompt);

      if (validChoices.includes(choice)) break;

      console.log("Sorry, that's not a valid choice.");
      console.log("");
    }

    this.board.markSquareAt(choice, this.human.getMarker());
  }

  computerMoves() {
    if (this.winningSquare()) {
      this.computerMove(this.computer);
    } else if (this.losingSquare()) {
      this.computerMove(this.human);
    } else if (this.board.isMiddleSquareEmpty()) {
      this.takeMiddleSquare();
    } else {
      this.randomMove();
    }
  }

  takeMiddleSquare() {
    let middleKey = this.board.getMiddleKey();
    this.board.markSquareAt(middleKey, this.computer.getMarker());
  }

  winningSquare() {
    let winRow = this.findRow(this.computer);
    if (winRow) {
      return true;
    } else return false;
  }

  losingSquare() {
    let dangerRow = this.findRow(this.human);
    if (dangerRow) {
      return true;
    } else return false;
  }

  randomMove() {
    let validChoices = this.board.unusedSquares();
    let choice;

    do {
      choice = Math.floor((9 * Math.random()) + 1).toString();
    } while (!validChoices.includes(choice));

    this.board.markSquareAt(choice, this.computer.getMarker());
  }

  computerMove(player) {
    let row = this.findRow(player);
    let choice = this.getEmptySquare(row);
    this.board.markSquareAt(choice, this.computer.getMarker());
  }

  findRow(player) {
    for (let idx = 0; idx < TTTGame.POSSIBLE_WINNING_ROWS.length; idx += 1) {
      let row = TTTGame.POSSIBLE_WINNING_ROWS[idx];
      if (this.twoInRow(player, row)) {
        return row;
      }
    }
    return false;
  }

  twoInRow(player, row) {
    return this.containsTwoPlayerMarkers(player, row) &&
    this.containsEmptySquare(row);
  }

  containsTwoPlayerMarkers(player, row) {
    return this.board.countMarkersFor(player, row) ===
    TTTGame.WINNING_ROW_LENGTH - 1;
  }

  containsEmptySquare(row) {
    return row.filter(key => this.board.squares[key].getMarker() ===
    Square.UNUSED_SQUARE).length === 1;
  }

  getEmptySquare(row) {
    return row.filter(key => this.board.squares[key].isUnused())[0];
  }

  gameOver() {
    return this.board.isFull() || this.someoneWon();
  }

  someoneWon() {
    return this.isWinner(this.human) || this.isWinner(this.computer);
  }

  isWinner(player) {
    return TTTGame.POSSIBLE_WINNING_ROWS.some(row => {
      return this.board.countMarkersFor(player, row) ===
      TTTGame.WINNING_ROW_LENGTH;
    });
  }
}

let game = new TTTGame();
game.playEngine();