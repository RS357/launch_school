/*
1) 2 
2) 3 
3) 4
4) 
*/
let assignProperty = (obj, prop, val) => {
  let prototype = obj;
  while (Object.getPrototypeOf(prototype) !== Object.prototype) {
    prototype = Object.getPrototypeOf(prototype);
    if (prototype.hasOwnProperty(prop)) {
      prototype[prop] = val;
      break;
    }
  }
};

let fooA = { bar: 1 };
let fooB = Object.create(fooA);
let fooC = Object.create(fooB);

assignProperty(fooC, "bar", 2);
console.log(fooA.bar); // 2
console.log(fooC.bar); // 2

assignProperty(fooC, "qux", 3);
console.log(fooA.qux); // undefined
console.log(fooC.qux); // undefined
console.log(fooA.hasOwnProperty("qux")); // false
console.log(fooC.hasOwnProperty("qux")); // false