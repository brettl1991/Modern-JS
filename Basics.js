"use strict";

//Numbers
// Modulo %
// 27 % 2;//1 because 13*2 and 1 left

//Exponentiation (**) opeartor
//5**2 equal to 25
//3 ** 4 equal to 81

//Operations order:
// Grouping ( () )
// Not ( ! )
// Multiplication ( * )
// Division ( / )
// Modulus ( % )
// Addition ( + )
// Subtraction ( - )
// Less than ( < )

//Variables: let: can change the value
let score = 0;
score += 1;
let bonusMult = 450;
score *= bonusMult;
console.log(score); //
//unary operator: has 1 side
let counter = 0;
counter++;
console.log(counter); //1
// Variables: const: can not change value
const year = 1991;
// year += 7; //error

//Variables: old one is var
//Boolean: true or false, yes or no, 0 or 1
let isHungry = false;
isHungry = 1239;
console.log(isHungry);

//STRINGS
let msg = "you are awesome";
let newMsg = msg.toUpperCase();
console.log(newMsg);

let tvShow = "catdog";
let cat = tvShow.indexOf("cat"); //0
console.log(cat);
let dog = tvShow.indexOf("dog"); //3
console.log(dog);
let z = tvShow.indexOf(z); //-1 so not found
parseInt("24"); //24
parseInt("23.54"); //23
parseInt("bdhfhnk78"); //28

parseFloat("34.98"); //34.98
parseFloat("6"); //6
parseFloat("I ate 3 shramp"); //NaN
parseInt("$99"); //NaN
