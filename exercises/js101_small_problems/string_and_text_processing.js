// Uppercase Check 

// let isUppercase = str => {
//   return str === str.toUpperCase();
// }

// Delete Vowels 

let removeVowels = strings => {
  return strings.map(string => {
    return string.split('').filter(char => {
      if (!'aeiouAEIOU'.includes(char)) return char; 
    }).join('');
  })
}

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

let isLetter = char => (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');

let staggeredCase = str => {
  let idxCount = 0;
  return str.split('').map(char => {
    if (idxCount % 2 === 0) {
      if (isLetter(char)) idxCount += 1;
      return char.toUpperCase();
    } 
    if (idxCount % 2 === 1) {
      if (isLetter(char)) idxCount += 1;
      return char.toLowerCase();
    }
  }).join('');
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);