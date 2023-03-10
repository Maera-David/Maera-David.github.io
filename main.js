// nav background

let header = document.querySelector("header");

window.classList.toggle("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
})