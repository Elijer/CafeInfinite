var loadGoogleMapsApi   = require ('load-google-maps-api-2'); //use googleMaps, not google.maps w/ this module
var getMapData          = require ('./2a__getMapData'); //has two underscores
var createBeacon        = require ('./2b__createBeacon')
var newMap              = require('./createMap/newMap');
var geolocation         = require ('./tools/geolocation');
var { mainLoader, markerMenu }      = require('../utility/utility');
var gifs                = require('./renderMarker/gif_library');
//var onZoomChange        = require('./onZoomChange');
//var onBoundsChange      = require('./onBoundsChange_v2.0');

function geo(db, key){
  
  mainLoader(true);

  loadGoogleMapsApi.key = key;
  loadGoogleMapsApi().then(function (googleMaps) {

    // CREATE GLOBALS: MAP AND ARRAYS
    map = newMap(googleMaps); // googleMaps is definitely needed here
    masterArray = [];
    gifArray = [];

    // MAP CLICK
/*     map.addListener('click', function(e) {
      var lat = e.latLng.lat();
      var lng = e.latLng.lng();
      createBeacon(googleMaps, lat, lng, gifs.cat, db);
    }); */

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
    var newMarker = document.getElementById("new-marker");
    newMarker.addEventListener("click", function(){
      markerMenu();
    })

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
