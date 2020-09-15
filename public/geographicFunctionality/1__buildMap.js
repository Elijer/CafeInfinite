var loadGoogleMapsApi   = require ('load-google-maps-api-2'); //use googleMaps, not google.maps w/ this module
var getMapData          = require('./2__getMapData'); //has two underscores
var newMap              = require('./createMap/newMap');
var geolocation         = require ('./geolocation');
var geolocation2         = require ('./geolocation2');
var createFlame         = require ('./createFlame')
// var boundsPrinter       = require('./tools/boundsPrinter');
// var $                   = require ('jquery');
var mapClick            = require ('./mapClick');

//loadGoogleMapsApi.key   = 'AIzaSyBI6f3-WMTwlVP7CVhpKiMbVlWvgI0s1_E';

buildMap = function(db, key){
  var loader = document.getElementById("loading");
  loader.style.visibility = "visible";

  loadGoogleMapsApi.key = key;
  /* should asyncronously load googleMaps AND getMapData
  so that they can load in either order, but for now I am not */
  loadGoogleMapsApi().then(function (googleMaps) {

    gMaps = googleMaps;

    // create map
    map = newMap(googleMaps); // googleMaps is definitely needed here

    //setup empty arrays
    masterArray = [];
    gifArray = [];

    //CLICK EVENTS: SELECT ONE;
    mapClick(googleMaps, db); //marker gets added to map
    //boundsPrinter(googleMaps, 1); //tool for viewing the previous bounds of a screen

    getMapData(googleMaps, db); // this is what should be done asynchronously independently of loading google maps
    geolocation(map);
    loader.style.visibility = "hidden";

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
        //console.log("my style", lat, lng);
        createFlame(googleMaps, lat, lng, db);

      }
      //console.log("New Marker!");
      //createFlame(googleMaps)
      //console.log(position);
    })


  }).catch(function (err) {
    console.error(err);
  });
};

module.exports = buildMap;
