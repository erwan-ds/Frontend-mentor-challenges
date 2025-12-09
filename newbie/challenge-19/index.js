const formButton = document.querySelector("button");
const wrappers = document.querySelectorAll(".input__wrapper");

formButton.addEventListener("click", (e) => {
  e.preventDefault();

  wrappers.forEach(wrapper => {
    const input = wrapper.querySelector("input");
    const errorText = wrapper.querySelector(".error-text");
    const value = input.value.trim();

    wrapper.classList.remove("error");
    if (errorText) errorText.textContent = "";


    if (value === "") {
      wrapper.classList.add("error");
      if (errorText) {
        errorText.textContent = getEmptyMessage(input.name);
      }
      return;
    }

    if (input.name === "email" && !isValidEmail(value)) {
      wrapper.classList.add("error");
      if (errorText) {
        errorText.textContent = "Looks like this is not an email";
      }
    }
  });
});

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getEmptyMessage(name) {
  switch (name) {
    case "firstname":
      return "First Name cannot be empty";
    case "lastname":
      return "Last Name cannot be empty";
    case "email":
      return "Email Address cannot be empty";
    case "password":
      return "Password cannot be empty";
    default:
      return "This field cannot be empty";
  }
}
