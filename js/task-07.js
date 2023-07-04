const input = document.querySelector("input#font-size-control");
input.setAttribute("type", "range");
const text = document.querySelector("span#text");

input.addEventListener("input", (e) => {
  if (input.currentTarget) {
    text.style.fontSize++;
  }
});
