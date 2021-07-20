/*
Problem:
Input: string
Output: string

Examples:
C -> 
  A  
 B B 
C   C
 B B
  A 

Data structure:
String -> array -> string

Algorithm:
1. Create static string of the alphabet.
2. Create makeDiamond method:
  a. Create an array to store each row.
  b. Create side space, to be the same distance as the index of letter
  c. Create middle space, to start at 0 and increment up by 1 if originally 0, then 2 if not 0.
  d. Loop from 0 to the index of the letter:
    1. Create each row. If the row index is 0: Row is equal to side space + letter + side space
    2. If row is not 0: Row is equal to side space + letter + middle space + letter + side space
  e. Add bottom half of diamond by reversing the array and concatenating the array.
  f. Return the full diamond array.
*/

class Diamond {
  static ALPHA = 'ABCDEFGHIJKLMNOPRSTUVWXYZ';

  static makeDiamond(letter) {
    let array = [];
    let sideSpace = Diamond.ALPHA.indexOf(letter);
    let middleSpace = 0;
      
    for (let idx = 0; idx <= Diamond.ALPHA.indexOf(letter); idx += 1) {
      let row = ' '.repeat(sideSpace) + Diamond.ALPHA[idx] + ' '.repeat(sideSpace);
      if (idx !== 0) {
        row = ' '.repeat(sideSpace) + Diamond.ALPHA[idx] + ' '.repeat(middleSpace)
         + Diamond.ALPHA[idx] + ' '.repeat(sideSpace);
      }
      array.push(row);
      sideSpace -= 1;
      middleSpace += (idx === 0) ? 1 : 2;
    }

    array = Diamond.reverse(array);
    return `${array.join('\n')}\n`;
  }

  static reverse(array) {
    return array.concat(array.slice(0, -1).reverse());
  }
}

module.exports = Diamond;