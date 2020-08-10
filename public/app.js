var map;

document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();
    const db = firebase.firestore();
});


// Create the script tag, set the appropriate attributes

function setupMap(){
  var script = document.createElement('script');
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCcFvCdo_5DPAUfRdhVq8sttNxwLAhLpUI&callback=initMap';
  script.defer = true;
  
  // Attach your callback function to the `window` object
  window.initMap = function() {
  
    var IndianaPA = {lat: 40.6215, lng: -79.1525}
  
    map = new google.maps.Map(document.getElementById('map'), {
      center: IndianaPA,
      zoom: 16
    });
  };
  
  // Append the 'script' element to 'head'
  document.head.appendChild(script);
}

setupMap();

//browserify public/app.js --debug | exorcist public/bundle.map.js > public/bundle.js

/*
var IndianaPA = {lat: 40.6215, lng: -79.1525}

window.intiMap = function() {   // map variable has been initialized globally
  map = new google.maps.Map(document.getElementById('map'), {
    center: IndianaPA,
    zoom: 16
  });
}
*/