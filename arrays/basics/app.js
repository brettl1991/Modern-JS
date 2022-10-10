let shoppingList = ["cereal", "cheese", "ice"];
let lotto = [45, 12, 23, 25, 34];

let myCollection = [12, "dog", true, null, NaN];

new Array(1, 2, 3, 4, 5);

console.log(lotto.length);
console.log(lotto[2]);
//access last item
console.log(lotto[lotto.length - 1]); //34

//Modifying arrays
//arrays are mutable, we can change the original array
let shoppingListTwo = ["Cheddar Cheese", "2% milk"];
shoppingListTwo[1] = "Whole milk";
console.log(shoppingListTwo); //['Cheddar Cheese', 'Whole milk']
//add a value
shoppingListTwo[shoppingListTwo.length] = "Tomatoes";
console.log(shoppingListTwo); //['Cheddar Cheese', 'Whole milk', 'Tomatoes']

//Push, Pop
let topSongs = [
  "First Time Ever I Saw Your Face",
  "God Only Knows",
  "A Day In The Life",
  "Life On Mars",
];

topSongs.push("Fortunate Son");
console.log(topSongs); //['First Time Ever I Saw Your Face', 'God Only Knows', 'A Day In The Life', 'Life On Mars', 'Fortunate Son']
topSongs.pop(); //remove last item
console.log(topSongs); //['First Time Ever I Saw Your Face', 'God Only Knows', 'A Day In The Life', 'Life On Mars']

// Shift, Unshift
let dishesToDo = ["big platter"];
//add to the start
dishesToDo.unshift("large plate", "small plate");

dishesToDo.unshift("dirty plates");
console.log(dishesToDo);
//remove from the start
dishesToDo.shift();
console.log(dishesToDo);

//Concat: merge more than 1 array, create a new copy/version, not mutating original
let fruits = ["apple", "banana"];
let veggies = ["aspargus", "brussel sprouts"];
console.log(fruits.concat(veggies)); //['apple', 'banana', 'aspargus', 'brussel sprouts']

//Includes and IndexOf
//includes: return true or false, contain or not?

let ingredients = ["water", "oil", "flour", "rice", "bean", "pasta"];

console.log(ingredients.includes("aspargus")); //false

//we can specify the index as weel from where
//after 5th index it is contain water?
console.log(ingredients.includes("water", 5)); //false

//indexOf: return the index if the element exist, if not exist will return -1
console.log(ingredients.indexOf("oil")); //index of 1
console.log(ingredients.indexOf("flour", 5)); //-1

//Reverse and Join
//Reverse mutates the original array
let letters = ["T", "C", "E", "P", "S", "E", "R"];
console.log(letters.reverse()); //['R', 'E', 'S', 'P', 'E', 'C', 'T']

//Join return back a single string by joining the values, turn values (numbers) into strings
console.log(letters.join("&")); //R&E&S&P&E&C&T
console.log(letters.join(".")); //R.E.S.P.E.C.T

//Slice makes a new array, does not modify original, copy a portion of an array
//first index include and from where to start, last index until where but not include
let animals = ["shark", "shalmon", "whale", "bear", "lizard", "tortoise"];

//return all the swimmers
let swimmers = animals.slice(0, 3);
console.log(swimmers); //['shark', 'shalmon', 'whale']

//return mammals
let mammals = animals.slice(2, 4);
console.log(mammals); //['whale', 'bear']

//return reptiles
let reptiles = animals.slice(4, 6);
console.log(reptiles); //['lizard', 'tortoise']
//or
let reptilesTwo = animals.slice(4);
console.log(reptilesTwo); //['lizard', 'tortoise']

//or
let reptilesThree = animals.slice(-2);
console.log(reptilesThree); //['lizard', 'tortoise']

//make copy
animalsCopy = animals.slice();
console.log(animalsCopy); //['shark', 'shalmon', 'whale', 'bear', 'lizard', 'tortoise']

//Splice: remove/replace elements, update middle of the array
//its indexes: startIndex(the index at which to start changing the array), deleteCount(how many you want to delete), itemsToInsert(how many you want to insert)
animals.splice(1, 0, "octopus");
console.log(animals); //["shark", "octopus", "shalmon", "whale", "bear", "lizard", "tortoise"];
animals.splice(3, 2);
console.log(animals); //['shark', 'octopus', 'shalmon', 'lizard', 'tortoise']
animals.splice(3, 0, "snake", "frog");
console.log(animals); //['shark', 'octopus', 'shalmon', 'snake', 'frog', 'lizard', 'tortoise']

//use to replace
animals.splice(0, 2, "SHARK", "OCTOPUS");
console.log(animals); //['SHARK', 'OCTOPUS', 'shalmon', 'snake', 'frog', 'lizard', 'tortoise']

//Sorting: sort an array
let people = [
  "Maggie",
  "Joe",
  "Steven",
  "Agnes",
  "Jacob",
  "Billie",
  "Mario",
  "Lucas",
  "Terry",
];

console.log(people.sort()); //['Agnes', 'Billie', 'Jacob', 'Joe', 'Lucas', 'Maggie', 'Mario', 'Steven', 'Terry'] alphabetically sorted

let nums = [34, 10, 100000, 67, 99]; //not sorting based on numeric value, converts them as strings
console.log(nums.sort()); //[10, 100000, 34, 67, 99]

//arrays are stored as Reference types in the memory: so when we work with arrays store them in a variable, the variabe it self does not hold the array, it will hold a pointer, reference to where the array is in memory, compared to a value type variable where the actual value is stored

let fruit = "orange";
let color = fruit;
fruit = "watermelon";

let numsTwo = [5, 6, 7, 8];
let otherNums = numsTwo;
numsTwo.push(9);
console.log(otherNums); //[5, 6, 7, 8, 9]
otherNums.pop();
console.log(otherNums);
[5, 6, 7, 8];
otherNums.pop();
console.log(otherNums); //[5, 6, 7]
console.log(numsTwo); //[5, 6, 7]

//Using const with arrays: values can change
const city = "Lisbon";
// city.push("Hungary");
console.log(city); //Uncaught TypeError:

const cityTwo = ["Hungary"];
cityTwo.push("America");
console.log(cityTwo); //['Hungary', 'America']
