const nav = document.querySelector("nav");
const nav_btn = document.querySelector(".nav-toggle");


nav_btn.addEventListener("click", (e) =>{

    e.stopPropagation(); 
    nav.classList.toggle("is-open");

    const expanded = nav_btn.getAttribute("aria-expanded") === "true";
    nav_btn.setAttribute("aria-expanded", String(!expanded));

} );
nav.addEventListener("click", (e) => {
    e.stopPropagation();
});


document.addEventListener("click", () => {
    nav.classList.remove("is-open");
    nav_btn.setAttribute("aria-expanded", "false");
});