/* Problem:
Input: string, number
Output: array with nested arrays.

Examples:
series = '92834', slice = 1
-> [[9], [2], [8], [3], [4]]

series = '01234', slice = 3
-> [[0, 1, 2], [1, 2, 3], [2, 3, 4]]

Data structure:
Convert series to an array.

Algorithm:
1. Slices method:
  a. Check if series length is smaller than slice length: if so, throw error.
  b. Convert string into an array of numbers.
  c. Create an empty array.
  d. Loop from 0 to length of array - # of digits per slice
    Slice from current index to index + # of digits per slice and push to array.
  Return array
*/

class Series {
  constructor(string) {
    this.string = string;
  }

  slices(number) {
    if (this.string.length < number) throw new Error;
    let numString = this.string.split('').map(Number);
    let arr = [];

    for (let idx = 0; idx <= numString.length - number; idx += 1) {
        arr.push([...numString.slice(idx, idx + number)]);
    }
    return arr;
  }
}

module.exports = Series;