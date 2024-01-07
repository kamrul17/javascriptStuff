// let heading = document.getElementById("head");
// heading.innerHTML = "welcome back";
// let para = document.getElementById("para");
// para.innerHTML = "welcome back";
// para.style.color = "red";
// para.style.borderRadius = "10px";

// const parent = document.querySelector(".parent");
/*console.log(parent);
console.log(parent.children);
parent.children[0].innerHTML = "red";
for (let index = 0; index < parent.children.length; index++) {
  console.log(parent.children[index].innerHTML);
}*/
/*console.log(parent.firstElementChild);
const first = parent.firstElementChild.innerHTML;
console.log(first);
console.log(parent.firstElementChild);
const last = parent.lastElementChild.innerHTML;
console.log(last);*/
/*const dayOne = document.querySelector(".day");
console.log(dayOne.innerHTML);
console.log(dayOne.parentElement);
console.log(dayOne.nextElementSibling.innerHTML);

console.log("NODES: ", parent.childNodes);
*/

// CREATE ELEMENT
// const div = document.createElement("div");
// console.log(div);
// div.className = "main";
// // div.id = Math.random() * 10 + 1;
// console.log(div.outerHTML);
// const button = document.createElement("button");

// div.setAttribute("title", "generated title");
// div.style.backgroundColor = "green";
// div.style.width = "100px";
// div.style.height = "100px";
// div.innerText = "just learning";

// console.log(div.outerHTML);
// document.body.appendChild(div);

function createDiv(num) {
  for (let index = 0; index < num; index++) {
    const div = document.createElement("div");
    div.style.backgroundColor = "green";
    div.style.marginTop = "5px";

    div.style.marginTop = "5px";
    div.style.width = "100px";
    div.style.height = "100px";
    div.innerText = "just learning";

    document.body.appendChild(div);
  }
}
