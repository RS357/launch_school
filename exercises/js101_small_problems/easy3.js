let crunch = str => {
  if (str === '') return '';
  let strArr = str.split("");
  for (let ind = strArr.length - 1; ind >= 0; ind -= 1) {
    if (strArr[ind] === strArr[ind + 1]) {
      strArr.splice(ind, 1);
    }
  }
  return strArr.join("");
};

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""