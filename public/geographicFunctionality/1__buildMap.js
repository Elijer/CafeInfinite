var loadGoogleMapsApi   = require ('load-google-maps-api-2'); //use googleMaps, not google.maps w/ this module
var getMapData          = require('./2__getMapData'); //has two underscores
var newMap              = require('./createMap/newMap');
var geolocation         = require ('./geolocation');
var createBeacon        = require ('./createBeacon')
var mapClick            = require ('./mapClick');
var mainLoader          = require('../utility/mainLoader');

buildMap = function(db, key){
  
  mainLoader(true);

  loadGoogleMapsApi.key = key;
  loadGoogleMapsApi().then(function (googleMaps) {

    // CREATE MAP
    map = newMap(googleMaps); // googleMaps is definitely needed here

    //setup empty arrays
    masterArray = [];
    gifArray = [];

    //CLICK EVENTS: SELECT ONE;
    mapClick(googleMaps, db); //marker gets added to map
    //boundsPrinter(googleMaps, 1); //tool for viewing the previous bounds of a screen

    getMapData(googleMaps, db);
    geolocation(map);
    mainLoader(false);

    /* CREATE CENTER MAP LISTENER */
    var centerMap = document.getElementById("center-map");
    centerMap.addEventListener("click", function(){
      geolocation();
    })

    /* CREATE NEW MARKER BUTTON LISTENER */
    var centerMap = document.getElementById("new-marker");
    centerMap.addEventListener("click", function(){
      var lat = parseFloat(localStorage.getItem('lat'));
      var lng = parseFloat(localStorage.getItem('lng'));
      if (lat && lng){
        createBeacon(googleMaps, lat, lng, db);
      }
    })


  }).catch(function (err) {
    console.error("There was a problem building the map", err);
  });
};

module.exports = buildMap;
