/*
Problem:
Input: number
Output: string or error

Examples:
-1 -> error
13 -> deficient
28 -> perfect
12 -> abundant

Data structure:
Use the number and create an array based on its divisors and check if its sum equals.
Return a string.

Algorithm:
1. Check if number is below 0, if so throw error.
2. Create an empty array to store divisors.
3. Iterate from 1 to the number
  a. Find all divisors that are able to divide evenly.
  b. Push to divisors.
4. Sum up all divisors.
5. If sum is larger than number -> abundant
  Else if sum is smaller than number --> deficient
  Else -> perfect
*/

class PerfectNumber {
  static classify(number) {
    if (number < 0) throw new Error('No negative numbers!')

    let divisors = [];

    for (let num = 1; num < number; num += 1) {
      if (number % num === 0) {
        divisors.push(num);
      }
    }
    let sum = divisors.reduce((sum, num) => sum + num, 0);

    if (sum > number) {
      return 'abundant';
    } else if (sum < number) {
      return 'deficient';
    } else return 'perfect';
  }
}

module.exports = PerfectNumber;