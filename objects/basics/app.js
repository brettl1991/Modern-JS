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
