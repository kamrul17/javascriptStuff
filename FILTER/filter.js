const arr = [1, 23, 5, 5, 6, 78, 8];
// foreach never return anything
// const num = arr.forEach((nums) => {
//   console.log(nums);
// });
// console.log(num);

// so we use filter to return something
// const num = arr.filter((nums) => {
//   if (nums > 5) {
//     return nums;
//   }
// });
// console.log(num);
// also we can do it in thissimple way
// const num = arr.filter((nums) => nums > 5);
// console.log(num);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

const book = books.filter(
  (book) => book.publish >= 1995 && book.genre == "History"
);
console.log(book);
// const book = books.filter((book) => {
//   return book.genre == "History";
// });
// console.log(book);
