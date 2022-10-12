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
// app.js:17 HELLO: 4
// app.js:17 HELLO: 7
// app.js:17 HELLO: 10

// Printing first 20 perfect squares:
for (let num = 1; num <= 20; num++) {
  console.log(`${num}x${num} = ${num * num}`);
} //1x1 = 1
// app.js:25 2x2 = 4
// app.js:25 3x3 = 9
// app.js:25 4x4 = 16
// app.js:25 5x5 = 25
// app.js:25 6x6 = 36
// app.js:25 7x7 = 49
// app.js:25 8x8 = 64
// app.js:25 9x9 = 81....etc

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
