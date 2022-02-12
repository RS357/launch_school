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
// let leadingSubstrings = str => {
//   let splitStr = str.split("");
//   let sortedStrings = splitStr.map((char, index) => {
//     if (index === 0) return char;
//     return splitStr.slice(0, index + 1).join("");
//   })
//   return sortedStrings;
// }

// let substrings = str => {
//   let splitStr = str.split('');
//   return splitStr.map((_, index) => {
//     return leadingSubstrings(str.substring(index));
//   }).flat();
// }

// let isPalindrome = str => {
//   return str === str.split('').reverse().join('') && str.length > 1;
// }

// let palindromes = str => {
//   return substrings(str).filter(isPalindrome);
// }

// let sumOfSums = arr => {
//   if (arr.length === 1) return arr[0];
//   // let total = 0;
//   // arr.forEach((_, idx) => {
//   //   total += arr.slice(0, idx + 1).reduce((prev, current) => prev + current);
//   // })
//   // return total;
//   return arr.map((_, idx) => {
//     return arr.slice(0, idx + 1).reduce((prev, current) => prev + current);
//   }).reduce((prev, current) => prev + current);
// }

// Grocery List 

// let buyFruit = arr => {
//   let oneDimensional = [];
//   arr.forEach(subArr => {
//     while (subArr[1] > 0) {
//       oneDimensional.push(subArr[0]);
//       subArr[1] -= 1;
//     }
//   })
//   return oneDimensional;
//}

// Inventory Item Transactions 
let transactionsFor = (id, transactions) => {
  return transactions.filter(obj => obj.id === id);
}

// Inventory Item Availability 

let isItemAvailable = (item, transactions) => {
  let matchingTransactions = transactionsFor(item, transactions);
  let total = matchingTransactions.reduce((sum, transaction) => {
    if (transaction.movement === 'out') {
      return sum - transaction.quantity;
    } else {
      return sum + transaction.quantity;
    }
  }, 0);
  return total > 0;
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true