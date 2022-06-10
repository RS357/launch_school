// Exercises

// 1) "John" + " Doe"

// 2)
let num = 4936
let thousands = parseInt(num / 1000); 
let hundreds = parseInt(num / 100) % 10
let tens = parseInt(num / 10) % 10
let ones = num % 10

// 3)
// string, boolean, number, number, undefined, object

// 4) The 10 is implicitly coerced to string String type. 

// 5) 
// console.log(Number('5') + 10);

// 6)
console.log(`The value of 5 + 10 is ${Number(5) + 10}.`);

// 7) No = the access method will return undefined

//8) let names = [ "asta", "butterscotch", "pudding", "neptune", "darwin" ];

// 9) 

let names = {
  asta: "dog",
  butterscotch:	"cat",
  pudding:	"cat",
  neptune:	"fish",
  darwin:	"lizard",
}

// 10) false

// 11) 3

// 12)  true 



    assert.deepEqualassert.deepEqual(letterCount("codewars"), {"a": 1, "c": 1, "d": 1, "e": 1, "o": 1, "r": 1, "s": 1, "w": 1});
    assert.deepEqual(letterCount("activity"), {"a": 1, "c": 1, "i": 2, "t": 2, "v": 1, "y": 1});
    assert.deepEqual(letterCount("arithmetics"), {"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2});
    assert.deepEqual(letterCount("traveller"), {"a": 1, "e": 2, "l": 2, "r": 2, "t": 1, "v": 1});
    assert.deepEqual(letterCount("daydreamer"), {"a": 2, "d": 2, "e": 2, "m": 1, "r": 2, "y": 1});


