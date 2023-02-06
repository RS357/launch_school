


// class Foo {
//   constructor(prefix) {
//     this.prefix = prefix;
//   }

//   showItem(item) {
//     console.log(this.prefix, item);
//   }
// }

// let foo = new Foo("Item: ");

// forEach(["a", "b", "c"], item => console.log(item));
// forEach([1, 2, 3], foo.showItem, foo);
// forEach([4, 5, 6], foo.showItem);

function forEach(array, callBack, thisArg) {
  for (let index = 0; index < array.length; index += 1) {
    callBack.call(thisArg, array[index], index, array);
  }
}

forEach(["a", "b", "c"], function(value, index, arr) {
  console.log(`After ${value} comes ${arr[index + 1]}`);
});