// const arr = [11, 2, 23, 4, 45];
// console.log(arr[0])
// arr.unshift(6);
// arr.shift();
// slice and splice
/*const afterSlice = arr.slice(1, 4);
console.log(arr);
console.log(afterSlice);
console.log(arr);
const afterSplice = arr.splice(1, 4);
console.log(arr);
console.log(afterSplice);
console.log(arr);*/
// spread operator
/*const a1 = [1, 2, 3];
const a2 = [11, 22, 33];
const merge = [...a1, ...a2, ...arr];
console.log(merge);*/
// flat operator
/*const a1 = [1, 2, [3, 0], [3, 40, 32], 2];
const merge = a1.flat(Infinity);
console.log(merge);
*/
// how to convert into array of any value
// let a = 100;
// let b = 10;
// let c = 130;
// const makeArray = Array.from(a, b, c);
// console.log(makeArray);

// OBJECT
const mysym = Symbol("jsj");
const user = {
  name: "lex",
  age: 21,
  [mysym]: "symbol",
  "full name": "lexen",
};

// Object.freeze(user);
// user.name = "leappy";
// console.log(user.name);
// console.log(user.age);
// console.log(user[mysym]);
// console.log(user["full name"]);
// console.log(user);
user.greeting = function () {
  console.log(`hey user,${this.name}`);
};
console.log(user.greeting());
console.log(user);
