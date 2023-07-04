const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// for (const vege of ingredients) {
//   const list = document.createElement("li");
//   list.classList.add("item");
//   list.textContent = `${vege}`;

//   console.log(list);
// }

const list = document.querySelector("ul#ingredients");
const vegetable = ingredients.map((vege) => `<li>${vege}</li>`);
console.log(vegetable);

list.innerHTML = vegetable;
