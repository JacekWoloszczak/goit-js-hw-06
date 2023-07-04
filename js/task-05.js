const message = document.querySelector("#name-input");
const nameLeave = document.querySelector("#name-output");
// textInput = message.value;
message.addEventListener("input", (event) => {
  if (message.value) {
    nameLeave.textContent = event.currentTarget.value;
  } else {
    nameLeave.textContent = "Anonymous";
  }
});
