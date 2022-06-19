/*
1) 2 because baz.foo is 1, given baz's prototype is qux, and qux's foo property points to 1.
1 + 1 = 2

2) 3 
This is because the foo property of object qux is 1. 
the foo property of baz is set to 2 - setting baz.foo to 2 does not set quz.foo to 2. 
Javascript automatically sets the property to the object to the left of the property in the statement baz.foo, even though baz's prototype also
has a foo property. 
Property assignment doesn't use the prototype chain. 
baz.foo is 2, and quz.foo is 1. Therefore they sum to 3. 

3) 4
assigning qux.foo to 2 results in qux.foo AND baz.foo evaluating to 2, because  baz doesn't 
have the property foo, so the baz.foo statement results in 2 after javascript looks up the prototype chain to qux.foo. 
Objects hold a reference to their prototype objects. If the object's prototype changes in some way, the changes 
are observable in the inheriting object as well. 

*/

// 4)
// iterative 
// let assignProperty = (obj, prop, val) => {
//   while (obj !== null) {
//     if (obj.hasOwnProperty(prop)) {
//       obj[prop] = val;
//       break;
//     }
//     obj = Object.getPrototypeOf(obj);
//   }
// };

// recursive

// let assignProperty = (obj, prop, val) => {
//   if (obj === null) {
//     return undefined;
//   }
//   else if (obj.hasOwnProperty(prop)) {
//     obj[prop] = val;
//   } else {
//     obj = Object.getPrototypeOf(obj);
//     assignProperty(obj, prop, val);
//   }
// };

/*
5) 
These loops will not always log the same results to the console. This is because for/in iterates over an object's properties 
as well as the properties of every object in that object's prototype chain. 

Example:

let obj1 = {
  a: 1
};

let obj2 = Object.create(obj1);
obj2.key = 2;

console.log(Object.keys(obj2)); // ['key']
for (let key in obj2) console.log(key); // 'key' 'a'

6)

You create an object that doesn't have a prototype by passing null to the Object.create() method when calling it. 
If an object obj doesn't have a prototype Object.getPrototypeOf(obj) will return null.
*/

// console.log(go());

// let go = () => {
//   return 1;
// }