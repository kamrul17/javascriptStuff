// REST OPERATOR
/*function restExample(...nums) {
  return nums;
}
console.log(restExample(10, 20, 20));
const nums = restExample(10, 20, 20);

for (let index = 0; index < nums.length; index++) {
  const element = nums[index];
  console.log(element);
}
*/
// OBJECT AS A PARAMETER
/*const user = {
  name: "lex",
  age: 25,
};
function handlObject(anyName) {
  console.log(`username is ${anyName.name} and my age is ${anyName.age}`);
}
handlObject(user);*/
// ANOTHER WAY TO SEND OBJECT
/*function handlObject(anyName) {
  console.log(`username is ${anyName.name} and my age is ${anyName.age}`);
}
handlObject({
  name: "lex",
  age: 25,
});*/
// ARRAY AS A PARAMETER
/*const arr = [1, 2, 3, 4, 5];
let size = arr.length;
function printArray(anyName) {
  console.log(`last elememnt is ${anyName[size - 1]} `);
}
printArray(arr);*/
// ANOTHER WAY TO SEND array
/*function printArray(anyName) {
  console.log(`last elememnt is ${anyName[anyName.length - 1]} `);
}
printArray([1, 2, 3, 4, 5]);
*/
// THIS USE IN FUNCTION
// const f1 = function () {
//   let user = "lex";
//   console.log(this);
// };
// f1();
// ARROW FUNCTION
/*const f1 = () => {
  let user = "lex";
  console.log(this);
};
f1();*/
// several way to define ARROW FUNCTION
// const f1 = () => num1 + num2;
// console.log(2, 3);
// suppose u have to return object
/*const f1 = (num, num2) => ({
  name: "lez",
});
console.log(f1(2, 3));*/
