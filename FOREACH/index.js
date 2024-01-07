// const user = [
//   {
//     m1: "man1",
//     m2: "man2",
//   },
//   {
//     m3: "man3",
//     m4: "man4",
//   },
//   {
//     m5: "man5",
//     m6: "man6",
//   },
// ];
// user.forEach((items, index) => {
//   console.log([items.m1, index]);
// });
const user = [
  {
    m1: "man1",
    m2: "man2",
  },
  {
    m3: "man3",
    m4: "man4",
  },
  {
    m5: "man5",
    m6: "man6",
  },
];

// Use forEach to retrieve only the first item of each object
user.forEach((obj) => {
  const keys = Object.keys(obj);
  const lastKey = keys[keys.length - 2];
  const lastItem = obj[lastKey];

  console.log(lastItem);
});
