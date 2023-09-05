const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    return alert("Please fill in all the fields!");
  } else {
    registerForm.addEventListener("click", () => {
      const sub1 = document.createElement("p");
      sub1.style.backgroundColor = "red";
      sub1.style.padding = "20px";
      const out = document.createElement("button");
      out.style.padding = "20px";

      registerForm.append(sub1);

      registerForm.append(out);
    });
  }
}

out.addEventListener("click", () => {
  const out = document.querySelectorAll("button");
  out.remove("sub1");
});
