/*
Problem: Write a function that takes an array, and optional seperater 
and last words, and returns a string split by the seperator and that 
contains the last word before the last array value 

Input: Array, optional sepertor, optional word
Output: A string of values in the array split by the seperator 
and containing the optional word before the last array value 

Rules: 
the last array value before the word should be followed by a seperator
the seperator and last word are optional inputs/paremeters
If the array is of length 2 or less, return a string containing those two
values seperated by the word 

Algo: \\ given an array 'arr', an optional 'seperator' and an optional 'word'
set optional argument seperator to ", " and optional argument word to 'or '
if arr length is 2 then return the two values seperateed by seperator in a string DONE 
set strArr to all arr values except the last, split to a string with 'seperator'
return a string containing strArr, 'seperator', 'word' followed by the last value in arr

*/
class Obj {

}
// obj is the context for `joinOr`; replace it with the correct context.
let obj = new Obj();
console.log(obj.joinOr([1, 2]));                  // => "1 or 2"
console.log(obj.joinOr([1, 2, 3]));                // => "1, 2, or 3"
console.log(obj.joinOr([1, 2, 3], '; '));          // => "1; 2; or 3"
console.log(obj.joinOr([1, 2, 3], ', ', 'and'));   // => "1, 2, and 3"