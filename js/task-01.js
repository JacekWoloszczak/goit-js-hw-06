const allTheWorld = document.querySelector("#categories");
// console.log(allTheWorld);
const listWithId = document.querySelectorAll(".item").length;
console.log("Number of categories:", listWithId);

const listH2 = document.querySelector(".item");
const listH2Animals = listH2.childNodes[1];
const listUlLength = listH2.getElementsByTagName("li").length;
console.log("Category:", listH2Animals.textContent);
console.log("Elements:", listUlLength);
const listH2Products = listH2.nextElementSibling;
const productsH2 = listH2Products.childNodes[1];
console.log("Category:", productsH2.textContent);
const productsLength = listH2Products.getElementsByTagName("li").length;
console.log("Elements:", productsLength);
const listH2Technology = allTheWorld.lastElementChild;
const technologyH2 = listH2Technology.childNodes[1];
console.log("Category:", technologyH2.textContent);
const technologyLength = listH2Technology.getElementsByTagName("li").length;
console.log("Elements:", technologyLength);
