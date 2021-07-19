/*
Problem:
Input: string
Output: number

Examples:
'quirky' -> 22
'alacrity' -> 13

Data structure:
Convert string to a number

Algorithm:
1. Create a static object to store the characters and its points.
2. Create a static method to calculate the score, which takes the word argument.
  1. If there is no word or the word includes a space, return 0 points
  2. Iterate through the word and sum up the points based on the static object.
  3. Return the sum.
3. Create a instance method which returns the static method.
*/

class Scrabble {
  constructor(word) {
    this.word = word;
  }

  static ALPHA_POINTS = {
    a: 1, b: 3, c: 3, d: 2, e: 1, f: 4, g: 2, h: 4, i: 1, j: 8, k: 5, l: 1, m: 3, n: 1,
    o: 1, p: 3, q:10, r: 1, s: 1, t: 1, u: 1, v: 4, w: 4, x: 8, y: 4, z:10,
  };

  static score(word) {
    if (!word || word.includes(' ')) return 0;

    return word.toLowerCase().split('').reduce((sum, char) => {
      sum += Scrabble.ALPHA_POINTS[char];
      return sum;
    }, 0);
  }

  score() {
    return Scrabble.score(this.word);
  }

}

module.exports = Scrabble;