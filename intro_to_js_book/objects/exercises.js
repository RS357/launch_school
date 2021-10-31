// 1) 
// person.name;

//2 ) 

// 3) 

// let myArray = {
//     0: "a", 
//     1: "b", 
//     2: "c",
//     length: 3
// };

// for (let i = 0; i < myArray.length; i += 1) {
//     console.log(myArray[i]);
// }

// 4) 
// let obj = {
//     b: 2,
//     a: 1,
//     c: 3,
// };

// arr = Object.keys(obj)
// newarr = arr.map(key => key.toUpperCase())
// console.log(newarr);

// 5) 
// let myProtoObj = {
//     foo: 1,
//     bar: 2,
//   };

// let myObj = Object.create(myProtoObj);

// 6) 
//
//

// 7)
//
//
//

// 8) 
// let copyObj = (obj, arr = undefined) => {
//     let returnobj = Object.assign({}, obj);
//     if (arr && arr.length > 0) {
//         arr.forEach(key => delete returnobj[key])
//     }
//     return returnobj
// }

// let objToCopy = {
//     foo: 1,
//     bar: 2,
//     qux: 3,
// };
  
// let newObj = copyObj(objToCopy);
// console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

// let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
// console.log(newObj2);       // => { foo: 1, qux: 3 }

// let newObj3 = copyObj(objToCopy, [ 'bar' ]);
// console.log(newObj3);       // => { bar: 2 }

// 9) 

// 10)
// primitive values: 6 -  1, 2, "a", "b", false, null 
// objects: 4 - 3 arrays and one object 

// 11) 
// let obj = {
//     foo: { a: "hello", b: "world" },
//     bar: ["example", "mem", null, { xyz: 6 }, 88],
//     qux: [4, 8, 12]
// };

// obj.bar[3].xyz = 606
