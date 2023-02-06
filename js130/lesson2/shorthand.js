// merge objects

function maxItem(first, ...moreArgs) {
  let maximum = first;
  moreArgs.forEach(value => {
    if (value > maximum) {
      maximum = value;
    }
  });
  return maximum;
}

console.log(maxItem(2, 6, 10, 4, -3));