let shuffle = require('shuffle-array');
let readline = require('readline-sync');
function prompt(str) {
  console.log(`==> ${str}`);
}
/*
Game (n)
  start (v)

Deck (n)
  deal (v) (should this be here, or in Dealer?)

  Card (n)

  Participant (n)

  Player (n)
  hit (v)
  stay (v)
  bust (state)
  Score (n, state)

Dealer (n)
  hit (v)
  stay (v)
  deal (v) (should this be here, or in Deck?)
  bust (state)
  Score (n, state)
*/

class Card {
  constructor(suit, rank) {
    this.rank = rank;
    this.suit = suit;
    this.points = Card.setPoints(rank);
  }

  static setPoints(rank) {
    let points;
    switch (true) {
      case rank === 'Ace':
        points = 11;
        break;
      case Number(rank) <= 10:
        points = Number(rank);
        break;
      case rank === 'Jack' ||
        rank === 'Queen' ||
        rank === 'King':
        points = 10;
    }
    return points;
  }

  getPoints() {
    return this.points;
  }

  getSuit() {
    return this.suit;
  }

  getRank() {
    return this.rank;
  }
}

class Deck {
  constructor() {
    this.deck = Deck.buildDeck();
  }

  static SUITS = ['Heads', 'Diamonds', 'Clubs', 'Spades'];
  static  RANKS = ['2', '3', '4', '5', '6', '7', '8', '9',
    '10', 'Jack', 'Queen', 'King', 'Ace'];

  static buildDeck() {
    let deck = [];
    Deck.SUITS.forEach(suit => {
      Deck.RANKS.forEach(rank => {
        deck.push(new Card(suit, rank));
      });
    });
    return deck;
  }

  getDeck() {
    return this.deck;
  }

  popCard() {
    return this.deck.pop();
  }
}

class Participant {
  constructor() {
    this.cards = [];
    this.handTotal = 0;
    //STUB
    // What sort of state does a participant need?
    // Score? Hand? Amount of money available?
    // What else goes here? all the redundant behaviours from Player and Dealer?
  }

  hit() {
    //STUB
  }

  stay() {
    //STUB
  }

  isBusted() {
    return this.handTotal > TwentyOneGame.BUST_SCORE;
  }

  score() {
    //STUB
  }

  receiveCard(card) {
    this.cards.push(card);
  }

  getCards() {
    return this.cards;
  }

  updateHandTotal() {
    let lastCardIdx = this.cards.length - 1;
    let lastCard = this.cards[lastCardIdx];
    this.handTotal += lastCard.getPoints();
    if (lastCard === 'Ace' && this.getHandTotal() > TwentyOneGame.BUST_SCORE) {
      this.handTotal -= 10;
    }
  }

  setHandTotal(val) {
    let currentHandTotal = this.getHandTotal();
    this.handTotal += currentHandTotal + val;
  }

  getHandTotal() {
    return this.handTotal;
  }

}

class Player extends Participant {
  constructor() {
    super();
    //STUB
    // What sort of state does a player need?
    // Score? Hand? Amount of money available?
  }
}

class Dealer extends Participant {
  // Very similar to a Player; do we need this?
  constructor() {
    super();
    //STUB
    // What sort of state does a dealer need?
    // Score? Hand? Deck of cards? Bow tie?
  }

  hide() {
    //STUB
  }

  reveal() {
    //STUB
  }

  deal() {

  }

  dealInitialCards(player, dealer) {
    // STUB
  }
}

class TwentyOneGame {
  static NUMBER_OF_STARTING_CARDS = 2
  static BUST_SCORE = 21;
  constructor() {
    this.player = new Player();
    this.dealer = new Dealer();
    this.deck = new Deck();
  }

  start() {
    //SPIKE
    this.displayWelcomeMessage();
    this.shuffleDeck();
    this.dealInitialCards();
    this.showCards();
    this.playerTurn();
    // this.dealerTurn();
    // this.displayResult();
    // this.displayGoodbyeMessage();
  }

  showCards() {
    prompt(`Dealer has: ${this.listCardRanks(this.dealer)}`);
    prompt(`Player has: ${this.listCardRanks(this.player)}`);
  }

  showPlayerCard() {
    prompt(`Player has: ${this.listCardRanks(this.player)}`);
  }

  listCardRanks(participant) {
    let cards = participant.getCards();
    if (cards.length === 2) {
      if (participant === this.dealer) {
        return `${cards[0].getRank()} of ${cards[0].getSuit()}`
        + ` and an unknown card`;
      } else {
        return `${cards[0].getRank()} of ${cards[0].getSuit()}`
        + ` and ${cards[1].getRank()} of ${cards[1].getSuit()}`;
      }
    } else {
      let allCardsButLast = cards.slice(0, cards.length - 1);
      let allCardRanksButLast = allCardsButLast.map(card => {
        return `${card.getRank()} of ${card.getSuit()}`;
      });
      return `${allCardRanksButLast.join(', ')} and ${cards[0].getRank()}`
      + ` of ${cards[0].getSuit()}`;
    }
  }

  dealInitialCards() {
    this.player.receiveCard(this.deck.getDeck().pop());
    this.player.receiveCard(this.deck.getDeck().pop());
    this.dealer.receiveCard(this.deck.getDeck().pop());
    this.dealer.receiveCard(this.deck.getDeck().pop());
    this.player.updateHandTotal();
    this.dealer.updateHandTotal();
  }

  dealCard(participant) {
    participant.receiveCard(this.deck.popCard());
  }

  playerTurn() {
    while (true) {
      prompt('hit or stay?');
      let playerChoice = readline.question();
      playerChoice = playerChoice.toLowerCase();
      if (playerChoice !== 'hit' && playerChoice !== 'stay') {
        prompt('Please enter "hit" or "stay"');
      } else if (playerChoice === 'hit') {
        prompt('you hit');
        this.dealCard(this.player);
        this.player.updateHandTotal();
        this.showPlayerCard();
      } else if (this.player.isBusted() || playerChoice === 'stay') {
        break;
      }
    }
  }

  dealerTurn() {
    //STUB
  }

  displayWelcomeMessage() {
    prompt('Welcome to 21!');
  }

  displayGoodbyeMessage() {
    //STUB
  }

  displayResult() {
    //STUB
  }

  shuffleDeck() {
    shuffle(this.deck.getDeck());
  }
}

let game = new TwentyOneGame();
game.start();

