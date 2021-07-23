"use strict";

/*
Problem:
Input: number or array
Output: number or array

Examples:
let ll = SimpleLinkedList();
ll.push(1);
ll.push(2);
ll.push(3);
ll -> {val: 1, nextVal: { val: 2, nextVal: { val: 3, nextVal: null }}}

let ll = SimpleLinkedList().fromArray([1, 2, 3])
ll -> {val: 1, nextVal: { val: 2, nextVal: { val: 3, nextVal: null }}}


Data structure:
Add the number into a linked list structure.

Algorithm:
Creating each element:
1. Each element needs a value and an optional next value. If there is no 
next value, it will be `null`.

Creating the Singly Linked List:
1. When first creating the list, it needs a `head` and a `length` property.
2. Push Method:
  a. Set the `head` to new element argument.
  b. Add 1 to the lenght property.
3. Pop Method:
  a. Store the current head.
  a. Set the `head` to the next Value.
  b. Return the current head.
4. fromArray Method:
  a. Check if the array is `null` and set it to [].
  b. Create a new linked list
  c. Iterate through the array in reverse and push it into the linked list.
    (It needs to be in reverse because its LIFO)
  d. Return the ll.
5. toArray Method:
  a. Create an empty array.
  b. Create a `current` var to store the head.
  c. Loop while `current` has a value:
    1. Push the current value (the head) to the array.
    2. Set the `current` to `current.next`
  d. Return the array.
*/

class Element {
  constructor(value, nextVal = null) {
    this.value = value;
    this.nextVal = nextVal;
  }

  datum() {
    return this.value;
  }

  isTail() {
    return !this.next();
  }

  next() {
    return this.nextVal;
  }
}


class SimpleLinkedList {
  static fromArray(array) {
    array = array || [];
    let ll = new SimpleLinkedList();

    array.slice().reverse().forEach(item => ll.push(item));
    return ll;
  }

  constructor() {
    this.head = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  peek() {
    let head = this.head;
    return head ? head.datum() : null;
  }

  getHead() {
    return this.head;
  }

  push(item) {
    this.head = new Element(item, this.getHead());
    this.length += 1;
  }

  size() {
    return this.length;
  }

  next() {
    return this.head.next();
  }

  pop() {
    let popped = this.peek();
    this.head = this.next();
    this.length -= 1;
    return popped;
  }

  print() {
    let current = this.head;

    while (current) {
      console.log(current.value);
      current = current.next();
    }
  }

  toArray() {
    let array = [];
    let current = this.head;

    while (current) {
      array.push(current.datum());
      current = current.next();
    }
    return array;
  }

  reverse() {
    let rll = new SimpleLinkedList();
    let current = this.getHead();

    while (current) {
      rll.push(current.datum());
      current = current.next();
    }
    return rll;
  }
}

module.exports = {
  SimpleLinkedList,
  Element,
};
