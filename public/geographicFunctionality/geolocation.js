var geolocation = function(){
  var loader = document.getElementById("loading");
  loader.style.visibility = "visible";
  //var x = document.getElementById("demo");
  getLocation();

  function getLocation(map) {
    if (navigator.geolocation) {
      console.log("geolocation is available");
      console.log(navigator.geolocation);
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      loader.style.visibility = "hidden";
      alert("Geolocation is not supported by this browser.");
    }
  }
  
  function showPosition(position) {
    console.log("this is runnin");
    var lat = position.coords.latitude,
        lng = position.coords.longitude;

    console.log(lat, lng);

    map.setCenter({lat: lat, lng: lng});
    loader.style.visibility = "hidden";
    console.log("Latitude: " + lat +
    "<br>Longitude: " + lng);
  }

};

module.exports = geolocation;
