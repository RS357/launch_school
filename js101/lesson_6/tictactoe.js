let readline = require('readline-sync');

function prompt(string) {
  console.log(`==> ${string}`);
}

function displayBoard(board) {
  console.clear();
  
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}  `);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}  `);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}  `);
  console.log('     |     |');
  console.log('');
}

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }
  
  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER)
}

function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
}

function playerChoosesSquare(board) {
  let square;
  while (true) {
    prompt(`Choose a square (${emptySquares(board).join(', ')}):`);
    square = readline.question().trim(); // input trimmed to allow spaces in input
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, thatr's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) { // board is unused for now; we'll use it later
  return false;
}

let board = initializeBoard();

displayBoard(board);

while (true) {
  playerChoosesSquare(board);
  computerChoosesSquare(board);
  displayBoard(board);

  if (someoneWon(board) || boardFull(board)) break;
}

//currently on step 2