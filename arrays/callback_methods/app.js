"use strict";

//Array callbacks method
//forEach: accepts a callback function, calls the func once per element in the array
const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

// Using anonymous function expression:
numbers.forEach(function (num) {
  console.log(num * 2);
});
//40, 42, 44... etc

function printTriple(n) {
  console.log(n * 3);
}

// Using a pre-defined function:
numbers.forEach(printTriple);

// Using the index:
numbers.forEach(function (num, idx) {
  console.log(idx, num);
});

// 0 20
// 1 21
// 2 22
// 3 23
// 4 24
// 5 25
// 6 26
// 7 27

const books = [
  {
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25,
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
  },
  {
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
  },
];

// Printing all book titles using forEach:
books.forEach(function (book) {
  console.log(book.title.toUpperCase());
});

// Printing all book titles using for...of:
for (let book of books) {
  console.log(book.title.toUpperCase());
}

// Printing all book titles using for loop:
for (let i = 0; i < books.length; i++) {
  console.log(books[i].title.toUpperCase());
}

//Map creates a new array from an existing array by calling your callback function with each element in the original array. Can be used to extract portions of an array or transform an array into a new array. Excepts a callback, calls with every element in the array and builds a new array with this values.
const numbersNew = [20, 21, 22, 23, 24, 25, 26, 27];
const words = ["asap", "byob", "rsvp", "diy"];

//Map
const doubles = numbersNew.map(function (num) {
  return num * 2; //Need to return the value!
});
//[40, 42, 44, 46, 48, 50, 52, 54]

//check if value is even
const numDetail = numbersNew.map(function (n) {
  return {
    value: n,
    isEven: n % 2 === 0,
  };
});

console.log(numDetail);
// 0:{value: 20, isEven: true}
// 1:{value: 21, isEven: false}
// 2:{value: 22, isEven: true}
// 3:{value: 23, isEven: false}
// 4:{value: 24, isEven: true}
// 5:{value: 25, isEven: false}
// 6:{value: 26, isEven: true}
// 7:{value: 27, isEven: false}

//all char is uppercase and separated with .
const abbrevs = words.map(function (word) {
  return word.toUpperCase().split("").join(".");
});
//["A.S.A.P", "B.Y.O.B", "R.S.V.P", "D.I.Y"]

const booksNew = [
  {
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25,
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
  },
  {
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
  },
];

const titles = booksNew.map(function (b) {
  return b.title;
});
//["Good Omens", "Bone: The Complete Edition", "American Gods", "A Gentleman in Moscow"]

// Arrow functions
//Non-arrow function expression:
// const square = function (x) {
//   return x * x;
// }

// Equivalent arrow function:
const square = (x) => {
  return x * x;
};

//parens are option when you have 1 parameter
const isEven = (num) => {
  return num % 2 === 0;
};

//Must include parens for multiple parameters
const multiply = (x, y) => {
  return x * y;
};

// Must include parens for zero parameters
const greet = () => {
  console.log("HI!");
};

//Arrow functions implicit returns: you dont have to write return and some cases you can write a one liner function
// "Regular" arrow function:
const squareNew = (n) => {
  return n * n;
};
// Implicit Return, on multiple lines using parens
const square1 = (n) => n * n;

// Implicit return one-liner:
const square2 = (n) => n * n;

const nums = [1, 2, 3, 4, 5, 6, 7, 8];

// ALL THREE VERSIONS GIVE US THE SAME RESULT:
const doubles1 = nums.map(function (n) {
  return n * 2;
});

const doubles2 = nums.map((n) => {
  return n * 2;
});

const doubles3 = nums.map((n) => n * 2);

const parityList = nums.map(function (n) {
  if (n % 2 === 0) return "even";
  return "odd";
});

const parityList1 = nums.map((n) => {
  if (n % 2 === 0) return "even";
  return "odd";
});
const parityList2 = nums.map((n) => (n % 2 === 0 ? "even" : "odd"));

const parityList3 = nums.map((n) => (n % 2 === 0 ? "even" : "odd"));

// Array.find: returns the value of the first element in the array that satisfies the provided function, returns only one element
let movies = [
  "The Fantastic Mr. Fox",
  "Mr. and Mrs. Smith",
  "Mrs. Doubtfire",
  "Mr. Deeds",
];

// Find first movie that includes 'Mrs' in its title:
const movie = movies.find((movie) => {
  return movie.includes("Mrs");
});

//Find first movie that begins with 'Mrs':
const movie2 = movies.find((m) => m.indexOf("Mrs") === 0);

//Mrs. Doubtfire

const booksNewTwo = [
  {
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25,
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
  },
  {
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
  },
];
//Find first book w/ rating over 4.3
const goodBook = booksNewTwo.find((b) => b.rating >= 4.3);
console.log(goodBook);
//{title: 'Bone: The Complete Edition', authors: Array(1), rating: 4.42}

//Find first book with Neil Gaiman as an author:
const neilBook = booksNewTwo.find((b) => b.authors.includes("Neil Gaiman"));
console.log(neilBook);
// {title: 'Good Omens', authors: Array(2), rating: 4.25}

//Filter:creates a new array with all elements that pass the test implemented by the provided function. The callback returns true or false, if it returns true (n) is added to the filtered array
const numsNew = [34, 35, 67, 54, 109, 102, 32, 9];

const odds = numsNew.filter((n) => n % 2 === 1);
console.log(odds); //[35, 67, 109, 9]
const evens = numsNew.filter((n) => n % 2 === 0);
console.log(evens); //[34, 54, 102, 32]
const bigNums = numsNew.filter((n) => n > 50);
console.log(bigNums); //[67, 54, 109, 102]

const booksNewThree = [
  {
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "Changing My Mind",
    authors: ["Zadie Smith"],
    rating: 3.83,
    genres: ["nonfiction", "essays"],
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
    genres: ["fiction", "graphic novel", "fantasy"],
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
    genres: ["fiction", "historical fiction"],
  },
  {
    title: "The Name of the Wind",
    authors: ["Patrick Rothfuss"],
    rating: 4.54,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "The Overstory",
    authors: ["Richard Powers"],
    rating: 4.19,
    genres: ["fiction", "short stories"],
  },
  {
    title: "The Way of Kings",
    authors: ["Brandon Sanderson"],
    rating: 4.65,
    genres: ["fantasy", "epic"],
  },
  {
    title: "Lord of the flies",
    authors: ["William Golding"],
    rating: 3.67,
    genres: ["fiction"],
  },
];

//All books rated over 4.3:
const goodBooks = booksNewThree.filter((b) => b.rating > 4.3);

// All books with fantasy as a genre:
const fantasyBooks = booksNewThree.filter((book) =>
  book.genres.includes("fantasy")
);

// all books that are either short stories or essays:
const shortForm = booksNewThree.filter(
  (book) =>
    book.genres.includes("short stories") || book.genres.includes("essays")
);

// Simple search functionality:
const query = "The";
const results = booksNewThree.filter((book) => {
  const title = book.title.toLowerCase();
  return title.includes(query.toLowerCase());
});
console.log(results);
//(5) [{…}, {…}, {…}, {…}, {…}]
// 0
// :
// {title: 'Bone: The Complete Edition', authors: Array(1), rating: 4.42, genres: Array(3)}
// 1
// :
// {title: 'The Name of the Wind', authors: Array(1), rating: 4.54, genres: Array(2)}
// 2
// :
// {title: 'The Overstory', authors: Array(1), rating: 4.19, genres: Array(2)}
// 3
// :
// {title: 'The Way of Kings', authors: Array(1), rating: 4.65, genres: Array(2)}
// 4
// :
// {title: 'Lord of the flies', authors: Array(1), rating: 3.67, genres: Array(1)}
// length:5

//Some and every
//every tests wheter all elements in the array pass the provided function, returns a boolean value.
//some similar to every, but returns true if any of the array elements pass the test function, so if at least 1 element pass the test returns true
const wordsNew = ["dog", "dig", "log", "bag", "wag"];

//Is every word 3 characters long?
const all3Letters = wordsNew.every((word) => word.length === 3);
console.log(all3Letters); //true

// Do all words end in 'g'?
const allEndInG = wordsNew.every((word) => {
  const last = word.length - 1;
  return word[last] === "g";
});

//Does at least 1 book start with 'd'?
const someStartWithD = wordsNew.some((word) => word[0] === "d");

// Do all words start with 'd'?
const allStartWithD = wordsNew.every((word) => word[0] === "d");

const booksOnShelves = [
  {
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "Changing My Mind",
    authors: ["Zadie Smith"],
    rating: 3.83,
    genres: ["nonfiction", "essays"],
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
    genres: ["fiction", "graphic novel", "fantasy"],
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
    genres: ["fiction", "historical fiction"],
  },
  {
    title: "The Name of the Wind",
    authors: ["Patrick Rothfuss"],
    rating: 4.54,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "The Overstory",
    authors: ["Richard Powers"],
    rating: 4.19,
    genres: ["fiction", "short stories"],
  },
  {
    title: "The Way of Kings",
    authors: ["Brandon Sanderson"],
    rating: 4.65,
    genres: ["fantasy", "epic"],
  },
  {
    title: "Lord of the flies",
    authors: ["William Golding"],
    rating: 3.67,
    genres: ["fiction"],
  },
];
//Are all books rated 3.5 or higher?
const allGoodBooks = booksOnShelves.every((book) => book.rating > 3.5);

//Do any books have 2 authors?
const any2Authors = booksOnShelves.some((book) => book.authors.length === 2);

//Revisiting sort
const prices = [400.5, 3000, 99.99, 35.99, 12.0, 9500];
// REMEMBER THAT SORT() MUTATES THE ORIGINAL ARRAY!

//if arr.sort(compareFunc(a,b)) returns less than 0 => sort a before b
//if arr.sort(compareFunc(a,b)) returns 0 => leave a and b unchanged with respect to each other
//if arr.sort(compareFunc(a,b)) returns greater than 0 => sort b before a

// I'm using slice() to create a new copy, otherwise we would be sorting the same array 3 times!!!!!
// Default string sort :(
const badSort = prices.slice().sort();

// Ascending Sort:from small to large
const ascSort = prices.slice().sort((a, b) => a - b);

// Descending Sort:from large to small
const descSort = prices.slice().sort((a, b) => b - a);

const booksDifferent = [
  {
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "Changing My Mind",
    authors: ["Zadie Smith"],
    rating: 3.83,
    genres: ["nonfiction", "essays"],
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
    genres: ["fiction", "graphic novel", "fantasy"],
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
    genres: ["fiction", "historical fiction"],
  },
  {
    title: "The Name of the Wind",
    authors: ["Patrick Rothfuss"],
    rating: 4.54,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "The Overstory",
    authors: ["Richard Powers"],
    rating: 4.19,
    genres: ["fiction", "short stories"],
  },
  {
    title: "The Way of Kings",
    authors: ["Brandon Sanderson"],
    rating: 4.65,
    genres: ["fantasy", "epic"],
  },
  {
    title: "Lord of the flies",
    authors: ["William Golding"],
    rating: 3.67,
    genres: ["fiction"],
  },
];

// Sorting books by their rating:
booksDifferent.sort((a, b) => b.rating - a.rating);

//Reduce: executes a reducer function on each element of the array, resulting in a single value
//Format: array.reduce((accumulator, currentValue) => { return accumulator + currentValue}); this example sums all nums in an array
//accumulator will store end result of reduce
//currentValue represents each individual elements in the array

const lotsofNums = [3, 4, 5, 6, 7];
// To multiply all values in nums:
const product = lotsofNums.reduce((total, currentVal) => {
  return total * currentVal;
});

// total    currentVal    returnVal
// 3             4           12
// 12            5           60
// 60            6           360
// 360           7           2520

//Final Return Value: 2520

//we can also use to find a maximum value in an array

const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];

// One approach to find max using reduce:
// const maxGrade = grades.reduce((max, currVal) => {
//   if (currVal > max) return currVal;
//   return max;
// });

// A shorter version using Math.max:
const maxGrade = grades.reduce((max, currVal) => {
  return Math.max(max, currVal);
});
// Finding the min value using Math.min:
const minGrade = grades.reduce((min, currVal) =>
  //using implicit return for variety's sake
  Math.min(min, currVal)
);

// max     currVal    return
// 87        64         87
// 87        96         96
// 96        92         96
/// etc.

// We can specify an initial value as the 2nd argument to reduce, if we do not specify startts at the first element:
// arr.reduce(callback, initialValue)
const total = [10, 20, 30, 40, 50].reduce((sum, currVal) => {
  return sum + currVal;
}, 1000); //sum starts at 1000, then each element is added to it

//1150

const votes = ["y", "y", "n", "y", "n", "y", "n", "y", "n", "n", "n", "y", "y"];

//use reduce to produce an object like this
// {
//   y: 12,
//   n:8
// }

// To tally the votes:
// const results = votes.reduce((tally, val) => {
//   if (tally[val]) {
//     tally[val]++
//   } else {
//     tally[val] = 1;
//   }
//   return tally;
// }, {})

// The shorter version:
const resultsNew = votes.reduce((tally, val) => {
  tally[val] = (tally[val] || 0) + 1;
  return tally;
}, {});
console.log(resultsNew);
//{y: 7, n: 6}

const booksLastPieces = [
  {
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "Changing My Mind",
    authors: ["Zadie Smith"],
    rating: 3.83,
    genres: ["nonfiction", "essays"],
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
    genres: ["fiction", "graphic novel", "fantasy"],
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
    genres: ["fiction", "historical fiction"],
  },
  {
    title: "The Name of the Wind",
    authors: ["Patrick Rothfuss"],
    rating: 4.54,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "The Overstory",
    authors: ["Richard Powers"],
    rating: 4.19,
    genres: ["fiction", "short stories"],
  },
  {
    title: "A Truly Horrible Book",
    authors: ["Xavier Time"],
    rating: 2.18,
    genres: ["fiction", "garbage"],
  },
  {
    title: "The Way of Kings",
    authors: ["Brandon Sanderson"],
    rating: 4.65,
    genres: ["fantasy", "epic"],
  },
  {
    title: "Lord of the flies",
    authors: ["William Golding"],
    rating: 3.67,
    genres: ["fiction"],
  },
];
// To group books by rating: goal to create array of objects [{}]
const groupedByRatings = booksLastPieces.reduce((groupedBooks, book) => {
  const key = Math.floor(book.rating); //chop decimal off
  if (!groupedBooks[key]) groupedBooks[key] = [];
  groupedBooks[key].push(book);
  return groupedBooks;
}, {});

console.log(groupedByRatings);
//{2: Array(1), 3: Array(2), 4: Array(7)}
//Array(1)
// 0:{title: 'A Truly Horrible Book', authors: Array(1), rating: 2.18, genres: Array(2)}
// length:1
// 3:Array(2)
// 0:{title: 'Changing My Mind', authors: Array(1), rating: 3.83, genres: Array(2)}
// 1:{title: 'Lord of the flies', authors: Array(1), rating: 3.67, genres: Array(1)}
// length:2
// 4:Array(7)
// 0:{title: 'Good Omens', authors: Array(2), rating: 4.25, genres: Array(2)}
// 1:{title: 'Bone: The Complete Edition', authors: Array(1), rating: 4.42, genres: Array(3)}
// 2:{title: 'American Gods', authors: Array(1), rating: 4.11, genres: Array(2)}
// 3:{title: 'A Gentleman in Moscow', authors: Array(1), rating: 4.36, genres: Array(2)}
// 4:{title: 'The Name of the Wind', authors: Array(1), rating: 4.54, genres: Array(2)}
// 5:{title: 'The Overstory', authors: Array(1), rating: 4.19, genres: Array(2)}
// 6:{title: 'The Way of Kings', authors: Array(1), rating: 4.65, genres: Array(2)}
// length:7
