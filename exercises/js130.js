let readline = require('readline-sync');
"use strict"

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
//     let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
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
//           let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
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


// Mini Inventory Management System

let ItemManager = (() => {
  let itemStore = {};

  function sKUCodeValidator(itemName, category, SKUCode) {
    if (itemName[2] === ' ') {
      return SKUCode === (itemName.slice(0, 2) + itemName[3] + category.slice(0, 2)); 
    } else {
      return SKUCode === (itemName.slice(0, 3) + category.slice(0, 2)); 
    }
  };
  function itemNameValidator(itemName) {
    return true;
  };
  function categoryValidator(category) {return true};
  function quantityValidator(quantity) {
    return typeof quantity === 'number';
  };

  function itemCreator(itemName, category, quantity, SKUCode) {
    if (sKUCodeValidator(itemName, category, SKUCode) && itemNameValidator(itemName) 
    && categoryValidator(category) && quantityValidator(quantity)) {
      itemStore[SKUCode] = {
        itemName,
        category,
        totalQuantity: quantity
      }
      return true;
    } else {
      return false;
    }
  };

  function createSKUCode(itemName, category) {
    if (itemName[2] === ' ') {
      return (itemName.slice(0, 2) + itemName[3] + category.slice(0, 2)); 
    } else {
      return (itemName.slice(0, 3) + category.slice(0, 2)); 
    }
  };

  return {
    items: [],

    logItemStore() { // DELETE THIS FUNCTION AFTER DONE
      console.log(itemStore);
    },

    create(itemName, category, quantity) {
      let SKUCode = createSKUCode(itemName, category);
      if (itemStore.hasOwnProperty(SKUCode)) {       
        itemStore[SKUCode].totalQuantity += quantity;
      } else {
        let itemCreated = itemCreator(itemName, category, quantity, SKUCode);
        console.log('itemCreated?', itemCreated);
        if (itemCreated) {
          this.items.push(itemName);
        } else {
          return false;
        }
      }
    },

    update(SKUCode, obj) {},
    delete(SKUCode) {},
    inStock() {},
    itemsInCategory(category) {}
  }
})()

ItemManager.create('basket ball', 'sports', 0);           // valid item
// ItemManager.create('asd', 'sports', 0);
// ItemManager.create('soccer ball', 'sports', 5);           // valid item
// ItemManager.create('football', 'sports');
// ItemManager.create('football', 'sports', 3);              // valid item
// ItemManager.create('kitchen pot', 'cooking items', 0);
// ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
console.log(ItemManager.items);

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