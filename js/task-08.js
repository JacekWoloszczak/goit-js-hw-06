const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);
const resetinput = document.createElement("input");
registerForm.append(resetinput);
resetinput.textContent = "reset";
resetinput.type = "reset";
function handleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const mail = form.elements.email.value;
  const pass = form.elements.password.value;
  const {
    elements: { email, password },
  } = form;

  if (mail === "" || pass === "") {
    return alert("Please fill in all the fields!");
  } else {
    registerForm.addEventListener("click", () => {
      console.log(email.value, password.value);
      // const input = registerForm.querySelector("input");
      // input.addEventListener("input", () => {});
    });
  }
}
