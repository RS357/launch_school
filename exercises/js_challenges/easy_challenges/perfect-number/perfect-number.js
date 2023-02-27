/* Problem: Write a method that returns 'perfect'
if the sum of divisors of number the class was
instantiated with is that same number. 

Rules:

The function should return perfect if the sum of divisors
of the number the class was instantiated with is that SAME
number. 

The function should return 'deficient' if the sum of divisors
of the number the class was instantiated with is LESS than
that number.

The function should return 'abundant' if the sum of divisors
of the number the class was instantiated with is MORE than
that number.

Algo: // given number num
if num is less than 0 throw error
create empty list, divisors
iterate through every number from 0 to num, divisor:
  if the remainder of dividing the number by the divisor is 0, push number to divisors array
create variable divisorSum and set it to the sum of numbers in divisors 
if divisorSum is less than num, return 'deficient
if divisorSum is more tha num, return 'abundant
if divisorSum is same as num, return 'perfect

*/

class PerfectNumber {

  static classify(number) {
    if (number < 0) throw new Error('number should be more than 0');
    let divisors = [];
    for (let counter = 1; counter < number; counter += 1) {
      if (number % counter === 0) {
        divisors.push(counter);
      }
    }
    let divisorSum = divisors.reduce((accum, val) => accum + val);
    if (divisorSum > number) {
      return 'abundant';
    } else if (divisorSum < number) {
      return 'deficient';
    } else return 'perfect';
  }
}

module.exports = PerfectNumber;
