"use strict";

//Password validition

// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

// isValidPassword('89Fjj1nms', 'dogLuvr');  //true
// isValidPassword('dogLuvr123!', 'dogLuvr') //false
// isValidPassword('hello1', 'dogLuvr') //false

function isValidPassword(password, username) {
  if (password.length >= 8 && !password.includes(" " && username)) {
    return true;
  }
  return false;
}

const data1 = isValidPassword("89Fjj1nms", "dogLuvr");
const data2 = isValidPassword("dogLuvr123!", "dogLuvr");
const data3 = isValidPassword("hello1", "dogLuvr");
console.log(data1, data2, data3);
