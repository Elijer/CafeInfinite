var map;

document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();
    const db = firebase.firestore();
});

var IndianaPA = {lat: 40.6215, lng: -79.1525}

function initMap() {   // map variable has been initialized globally
  map = new google.maps.Map(document.getElementById('map'), {
    center: IndianaPA,
    zoom: 16
  });
}