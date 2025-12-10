const submit = document.querySelector(".submit");
const radios = document.querySelectorAll('input[name="rate"]');
const ratingValue = document.querySelector('.value');
const panel = document.querySelector('.panel');
submit.addEventListener('click', () => {
 
  const selected = document.querySelector('input[name="rate"]:checked');

  if (!selected) {
    alert("Please select a rating first 😅");
    return;
  }

  ratingValue.textContent = selected.value;

  panel.classList.remove("show-form")
  panel.classList.add("show-thanks");

});