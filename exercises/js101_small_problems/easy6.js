// Double Char (Part 1)
// let repeater = str => str.split("").map(char => `${char}${char}`).join("");

// console.log(repeater('Hello'));        // "HHeelllloo"
// console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
// console.log(repeater(''));             // ""

// Double Char (part 2)

// let isLetterNotVowel = char => {
//   let vowels = "aeiou";
//   return ((char > "a" && char < "z") || (char > "A" && char < "Z"))  && !vowels.includes(char);
// }
// let doubleConsonants = str => {
//   return str.split("").map(char => {
//     if (isLetterNotVowel(char)) {
//       return char.repeat(2);
//     } else {
//       return char;
//     }
//   }).join("");
// }

// Reverse Number
// let reverseNumber = num => {
//     let reversed = String(num).split("").reverse();
//     while (reversed[reversed.length - 1] === "0") {
//         reversed.pop();
//     }
//     return Number(reversed.join(""));
// }

// Get the middle character

// let centerOf = str => {
//     let halfLength = str.length / 2
//     if (str.length % 2 === 0) {
//         return str.substring(halfLength - 1, halfLength + 1);
//     } else {
//         return str[Math.floor(halfLength)];
//     }

// }

// Always return negative

// let negative = num => {
//     return num >= 0? -num: num

// }

// Counting Up

// let sequence = num => {
//     let arr = [];
//     let counter = 1;
//     while (counter <= num) {
//         arr.push(counter);
//         counter += 1;
//     }
//     return arr;
// }

// Name Swapping
// let swapName = str => {
//     let arr = str.split(' ')
//     let lastName = arr.pop()
//     arr.unshift(`${lastName},`)
//     return arr.join(' ');

// }

// Sequence Count
// let sequence = (count, startNum) => {
//   if (count === 0) return [];
//   let arr = [];
//   let counter = 1;
//   while (counter <= count) {
//     arr.push(startNum * counter);
//     counter += 1;
//   };
//   return arr;
// }

// Reverse It (Part 1)
// let reverseSentence = str => {
//   if (str.length === 0) return "";
//   return str.split(" ").reverse().join(" ");
// }

// Reverse it (Part 2)
// let reverseWords = str => {
//   return str.split(" ").map(word => {
//     if (word.length >= 5 ) {
//       return word.split("").reverse().join("");
//     } else {
//       return word;
//     }
//   }).join(" ");
// };

// Reversed Arrays

// let reverse = arr => {
//   if (arr.length === 0) return []
//   let counter = 0;
//   let midIdx = arr.length / 2;
//   let lastIdx = arr.length - 1;

//   while (counter <= midIdx) {
//     [arr[lastIdx - counter], arr[counter]] = 
//       [arr[counter], arr[lastIdx - counter]];
//     counter += 1;
//   }
//   return arr;
// }

// Matching parentheses? 
let isBalanced = str => {
  let splitStr = str.split("");
  let firstLeftParenthesesIdx = splitStr.findIndex(elem => elem === ")");
  let firstRightParenthesesIdx = splitStr.findIndex(elem => elem === "(");
  if (firstLeftParenthesesIdx < firstRightParenthesesIdx) return false;
  if (firstLeftParenthesesIdx === firstRightParenthesesIdx) return true;
  let counter = 0;
  for (let val of splitStr) {
    if (val === "(") {
      counter += 1;
    } else if (val === ")") {
      counter -= 1;
      if (counter === -1) return false;
    }
  }
  return counter === 0;
}
