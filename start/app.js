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
