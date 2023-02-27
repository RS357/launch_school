// let str = ' ';

// if (str.match(/\t/)) {
//   console.log('has tab');
// }

// // console.log(str.match(/\[]/g));

// // Basic Matching exercises 

// let strArr = ['Kx', 'BlacK', 'kelly'];
// strArr.forEach(str => console.log(str.match(/K/g)));


// if ('Four score'.match(/\s/)) {
//   console.log('matched 1');
// }

// if ('Four-score\n'.match(/\s/)) {
//   console.log('matched 2');
// }

// if ("Four-score\n".match(/\s/)) {
//   console.log('matched 3');
// }

// if ('Four-score'.match(/\S/)) {
//   console.log('matched 4');
// }

// if ('a b'.match(/\S/)) {
//   console.log('matched 1');
// }
// if (" \t\n\r\f\v".match(/\S/)) {
//   console.log('matched 2');
// }

// let str = `Hello 4567 bye CDEF - cdef
// 0x1234 0x5678 0xABCD
// 1F8A done`;
// let matched = str.match(/\s[0-9A-F][0-9A-F][0-9A-F][0-9A-F]\s/ig);
// console.log(matched);


// let record = "xyzzy\t3456\t334\tabc";
// let fields = record.split('\t');
// record = "xyzzy  3456  \t  334\t\t\tabc"
// fields = record.split('\s+');

// fields = 'abc:xyz'.split(/['"].+?['"]/)
// // -> ['a', 'b', 'c', 'x', 'y', 'z']

// console.log(fields);

// let text ="four score and seven";
// let vowellless = text.replace(/[aeiou]/g, "*");
// console.log(vowellless);

// let text = "We read 'War of the Worlds'.";
// console.log(text.replace(/(['"']).+\1/, "$1The Time Machine$1"));

// function isUrl(url) {
//   return !!url.match(/^https?:\/\/\S+$/g);
// }

// console.log(isUrl('http://launchschool.com'));   // -> true
// console.log(isUrl('https://example.com'));       // -> true
// console.log(isUrl('https://example.com hello')); // -> false
// console.log(isUrl('   https://example.com'));    // -> false

// function fields(str) {
//   return str.split(/[ \t,]+/g);
// }

// console.log(fields("Pete,201,Student"));
// // # -> ["Pete", "201", "Student"]

// console.log(fields("Pete \t 201    ,  TA"));
// // # -> ["Pete", "201", "TA"]

// console.log(fields("Pete \t 201"));
// // # -> ["Pete", "201"]

// console.log(fields("Pete \n 201"));
// // # -> ["Pete", "\n", "201"]


/*
Write a method that changes the first arithmetic operator (+, -, *, /) in
a string to a '?' and returns the resulting string.
Don't modify the original string.
*/

// function mysteryMath(str) {
//   return str.replace(/[+\-*\/]/, '?');
// }

// console.log(mysteryMath('4 + 3 - 5 = 2'));
// // -> '4 ? 3 - 5 = 2'

// console.log(mysteryMath('(4 * 3 + 2) / 7 - 1 = 1'));
// // -> '(4 ? 3 + 2) / 7 - 1 = 1'

/*
Write a method that changes the first occurrence of the word
apple, blueberry, or cherry in a string to danish.
*/

function danish(str) {
  return str.replace(/\b(apple|blueberry|cherry)\b/, 'danish');
}


console.log(danish('An apple a day keeps the doctor away'));
// # -> 'An danish a day keeps the doctor away'

console.log(danish('My favorite is blueberry pie'));
// # -> 'My favorite is danish pie'

console.log(danish('The cherry of my eye'));
// # -> 'The danish of my eye'

console.log(danish('apple. cherry. blueberry.'));
// # -> 'danish. cherry. blueberry.'

console.log(danish('I love pineapple'));
// # -> 'I love pineapple'