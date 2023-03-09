// 1)

// function filter(array, callback) {
//   let filtered = [];
//   for (let idx = 0; idx < array.length; idx += 1) {
//     if (callback(array[idx])) {
//       filtered.push(array[idx]);
//     }
//   }
//   return filtered;
// }

// let numbers = [1, 2, 3, 4, 5];
// console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
// console.log(filter(numbers, number => number < 0)); // => []
// console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(filter(values, value => typeof value === "string"));
// // => [ 'abc', 'xyz' ]


// 2)
// function map(array, callback) {
//   let mapped = [];
//   for (let idx = 0; idx < array.length; idx += 1) {
//     mapped.push(callback(array[idx]));
//   }
//   return mapped;
// }

// let numbers = [1, 2, 3, 4, 5];
// console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
// console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
// console.log(map(numbers, () => false));
// // => [ false, false, false, false, false ]

// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(map(values, value => String(value)));
// // => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]

// function reduce(array, callback, firstVal = null) {
//   let startIdx = 0;
//   let finalVal = firstVal;

//   if (firstVal === null) {
//     startIdx = 1;
//     finalVal = array[0];
//   }

//   for (let idx = startIdx; idx < array.length; idx += 1) {
//     finalVal = callback(finalVal, array[idx]);
//   }

//   return finalVal;
// }

// let numbers = [1, 2, 3, 4, 5];
// console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
// console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
// console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
// console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
// console.log(reduce([], (accum, number) => accum + number));
// // => undefined

// let stooges = ["Mo", "Larry", "Curly"];
// console.log(reduce(stooges, (reversedStooges, stooge) => {
//   reversedStooges.unshift(stooge);
//   return reversedStooges;
// }, []));
// => ["Curly", "Larry", "Mo"]


function mapper(array, callback) {
  return array.reduce((accum, arrVal) => {
    if (callback(arrVal)) {
      accum.push(callback(arrVal));
    }
    return accum;
  }, []);
}

function mapper(array, callback) {
  return array.reduce((accum, arrVal) => {
    accum.push(callback(arrVal));
    return accum;
  }, []);
}

let arr = [1, 2, 3];
console.log(mapper(arr, val => val * 2));
// 2)
// function filter(arr, filterCallBack) {
//   function reduceCallBack (accum, currentVal) {
//     if (filterCallBack(currentVal)) {
//       accum.push(currentVal);
//       return accum;
//     } else return accum;
//   }
//   return arr.reduce(reduceCallBack, []);
// }

// let numbers = [1, 2, 3, 4, 5];
// console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
// console.log(filter(numbers, number => number < 0)); // => []
// console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(filter(values, value => typeof value === "string"));
// // => [ 'abc', 'xyz' ]

// // 3)

// function map(arr, mapCallBack) {
//   function reduceCallBack (accum, currentVal) {
//     accum.push(mapCallBack(currentVal));
//     return accum;
//   }
//   return arr.reduce(reduceCallBack, []);
// }

// let numbers = [1, 2, 3, 4, 5];
// console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
// console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
// console.log(map(numbers, () => false));
// // => [ false, false, false, false, false ]

// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(map(values, value => String(value)));
// // => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]

>>>>>>> c3bd6def688ca9566bce9e92dc9d648699de1a37
