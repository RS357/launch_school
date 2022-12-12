/*
 Object.assign

Object.assign = function(target, ...sources) {
  sources.forEach(obj => {
    let keys = Object.keys(obj);
    keys.forEach(key => target[key] = obj[key]);
  });

}

Object.keys = function(obj) {
  let keys = [];
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop) && obj.propertyIsEnumerable(prop)) {
      keys.push(prop)
    }
  }
  return keys;
}

Object.values = function(obj) {
  let keys = [];
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop) && obj.propertyIsEnumerable(prop)) {
      keys.push(obj[prop])
    }
  }
  return keys;
}

Object.prototype.hasOwnProperty = function(prop) {
  let keys = Object.keys(this);
  return keys.includes(prop);
}


Object.create = function(obj ) {
  let newObj = {};
  Object.setPrototypeOf(newObj, obj)
  return newObj;
}

Object.getPrototypeOf = function(obj) {
  return obj.__proto__;
}

Object.setPrototypeOf = function(obj, obj2) {
  obj.__proto__ = obj2;
}

*/


let obj1 = {};

let obj2 = {
  a: 1,
  b: 2,
  c: 'riz'
};

let obj3 = {};

Object.prototype.isPrototypeOf = function(obj) {
  // is this a prototype of obj? return bool
  if (Object.getPrototypeOf(obj) === null) return false;
  while (obj !== this) {
    obj = Object.getPrototypeOf(obj);
    if (obj === Object.prototype) {
      return false; 
    }
  }
   return true; 
}

Object.setPrototypeOf(obj3, obj2);

console.log(obj2.isPrototypeOf({obj3}));
