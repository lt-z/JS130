/*
Problem:
Input: string and array
Output: array

Examples:
'master', ['stream', 'pigeon', 'maters'] -> ['maters', 'stream']

Data structure:
Keep as an array.

Algorithm:
1. Create a internal sort method to sort each word.
2. Create a `match` method to match the current word with each array word:
  a. Remove any of the same exact words in different cases from the array.
  b. Sort each word in the array and compare with the sorted current word
    If they equal, keep the word.
*/

class Anagram {
  constructor(word) {
    this.word = word;
  }

  match(array) {
    array = array.filter(word => word.toLowerCase() !== this.word.toLowerCase());
    return array.filter(word => this._sort(word) === this._sort(this.word));
  }

  _sort(word) {
    return word.toLowerCase().split('').sort().join('');
  }
}

module.exports = Anagram;