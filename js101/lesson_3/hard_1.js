// 1) No. first() returns the object whereas second() returns undefined

// 2) { first: [1, 2] }

// 3)

// snippet A: 
// one is ["one"]
// two is ["two"]
// three is ["three"]

// snippet B
// one is ["one"]
// two is ["two"]
// three is ["three"]

// snippet C
// one is ["two"]
// two is ["three"]
// three is ["one"]

// Q4)
function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) return false;
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}