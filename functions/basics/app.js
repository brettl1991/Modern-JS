"use strict";

//Function
// STEP 1: Define the function:
function grumpus() {
  console.log("ugh...you again...");
  console.log("FOR THE LAST TIME...");
  console.log("LEAVE ME ALONE!!!");
}
// STEP 2: Call the function:
grumpus();
grumpus();
grumpus();

for (let i = 0; i < 50; i++) {
  grumpus();
}

//50 times this
// ugh...you again...
// FOR THE LAST TIME...
// LEAVE ME ALONE!!!

//Dice roll function
// Define our first function
function rollDie() {
  // Pick a random number from 1-6
  // - Math.random() gives us a decimal from 0-1
  // - We multiply by 6, so now we have a random number between 0 up to 6 (but not including 6).  Something likee 3.490823 or 5.991234
  // - Then we floor to remove the decimal,  leaving us with a whole number from 0-5
  //- Lastly we add one, to get a number between 1 and 6
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(`Rolled: ${roll}`);
}

// We can call functions inside of other functions!
function throwDice() {
  rollDie();
  rollDie();
  rollDie();
  rollDie();
  rollDie();
  rollDie();
}

//Call it!
throwDice();

// Rolled: 6
// Rolled: 3
// Rolled: 6
// Rolled: 6
// Rolled: 2
// Rolled: 4
