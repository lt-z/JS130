/*
Problem:
Input: string
Output: decimal number

Examples:
233 octal -> 155
8 octal -> 0
89 octal -> 0

Data structure:
Convert string to an array then into a number.

Algorithm:
1. Create a static variable to store 8.
2. Create an array which splits the string into an array and converts each string into a number.
3. If any of the conversions becomes NaN or is equal or larger than 8, return 0.
4. Create decimalNumber and power variables
5. Iterate the array backwards
  Add to decimalNumber the conversion (number * 8 ^ power)
  Increment power by 1
6. Return the decimal number.
*/

class Octal {
  constructor(octalNum) {
    this.octalNum = octalNum;
  }

  toDecimal() {
    const OCTAL = 8;
    if (this.octalNum.match(/[^0-7]/g)) return 0;
    
    let array = this.octalNum.split('').reverse().map(Number);
    return array.reduce((sum, num, idx) => {
      sum += num * Math.pow(OCTAL, idx);
      return sum;
    });
  }
}

module.exports = Octal;
