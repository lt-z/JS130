/*
Problem:
Input: number (verse), or two numbers
Output: string

Examples:
99 -> "99 bottles of beer on the wall, 99 bottles of beer.\n" +
      "Take one down and pass it around, 98 bottles of beer " +
      "on the wall.\n";

Data structure:
Keep as a string. If multiple verses: string -> array -> string.

Algorithm:
1. Verse method:
  a. If it is 0, return the appropriate string.
  b. Return the template literal string based on the number.

2. Verses method:
  Two inputs: start and last.
  Create an empty array.
  Iterate from start to last:
    Push the verse based on its iteration number.
  Return the joined array.

3. Whole song:
  a. Return Verses method with start = 99 and last = 0.
*/

class BeerSong {
  static verses(first, last) {
    let arr = [];

    for (let idx = first; idx >= last; idx -= 1) {
      arr.push(BeerSong.verse(idx))
    }
    return arr.join('\n');
  }

  static verse(number) {
    if (number === 0) {
      return "No more bottles of beer on the wall, no more " +
      "bottles of beer.\nGo to the store and buy some " +
      "more, 99 bottles of beer on the wall.\n"
    } else {
      return `${number} ${number !== 1 ? 'bottles' : 'bottle'} of beer on the wall, ${number} ${number !== 1 ? 'bottles' : 'bottle'} of beer.
Take ${number !== 1 ? 'one' : 'it'} down and pass it around, ${number - 1 !== 0 ? number - 1 : 'no more'} ${number -1 !== 1 ? 'bottles' : 'bottle'} of beer on the wall.\n`
    }
  }

  static lyrics() {
    return BeerSong.verses(99, 0);
  }
}

module.exports = BeerSong;
