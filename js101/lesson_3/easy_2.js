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

// Q7)
// let flintstones = ["Fred", "Wilma"];
// flintstones.push(["Barney", "Betty"]);
// flintstones.push(["Bambam", "Pebbles"]);
// let newArr = flintstones.flat();
// console.log(newArr);