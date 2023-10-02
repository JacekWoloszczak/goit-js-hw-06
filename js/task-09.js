const body = document.querySelector("body");
const button = body.querySelector(".change-color");
const span = body.querySelector("span");
console.log(span);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

button.addEventListener("click", (event) => {
  body.style.backgroundColor = getRandomHexColor(event);
  span.textContent = getRandomHexColor(event);
});
