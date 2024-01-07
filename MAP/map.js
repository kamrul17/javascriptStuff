const arr = [1, 2, 3, 5];
// const nums = arr.map((num) => {
//   return num + 10;
// });
// console.log(nums);

// by using foreach() we can do this.Map never return
// const arr1 = [];
// arr.forEach((num) => {
//   arr1.push(num + 10);
//   return arr1;
// });
// console.log(arr1);
// CHAINING IN MAP
const num = arr
  .map((nums) => nums * 10)
  .map((nums) => nums + 1)
  .filter((nums) => nums > 20);
console.log(num);
