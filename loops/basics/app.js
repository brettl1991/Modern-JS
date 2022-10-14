//Loops allow us to repeat code
//For loops
// 3 pieces to a for loop:
// 1 - Variable declaration
// 2 - The condition
// 3 - Update the loop variable

// STEP 1: 'let i = 1' - start i at 1
// STEP 2: 'i <= 10' - run the loop as long as i <= 10
// STEP 3: 'i++' - add 1 to i each time through
for (let i = 1; i <= 10; i++) {
  console.log("HELLO:", i);
}

// Counting by 3's:
for (let i = 1; i <= 10; i += 3) {
  console.log("HELLO:", i);
} //HELLO: 1
// HELLO: 4
// HELLO: 7
// HELLO: 10

// Printing first 20 perfect squares:
for (let num = 1; num <= 20; num++) {
  console.log(`${num}x${num} = ${num * num}`);
} //1x1 = 1
//2x2 = 4
//3x3 = 9
//4x4 = 16
//5x5 = 25
//6x6 = 36
//7x7 = 49
//8x8 = 64
//9x9 = 81....etc

// Counting DOWN from 200 by intervals of 25:
for (let i = 200; i >= 0; i -= 25) {
  console.log(i);
}

console.log("AFTER THE LOOP!");

//Infinite loops
// DON'T RUN THIS!
// for (let i = 1; i !== 20; i += 2) {
// 	console.log(i);
// }

// THE ABOVE LOOP NEVER ENDS
// i starts at 1, and we add 2 each time
// 1,3,5,7,9,11,13,15,17,19,21,etc.
// i never hits 20, so the loop condition is always true

// Instead, write it this way:
for (let i = 1; i <= 20; i += 2) {
  console.log(i);
}

//For loops and arrays
// ======= EXAMPLE 1 ==========
// Printing each element in an array
const examScores = [98, 77, 84, 91, 57, 66];

for (let i = 0; i < examScores.length; i++) {
  console.log(i, examScores[i]); //[i] to access all individual elements
}
// 0 98
// 1 77
// 2 84
// 3 91
// 4 57
// 5 66

// ======= EXAMPLE 2 ==========
// Same idea, but with a more complex array
const myStudents = [
  {
    firstName: "Zeus",
    grade: 86,
  },
  {
    firstName: "Artemis",
    grade: 97,
  },
  {
    firstName: "Hera",
    grade: 72,
  },
  {
    firstName: "Apollo",
    grade: 90,
  },
];

for (let i = 0; i < myStudents.length; i++) {
  let student = myStudents[i]; //this will give back the individual objects
  console.log(`${student.firstName} scored ${student.grade}`);
}

// Zeus scored 86
// Artemis scored 97
// Hera scored 72
// Apollo scored 90

// ======= EXAMPLE 3 ==========
// Averaging all grades in myStudents array
let total = 0; //total will hold the sum of all grades

for (let i = 0; i < myStudents.length; i++) {
  let student = myStudents[i];
  total += student.grade; //add each grade to total
}
console.log(total / myStudents.length); //divide by number of students 86.25

// ======= EXAMPLE 4 ==========
// Reversing a string
const word = "stressed";

let reversedWord = ""; //will hold reversed string

//Loop backwards over the string
for (let i = word.length - 1; i >= 0; i--) {
  //let i = word.length - 1 means start at d word
  reversedWord += word[i]; //add each char to reversedWord
}

console.log(reversedWord); //desserts

//Nested for loops
for (let i = 1; i <= 10; i++) {
  console.log("OUTER LOOP:", i);
  for (let j = 10; j >= 0; j -= 2) {
    console.log("  INNER LOOP", j);
  }
}

// OUTER LOOP: 1
//   INNER LOOP 10
//   INNER LOOP 8
//   INNER LOOP 6
//   INNER LOOP 4
//   INNER LOOP 2
//   INNER LOOP 0
// OUTER LOOP: 2
//   INNER LOOP 10
//   INNER LOOP 8
//   INNER LOOP 6
//   INNER LOOP 4
//   INNER LOOP 2
//   INNER LOOP 0... etc

// EXAMPLE 2
// Sum all elements in our 2048 board
const gameBoard = [
  [4, 32, 8, 4],
  [64, 8, 32, 2],
  [8, 32, 16, 4],
  [2, 8, 4, 2],
];

//sum the values
let totalScore = 0;
//outer loop iterates through the rows
for (let i = 0; i < gameBoard.length; i++) {
  let row = gameBoard[i]; //access to inner array
  //inner loop iterates over each cell in a given row
  for (let j = 0; j < row.length; j++) {
    totalScore += row[j];
  }
}
console.log(totalScore); //230

//While loop: the code will run while that condition is true, useful when you dont know how many times your loop will run
for (let i = 0; i <= 5; i++) {
  console.log(i);
}

//Recreating the above for loop w/ a while loop:
let j = 0;
while (j <= 5) {
  console.log(j);
  j++;
}

// 0
// 1
// 2
// 3
// 4
// 5

// Pick a target number we are trying to guess
const target = Math.floor(Math.random() * 10);
// Make initial guess
let guess = Math.floor(Math.random() * 10);

// Continue looping while guess is not the target num
while (guess !== target) {
  console.log(`Target: ${target} Guess: ${guess}`);
  // IMPORTANT!!
  // Update the value of guess each time through the loop
  guess = Math.floor(Math.random() * 10); //without this will be infinite
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log(`CONGRATS YOU WIN!!`);

//while some condition
//in the loop, update or attempt or make that condition false

//Break keyword: break out of loops, for for loop uncommon, if nested loops just breaks out of its current loop
const targetNew = Math.floor(Math.random() * 10);
let guessNew;
//ANOTHER APPROACH TO THE PREVIOUS GUESSING 'GAME'
while (true) {
  if (targetNew === guessNew) break; //Break stops the loop in its tracks
  console.log(`Target: ${targetNew} Guess: ${guessNew}`);
  guessNew = Math.floor(Math.random() * 10);
}
console.log(`Target: ${targetNew} Guess: ${guessNew}`);
console.log(`CONGRATS YOU WIN!!`);

// Target: 6 Guess: 8
// Target: 6 Guess: 2
// Target: 6 Guess: 0
// Target: 6 Guess: 7
// Target: 6 Guess: 4
// Target: 6 Guess: 8
// Target: 6 Guess: 6
// CONGRATS YOU WIN!!

//For of: when we want to iterate on an iterable(array, objects...)
let subreddits = ["soccer", "popheads", "cringe", "books"];
// With a standard for loop
for (let i = 0; i < subreddits.length; i++) {
  console.log(subreddits[i]);
}
//Much cleaner  with a for...of loop!
for (let sub of subreddits) {
  console.log(sub);
}

// soccer
// popheads
// cringe
// books
// soccer
// popheads
// cringe
// books

//Works with other iterables, like strings!
for (let char of "cockadoodledoo") {
  console.log(char.toUpperCase());
}

// C
// O
// C
// K
// A
// D
// 2 O
// D
// L
// E
// D
// 2 O

//Comparing for and for of
const magicSquare = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8],
];

// Version using a for loop...
//sum each row and verify it is equal to 15
for (let i = 0; i < magicSquare.length; i++) {
  let row = magicSquare[i];
  let sum = 0;
  for (let j = 0; j < row.length; j++) {
    sum += row[j];
  }
  console.log(`${row} summed to ${sum}`);
}

// Much cleaner version using a for...of
for (let row of magicSquare) {
  let sum = 0;
  for (let num of row) {
    sum += num;
  }
  console.log(`${row} summed to ${sum}`);
}

// 2,7,6 summed to 15
// 9,5,1 summed to 15
// 4,3,8 summed to 15
// 2,7,6 summed to 15
// 9,5,1 summed to 15
// 4,3,8 summed to 15

// EXAMPLE 2
//loop over the first array and print out of each element the second array elements
//not good to use for of because we need the index/position
// If you need the indices, use a traditional for loop!
const words1 = ["mail", "milk", "bath", "black"];
const words2 = ["box", "shake", "tub", "berry"];

for (let i = 0; i < words1.length; i++) {
  //Access index i of both arrays
  console.log(`${words1[i]}${words2[i]}`);
}

// mailbox
// milkshake
// bathtub
// blackberry
