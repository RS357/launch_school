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
