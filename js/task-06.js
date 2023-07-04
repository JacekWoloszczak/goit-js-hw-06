const variable = document.querySelector("input");

variable.addEventListener("blur", (e) => {
  if (
    e.currentTarget.value.length ===
    parseInt(e.currentTarget.getAttribute("data-length"))
  )
    e.currentTarget.setAttribute("class", "valid");
  else e.currentTarget.setAttribute("class", "invalid");
});
