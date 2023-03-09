// // 1)

// function filter(arr, callback) {
//   let filtered = [];
//   for (let idx = 0; idx < arr.length; idx += 1) {
//     if (callback(arr[idx])) {
//       filtered.push(arr[idx]);
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

// function map(arr, callback) {
//   let mapped = [];

//   for (let idx = 0; idx < arr.length; idx += 1) {
//     mapped.push(callback(arr[idx]));
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


// function reduce(arr, callBack, initialVal) {
//   let accumulated = initialVal ? initialVal : arr[0];
//   let startIdx = initialVal ? 0 : 1
//   for (let idx = startIdx; idx < arr.length; idx += 1) {
//     accumulated = callBack(accumulated, arr[idx]);
//     // console.log(accumulated);
//   }
//   return accumulated;
// }


// let numbers = [1, 2, 3, 4, 5];
// console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
// console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
// console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
// console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
// console.log(reduce([], (accum, number) => accum + number));
// // // // => undefined

// let stooges = ["Mo", "Larry", "Curly"];
// console.log(reduce(stooges, (reversedStooges, stooge) => {
//   reversedStooges.unshift(stooge);
//   return reversedStooges;
// }, []));
// // => ["Curly", "Larry", "Mo"]


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

