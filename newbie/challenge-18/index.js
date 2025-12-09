
const inner = document.querySelector(".submit__inner");
const input = document.querySelector(".email-input");
const button = document.querySelector(".submit-btn");
const errorMessage = document.querySelector(".error-message");

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function showError() {
  inner.classList.add("error");
  errorMessage.classList.add("error");
}

function hideError() {
  inner.classList.remove("error");
  errorMessage.classList.remove("error");
}

button.addEventListener("click", (e) => {
  e.preventDefault(); 

  const email = input.value.trim();

  if (isValidEmail(email)) {
    hideError();
  } else {
    showError();
  }
});
