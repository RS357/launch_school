// Q1
// let advice = "Few things in life are as important as house training your pet dinosaur.";
// console.log(`${advice.replace(/important/g, "urgent")}`);

// Q2
// let numbers = [1, 2, 3, 4, 5];
// let reversedArr = numbers.slice().reverse();
// console.log(reversedArr);
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// let numbers = [1, 2, 3, 4, 5];
// let sortedNumbers = [...numbers].sort((num1, num2) => num2 - num1);
// console.log(sortedNumbers);
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// let numbers = [1, 2, 3, 4, 5];
// let sortedArr = [];
// numbers.forEach(num => sortedArr.unshift(num));
// console.log(numbers);
// console.log(sortedArr);

// Q3)
// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];
// let number1 = 8;  // false
// let number2 = 95; // true

// console.log(numbers.includes(number1));
// console.log(numbers.includes(number2));

// Q4)
// let famousWords = "seven years ago...";
// let addition = "Four score and ";
// let firstWay = addition + famousWords;
// let secondWay = addition.concat(famousWords);
// console.log(firstWay);
// console.log(secondWay);

// Q5) 
// let arr = [1, 2, 3, 4, 5];
// let spliced = arr.splice(2, 1);
// console.log(arr);

// Q6)
// let flintstones = ["Fred", "Wilma"];
// flintstones.push(["Barney", "Betty"]);
// flintstones.push(["Bambam", "Pebbles"]);
// let newArr = [];
// newArr = newArr.concat(...flintstones);
// console.log(newArr);

// Q7)
// let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
// let newArr = Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift();
// console.log(newArr);

// Q8)
// let numbers = [1, 2, 3, 4]; // true
// let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false
// console.log(Array.isArray(numbers));
// console.log(Array.isArray(table));

// Q9)
// let title = "Flintstone Family Members";
// let titleLength = title.length;
// let tableWidth = 40;
// let spaceToAddEachSide = Math.round((tableWidth - titleLength) / 2);
// let centeredTitle = `${" ".repeat(spaceToAddEachSide)} ${title} ${" ".repeat(spaceToAddEachSide)}`;
// console.log(centeredTitle);

 // Q10)
// let statement1 = "The Flintstones Rock!";
// let statement2 = "Easy come, easy go.";

// let statement1Count = statement1.split("").filter(char => char === "t").length;
// let statement2Count = statement2.split("").filter(char => char === "t").length;
// console.log(statement1Count);
// console.log(statement2Count);

