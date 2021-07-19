/*
Problem:
Input: number (and array)
Output: number

Examples:
multiples of 3/5 to 4 -> 3
multiples of 3/5 to 10 -> 23
multiples of 7, 13, 17 to 20 -> 51

Data structure:
Keep as a number.

Algorithm:
1. Create static method:
  Create an instance object
  Since there is no argument use [3, 5]
  Return instance method below.

2. Create instance method:
  a. Create empty array to store multiples.
  b. Iterate from 1 to the number (exclusive)
    1. If the current number is divisible by any of the numbers in the multipleArray:
      Push to array.
  c. Return sum of the array.
*/

class SumOfMultiples {
  constructor(...multiples) {
    this.multiArray = (multiples.length > 0) ? multiples : [3, 5];
  }

  static to(number) {
    let obj = new SumOfMultiples();
    return obj.to(number);
  }

  to(number) {
    let arr = [];

    for (let idx = 1; idx < number; idx += 1) {
      if (this.multiArray.some(num => idx % num === 0)) {
        arr.push(idx);
      }
    }
    return arr.reduce((sum, num) => sum + num, 0);
  }
}

module.exports = SumOfMultiples;