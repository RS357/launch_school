/*
Problem: Write a static method of Diamond clas that takes a string as an argument and 
returns a 'diamond'

Input: string
Output: string

Rules: 
All input and output is uppercase 
If input is 'A' return "A\n"
All rows except first and last have two identical letters 
first and last rows contain one 'A'
Rows are horizontally symmetrical 
All lines must end with a newline character 
Last half of strings (bar the middle one) has the letters in descending order 

Data structure to hold strings: object 

Algo:

class Diamond

  static create an empty object, stringsObj

  static function makeDiamond // given a letter character in a string, letter
    If input is 'A' return "A\n"
  create stringObj variable and assign it to value returned by createStringsObjKeys helper function
  create finalStringLength variable and assign it to returned value of calling getFinalStringLength 
    helper function
  call helper function setInitialStringsObjArrays and set it to returned value of calling 
    helper function setInitialStringsObjArrays
  create variable and assign it to empty string, returnStr
  create array of stringsObj keys, stringsObjKeys
  iterate through stringsObjKeys, key
    concatenate to returnStr the array assigned to stringObjsKeys 
      joined to a string by char, with a newline character at the end of 
      the string 
  iterate through stringObjKeys backwards from the second to last val:
    concatenate to returnStr the array assigned to stringObjsKeys 
      joined to a string by char, with a newline character at the end of 
      the string 
  return returnStr


  Helper functions:

  static  function setInitialStringsObjArrays // given stringsObj and finalStringLength
    iterate through stringsObj and set every array that is the value of the obj's
      keys to be length of finalStringLength
    set every value of every array that is the value of every key
      stringObj to be a space character i.e. ' '
    


  static createStringsObjKeys // given letter and stringsObj
    create string of alphabet, alphabet 
    iterate through alphabet up to and including letter, alphabetLetter
      create key in stringsObj containing letter, set value to empty array

  static calculateFinalStringLength // given stringsObj and letter 
  if letter is B return 3
  create variable and set it to length of array of keys in stringsObj stringObjKeysArrLength
  subtract 2 from stringObjKeysArrLength and set that value to stringObjKeysArrLengtNoA
  create variable and set it to 1, totalSpaceCounter
  create variable and set it to 2, spaceIncrementCounter
  iterate from 1 to stringObjKeysArrLengtNoA:
    set totalSpaceCounter to itself plus spaceIncrementCounter
  return totalSpaceCounter

    static function makeDiamond // given a letter character in a string, letter
    If input is 'A' return "A\n"
  create stringObj variable and assign it to value returned by createStringsObjKeys helper function
  create finalStringLength variable and assign it to returned value of calling getFinalStringLength 
    helper function
  call helper function setInitialStringsObjArrays and set it to returned value of calling 
    helper function setInitialStringsObjArrays
  call helper function fillStringObjArrs and pass it stringsObj and finalStringLength
  call helper function createReturnString and assign result
    to variable returnStr
  return returnStr 
*/

class Diamond {
  static stringsObj = {}

  static makeDiamond(letter) {
    if (letter === 'A') return "A\n";
    Diamond._createStringsObjKeys(letter, Diamond.stringsObj);
    let finalStringLength = Diamond._getFinalStringLength(this.stringsObj,
      letter);
    Diamond._setInitialStringsObjArrays(Diamond.stringsObj, finalStringLength);
    Diamond._fillStringsObjArrs(Diamond.stringsObj, finalStringLength);
    let returnStr = Diamond._createReturnString(Diamond.stringsObj);
    return returnStr;
  }

  static _createStringsObjKeys(letter, stringsObj) {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let letterIdx = alphabet.indexOf(letter);
    for (let idx = 0; idx <= letterIdx; idx += 1) {
      let alphabetLetter = alphabet[idx];
      stringsObj[alphabetLetter] = [];
    }
  }

  static _getFinalStringLength(stringsObj) {
    let stringObjKeysArrLength = Object.keys(stringsObj).length;
    let stringObjKeysArrLengthNoA = stringObjKeysArrLength - 1;
    let totalSpaceCounter = 1;
    let spaceIncrementCounter = 2;
    for (let num = 1; num <= stringObjKeysArrLengthNoA; num += 1) {
      totalSpaceCounter += spaceIncrementCounter;
    }
    return totalSpaceCounter;
  }

  static _setInitialStringsObjArrays(stringsObj, finalStringLength) {
    Object.keys(stringsObj).forEach(key => {
      let arr = stringsObj[key];
      arr.length = finalStringLength;
      for (let idx = 0; idx < arr.length; idx += 1) {
        arr[idx] = ' ';
      }
    });
  }

  static _fillStringsObjArrs(stringsObj, finalStringLength) {
    let midIdx = Math.floor(finalStringLength / 2);
    let spaceCounter = 1;
    let stringsObjKeys = Object.keys(stringsObj);
    for (let idx = 0; idx < stringsObjKeys.length; idx += 1) {
      let key = stringsObjKeys[idx];
      let arr = stringsObj[key];
      if (idx === 0) {
        arr[midIdx] = 'A';
        continue;
      } else {
        arr[midIdx - spaceCounter] = key;
        arr[midIdx + spaceCounter] = key;
      }
      spaceCounter += 1;
    }
  }

  static _createReturnString(stringsObj) {
    let returnStr = '';
    let stringsObjKeys = Object.keys(stringsObj);
    for (let idx = 0; idx < stringsObjKeys.length; idx += 1) {
      let key = stringsObjKeys[idx];
      returnStr += stringsObj[key].join('') + "\n";
    }

    for (let idx = stringsObjKeys.length - 2; idx >= 0; idx -= 1) {
      let key = stringsObjKeys[idx];
      returnStr += stringsObj[key].join('') + "\n";
    }
    console.log(returnStr.split('\n').forEach(str => {
      console.log(str, str.length);
    }));
    return returnStr;
  }
}

module.exports = Diamond;

console.log(Diamond.makeDiamond('B'));

/*
helper function createReturnStr // given stringsObj, 

create variable and assign it to empty string, returnStr
create array of stringsObj keys, stringsObjKeys
iterate through stringsObjKeys, key
  concatenate to returnStr the array assigned to stringObjsKeys 
    joined to a string by char, with a newline character at the end of 
    the string 
iterate through stringObjKeys backwards from the second to last val:
  concatenate to returnStr the array assigned to stringObjsKeys 
    joined to a string by char, with a newline character at the end of 
    the string 
return returnStr
*/

" A \n" +
"B B\n" +
" A \n"