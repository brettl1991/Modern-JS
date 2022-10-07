"use struct";

// alert("Hey, it is working! :)");

// let num = 37;

// if (num % 2 !== 0) {
//   console.log("We've got an odd number");
// } else {
//   console.log("We've got an even number");
// }

//Performance review
//3  -  superstar
//2  -  meets expectations
//1  -  need improvement
//anything else  --  wtf?

let rating = 213;

if (rating === 3) {
  console.log("You are a superstar!");
} else if (rating === 2) {
  console.log("Meets expectations :)");
} else if (rating === 1) {
  console.log("Need improvement!");
} else {
  console.log("Invalid rating");
}

//Example2
let highScore = 1430;
let userScore = 1600;

if (userScore >= highScore) {
  console.log(`Congrats, you have the new high score of ${userScore}`);
  highScore = userScore;
} else {
  console.log(
    `Good game, you score of ${userScore} did not beat the high score of ${highScore}`
  );
}

//Nested condition
let password = "kitty";

if (password.length >= 6) {
  if (password.indexOf(" ") === -1) {
    console.log("Valid password");
  } else {
    console.log("Password is long enough but can not contain spaces");
  }
} else {
  console.log("Password must be longer!");
}

//Truthy and falsy
let mistery = 5;
if (mistery) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}

let loggedInUser = null;

if (loggedInUser) {
  console.log("You are logged in");
} else {
  console.log("Please log in");
}

//Logical operators
//AND

let passwordNew = "chickenGal";

if (passwordNew.length >= 8 && passwordNew.indexOf(" ") === -1) {
  console.log("Valid password");
} else {
  console.log("Invalid password");
}

//pick number 1-10
let num = 3;
if (num >= 1 && num <= 10) {
  console.log("Valid guess");
} else {
  console.log("Invalid guess");
}
