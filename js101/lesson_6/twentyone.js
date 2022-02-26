let readline = require('readline-sync');
const PLAYER = 'player';
const DEALER = 'dealer';

function prompt(message) {
  console.log(`=> ${message}`);
}

function total(cards) {
  let values = cards.map(card => card[1]);
  let sum = 0;

  values.forEach(value => {
    if (value === "Ace") {
      sum += 11;
    } else if (['Jack', 'Queen', 'King'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  // correct for Aces
  values.filter(value => value === "Ace").forEach(_ => {
    if (sum > 21) sum -= 10;
  });

  return sum;
}

function initialiseDeck() {
  const SUITS = ['Heads', 'Diamonds', 'Clubs', 'Spades'];
  const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
  let deck = [];
  SUITS.forEach(suit => {
    VALUES.forEach(value => {
      deck.push([suit, value]);
    })
  })
  return deck;
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }
}

function displayResult() {
  return null;
}

function dealInitialCards(deck) {
  let cards = [];
  dealACard(deck, cards)
  dealACard(deck, cards)
  return cards
}

function dealACard(deck, cards) {
  return cards.push(deck.pop());
}

function dealerTurn(dealerCards, deck) {
  let cardTotal = total(dealerCards);

  while (cardTotal <= 17) {
    if (busted(dealerCards)) break;
    dealACard(deck, dealerCards)
    cardTotal = total(dealerCards);
  }
}

function playerTurn(playerCards, deck) {
  while (true) {
    displayPlayerHand(playerCards);
    prompt('hit or stay?');
    let playerChoice = readline.question();
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === 'hit') {
      prompt('you hit');
      dealACard(deck, playerCards);
      if (busted(playerCards)) break;
    } else if (playerChoice === 'stay') break;
  }
}

function busted(cards) {
  return total(cards) > 21;
}

function displayPlayerHand(playerCards) {
  let displayCards = playerCards.map(card => {
    return `${card[0]} ${card[1]}`;
  }).join(", ");

  prompt(`Your cards are: ${displayCards}`);
} 

function winPrompt(WINNER) {
  prompt(`${WINNER} wins!!`);
}

function calculateResult(playerCards, dealerCards) {
  let totalPlayerScore = total(playerCards);
  let totalDealerScore = total(dealerCards);

  if (totalPlayerScore > totalDealerScore) return PLAYER;
  if (totalDealerScore > totalPlayerScore) return DEALER;
  return 'tie';
}

function tiePrompt() {
  prompt("It's a tie!");
}

function playAgainPrompt() {
  while (true) {
    prompt('Would you like to play again? (y / n)');
    let playAgain = readline.question().toLowerCase(); 
    if (playAgain === 'n' || playAgain === 'y') {
      return playAgain; 
    } else {
      prompt("Please enter 'y' or 'n'");
    }
  }

}

while (true) {

  while (true) {
    let deck = initialiseDeck();

    shuffle(deck);
  
    let playerCards = dealInitialCards(deck);
  
    let dealerCards = dealInitialCards(deck);

    prompt(`Dealer has: ${dealerCards[0][1]} and unknown card`);

    playerTurn(playerCards, deck);
  
    if (busted(playerCards)) {
      winPrompt(DEALER);
      break;
    }

    dealerTurn(dealerCards, deck);

    if (busted(dealerCards)) {
      winPrompt(PLAYER);
      break;
    }
  
    let result = calculateResult(playerCards, dealerCards);
  
    if (result === PLAYER) {
      winPrompt(PLAYER);
    } else if (result === DEALER) {
      winPrompt(DEALER);
    } else {
      tiePrompt();
    }
    break;
  }

  if (playAgainPrompt() === 'n') break;

}
