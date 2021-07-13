let Account = (function() {
  let first;
  let last;
  let em;
  let pwd;

  anonymize = function() {
    let alphaNum = 'abcdefghijklmnopqrstuvwyz0123456789';
    let newDisplayName = ''
    for (let idx = 0; idx < 16; idx += 1) {
      newDisplayName += alphaNum.charAt(Math.floor(Math.random() * alphaNum.length));
    }
    return newDisplayName;
  }

  validPassword = function(currentPwd) {
    return pwd === currentPwd;
  }

  return {
    init(email, password, firstName, lastName) {
      first = firstName;
      last = lastName;
      em = email;
      pwd = password;
      this.displayName = anonymize();
      return this;
    },
    email: function(currentPwd) {
      if (validPassword(currentPwd)) {
        return em;
      } else {
        return 'Invalid Password';
      }
    },
    resetPassword: function(currentPwd, newPwd) {
      if (validPassword(currentPwd)) {
        pwd = newPwd;
        return true;
      } else {
        return 'Invalid Password';
      }
    },
    firstName: function(currentPwd) {
      if (validPassword(currentPwd)) {
        return first;
      } else {
        return 'Invalid Password';
      }
    },
    lastName: function(currentPwd) {
      if (validPassword(currentPwd)) {
        return last;
      } else {
        return 'Invalid Password';
      }
    },
    reanonymize: function(currentPwd) {
      if (validPassword(currentPwd)) {
        let newDisplayName = anonymize();
        this.displayName = newDisplayName;
        return true;
      } else {
        return 'Invalid Password';
      }
    },
  }
})();

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password'
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false

let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.email('abc'));                  // logs 'Invalid Password'