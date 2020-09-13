var geolocation = function(){
  //var x = document.getElementById("demo");
  getLocation();

  function getLocation(map) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }
  
  function showPosition(position) {
    var lat = position.coords.latitude,
        lng = position.coords.longitude;

    map.setCenter({lat: lat, lng: lng});
    console.log("Latitude: " + lat +
    "<br>Longitude: " + lng);
  }

};

module.exports = geolocation;
