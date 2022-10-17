"use strict";
// Write a function to find the average value in an array of numbers
//avg([0,50]) //25
//avg([75,76,80,95,100]) //85.2

function calcAvarage(arr) {
  let total = 0;
  for (let nums of arr) {
    total += nums;
  }
  let result = total / arr.length;
  return result;
}

console.log(calcAvarage([0, 50]));
console.log(calcAvarage([75, 76, 80, 95, 100]));
