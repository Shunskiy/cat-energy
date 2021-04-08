let imgBefore = document.querySelector(".example__img--before");
let imgAfter = document.querySelector(".example__img--after");
let range = document.querySelector(".example__slider-input");
let beforeButton = document.querySelector(".example__input-text--before");
let afterButton = document.querySelector(".example__input-text--after");

range.addEventListener("input", () => {
  imgBefore.style.width = 100 - range.value + "%";
  imgAfter.style.width = range.value + "%";
});

beforeButton.addEventListener("click", () => {
  imgBefore.style.width = 100 + "%";
  imgAfter.style.width = 0 + "%";

  range.value = 0;
});

afterButton.addEventListener("click", () => {
  imgBefore.style.width = 0 + "%";
  imgAfter.style.width = 100 + "%";

  range.value = 100;
});