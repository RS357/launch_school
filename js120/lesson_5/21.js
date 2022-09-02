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
  constructor() {
    //STUB
    // What sort of state does a card need? 
    // Rank? Suit? Points?
  }
}

class Deck {
  constructor() {
    //STUB
    // What sort of state does a deck need? 
    // 52 cards? 
    // obviously, we need some data structure to keep track of cards 
    // array, object. something else?
  }

  deal() {
    //STUB 
    // does the dealer or the deck deal?
  }
}

class Participant {
  constructor() {
    //STUB
    // What sort of state does a participant need? 
    // Score? Hand? Amount of money available? 
    // What else goes here? all the redundant behaviours from Player and Dealer?
  }
}

class Player extends Participant {
  constructor() {
    //STUB
    // What sort of state does a player need?
    // Score? Hand? Amount of money available? 
  }

  hit() {
    //STUB
  }

  stay() {
    //STUB
  }

  isBusted() {
    //STUB
  }

  score() {
    //STUB
  }
}

class Dealer extends Participant {
  // Very similar to a Player; do we need this?

  constructor() {
    //STUB
    // What sort of state does a dealer need? 
    // Score? Hand? Deck of cards? Bow tie?
  }
}
