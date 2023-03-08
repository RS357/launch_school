/*eslint-disable */
/*
1) 42, 43, undefined 
2) 1, ReferenceError: b is not defined
3) undefined

4)----------------------------------------------------
let foo1 = 1;        // declared scope is block scope
var bar1 = 2;        // declared scope is function scope

if (true) {
  let foo2 = 3;      // declared scope is block scope
  var bar2 = 4;      // declared scope is function scope
}

function xyzzy() {  // declared scope is function scope
  let foo3 = 5;     // declared scope is block scope
  var bar3 = 6;     // declared scope is function scope

  if (true) {
    let foo4 = 7;   // declared scope is block scope
    var bar4 = 8;   // declared scope is function scope
  }
}
-------------------------------------------------------


5) --------------------------------------------------
let foo1 = 1;        // visibility scope is global
var bar1 = 2;        // visibility scope is global

if (true) {
  let foo2 = 3;      // visibility scope is local (local block)
  var bar2 = 4;      // visibility scope is global
}

function xyzzy() {  // visibility scope is global
  let foo3 = 5;     // visibility scope is local (local function)
  var bar3 = 6;     // visibility scope is local (local function)

  if (true) {
    let foo4 = 7;   // visibility scope is local (local block)
    var bar4 = 8;   // visibility scope is local (local function)
  }
}
---------------------------------------------------------------------------

6)-------------------------------------------------------------------

let foo1 = 1;     // outer scope of xyzzy, outer scope of if block on line 3

if (true) {
  let foo2 = 3;   // inner scope of if block on line 3
}

function xyzzy() {
  let foo3 = 5;   // inner scope of xyzzy, outer scope of if block on line 10

  if (true) {
    let foo4 = 7; // inner scope of if block on line 10
  }
}
--------------------------------------------------------------------
7)
var bar1 = 1;     // outer scope of xyzzy, outer scope of if block on line 3

if (true) {
  var bar2 = 3;   // outer scope of xyzzy, outer scope of if block on line 3
}

function xyzzy() {
  var bar3 = 5;   // inner scope of xyzzy, outer scope of if block on line 10

  if (true) {
    var bar4 = 7; // inner scope of xyzzy, outer scope of if block on line 10
  }
}

--------------------------------------------------------------------
8)
function getName() {
  return "Pete";
}

console.log(getName());

-----------------------------------------------
9)

console.log(bar); // undefined
var bar = 3;
console.log(bar); // 3

------------------------------------------------------------------------------

10)

console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
let foo;

----------------------------------------------------------------------

11)

console.log(qux); // ReferenceError: Cannot access 'qux' before initialization
const qux = 42;

--------------------------------------------------------------------------------

12)

console.log(baz); // ReferenceError: baz is not defined

--------------------------------------------------------------------------------

13)
function hello() {
  return 'hello world';
}

console.log(hello());      // logs "hello world"

-----------------------------------------------------------------------

14)

var hello;

console.log(hello());    // raises "TypeError: hello is not a function"

hello = function () {
  return 'hello world';
};

------------------------------------------------------------------------------

15)

function bar() {
  console.log('world');
}

bar();
bar = 'hello';

-----------------------------------------------------------------------------

16)

function bar() {
  console.log('world');
}

bar = 'hello';
bar();

--------------------------------------------------------------------------------

17)

function bar() {
  console.log(foo);
}

var foo;

bar();          // logs undefined
foo = 'hello';

------------------------------------------------------------------------------

18)

When the creation phase reaches the
function declaration on lines 3-5, JavaScript already
knows about the foo identifier, so it complains that
foo has already been declared. The error occurs on line 3, not line 1.

------------------------------------------------------------------------------

19) Do all the problems at "Practice Problemns: Hoisting and the var Statement"
https://launchschool.com/lessons/43f23069/assignments/39f50f91

--------------------------------------------------------------------------------

20)

"use strict";

function foo() {
  bar = 3.1415; // ReferenceError: bar is not defined
}

foo();
console.log(bar);

------------------------------------------------------------------------------

21)

"use strict";

let obj = {
  a: 5,
  go() {
    this.a = 42; // TypeError: Cannot set property 'a' of undefined
  },
};

let doIt = obj.go;
doIt();
console.log(obj.a); // 5

-----------------------------------------------------------------------

22)

"use strict";

function Child(age) {
  this.age = age;
};

Child.prototype.setAge = function(newAge) {
  age = newAge; // ReferenceError: age is not defined
}

let leigh = new Child(5);
leigh.setAge(6);
console.log(leigh.age);

-------------------------------------------------------------------------------

23)

"use strict";

console.log(1234567);   // 1234567
console.log(0);         // This is okay
console.log(0.123);     // So is this
console.log(-0.123);    // So is this
console.log(01234567);  // SyntaxError: Octal literals are not allowed in strict mode.
console.log(089);       // SyntaxError: Numbers can't begin with 0
console.log(01.23);     // SyntaxError: Numbers can't begin with 0
console.log(-01234567); // SyntaxError: Octal literals are not allowed in strict mode.
console.log(-089);      // SyntaxError: Numbers can't begin with 0
console.log(-01.23);    // SyntaxError: Numbers can't begin with 0

------------------------------------------------------------

24) Practice problem at the end of this gist:
https://launchschool.com/gists/406ba491

--------------------------------------------------------------------------------


25) 'riz'

----------------------------------------------------------------------

26)

let incrementCounter1 = makeCounter();
let incrementCounter2 = makeCounter();

console.log(incrementCounter1()); // 1
console.log(incrementCounter1()); // 2
console.log(incrementCounter1()); // 3

console.log(incrementCounter2()); // 1
console.log(incrementCounter2()); // 2

console.log(incrementCounter1()); // 4

---------------------------------------------------------------------

27) no

Here, console.log takes exactly one argument and the function
returned by makeLogger also takes exactly one argument.
Since there is no difference in the number of arguments,
we don't have partial function application.

Remember: If the number of arguments isn't rduced, it isn't partial
function application

------------------------------------------------------------------

28)

Yes.

In this case, we only need to pass one argument to the function
returned by makeLogger. That function, in turn, calls console.log
with two arguments, so it is partial function application.

The number of arguments has to be reduced for it to be
partial function application.

-------------------------------------------------------------------

29) Practice problems: closures at
https://launchschool.com/lessons/43f23069/assignments/9362d2cf

-----------------------------------------------------------------

30) Private data practice problems at:
https://launchschool.com/lessons/43f23069/assignments/3df10c91

-------------------------------------------------------------

31) 
practice problems at https://launchschool.com/lessons/43f23069/assignments/a200fbec

-------------------------------------------------------------

32) The function has no side effects 

function insertNumberInOrder(arrayOfNumbers) {
  arrayOfNumbers = arrayOfNumbers.slice(); // creates a copy of an array
  arrayOfNumbers.push(arrayOfNumbers); // not a side effect since copy of array
  arrayOfNumbers.sort((a, b) => a - b); // sort has **local** side effects
  return arrayOfNumbers; // function has no side effect
}



*/