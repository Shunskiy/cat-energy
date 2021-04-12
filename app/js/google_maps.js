let mapElement = document.querySelector(".map");

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
