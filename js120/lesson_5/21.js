let shuffle = require('shuffle-array');
let readline = require('readline-sync');
function prompt(str) {
  console.log(`==> ${str}`);
}

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
    return shuffle(deck);
  }

  getDeck() {
    return this.deck;
  }

  popCard() {
    return this.deck.pop();
  }
}

class Participant {
  static BUST_SCORE = 21;
  static WIN_DOLLARS = 10;
  static LOOSE_DOLLARS = 0;
  static START_DOLLARS = 5;
  constructor() {
    this.cards = [];
    this.handTotal = 0;
  }

  clearCards() {
    this.cards = [];
  }

  resetHandTotal() {
    this.handTotal = 0;
  }

  isBusted() {
    return this.handTotal > Participant.BUST_SCORE;
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
    if (lastCard.getRank() === 'Ace' &&
    this.getHandTotal() > Participant.BUST_SCORE) {
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
    this.playerDollars = Participant.START_DOLLARS;
  }

  getDollars() {
    return this.playerDollars;
  }

  incrementDollars() {
    this.playerDollars += 1;
  }

  decrementDollars() {
    this.playerDollars -= 1;
  }
}

class Dealer extends Participant {
  constructor() {
    super();
    this.maxScore = 17;
  }

  getMaxScore() {
    return this.maxScore;
  }
}

class TwentyOneGame {
  static NUMBER_OF_STARTING_CARDS = 2

  constructor() {
    this.player = new Player();
    this.dealer = new Dealer();
    this.deck = null;
  }

  start() {
    this.displayWelcomeMessage();
    while (true) {
      this.launchGame();
      this.playerTurn();
      if (!this.player.isBusted()) this.dealerTurn();
      this.displayResult();
      this.updateDollars();
      if (this.player.getDollars() === Participant.LOOSE_DOLLARS ||
          this.player.getDollars() === Participant.WIN_DOLLARS) {
        this.endOverallGameMessage();
        break;
      } else if (this.playAgainPrompt() === 'n') {
        this.displayGoodbyeMessage();
        break;
      } else {
        this.endRound();
      }
    }
  }

  endRound() {
    this.resetHands();
    this.resetTotals();
    console.clear();
    this.dollarUpdatePrompt();
  }

  updateDollars() {
    let winner = this.getWinner();
    if (winner === this.player) {
      this.player.incrementDollars();
    } else if (winner === this.dealer) {
      this.player.decrementDollars();
    }
  }

  dollarUpdatePrompt() {
    prompt(
      `You now have ${this.player.getDollars()} dollars.` +
      ` You need 10 dollars to win and will lose at 0 dollars.`
    );
  }

  getWinner() {
    let playerTotal = this.player.getHandTotal();
    let dealerTotal = this.dealer.getHandTotal();
    if (dealerTotal > Participant.BUST_SCORE) {
      return this.player;
    } else if (playerTotal > Participant.BUST_SCORE) {
      return this.dealer;
    } else if (playerTotal > dealerTotal) {
      return this.player;
    } else if (dealerTotal > playerTotal) {
      return this.dealer;
    } else {
      return 'tie';
    }
  }

  endOverallGameMessage() {
    prompt(`You have ${this.player.getDollars()} dollars.`);
    if (this.player.getDollars() === 10) {
      prompt("You won the round! Congratulations!");
    } else if (this.player.getDollars() === 0) {
      prompt("You lost the round! Better luck next time!");
    }
  }

  launchGame () {
    this.deck = new Deck();
    this.dealInitialCards();
  }

  resetHands() {
    this.player.clearCards();
    this.dealer.clearCards();
  }

  resetTotals() {
    this.player.resetHandTotal();
    this.dealer.resetHandTotal();
  }

  showHandAndTotalScore(participant, hideCard = false) {
    prompt(`${participant.constructor.name} has:`
    + ` ${this.listCardRanks(participant, hideCard)} for a`
    + ` total of ${participant.getHandTotal()}`);
  }

  showHand(participant, hideCard = false) {
    prompt(`${participant.constructor.name} has:`
    + ` ${this.listCardRanks(participant, hideCard)}`);
  }

  listCardRanks(participant, hideCard = false) {
    let cards = participant.getCards();
    if (cards.length === 2) {
      return this.listTwoCards(cards, hideCard);
    } else {
      return this.listAllCards(cards);
    }
  }

  listTwoCards(cards, hideCard) {
    if (hideCard) {
      return `${cards[0].getRank()} of ${cards[0].getSuit()}`
      + ` and an unknown card`;
    } else {
      return `${cards[0].getRank()} of ${cards[0].getSuit()}`
      + ` and ${cards[1].getRank()} of ${cards[1].getSuit()}`;
    }
  }

  listAllCards(cards) {
    let allCardsButLast = cards.slice(0, cards.length - 1);
    let allCardRanksButLast = allCardsButLast.map(card => {
      return `${card.getRank()} of ${card.getSuit()}`;
    });
    let lastCardIdx = cards.length - 1;
    return `${allCardRanksButLast.join(', ')} and`
    + ` ${cards[lastCardIdx].getRank()} of ${cards[lastCardIdx].getSuit()}`;
  }

  dealInitialCards() {
    this.player.receiveCard(this.deck.getDeck().pop());
    this.player.updateHandTotal();
    this.player.receiveCard(this.deck.getDeck().pop());
    this.player.updateHandTotal();
    this.dealer.receiveCard(this.deck.getDeck().pop());
    this.dealer.updateHandTotal();
    this.dealer.receiveCard(this.deck.getDeck().pop());
    this.dealer.updateHandTotal();
  }

  dealCard(participant) {
    participant.receiveCard(this.deck.popCard());
  }

  playerTurn() {
    while (true) {
      this.showHand(this.dealer, true);
      this.showHandAndTotalScore(this.player);
      prompt('hit or stay?');
      let playerChoice = readline.question().toLowerCase();
      if (playerChoice === 'hit') {
        prompt('you hit');
        this.dealCard(this.player);
        this.player.updateHandTotal();
        if (this.player.isBusted()) break;
      } else if (playerChoice === 'stay') {
        break;
      } else {
        prompt('Please enter "hit" or "stay"');
      }
    }
  }

  dealerTurn() {
    while (this.dealer.getHandTotal() < this.dealer.getMaxScore()) {
      prompt("Dealer hits!");
      this.dealCard(this.dealer);
      this.dealer.updateHandTotal();
      if (this.dealer.isBusted()) {
        break;
      } else if (this.dealer.getHandTotal >= this.dealer.getMaxScore()) {
        prompt("Dealer stays!");
      }
      this.showHandAndTotalScore(this.dealer);
    }
  }

  displayWelcomeMessage() {
    prompt('Welcome to 21!');
    prompt(`You currently have ${this.player.getDollars()} dollars`);
    prompt(`You need ${Participant.WIN_DOLLARS} dollars to win`);
    prompt(`But if you end up with ${Participant.LOOSE_DOLLARS} dollars`
    + ` you lose!`);
    prompt("Every time you win a game, you win a dollar.");
    prompt("But every time you lose a game, you lose a dollar!");
  }

  displayGoodbyeMessage() {
    prompt("Thank you for playing. Goodbye!");
  }

  displayResult() {
    let winner = this.getWinner();
    this.showHandAndTotalScore(this.player);
    this.showHandAndTotalScore(this.dealer);
    if (winner === this.player) {
      if (this.dealer.getHandTotal() > Participant.BUST_SCORE) {
        prompt('Dealer busted! You win! Congratulations');
      } else {
        prompt('You win! Congratulations');
      }
    } else if (winner === this.dealer) {
      if (this.player.getHandTotal > Participant.BUST_SCORE) {
        prompt("You busted! Dealer wins! What a shame!");
      } else {
        prompt('Dealer wins! What a shame!');
      }
    } else {
      prompt("It's a tie. Boring...");
    }
  }

  playAgainPrompt() {
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
}

let game = new TwentyOneGame();
game.start();

