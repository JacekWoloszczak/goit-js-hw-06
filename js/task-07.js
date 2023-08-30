const input = document.querySelector("input#font-size-control");
input.setAttribute("type", "range");
const text = document.querySelector("span#text");

input.addEventListener("input", (e) => {
  {
    text.style.fontSize++;
    text.style.fontSize = `${input.value}px`;
  }
});
