//1
// let arr = ['10', '11', '9', '7', '8'];
// arr.sort((a, b) => Number(b) - Number(a));
// console.log(arr);

//2
// let books = [
//   { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
//   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
//   { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
//   { title: 'Ulysses', author: 'James Joyce', published: '1922' },
//   { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
// ];

// books.sort((a, b) => Number(a.published) - Number(b.published));
// console.log(books);

// 3
// let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];

// let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];

// let arr3 = [['abc'], ['def'], { third: ['ghi'] }];

// let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };

// let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }}

// console.log(arr1[2][1][3]);
// console.log(arr2[1].third[0]);
// console.log(arr3[2].third[0][0]);
// console.log(obj1.b[1]);
// console.log(Object.keys(obj2.third)[0]);

// 4
// let arr1 = [1, [2, 3], 4];

// let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];

// let obj1 = { first: [1, 2, [3]] };

// let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };

// arr1[1][1] = 4;
// arr2[2] = 4
// obj1.first[2][0] = 4
// obj2.a.a[2] = 4

//5
// let munsters = {
//   Herman: { age: 32, gender: 'male' },
//   Lily: { age: 30, gender: 'female' },
//   Grandpa: { age: 402, gender: 'male' },
//   Eddie: { age: 10, gender: 'male' },
//   Marilyn: { age: 23, gender: 'female'}
// };

// let total = 0;

// // iterate over munsters keys

// for (let prop in munsters) {
//   if (munsters[prop].gender === "male") {
//     total += munsters[prop].age;
//   }
// } 
// console.log(total);

// 6
// Object.entries(munsters).forEach(entry => {
//   let name = entry[0];
//   let age = entry[1].age;
//   let gender = entry[1].gender;

//   console.log(`${name} is a ${age}-year-old ${gender}.`)
// })

// 7) a = 2, b = [3, 8]

// 8
// let obj = {
//   first: ['the', 'quick'],
//   second: ['brown', 'fox'],
//   third: ['jumped'],
//   fourth: ['over', 'the', 'lazy', 'dog'],
// };

// Object.values(obj).forEach(arr => {
//   arr.forEach(word => {
//     word.split("").forEach(char =>{
//       if ("AEIOUaeiou".includes(char)) {
//         console.log(char);
//       }
//     })
//   })
// })

// 9
// let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];
// let arr2 = arr.map(subArr => {
//   if (Number.isInteger(subArr[0])) {
//     return subArr.slice().sort((a, b) =>  a - b)
//   } else if (typeof subArr[0] === "string") {
//     return subArr.slice().sort();
//   }
// })

// 10
// let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];
// let arr2 = arr.map(subArr => {
//   if (Number.isInteger(subArr[0])) {
//     return subArr.slice().sort((a, b) =>  b - a)
//   } else if (typeof subArr[0] === "string") {
//     return subArr.slice().sort((a, b) =>  b.codePointAt() - a.codePointAt());
//   }
// });

// 11
// let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];
// let arr2 = arr.map(obj => {
//   let newObj = JSON.parse(JSON.stringify(obj));
//   for (let property in newObj) {
//     newObj[property] += 1;
//   }
//   return newObj;
// });

// 12
// let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];
// let arr2 = arr.map(subArr => subArr.filter(num => num % 3 === 0));

// 13
// let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
// arr.sort((a, b) => {
//   let aSum = a.filter(val => val %2 === 1)
//               .reduce((prev, current) => prev + current);
//   let bSum = b.filter(val => val %2 === 1)
//               .reduce((prev, current) => prev + current);
//   return aSum - bSum;
// });
// console.log(arr);

// 14
// let obj = {
//   grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
//   carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
//   apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
//   apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
//   marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
// };

// let arr = Object.values(obj).map(obj => {
//   if (obj.type === "vegetable") {
//     return obj.size.toUpperCase();
//   } else if (obj.type === "fruit") {
//     return obj.colors.map(word => word[0].toUpperCase() + word.split("").slice(1).join(""));
//   }
// });

// 15
// let arr = [
//   { a: [1, 2, 3] },
//   { b: [2, 4, 6], c: [3, 6], d: [4] },
//   { e: [8], f: [6, 10] },
// ];

// let arr2 = arr.filter(obj => {
//   return Object.values(obj).every(subArr => {
//     return subArr.every(num => num % 2 === 0);
//   });
// })
// console.log(arr2);

// 16
// let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];
// let obj = {};
// arr.forEach(subArr => (obj[subArr[0]] = subArr[1]));
// console.log(Object.fromEntries(arr));

// 17
// let hexCharGenerator = () => {
//   return Math.floor((Math.random() * 15)).toString(16);
// }
// let generateUUID = () => {
//   let arr = [];
//   arr.length = 36;
//   arr[8] = '-';
//   arr[13] = '-';
//   arr[18] = '-';
//   arr[23] = '-';
//   for (let idx = 0; idx < arr.length; idx += 1) {
//     if (arr[idx] === '-') continue;
//     arr[idx] = hexCharGenerator();
//   }
//   return arr.join('');
// }
