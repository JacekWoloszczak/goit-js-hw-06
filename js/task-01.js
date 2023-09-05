const listWithId = document.querySelector("#categories");

let maybe = listWithId.querySelectorAll(".item");
const more = document.querySelectorAll("li");

const headerH2List = listWithId.querySelectorAll("h2");

// console.log("Number of Categories:", maybe.length);

for (let i = 0; i < maybe.length; i++) {
  console.log("Number of Categories:", maybe.length);
  headerH2List.forEach((j) => {
    console.log(" Categories:", j.textContent);
    for (let k = 0; k < more.length; k++) {
      console.log("Elements:", more.length);
      break;
    }
  });
  break;
}
