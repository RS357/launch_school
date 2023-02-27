/*eslint-disable*/

/*

Write a program that takes a word and a list of possible anagrams
and selects the correct sublist that contains the anagrams of the word.

For example, given the word "listen" and a list of candidates
like "enlists", "google", "inlets", and "banana", the program
should return a list containing "inlets". Please read the
test suite for the exact rules of anagrams.


Problem: Write a class that is instantiated with a word and define an instance method 'match'
that takes an array of words and returns a list containing every word in the input 
array that is an anagram of the word the class is instantiated with.

Rules:
Every word in returned array must be an anagram (contain the same letters in different order) 
of the word the class was instantiated with. DONE

If there is no anagram in the array passed to match, return empty array. DONE

words in passed in array that are identical to the original word are NOT anagrams (can filter out at start?) DONE

anagrams are case insensitive

Algo: // given list and originalWord
create empty array, matchedArr
create array with lowercased words same as originalWord, lowercased, filtered out array
created sorted version of originalWord, sortedOriginalWord
return array filtered for every sorted lowercased word that is same as sortedOriginalWord lowercased

*/

/*eslint-enable*/

class Anagram {
  constructor(originalWord) {
    this.originalWord = originalWord;
  }

  _sortAndLowerCaseWord(word) {
    return word.toLowerCase().split('').sort().join('');
  }

  match(array) {
    array = array.filter(word => {
      return word.toLowerCase()  !== this.originalWord.toLowerCase();
    });
    let sortedOriginalWord = this._sortAndLowerCaseWord(this.originalWord);
    return array.filter(word => {
      console.log(`${this._sortAndLowerCaseWord(word)} is the same as ${sortedOriginalWord}? ${this._sortAndLowerCaseWord(word) === sortedOriginalWord}`)
      return this._sortAndLowerCaseWord(word) === sortedOriginalWord;
    });
  }
}

module.exports = Anagram;