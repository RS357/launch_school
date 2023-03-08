/*
Problem: Write three functions:
  verse - takes one arg and returns the verse of the song 
  verses - takes two args
    and  returns multiple verses from the son, from the first number passed to it to the last (inclusive).
  lyrics - takes no args and returns the whole song 

Rules: 
verse must return the lyric without the plural of 'bottles' if the inputted number is 1
verse must return the last lyric if the inputted number is 0
verse must otherwise return the lyric with bottles as plural 

verses must return a string containing two \n characters between each verse. 
otherwise it can call verse to generate the verse and so its verses 
will comply with the rules verse applies.

lyrics - basically the same as verses but for the entire song

Algo:
verse // takes number 'num'
if num is 0, return 0th verse
if num is 1, return verse with bottle set to singular
if num is 2, return verse with bottle set to plural

verses // given nums as arguments
create array of arguments, args#
create empty string, versesStr
iterate nums between args, verseNum:
  if verseNum is not last verseNum:
    concatenate versesStr with return value of calling verse and passing it arg , followed by two newline chars \n
  else:
    concatenate versesStr with return value of calling verse and passing it arg ,
return versesStr

Helper functions:

*/

class BeerSong {
  static verse(num) {
    if (num === 0) {
      return "No more bottles of beer on the wall, no more " +
      "bottles of beer.\nGo to the store and buy some " +
      "more, 99 bottles of beer on the wall.\n";
    } else if (num === 1) {
      return "1 bottle of beer on the wall, 1 bottle of beer.\n" +
      "Take it down and pass it around, no more bottles " +
      "of beer on the wall.\n";
    } else if (num === 2) {
      return num + " bottles of beer on the wall, " + num + " bottles of beer.\n" +
      "Take one down and pass it around, " + (num - 1) + " bottle of beer " +
      "on the wall.\n";
    } else {
      return num + " bottles of beer on the wall, " + num + " bottles of beer.\n" +
      "Take one down and pass it around, " + (num - 1) + " bottles of beer " +
      "on the wall.\n";
    }
  }

  static verses(num1, num2) {
    let versesStr = '';
    for (let verseNum = num1; verseNum >= num2; verseNum -= 1) {
      if (verseNum !== num2) {
        versesStr += BeerSong.verse(verseNum) + "\n";
      } else {
        versesStr += BeerSong.verse(verseNum);
      }
    }
    console.log(versesStr);
    return versesStr;
  }

  static lyrics() {
    return BeerSong.verses(99, 0);
  }
}
BeerSong.verses(2, 0);
module.exports = BeerSong;