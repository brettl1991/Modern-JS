"use strict";

// Get card excercise
// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object

const value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
const suit = ["clubs", "speads", "hearts", "diamonds"];

function getRandom(arr) {
  const random = Math.floor(Math.random() * arr.length);
  return arr[random];
}

function getCard() {
  return { value: getRandom(value), suit: getRandom(suit) };
}

console.log(getCard());
