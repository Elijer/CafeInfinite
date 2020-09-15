var geolocation = function(){
  var loader = document.getElementById("loading");
  loader.style.visibility = "visible";
  //var x = document.getElementById("demo");
  getLocation();

  function getLocation(map) {
    if (navigator.geolocation) {
      console.log("geolocation is available");
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      loader.style.visibility = "hidden";
      alert("Geolocation is not supported by this browser.");
    }
  }
  
  function showPosition(position) {
    var lat = position.coords.latitude,
        lng = position.coords.longitude;

    var data = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }

    localStorage.setItem('lat', position.coords.latitude);
    localStorage.setItem('lng', position.coords.longitude);

    map.setCenter({lat: lat, lng: lng});
    loader.style.visibility = "hidden";
/*     console.log("Latitude: " + lat +
    "<br>Longitude: " + lng); */

    return position.coords
  }

};

module.exports = geolocation;
