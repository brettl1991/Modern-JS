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

//Arguments: function inputs
// function greet() {
// 	console.log('Hi');
// }

// greet now expects a single argument
function greet(nickname) {
  console.log(`Hi, ${nickname}!`);
}
greet("Sansa");
greet("Ramsay");

// EXAMPLE 2: modify rolldie from before
function rollDie() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(`Rolled: ${roll}`);
}
// We can now specify how many dice to roll!
function throwDice(numRolls) {
  for (let i = 0; i < numRolls; i++) {
    rollDie();
  }
}

throwDice(2);
throwDice(6);

//Multiple parameters(arguments)
function square(num) {
  //this is parameter
  console.log(num * num);
}

function sum(x, y) {
  console.log(x + y);
}

function divide(a, b) {
  console.log(a / b);
}

//Return statement: use to sexport or return a value to capture later ina  variable or do something with it
// No return!
function add(x, y) {
  console.log(x + y);
} //for us in the console to see

// This version returns the sum of x & y;
function add(x, y) {
  return x + y;
}

// We can capture the return value:
const total = add(4, 9); //13

//Return values, after return the code execute, after the code never run
function square(x) {
  return x * x;
  console.log("ALL DONE!"); //this NEVER runs;
}

// One way of writing this function
function isPurple(color) {
  if (color.toLowerCase() === "purple") {
    return true;
  } else {
    return false;
  }
}

// We don't need the else!
function isPurple(color) {
  if (color.toLowerCase() === "purple") {
    return true;
  }
  return false;
}

// An even shorter way!
function isPurple(color) {
  return color.toLowerCase() === "purple";
}

function containsPurple(arr) {
  for (let color of arr) {
    if (color === "purple" || color === "magenta") {
      return true;
    }
  }
  return false;
}
