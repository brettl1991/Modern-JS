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
