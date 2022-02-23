// Rotation (Part 1)

let rotateArray = arr => {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length <= 1) return arr.slice();
  let rotated = arr.slice();
  rotated.push(rotated.shift());
  return rotated;
}

// Rotation (Part 2) 

let rotateRightmostDigits = (number, count) => {
  let splitNum = String(number).split('');
  let countIndex = splitNum.length - count;
  let rotatedSplitNum = splitNum.slice(0, countIndex).concat(
    rotateArray(splitNum.slice(countIndex))
  );
  return Number(rotatedSplitNum.join(''))
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917