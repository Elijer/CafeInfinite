var geolocation = function(){
  var loader = document.getElementById("loading");
  loader.style.visibility = "visible";
  
  // 
  getLocation();

  // Set Options
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  // Set Error
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  function getLocation() {
    if (navigator.geolocation) {
      // so the way getCurrentPosition is set up, it already IS a promise that can be used by center map.
      //navigator.geolocation.getCurrentPosition(success, error, options);
      navigator.geolocation.watchPosition(success, error, options);
    } else {
      loader.style.visibility = "hidden";
      alert("Geolocation is not supported by this browser.");
    }
  }
  
  function success(position) {
    var lat = position.coords.latitude,
        lng = position.coords.longitude;

    console.log(lat, lng);

    // why the hell would you do this
    localStorage.setItem('lat', position.coords.latitude);
    localStorage.setItem('lng', position.coords.longitude);

    //map.setCenter({lat: lat, lng: lng});
    //loader.style.visibility = "hidden";

    // this should be the only thing it does.
    //return position.coords

  }

};

module.exports = { geolocation };
