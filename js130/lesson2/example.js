/*eslint-disable*/ 
'use strict';


let Account = (function() {
  let users = {};

  function generateDisplayName() {
    let displayName = '';
    let alphaNums = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    for (let counter = 0; counter < 16; counter += 1) {
      let randomIdx = Math.floor(Math.random() * alphaNums.length);
      displayName += alphaNums[randomIdx];
    }
    return displayName;
  }

  return {
    init(email, password, firstName, lastName) {
      this.displayName = generateDisplayName();
      users[this.displayName] = {
        email,
        password,
        firstName,
        lastName
      }
      return this;
    },
  
    reanonymize(password) {
      let user = users[this.displayName]
      let oldDisplayName = this.displayName;
      if (user.password === password) {
        this.displayName = generateDisplayName();
        users[this.displayName] = users[oldDisplayName];
        delete users[oldDisplayName];
        return true;
      } else {
        return "Invalid Password";
      }
    },
  
    resetPassword(currentPassword, newPassword) {
      let user = users[this.displayName]
      if (user.password === currentPassword) {
        user.password = newPassword
        return true;
      } else {
        return "Invalid Password";
      }
    },
  
    firstName(password) {
      let user = users[this.displayName];
      if (user.password === password) {
        return user.firstName;
      } else {
        return "Invalid Password";
      }
    },
  
    lastName(password) {
      let user = users[this.displayName]
      if (user.password === password) {
        return user.lastName;
      } else {
        return "Invalid Password";
      }
    },
  
    email(password) {
      let user = users[this.displayName]
      if (user.password === password) {
        return user.email;
      } else {
        return "Invalid Password";
      }
    }
  }
})()

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password'
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
console.log(fooBar.reanonymize('abc'));            // returns true
console.log(displayName === fooBar.displayName);   // logs false

let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
// Note that the foillowing two lines of code are correct as written.
// There are no mistakes. We are attempting to demonstrate that the
// code does not work as might be intended.
console.log(fooBar.firstName('abc'));           // logs 'baz' but should log foo.
console.log(fooBar.email('abc'));               // 'baz@qux.com' but should 'foo@bar.com'