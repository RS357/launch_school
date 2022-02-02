// Sum of Digits 
// let sum = num => String(num).split("").reduce((prev, current) => Number(prev) + Number(current));

// Alphabetical Numbers

// let words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

// let wordSort = (a, b) => {
//   if (words[a] < words[b]) {
//     return -1;
//   } else if (words[b] > words[a]) {
//     return 1;
//   } else {
//     return 0
//   }
// }

// let alphabeticNumberSort = arr => {
//   return arr.slice().sort(wordSort);
// }

/// Multiply All Pairs 
// let multiplyAllPairs = (arr1, arr2) => {
//   let products = [];
//   arr2.forEach(num2 => arr1.forEach(num1 => products.push(num1 * num2)));
//   return products.sort((a, b) => a - b);
// }

// Leading Substrings
let leadingSubstrings = str => {
  let splitStr = str.split("");
  let sortedStrings = splitStr.map((char, index) => {
    if (index === 0) return char;
    return splitStr.slice(0, index + 1).join("");
  })
  // let arr = [];
  // for (let idx = 1; idx <= str.length; idx += 1) {
  //   arr.push(str.slice(0, idx));
  // };
  // return arr.sort((a, b) => a.length - b.length);
  return sortedStrings;
}
