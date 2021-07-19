/*
Problem:
Input: number
Output: string

Examples:
1 -> I
93 -> XCIII

Data structure:
Number to string

Algorithm:
1. Create a static object to store each numeral and its respective value.
2. Create the method `toRoman`.
  a. Create a variable to store the roman letters.
  b. Loop through the static object.
    1. While the current number is larger or equal to the object value:
      Add the roman letter to the `roman` variable.
      Subtract the object value from the current number.
  Return the roman letters.
*/

class RomanNumeral {
  constructor(number) {
    this.number = number;
  }

  static NUMERAL_OBJ = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  toRoman() {
    let roman = '';

    for (let numeral in RomanNumeral.NUMERAL_OBJ) {
      while (this.number >= RomanNumeral.NUMERAL_OBJ[numeral]) {
        roman += numeral;
        this.number -= RomanNumeral.NUMERAL_OBJ[numeral];
      }
    }
    return roman;
  }
}

module.exports = RomanNumeral;
