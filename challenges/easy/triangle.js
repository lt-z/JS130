"use strict";

/*
Problem:
Input: three numbers (lengths)
Output: 'equilatera', 'isosceles', 'scalane', or 'invalid'

Examples:
4, 4, 4 => equilateral

Data Structure:
Convert number to string

Algorithm:
Check if valid triangle:
1. all sides over 0.
2. if side 1 + side 2 > side 3
or if side 2 + side 3 > side 1
or if side 1 + side 3 > side 2

Determine type:
1. If valid triangle:
  If all sides equal to one side -> equilateral
  Else if any two sides equal -> isosceles
  Else -> scalene
*/

class Triangle {
  constructor(side1, side2, side3) {
    this.arr = [side1, side2, side3];

    if (!this.isValidTriangle()) {
      throw new Error('Invalid triangle')
    }
  }

  isValidTriangle() {
    let [side1, side2, side3] = this.arr.sort((a, b) => a - b);
    if (this.arr.every(side => side > 0) &&
      (side1 + side2) > side3) {
        return true;
      }
    return false;
  }

  kind() {
    let [side1, side2] = this.arr;
    if (this.arr.every(side => side === side1)) {
      return 'equilateral';
    } else if (this.arr.filter(side => side === side1).length === 2 ||
    this.arr.filter(side => side === side2).length === 2) {
      return 'isosceles';
    } else {
      return 'scalene'
    }
  }
}

module.exports = Triangle;