/* Problem:
Input: two strings
Output: number

Examples:
'GGACTGA', 'GGATGA' -> 0
'GGACGG' -> 'AGGACGG' -> 6

Data structure:
String to number

Algorithm:
1. Find shorter length strand.
2. Create counter.
2. Compare each character by index for length of shorter length strand.
3. If not the same character, add to counter.
4. Return counter.

*/
class DNA {
  constructor(strand) {
    this.strand = strand;
  }

  hammingDistance(strand2) {
    let shortLength = Math.min(this.strand.length, strand2.length);

    let counter = 0;
    for (let idx = 0; idx < shortLength; idx += 1) {
      if (this.strand[idx] !== strand2[idx]) {
        counter += 1;
      }
    }
    return counter;
  }
}

module.exports = DNA;
