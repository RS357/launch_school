let makeUniqueId = function () {
  let count = 0;
  return function() {
    count += 1;
    return count;
  };
};

console.log(makeUniqueId()); // => 1
console.log(makeUniqueId()); // => 2
console.log(makeUniqueId()); // => 3