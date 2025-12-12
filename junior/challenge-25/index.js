const toggle = document.querySelector(".nav-toggle");
const closeBtn = document.querySelector(".nav-close");
const nav = document.querySelector(".nav");
const body = document.body;


toggle.addEventListener("click", () => {
  nav.classList.add("is-open");
  toggle.setAttribute("aria-expanded", "true");
    body.classList.add("no-scroll");
});

closeBtn.addEventListener("click", () => {
  nav.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
    body.classList.remove("no-scroll");
});



