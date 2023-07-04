const newItem = document.createElement("span");
let counterValue = 0;
counterValue = newItem;
newItem.classList.add(".value");
newItem.textContent = 0;
const oldItem = document.querySelector("#value");
counter.replaceChild(newItem, oldItem);

const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);

decrementButton.addEventListener("click", () => {
  counterValue.innerHTML--;
});

const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);

incrementButton.addEventListener("click", () => {
  counterValue.innerHTML++;
});
