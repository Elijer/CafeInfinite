// Okay still can't access the gif library.
// They might be getting bundled with everything else? I guess?
// Research if that happens
// However, I don't know if I want them to be bundled
// Maybe I should configure the gulp file so that they are NOT bundled.
// Instead, I can just optimize them myself.


var loadGoogleMapsApi   = require ('load-google-maps-api-2'); //use googleMaps, not google.maps w/ this module
var getMapData          = require ('./2a__getMapData'); //has two underscores
var newMap              = require('./createMap/newMap');
var geolocation         = require ('./tools/geolocation');
var { mainLoader }      = require('../utility/utility');
var { iconInterface, toggleIconInterface, populateIconInterface}      = require('../views/markerMenu');
//var onZoomChange        = require('./onZoomChange');
//var onBoundsChange      = require('./onBoundsChange_v2.0');

function geo(db, key){
  //
  
  mainLoader(true);

  loadGoogleMapsApi.key = key;
  loadGoogleMapsApi().then(function (googleMaps) {

    var testing = true;

    // CREATE GLOBALS: MAP AND ARRAYS
    map = newMap(googleMaps); // googleMaps is definitely needed here
    gMaps = googleMaps;
    store = {};
    store.mapClick = {};
    store.markerType = null;
    store.db = db;
    store.mapClick.active = false;
    masterArray = [];
    gifArray = [];

    // MAP CLICK
    map.addListener('click', function(e) {
      store.mapClick.active = true;
      store.mapClick.lat = e.latLng.lat();
      store.mapClick.lng = e.latLng.lng();
    });

    getMapData(googleMaps, db);

    // 
    geolocation(map);
    mainLoader(false);


    /* ***** HTML ELEMENT EVENTS **** */

    /* CREATE CENTER MAP LISTENER */
    var centerMap = document.getElementById("center-map");
    centerMap.addEventListener("click", function(){
      geolocation();
    })

    /* CREATE NEW MARKER BUTTON LISTENER */
    var openMenu = document.getElementById("new-marker");
    openMenu.addEventListener("click", function(){
      toggleIconInterface();
    })

    populateIconInterface();

  }).catch(function (err) {
    console.error("There was a problem in the geo file", err);
  });

};

/*       var lat = parseFloat(localStorage.getItem('lat'));
      var lng = parseFloat(localStorage.getItem('lng'));
      if (lat && lng){
        createBeacon(googleMaps, lat, lng, gifs.flame, db);
      }
 */


module.exports = geo;
