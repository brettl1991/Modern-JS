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
