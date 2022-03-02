let readline = require('readline-sync');
const PLAYER = 'player';
const DEALER = 'dealer';
const BUST_SCORE = 21;

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
    if (sum > BUST_SCORE) sum -= 10;
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
    });
  });
  return deck;
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }
}

function displayResult(result, playerCards, dealerCards, totals) {
  if (result !== 'tie') {
    prompt(`${result} wins!`);
    scorePrompt(dealerCards, playerCards, totals);
  } else {
    prompt("It's a tie!");
    scorePrompt(dealerCards, playerCards, totals);
  }
}

function dealInitialCards(deck, cards) {
  dealACard(deck, cards);
  dealACard(deck, cards);
}

function dealACard(deck, cards) {
  cards.push(deck.pop());
}

function busted(total) {
  return total > BUST_SCORE;
}

function displayHand(cards, OPERATOR) {
  let displayCards = cards.map(card => {
    return `${card[0]} ${card[1]}`;
  }).join(", ");

  if (OPERATOR === PLAYER) {
    prompt(`Your cards are: ${displayCards}`);
  } else {
    prompt(`${OPERATOR} cards are ${displayCards}`);
  }
}

function getHand(cards) {
  return cards.map(card => {
    return `${card[0]} ${card[1]}`;
  }).join(", ");
}

function calculateResult(totals) {
  if (totals[PLAYER] > totals[DEALER]) return PLAYER;
  if (totals[DEALER] > totals[PLAYER]) return DEALER;
  return 'tie';
}

function scorePrompt(dealerCards, playerCards, totals) {
  console.log('================');
  prompt(`Player has ${getHand(playerCards)}, for a total of ${totals[PLAYER]}`);
  prompt(`Dealer has ${getHand(dealerCards)}, for a total of ${totals[DEALER]}`);
  console.log('================');
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

function updateTotal(OPERATOR, totals, cards) {

  let cardValue = cards[cards.length - 1][1];

  if (cardValue === "Ace") {
    totals[OPERATOR] += 11;
  } else if (['Jack', 'Queen', 'King'].includes(cardValue)) {
    totals[OPERATOR] += 10;
  } else {
    totals[OPERATOR] += Number(cardValue);
  }

  // correct for Ace
  if (cardValue === "Ace" && totals[OPERATOR] > BUST_SCORE) {
    totals[OPERATOR] -= 10;
  }
}

function playerTurn(playerCards, totals, deck) {
  while (true) {
    displayHand(playerCards, PLAYER);
    prompt('hit or stay?');
    let playerChoice = readline.question();
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice !== 'hit' && playerChoice !== 'stay') {
      prompt('Please enter "hit" or "stay"');
      continue;
    }
    if (playerChoice === 'hit') {
      prompt('you hit');
      dealACard(deck, playerCards);
      updateTotal(PLAYER, totals, playerCards);
    }
    if (busted(totals[PLAYER]) || playerChoice === 'stay') {
      break;
    }
  }
}

function dealerTurn(dealerCards, totals, deck) {
  while (totals[DEALER] <= 17) {
    dealACard(deck, dealerCards);
    updateTotal(DEALER, totals, dealerCards);
    if (busted(totals[DEALER])) break;
  }
}

while (true) {
  let wins = {
    [PLAYER]: 0,
    [DEALER]: 0
  };

  while (true) {


    while (true) {
      let totals = {
        [PLAYER]: 0,
        [DEALER]: 0
      };
      console.log(`wins at beginning: ${JSON.stringify(wins)}`);

      let deck = initialiseDeck();

      shuffle(deck);

      let playerCards = [];
      let dealerCards = [];

      // Deal initial two player cards
      dealInitialCards(deck, playerCards);

      // Deal initial two dealer cards
      dealInitialCards(deck, dealerCards);

      totals[PLAYER] = total(playerCards);
      totals[DEALER] = total(dealerCards);

      prompt(`Dealer has: ${dealerCards[0][1]} and unknown card`);

      // Player turn
      playerTurn(playerCards, totals, deck);

      if (busted(totals[PLAYER])) {
        prompt('You busted - dealer wins!');
        scorePrompt(dealerCards, playerCards, totals);
        wins[PLAYER] += 1;
        break;
      }

      // Dealer turn
      dealerTurn(dealerCards, totals, deck);

      if (busted(totals[DEALER])) {
        prompt('Dealer busted - you win!');
        scorePrompt(dealerCards, playerCards, totals);
        wins[DEALER] += 1;
        break;
      }

      let result = calculateResult(totals);
      if (result !== 'tie') {
        wins[result] += 1;
      }

      displayResult(result, playerCards, dealerCards, totals);

      break;
    }

    if (wins[PLAYER] === 5) {
      prompt(`You've won 5 games. You win the match!`);
      break;
    } else if (wins[DEALER] === 5) {
      prompt(`Dealer wins 5 games. You loose the match!`);
      break;
    }
    if (playAgainPrompt() === 'n') break;
  }
}


