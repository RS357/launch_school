// Lettercase Percentage Ratio

// let letterPercentages = str => {
//   let count = str.length;
//   let totals = {
//     lowercase: (((str.match(/[a-z]/g) || []).length / count) * 100).toFixed(
//       2
//     ),
//     uppercase: (((str.match(/[A-Z]/g) || []).length / count) * 100).toFixed(
//       2
//     ),
//     neither: (((str.match(/[^a-z]/gi) || []).length / count) * 100).toFixed(
//       2
//     ),
//   };
//   return totals;
// };

// Triangle Sides
// let isInvalid = (num1, num2, num3) => {
//   if (num1 === 0 && num2 === 0 && num3 === 0) return true;
//   let nums = [num1, num2, num3];
//   nums.sort((a, b) => (a - b));
//   if (nums[2] >= nums[0] + nums[1]) return true;
//   return false;
// };

// let isEquilateral = (num1, num2, num3) => {
//   return (num1 === num2) && (num2 === num3);
// };

// let isIsosceles = (num1, num2, num3) => {
//   if ((num1 === num2) || (num1 === num3) || (num2 === num3)) return true;
//   return false;
// };

// let isScalene = (num1, num2, num3) => {
//   if ((num1 !== num2) && (num1 !== num3) && (num2 !== num3)) return true;
//   return false;
// };

// let triangle = (num1, num2, num3) => {
//   if (isInvalid(num1, num2, num3)) return 'invalid';
//   if (isEquilateral(num1, num2, num3)) return 'equilateral';
//   if (isScalene(num1, num2, num3)) return 'scalene';
//   if (isIsosceles(num1, num2, num3)) return 'isosceles';
// };

// codewars kata 

// function minSum(arr) {
//   let products = [];
//   arr.forEach((num, index) => {
//     for (let index2 = index + 1; index2 < arr.length; index2 += 1) {
//       products.push(num * arr[index2]);
//     }
//   });
//   products.sort((a, b) => a - b);
//   console.log(`sorted products: ${products}`);
//   let smallest = products.slice(0, arr.length / 2);
//   return smallest.reduce((prev, current) => prev + current);
// }

