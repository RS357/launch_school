const readline = require("readline-sync");

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const FIRST_MOVE = 'choose';

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayBoardHeader(scores) {
  console.log(`your score: ${scores.player}, computer's score: ${scores.computer}`);
  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);
}

function displayBoard(board, scores) {
  console.clear();
  displayBoardHeader(scores);
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === ' ');
}

function joinOr(arr, seperator = ',', word = 'or') {
  if (arr.length === 0) return "";
  if (arr.length === 1) return `${arr[0]}`;
  arr[arr.length - 2] = word;
  return arr.slice(0, arr.length - 2).join() + `${seperator} ${word} ${arr[arr.length - 1]}`;
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square: ${joinOr(emptySquares(board))}`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board, WINNING_LINES) {
  let square;

  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    // defence first
    square = findEmptyThirdSquare(line, board, COMPUTER_MARKER);
    if (square) break;
    // offence
    square = findEmptyThirdSquare(line, board, HUMAN_MARKER);
    if (square) break;
  }
  //square 5
  if (board[5] === INITIAL_MARKER) square = 5;
  //random
  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }
  board[square] = COMPUTER_MARKER;
}

function chooseSquare(board, currentPlayer, WINNING_LINES) {
  if (currentPlayer === 'player') {
    playerChoosesSquare(board);
  } else {
    computerChoosesSquare(board, WINNING_LINES);
  }
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board, WINNING_LINES) {
  return !!detectWinner(board, WINNING_LINES);
}

function detectWinner(board, WINNING_LINES) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }
  return null;
}

function initializeScores() {
  return {
    player: 0,
    computer: 0
  };
}

function scoreReport(scores) {
  prompt(`You have won ${scores.player} games.`);
  prompt(`Computer has won ${scores.computer} games.`);
  prompt('First to win five games wins this match!');
}

function detectMatchWin(scores, GAMES_TO_WIN_MATCH) {
  return scores.player === GAMES_TO_WIN_MATCH
  || scores.computer === GAMES_TO_WIN_MATCH;
}

function matchWinPrompt(scores) {
  if (scores.player === 5) {
    prompt(`You won the match!`);
  } else {
    prompt(`Computer won the match...`);
  }
}

function nextGamePrompt() {
  prompt('Press enter to play the next game...');
  readline.question();
}

function findEmptyThirdSquare(line, board, MARKER) {
  let markersInLine = line.map(square => board[square]);
  if (markersInLine.filter(val => val === MARKER).length === 2) {
    let unusedSquare = line.find(square => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }
  return null;
}

function nextMatchPrompt() {
  prompt('Play another match? (y or n)');
  let answer = readline.question();
  return answer;
}

function firstMovePrompt() {
  prompt('Who should go first, you or the computer?');
  let firstMove;
  while (true) {
    prompt('Enter "p" for player or "c" for computer...');
    firstMove = readline.question();
    if (firstMove === 'p') {
      return 'player';
    } else if (firstMove === 'c') {
      return 'computer';
    }
  }
}

const GAMES_TO_WIN_MATCH = 5;

const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];

function alternatePlayer(currentPlayer) {
  if (currentPlayer === 'player')   return 'computer';
  if (currentPlayer === 'computer') return 'player';
}

while (true) {
  let scores = initializeScores();

  while (true) {
    let board = initializeBoard();
    let currentPlayer = FIRST_MOVE;

    if (currentPlayer === 'choose') {
      currentPlayer = firstMovePrompt();
    }


    while (true) {
      displayBoard(board, scores);
      chooseSquare(board, currentPlayer, WINNING_LINES); 
      currentPlayer = alternatePlayer(currentPlayer);
      if (someoneWon(board, WINNING_LINES) || boardFull(board)) break;
    }

    displayBoard(board, scores);

    if (detectWinner(board, WINNING_LINES) === 'Player') scores.player += 1;
    if (detectWinner(board, WINNING_LINES) === 'Computer') scores.computer += 1;

    if (someoneWon(board, WINNING_LINES)) {
      prompt(`${detectWinner(board, WINNING_LINES)} won!`);
      scoreReport(scores);
    } else {
      prompt("It's a tie!");
      scoreReport(scores);
    }

    if (detectMatchWin(scores, GAMES_TO_WIN_MATCH)) {
      matchWinPrompt(scores);
      break;
    }

    nextGamePrompt();
  }
  let noNextMatch = false;

  while (true) {
    let nextGame = nextMatchPrompt();
    if (nextGame.toLowerCase() === 'y') {
      break;
    } else if (nextGame.toLowerCase() === 'n') {
      noNextMatch = true;
      break;
    } else {
      prompt('Please enter y or n');
    }
  }
  if (noNextMatch) break;
}

prompt('Thanks for playing Tic Tac Toe!');
