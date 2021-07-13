function myBind(func, context, ...args) {
  let boundArgs = args; // [5]
  return (...funcArgs) => {
    let allArgs = [...boundArgs, ...funcArgs]; []
    return func.apply(context, allArgs);
  }
}

function addNumbers(a, b) {
  return a + b;
}
                      // func, context, arg
let addFive = myBind(addNumbers, null, 5);

console.log(addFive(10)); // 15
