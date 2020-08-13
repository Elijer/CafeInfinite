var mapStyle = require('./mapStyles/dark_cities');
let IndianaPA = {lat: 40.6215, lng: -79.1525}

function newMap(){

  loadGoogleMaps();
  
  window.initMap = function() {   // Callback must be attached to the `window` object
    map = new google.maps.Map(document.getElementById('map'), {
      center: IndianaPA,
      styles: mapStyle,
      zoom: 16
    });
  };

}

function  loadGoogleMaps(){   // adds the loader script tag to the document
  var script = document.createElement('script');
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCcFvCdo_5DPAUfRdhVq8sttNxwLAhLpUI&callback=initMap';
  script.defer = true;
  document.head.appendChild(script);
}
  

module.exports = newMap