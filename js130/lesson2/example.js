// function xyzzy({a: qux, b: bar, c: foo}) {
//   console.log(qux);
//   console.log(bar);
//   console.log(foo);
// }

// let obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// // xyzzy(obj);

// ({a, b, c} = obj)

// console.log(a);

// let bar = [1, 2, 3, 4, 5, 6, 7];
// let [first, , , fourth, fifth, , seventh] = bar;
// console.log(fourth);

// let one = 1;
// let two = 2;
// let three = 3;

// let [num1, num2, num3] = [one, two, three];
// console.log(num1, num2, num3);


// 1) arr.pop() - mutating object referenced by a non-local variable 
//    console.log() <- outputting to a data entity outside the function
//   

// 2) 2, 3, 5

let arr = [{a: 1}];
let arr2 = Object.assign([], arr);
console.log(arr[0] === arr2[0]); // false

let obj = {first: {a:1}};
let obj2 = Object.assign({}, obj);
console.log(obj.first === obj2.first); // true