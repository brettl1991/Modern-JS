"use strict";

//Default parameters
// The old way of adding a default value:
// function multiply(x, y) {
//   if (typeof y === 'undefined') {
//     y = 1;
//   }
//   return x * y;
// }

// A slightly shorter version:
// function multiply(x, y) {
//   y = typeof y === 'undefined' ? 1 : y
//   return x * y;
// }

// The new super clean way of adding defaults!
function multiplyFirst(x, y = 1) {
  //if y undefined use 1
  return x * y;
}
multiplyFirst(3, 4); //12
multiplyFirst(3); //3

// Another example!
// const greet = (person, greeting = 'hi') => {
//   console.log(`${greeting}, ${person}!`)
// }

// Default value of an array:
// const blah = (x, y = [1, 2, 3]) => {
//   console.log(x, y);
// }

// Multiple default values are possible, but rare
// const greet = (person, greeting = 'hi', punctuation = '!') => {
//   console.log(`${greeting}, ${person} ${punctuation}`)
// }

//always default paramters going last so can not do this
// function multiply(x=1, y) {
//   return x * y;
// }
// multiply(3, 4); //12

//Spread for function calls: allows an iterable such as an array to be expanded in places where 0 or more arguments (for function calls) are expected, or an object expression to be expanded in places where 0 or more key value pairs (for object literals) are expected.
//always ... but means different depends on where you are using

function giveMeFour(a, b, c, d) {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
  console.log("d", d);
}

const colors = ["red", "orange", "yellow", "green"];

// Without spread:
giveMeFour(colors);
// a ["red", "orange", "yellow", "green"]
// b undefined
// c undefined
// d undefined

// WITH SPREAD!!!
// Values are passed as separate args:
giveMeFour(...colors);
// a 'red'
// b 'orange'
// c 'yellow'
// d 'green'

//We can also spread strings!
giveMeFour(..."GOAT");
// a G
// b O
// c A
// d T

//Spread in array literals: create a new array using an existing array, and spreads the elements from one array into a new array

//we can combine arrays
const cephalopods = [
  "dumbo octopus",
  "humboldt squid",
  "flamboyant cuttlefish",
];

const gastropods = ["giant african snail", "banana slug", "variable neon slug"];

const cnidaria = ["fire coral", "moon jelly"];

const mollusca = [...cephalopods, ...gastropods];
//["dumbo octopus", "humboldt squid", "flamboyant cuttlefish", "giant african snail", "banana slug", "variable neon slug"]

const inverts = [...cnidaria, ...gastropods, ...cephalopods];
//["fire coral", "moon jelly", "giant african snail", "banana slug", "variable neon slug", "dumbo octopus", "humboldt squid", "flamboyant cuttlefish"]

const cephCopy = [...cephalopods];
//["dumbo octopus", "humboldt squid", "flamboyant cuttlefish"]

//Spread objects: copies proprties from one object into another object literal.
const feline = {
  legs: 4,
  family: "Felidae",
};

const canine = {
  family: "Caninae",
  furry: true,
  legs: 4,
};

const dog = {
  ...canine,
  isPet: true,
  adorable: true,
};
//{family: "Caninae", furry: true, legs: 4, isPet: true, adorable: true}

const houseCat = {
  ...feline,
  isGrumpy: true,
  personality: "unpredictable",
};
//{legs: 4, family: "Felidae", isGrumpy: true, personality: "unpredictable"}

const catDog = {
  ...canine,
  ...feline,
};
//{family: "Felidae", furry: true, legs: 4}

//Order matters! Legs will be 3 here, because we set it AFTER spreading canine.If we switch them and legs: 3 comes first than ...canine, the legs will be 4
const tripod = {
  ...canine,
  legs: 3,
};
//{family: "Caninae", furry: true, legs: 3}

const catDogClone = {
  ...catDog,
};

const random = [
  ..."hello",
  {
    ...catDog,
  },
];

console.log(random);
// ['h', 'e', 'l', 'l', 'o', {…}]
// 0:"h"
// 1:"e"
// 2:"l"
// 3:"l"
// 4:"o"
// 5:{family: 'Felidae', furry: true, legs: 4}

//The arguments object
//The arguments object is available in every function you write (except arrow functions)
//It contains all the arguments passed in. Using i not really great
function sum() {
  //It is NOT an array, we have to turn it into one if we want to use array methods
  const argsArr = [...arguments];
  return argsArr.reduce((total, currVal) => {
    return total + currVal;
  });
}

// No arguments object inside of arrow functions :(
const multiply = () => {
  console.log(arguments); //this will be undefined because wont work with arrow function
};

//REST parameter: collects things down into a single array, used when we are making functions that except unlimeted number of arguments or variable number of arguments. Collects all remaining arguments into an actual array.
// OLD WAY!
// function sum() {
//   const argsArr = [...arguments]
//   return argsArr.reduce((total, currVal) => {
//     return total + currVal
//   })
// }

// New way using rest: We put inside the parameter list inside a function definition.
function sumNew(...nums) {
  return nums.reduce((total, currVal) => {
    return total + currVal;
  });
}

//We can have named params and then collect the rest into an array:
function fullName(first, last, ...titles) {
  console.log("first", first);
  console.log("last", last);
  console.log("titles", titles);
}

fullName("tom", "john", "iii", "order of the phoenix");

// first tom
// last john
//['iii', 'order of the phoenix']

// We can use rest parameters in arrow functions!
const multiplyNew = (...nums) =>
  nums.reduce((total, currVal) => total * currVal);

//Array destructoring:unpack values from arrays, properties from objects into distinct variable
const raceResults = [
  "Eliud Kipchoge",
  "Feyisa Lelisa",
  "Galen Rupp",
  "Ghirmay Ghebreslassie",
  "Alphonce Simbu",
  "Jared Ward",
];

// The old way:
// const gold = raceResults[0]
// const silver = raceResults[1]
// const bronze = raceResults[2]

// Using Destructuring:
const [gold, silver, bronze] = raceResults;
gold; //'Eliud Kipchoge'
silver; //'Feyisa Lelisa'
bronze; //'Galen Rupp'

const [first, , , fourth] = raceResults; //commas skip elements
first; //'Eliud Kipchoge'
fourth; //'Ghirmay Ghebreslassie'

const [winner, ...others] = raceResults;
winner; //'Eliud Kipchoge'
others; //["Feyisa Lelisa", "Galen Rupp", "Ghirmay Ghebreslassie", "Alphonce Simbu", "Jared Ward"]

//Object destructuring
const runner = {
  firstt: "Eliud",
  last: "Kipchoge",
  country: "Kenya",
  title: "Elder of the Order of the Golden Heart of Kenya",
};

// const {
//   first,
//   last,
//   time
// } = runner;

//give properties new name
const { country: nation, title: honorific } = runner;

//using rest operator
const { firstt, last, ...other } = runner;
