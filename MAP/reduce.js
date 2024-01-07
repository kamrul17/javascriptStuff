const arr = [1, 2, 3, 5];
// const nums = arr.reduce((acc, curr) => {
//   return acc + curr;
// }, 5);
// console.log(nums);
const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];
// find total price
const tp = shoppingCart.reduce((acc, items) => {
  return acc + items.price;
}, 0);
console.log(tp);
