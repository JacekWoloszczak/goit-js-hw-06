const listWithId = document.querySelector("ul#categories");

const maybe = listWithId.querySelectorAll(".item");
const more = listWithId.querySelectorAll("li");

// const headerH2List = listWithId.querySelectorAll("h2");

console.log("Number of Categories:", maybe.length);

// for (let i = 0; i < maybe.length; i++)
maybe.forEach((maybe) => {
  const headerH2List = maybe.querySelector("h2");
  console.log(" Categories:", headerH2List.textContent);
  const animal = maybe.querySelectorAll("li");
  console.log(" Elements:", animal.length);
});
