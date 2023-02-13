let readline = require('readline-sync');
"use strict";

/*
Function.prototype.bind is a method on all function objects
that allows us to hard-bind a function to a particular object.
The way this works is that you pass a context object to the bind
method and it returns a new function that is
essentially the same function but hard-bound to the
context object supplied.

Create a function myBind, that accepts two arguments:
1) The function to bind,

2) The context object, and returns a new function that's
hard-bound to the passed in context object.
*/

// function myBind(func, context) {
//   return (args) => func.apply(context, ...args);
// }

/*
Alter the myBind function written in the previous exercise
to support partial function application of additional
arguments to the original function.
*/

// function myBind(func, context, ...firstArgs) {
//   return function(...moreArgs) {
//     return func.apply(context, firstArgs.concat(moreArgs));
//   }
// }

/*
myStack
*/

// function newStack() {
//   let stack = [];

//   return {
//     push(val) {
//       stack.push(val);
//     },

//     pop() {
//       return stack.pop();
//     },

//     printStack() {
//       stack.forEach(val => console.log(val));
//     }
//   };
// }

/*
Delegate

Write a delegate function that can be used to delegate the
behavior of a method or function to another object's method.
delegate takes a minimum of two arguments:
(1) the object and
(2) name of the method on the object.
The remaining arguments, if any, are passed — as arguments — to
the objects' method that it delegates to.

Note that this is not the same as using bind.
bind returns a new function, whereas delegate maintains the reference.

*/

// function delegate(obj, func, ...args) {
//   return () => obj[func](...args);
// }


// let foo = {
//   name: 'test',
//   bar: function(greeting) {
//     console.log(greeting + ' ' + this.name);
//   },
// };

// let baz = {
//   qux: delegate(foo, 'bar', 'hello'),
// };

// baz.qux();   // logs 'hello test';

// foo.bar = function() {
//   console.log('changed');
// };

// baz.qux();          // logs 'changed'

// let readline = require('readline-sync');

// let Account = {
//   anonymize() {
// let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
//     "abcdefghijklmnopqrstuvwxyz0123456789";
//     let displayName = '';
//     for (let idx = 0; idx < 16; idx += 1) {
//       let charsIdx = Math.floor(Math.random() * chars.length); 
//       displayName += chars[charsIdx];
//     }
//      return displayName;
//   },

//   init(email, password, firstName, lastName) {
//     let displayName = this.anonymize();
//     return (() => {
//       return {
//         displayName: displayName,
//         firstName(enteredPassword) {
//           if (enteredPassword === password) {
//             return firstName;
//           } else {
//             return 'Invalid Password';
//           }
//         },

//         lastName(enteredPassword) {
//           if (enteredPassword === password) {
//             return lastName;
//           } else {
//             return 'Invalid Password';
//           }
//         },

//         email(enteredPassword) {
//           if (enteredPassword === password) {
//             return email;
//           } else {
//             return 'Invalid Password';
//           }
//         },

//         reanonymize(currentPassword) {
//           if (currentPassword !== password) {
//             return 'Invalid Password';
//           }
// let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
// "abcdefghijklmnopqrstuvwxyz0123456789";
//           let newDisplayName = '';
//           for (let idx = 0; idx < 16; idx += 1) {
//             let charsIdx = Math.floor(Math.random() * chars.length);
//             newDisplayName += chars[charsIdx];
//           }
//           this.displayName = newDisplayName;
//           return true;
//         },

//         resetPassword(currentPassword, newPassword) {
//           if (currentPassword !== password) {
//             return 'Invalid Password';
//           } else {
//             password = newPassword;
//             return true;
//           };
//         },
//       }
//     })();
//   },
// }

// let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
// console.log(fooBar.firstName);                     // returns the firstName function
// console.log(fooBar.email);                         // returns the email function
// console.log(fooBar.firstName('123456'));           // logs 'foo'
// console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
// console.log(fooBar.displayName);                   // logs 16 character sequence
// console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password'
// console.log(fooBar.resetPassword('123456', 'abc')) // logs true

// let displayName = fooBar.displayName;
// fooBar.reanonymize('abc');                         // returns true
// console.log(displayName === fooBar.displayName);   // logs false

// let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
// // Note that the foillowing two lines of code are correct as written.
// // There are no mistakes. We are attempting to demonstrate that the
// // code does not work as might be intended.
// console.log(fooBar.firstName('abc'));           // logs 'baz' but should log foo.
// console.log(fooBar.email('abc'));               // 'baz@qux.com' but should 'foo@bar.com'


// // Mini Inventory Management System

// function sKUCodeValidator(itemName, category, skuCode) {
//   if (itemName[2] === ' ') {
//     return skuCode === (itemName.slice(0, 2) +
//     itemName[3] + category.slice(0, 2));
//   } else {
//     return skuCode === (itemName.slice(0, 3) + category.slice(0, 2));
//   }
// }

// function itemNameValidator(itemName) {
//   return typeof itemName === 'string' &&
//     itemName.split('').filter(char => char !== ' ').join('').length >= 5;
// }

// function categoryValidator(category) {
//   return (category.split('').every(char => char !== ' ') && category.length  >= 5);
// }

// function quantityValidator(quantity) {
//   return typeof quantity !== undefined;
// }

// let itemCreator = function(itemName, category, quantity, skuCode, items) {
//   let itemPropertiesValid = sKUCodeValidator(itemName, category, skuCode) &&
//                                 itemNameValidator(itemName) &&
//                                 categoryValidator(category) &&
//                                 quantityValidator(quantity);

//   if (itemPropertiesValid) {
//     let item = {
//       skuCode: skuCode.toUpperCase(),
//       itemName,
//       category,
//       quantity
//     };

//     items.push(item);
//   } else {
//     return {notValid: 'true'};
//   }
// };

// let ItemManager = (() => {

//   function createSKUCode(itemName, category) {
//     let skuCode;
//     if (itemName[2] === ' ') {
//       skuCode = (itemName.slice(0, 2) + itemName[3] + category.slice(0, 2));
//     } else {
//       skuCode = (itemName.slice(0, 3) + category.slice(0, 2));
//     }
//     return skuCode;
//   }

//   function itemsContains(skuCode, items) {
//     return items.filter(item => item.skuCode === skuCode).length > 0;
//   }

//   function incrementItemQuantity(skuCode, quantity, items) {
//     for (let item of items) {
//       if (item.skuCode === skuCode) {
//         item.quantity += quantity;
//         break;
//       }
//     }
//   }

//   function getItem(skuCode, items) {
//     let filtered = items.filter(item => item.skuCode === skuCode)[0];
//     return filtered;
//   }

//   return {
//     items: [],

//     create(itemName, category, quantity) {
//       let skuCode = createSKUCode(itemName, category);
//       if (itemsContains(skuCode, this.items)) {
//         incrementItemQuantity(skuCode, quantity, this.items);
//       } else {
//         let itemCreated = itemCreator(
//           itemName,
//           category,
//           quantity,
//           skuCode,
//           this.items
//         );

//         if (itemCreated && itemCreated.hasOwnProperty('notValid')) {
//           return false;
//         }
//       }
//     },

//     update(skuCode, obj) {
//       let item = getItem(skuCode, this.items);
//       Object.assign(item, obj);
//     },

//     delete(skuCode) {
//       let item = getItem(skuCode, this.items);
//       let itemIdx = this.items.indexOf(item);
//       this.items.splice(itemIdx, 1);
//     },

//     inStock() {
//       return this.items.filter(item => item.quantity > 0);
//     },

//     itemsInCategory(category) {
//       return this.items.filter(item => item.category === category);
//     }
//   };
// })();

// let ReportManager = {
//   init(itemManager) {
//     this.items = itemManager;
//   },

//   createReporter(skuCode) {
//     let item = this.items.items.filter(item => item.skuCode === skuCode)[0];
//     return {
//       itemInfo() {
//         Object.keys(item).forEach(key => console.log(`${key}: ${item[key]}`));
//       },
//     };
//   },

//   reportInStock() {
//     let inStockItems = this.items.items.filter(item => {
//       return  item.quantity > 0;
//     }).map(item => {
//       return item.itemName;
//     });
//     console.log(inStockItems.join(","));
//   }
// };

// ItemManager.create('basket ball', 'sports', 0);           // valid item
// ItemManager.create('asd', 'sports', 0);
// ItemManager.create('soccer ball', 'sports', 5);           // valid item
// ItemManager.create('football', 'sports');
// ItemManager.create('football', 'sports', 3);              // valid item
// ItemManager.create('kitchen pot', 'cooking items', 0);
// ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// // returns list with the 4 valid items
// ItemManager.items;

// ReportManager.init(ItemManager);
// // logs soccer ball,football,kitchen pot
// ReportManager.reportInStock();

// ItemManager.update('SOCSP', { quantity: 0 });
// // returns list with the item objects for football and kitchen pot
// ItemManager.inStock();
// // football,kitchen pot
// ReportManager.reportInStock();

// // returns list with the item objects for basket ball, soccer ball, and football
// ItemManager.itemsInCategory('sports');

// ItemManager.delete('SOCSP');
// // returns list the remaining 3 valid items (soccer ball is removed from the list)
// ItemManager.items;

// let kitchenPotReporter = ReportManager.createReporter('KITCO');
// kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 3

// ItemManager.update('KITCO', { quantity: 10 });
// kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 10

// Rest Parameters

// function sum(...arr) {
//   return arr.reduce(function(a, b) {
//     return a + b;
//   });
// }

// console.log(sum(1, 4, 5, 6)); // 16

/*
How can we refactor the invocation of the function formatName
(without changing the function definition) so that we
don't need to grab each element of the array fullName by index?
*/

// function formatName(firstName, middleName, lastName) {
//   return `${lastName}, ${firstName} ${middleName[0]}.`;
// }

// fullName = ['James', 'Tiberius', 'Kirk'];

// console.log(formatName(...fullName));
// // logs: Kirk, James T.