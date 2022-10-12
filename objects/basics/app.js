//Objects: group pieces of data together, its properties are key value pair, when you store them in a variable you reference them, can contain any value
//{}
//this above means object literal, no properties in it

const fitBitData = {
  totalSteps: 308727,
  totalMiles: 211.7,
  avgCalorieBurn: 5755,
  workoutsThisWeek: "5 of 7",
  avgGoodSleep: "2:13",
};

console.log(fitBitData);

//access to values:
//. syntax
console.log(fitBitData.totalMiles); //211.7
//in objects all keys stored as strings!

//[] syntax
const numbers = {
  100: "one hundred",
  16: "sixteen",
  "76 trombones": "great song",
};

console.log(numbers[100]); //one hundred
console.log(numbers["76 trombones"]); //great song

const palette = {
  red: "#eb4d4b",
  yellow: "#f9ca24",
  blue: "#30336b",
};

//access syntaxes
console.log(palette.red); //#eb4d4b
console.log(palette["red"]); //#eb4d4b

//main advantage of using [] if you have a variable or want to use a dynamic value in order to retrive information
let mysteryColor = "yellow";
console.log(palette[mysteryColor]); //#f9ca24
console.log(palette.mysteryColor); //undefined because looking for exact name of mysteryColor

//Add and update properties
const userReviews = {};

userReviews["queenBee49"] = 4.0;
console.log(userReviews); //{queenBee49: 4}
userReviews.mrSmith78 = 3.5;
console.log(userReviews); //{queenBee49: 4, mrSmith78: 3.5}
//update
userReviews["queenBee49"] = "queenBee47";
console.log(userReviews); //{queenBee49: 'queenBee47', mrSmith78: 3.5}
userReviews["queenBee49"] += 2;
console.log(userReviews); //{queenBee49: 'queenBee472', mrSmith78: 3.5}

//Nested arrays & Objects
const student = {
  firstName: "David",
  lastName: "Jones",
  strengths: ["Music", "Art"],
  exams: {
    midterm: 92,
    final: 88,
  },
};

//avg of midterm and final

const avg = (student.exams.midterm + student.exams.final) / 2;

const shoppingCart = [
  {
    product: "Jenga Classic",
    price: 6.88,
    quantity: 1,
  },
  {
    product: "Echo Dot",
    price: 29.99,
    quantity: 3,
  },
  {
    product: "Fire Stick",
    price: 39.99,
    quantity: 2,
  },
];

//Gameboard

const game = {
  player1: {
    username: "Blue",
    playingAs: "X",
  },
  player2: {
    username: "Muffins",
    playingAs: "O",
  },
  board: [
    ["O", null, "X"],
    ["X", "O", "X"],
    [null, "O", "X"],
  ],
};

//Objects and Reference types
const paletteNew = {
  red: "#eb4d4b",
  yellow: "#f9ca24",
  blue: "#30336b",
};

//Objects & Arrays are reference types
const palette2 = paletteNew;
//If we change one value...
palette2.green = "#ebf876";

//Both variables reflect that change...
palette.green; //"#ebf876"
palette2.green; //"#ebf876"

//Array-Object equality
let nums = [1, 2, 3];
let mystery = [1, 2, 3];
let moreNums = nums;

//They 'look' the same, but refer to different arrays
nums === mystery; // false

//These two arrays reference the exact same array, so we get true:
nums === moreNums; //true

const user = {
  username: "CherryGarcia8",
  email: "garcia@gmail.com",
  notifications: ["message", "alert"],
};

//THIS WILL NOT WORK!
if (user.notifications === []) {
  console.log("NO NEW NOTIFICATIONS!");
}
// THIS VERSION DOES WORK!
if (!user.notifications.length) {
  console.log("NO NEW NOTIFICATIONS!");
}
