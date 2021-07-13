function newStack() {
  let stack = [];

  return {
    push: function(item) {
      stack.push(item);
    },
    pop: function() {
      return stack.pop();
    },
    printStack: function() {
      stack.forEach(item => {
        console.log(item);
      })
    }
  }
}

let testStack = newStack();
testStack.push('1');
testStack.push('2');
testStack.push('3');

testStack.printStack();
console.log(testStack);