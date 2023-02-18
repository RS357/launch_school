
"use strict"
// 1)

// function makeCounterLogger(num1) {
//   return function(num2) {
//     while (num1 !== num2) {
//       console.log(num1);
//       if (num1 < num2) {
//         num1 += 1;
//       } else {
//         num1 -= 1;
//       }
//       if (num1 === num2) console.log(num1);
//     }
//   }
// }

// let countlog = makeCounterLogger(5);
// // countlog(8);s
// // // 5
// // // 6
// // // 7
// // // 8

// countlog(2);
// // 5
// // 4
// // 3
// // 2

// 2)

/* eslint-disable */

function makeList() {
  let list = [];

  return {
    add(item) {
      let idx = list.indexOf(item);
      if (idx === -1) {
        console.log(`${item} added!`);
        list.push(item);
      }
    },
    
    remove(item) {
      let idx = list.indexOf(item);
      if (idx !== -1) {
        let removed = list.splice(idx, 1);
        console.log(`${removed} removed!`);
      }
    },

    list() {
      if (list.length === 0) {
        console.log('The list is empty');
      } else {
        list.forEach(item => console.log(item));
      }
    }
  }
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