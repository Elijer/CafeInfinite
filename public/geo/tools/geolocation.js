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
  // position when they make a post. OR, they could be guided there when they press the New Marker Button, instead.
}


var centerMap = function(){

}

module.exports = { geolocation };
