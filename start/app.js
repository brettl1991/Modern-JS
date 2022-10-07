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

//OR
let age = 64;
if (age < 6 || age >= 65) {
  console.log("You get it for free");
} else {
  console.log("You must pay");
}

//check if the color the shade of purple
let color = "violet";
if (color === "purole" || color === "lilac" || color === "violet") {
  console.log("Great choice");
}

//NOT
let loggedInUserTwo = "";

//If there is not a logged in user

if (!loggedInUserTwo) {
  console.log("Get out please");
}

let flavor = "watermelon";
if (flavor !== "grape" && flavor !== "cherry") {
  console.log("We do not have that flavor");
}

//or we can write:
if (!(flavor === "garpe" || flavor === "cherry")) {
  console.log("We only have grape and cherry");
}

//Operator presedence
let x = 7;

// x == 7 || (x === 3 && x> 10

//Switch statement
let day = 7;
// if (day === 1) {
//   console.log("Monday");
// } else if (day === 2) {
//   console.log("Tuesday");
// } etc...
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  default:
    console.log("Invalid day");
}

let emoji = "sad face";

switch (emoji) {
  case "sad face":
  case "happy face":
    console.log("yellow");
    break;
  case "eggplant":
    console.log("purple");
    break;
  case "heart":
  case "lips":
    console.log("red");
    break;
}

//Ternary operator: condition ? true : false
let number = 7;
number === 7 ? console.log("lucky number") : console.log("unlucky number");

//assign value to variable
let status = "offline";

let colorNew = status === "offline" ? "red" : "green";
console.log(colorNew);
