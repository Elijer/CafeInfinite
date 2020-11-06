var geolocation = function(){
  var loader = document.getElementById("loading");
  loader.style.visibility = "visible";
  
  // 
  getLocation();

  currentPositionCircle = new google.maps.Circle({
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    map,
/*     center: citymap[city].center, */
    radius: .2,
  });

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
      navigator.geolocation.getCurrentPosition(success, error, options);
    } else {
      loader.style.visibility = "hidden";
      alert("Geolocation is not supported by this browser.");
    }
  }
  
  function success(position) {
    var lat = position.coords.latitude,
        lng = position.coords.longitude;

    console.log("New position", lat, lng);

    localStorage.setItem('lat', position.coords.latitude);
    localStorage.setItem('lng', position.coords.longitude);

    map.setCenter({lat: lat, lng: lng});
    currentPositionCircle.center = {lat, lng};
    loader.style.visibility = "hidden";

  }

};

var watchPosition = function(){
  // This functionc an be called one time when map is initiated in order to watch the user's GPS location and save it
  // to a global variable. That way, when a new post is made, it can simply consult the store
  // One concern I have with this is, how often does the watch method update? Can the update rate be trusted?
}

var getPosition = function(callback){
  // In case watch position can't be trusted, this can be used instead to get the user's location as requested.
  // This may be ideal, as it only consults geolocation when needed, potentially increasing performance and,
  // more importantly, providing more accurate geolocation information. However, one downside is that it could cause a lag
  // between the position request and when it is actually delivered.
  // It might be better to simply set the marker's position to whatever is in the store, and THEN change it to what
  // getPosition returns, for the best of both worlds.
  // Note: both getPosition and watchPosition should be used WITH centerMap() so that user is 'guided' to their current
  // position when they make a post.
  // Also, the position should be derived from the moment they click the "New Marker" button. Small thing, but important if
  // you are in a moving vehicle and your position changes.
}


var centerIt = function(){

  console.log("center map called")

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  // Set Error
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(setMap, error, options);
  } else {
    loader.style.visibility = "hidden";
    alert("Geolocation is not supported by this browser.");
  }

}

var setMap = function(position){

  var lat = position.coords.latitude,
      lng = position.coords.longitude;

  console.log(lat, lng);

  localStorage.setItem('lat', position.coords.latitude);
  localStorage.setItem('lng', position.coords.longitude);

  map.setCenter({lat: lat, lng: lng});

}

module.exports = { geolocation, centerIt };
