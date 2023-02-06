
"use strict"

/*
Create a function named makeCounterLogger that takes a number
as an argument and returns a function. When we invoke the
returned function with a second number, it should count
up or down from the first number to the second number,
logging each number to the console:
*/

// function makeCounterLogger(start) {
//   return function(finish) {
//     if (start < finish) {
//       for (let num = start; num <= finish; num += 1) {
//         console.log(num);
//       }
//     } else {
//       for (let num = start; num >= finish; num -= 1) {
//         console.log(num);
//       }
//     }
//   }
// }

// let countlog = makeCounterLogger(5);
// countlog(8);
// // 5
// // 6
// // 7
// // 8

// countlog(2);
// // 5
// // 4
// // 3
// // 2


/*
Write a makeList function that creates and returns a
new function that implements a todo list.
The returned function should have the following behavior:

When called with an argument that is not already on
the list, it adds that argument to the list.

When called with an argument that is already
on the list, it removes the element from the list.

When called without arguments, it prints all
of the items on the list.
If the list is empty, it prints an appropriate message.
*/


function makeList() {
  let items = [];

  return {
    add(item) {
      let itemIdx = items.indexOf(item);
      if (itemIdx === -1) {
        items.push(item);
        console.log(`${item} added!`);
      }
    },

    remove(item) {
      let itemIdx = items.indexOf(item);
      if (itemIdx !== -1) {
        items.splice(itemIdx, 1);
        console.log(`${item} removed`);
      }
    },

    list() {
      if (items.length === 0) {
        console.log("The list is empty.");
      } else {
        items.forEach(item => console.log(item));
      }
    }
  };
}

let list = makeList();
list.add("peas");
// peas added!

list.list();
// peas

list.add("corn");
// corn added!

list.list();
// peas
// corn

list.remove("peas");
// peas removed!

list.list();
// corn