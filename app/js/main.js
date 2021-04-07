let imgBefore = document.querySelector(".example__img--before");
let imgAfter = document.querySelector(".example__img--after");
let range = document.querySelector(".example__slider-input");
let beforeButton = document.querySelector(".example__input-text--before");
let afterButton = document.querySelector(".example__input-text--after");
let mapElement = document.querySelector(".map");

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

function initMap() {
  let image = "../images/map-pin.png";
  let resolutionFix = { lat: 59.938786753250206, lng: 30.322068231597587 };

  var coordinates = { lat: 59.93873690835845, lng: 30.323096456467916 },
    map = new google.maps.Map(document.querySelector(".map__google-frame"), {
      center: resolutionFix,
      zoom: 18,
    }),
    marker = new google.maps.Marker({
      position: coordinates,
      icon: image,
      map: map,
      animation: google.maps.Animation.BOUNCE,
    });
}

initMap();
