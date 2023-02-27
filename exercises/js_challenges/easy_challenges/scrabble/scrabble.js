class Scrabble {
  static WORD_POINTS = {
    A: 1,
    E: 1,
    I: 1,
    O: 1,
    U: 1,
    L: 1,
    N: 1,
    R: 1,
    S: 1,
    T: 1,
    D: 2,
    G: 2,
    B: 3,
    C: 3,
    M: 3,
    P: 3,
    F: 4,
    H: 4,
    V: 4,
    W: 4,
    Y: 4,
    K: 5,
    J: 8,
    X: 8,
    Q: 10,
    Z: 10
  }

  static score(word) {
    return new Scrabble(word).score();
  }

  constructor(word) {
    this.word = word;
  }

  score() {
    let score = 0;
    if (this.word === null) return 0;
    let upperCaseWord = this.word.toUpperCase().replace(/[^A-Z]/g, '');
    if (upperCaseWord === '') return 0;
    upperCaseWord.split('').forEach(char => {
      score +=  Scrabble.WORD_POINTS[char];
    });
    return score;
  }
}

module.exports = Scrabble;

// let scrabble = new Scrabble('');
// console.log(scrabble.score());
/* Problem: Write a function that takes the word the class is instantiated with and 
 returns the numeric score for that word.
Input: word upon instantiation
Output: Number
Data structure: object to hold score vals
Rules: 
- If word is null, return 0
If word is empty string, return 0
If word is whitespace character/s, return 0
Score reading is case insensitive (uppercase the word given scores are saved to uppercase words?)
*/
