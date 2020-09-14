var geolocation = function(){
  //var x = document.getElementById("demo");
  getLocation();

  function getLocation(map) {
    if (navigator.geolocation) {
      console.log("geolocation is available");
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }
  
  function showPosition(position) {
    var lat = position.coords.latitude,
        lng = position.coords.longitude;

    console.log(lat, lng);

    map.setCenter({lat: lat, lng: lng});
    console.log("Latitude: " + lat +
    "<br>Longitude: " + lng);
  }

};

module.exports = geolocation;
