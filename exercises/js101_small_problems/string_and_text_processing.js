// Uppercase Check 

// let isUppercase = str => {
//   return str === str.toUpperCase();
// }

// Delete Vowels 

// let removeVowels = strings => {
//   return strings.map(string => {
//     return string.split('').filter(char => {
//       if (!'aeiouAEIOU'.includes(char)) return char; 
//     }).join('');
//   })
// }

// Letter Case Counter 

// let letterCaseCount = str => {
  // let lowercount = 0;
  // let uppercount = 0;
  // let othercount = 0;
  // for (let idx = 0; idx < str.length; idx ++) {
  //   if (str[idx] >= 'a' && str[idx] <= 'z') {
  //     lowercount += 1;
  //   } else if (str[idx] >= 'A' && str[idx] <= 'Z'){
  //     uppercount += 1;
  //   } else {
  //     othercount += 1; 
  //   }
  // }
  // let lowerchars = str.match(/[a-z]/g) || [];
  // let upperchars = str.match(/[A-Z]/g) || [];
  // let others = str.match(/[^a-z]/gi) || [];
  // return { lowercase: lowerchars.length, uppercase: upperchars.length, neither: others.length };
//}

// Capitalize Words 

// let wordCap = str => {
//   return str.split(' ').map(substr => {
//     return substr[0].toUpperCase() + substr.substring(1).toLowerCase();
//   }).join(' ');
// }

// Swap Case jkjkjkooooo

// let swapCase = str => str.split('').map(char => {
//   if (char === char.toUpperCase()) {
//     return char.toLowerCase();
//   } else if (char === char.toLowerCase()) {
//     return char.toUpperCase();
//   } else return char;
// }).join('');

// Staggered Caps  1 and 2

// let isLetter = char => (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');

// let staggeredCase = str => {
//   let needUpper = true;
//   return str.split('').map(char => {
//     if (isLetter(char)) {
//       if (needUpper) {
//         needUpper = false;
//         return char.toUpperCase(); 
//       } else {
//         needUpper = true;
//         return char.toLowerCase();
//       }
//     } else {
//       return char;
//     }
//   }).join('');
// }


// How long are you?

// let wordLengths = (...args) => {
//   if (args.length === 0 || args.length === 0) return [];
//   return args[0].split(" ").map(word => `${word} ${word.length}`); 
// } 

// Search Word (Part 1)

// let searchWord = (word, text) => {
//   let words = text.split(" ");
//   return words.filter(subWord => {
//     return subWord.toLowerCase() === word.toLowerCase();
//   }).length;
// }

let searchWord = (...args) => {
  if (args.length < 2) return 'Please enter both word and text';
  let word = args[0];
  let text = args[1];
  let regexp = new RegExp(word, "gi");
  return text.match(regexp) ? text.match(regexp).length : 0; 
}

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('qui', text));      // 3

// Search Word Part 2


