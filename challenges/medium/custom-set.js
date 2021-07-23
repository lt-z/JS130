"use strict";
/*
Problem:
Input: array
Output: set

Examples:
CustomSet([1, 2, 3]).contains(1) -> true
CustomSet([1, 2, 3]).isDisjoint(new CustomSet([2, 3]))

Data structure:
Keep structure as a array, manipulate as an array, and return either
a boolean or another CustomSet.

Algorithm:
1. Create a set property whose value is an empty array within the constructor.

2. isEmpty method: Check if the set length is equal to 0.
3. Contains method: Check if the set includes 0.
4. isSubset method: Check if the other set contains every number in the current set.
5. isDisjoint method: Check if the other set does not contain any numbers in the current set.
6. isSame method: Check if both sets are subsets of each.
7. add method: Check if new number is in set, if not, add to set.
8. intersection method: Filter current set to only include numbers in other set.
9. difference method: Filter current set to only include numbers NOT in other set.
10. union method: Create and store variable for difference method.
  a. return a new CustomSet to include diff set and other set.
  (diff set will include all elements only in current set)
*/

class CustomSet {
  constructor(set = []) {
    this.set = set;
  }

  isEmpty() {
    return this.set.length === 0;
  }

  contains(number) {
    return this.set.includes(number);
  }

  isSubset(otherSet) {
    return this.set.every(num => otherSet.contains(num));
  }

  isDisjoint(otherSet) {
    return !this.set.some(num => otherSet.contains(num));
  }

  isSame(otherSet) {
    return this.isSubset(otherSet) && otherSet.isSubset(this);
  }

  add(number) {
    if (!this.contains(number)) {
      this.set.push(number);
    }
    return this;
  }

  intersection(otherSet) {
    return new CustomSet(this.set.filter(num => otherSet.contains(num)));
  }

  difference(otherSet) {
    return new CustomSet(this.set.filter(num => !otherSet.contains(num)));
  }

  union(otherSet) {
    let diffSet = this.difference(otherSet)
    return new CustomSet([...diffSet.set, ...otherSet.set]);
  }

}

module.exports = CustomSet;
