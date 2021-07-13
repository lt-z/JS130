function myBind(func, context) {
  return (...args) => {
    return func.apply(context, args);
  }
}

let obj = {
  foo: 'this works',
}

function test(arg) {
  return `${this.foo} ${arg}`;
}

let newFunc = myBind(test, obj);
console.log(newFunc('it does!'));