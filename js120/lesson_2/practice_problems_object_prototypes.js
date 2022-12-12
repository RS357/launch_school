/*
1) 2 
2) 3 
3) 4
4) 
*/
function assignProperty(obj, prop, val) {
  if (obj === null) { // property not found
    return;
  } else if (obj.hasOwnProperty(prop)) {
    obj[prop] = val;
  } else {
    assignProperty(Object.getPrototypeOf(obj), prop, val);
  }
}
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