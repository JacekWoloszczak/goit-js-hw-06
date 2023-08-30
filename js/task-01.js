const listWithId = document.querySelector("#categories");
const listItem = listWithId.querySelectorAll(".item");
const headerH2List = listWithId.querySelectorAll("h2");
const liIn = listWithId.querySelectorAll("li");

// const listLi = document.querySelectorAll("ul li");

console.log("Number of Categories:", listItem.length);

headerH2List.forEach((i) => {
  console.log("categories:", i.textContent);
  for (let j = 0; j <= liIn.length; j++) {
    console.log("Elements:", j);
  }
});
