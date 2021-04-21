const nav_button = document.querySelector(".header__toggle-nav");
const nav_menu = document.querySelector(".header__nav-bar");

nav_button.addEventListener("click", () => {
    nav_menu.classList.toggle("header__nav-bar--disable")
})
