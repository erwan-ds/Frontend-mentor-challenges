const mail =  document.querySelector(".mail");
const input = document.querySelector("input");
const formButton = document.querySelector("button");

formButton.addEventListener("click",(e) => {
  e.preventDefault();
const value = input.value.trim();

    if(!isValidEmail(value)){
        mail.classList.add("error");
    }else {
        mail.classList.remove("error");
    }
})

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}