// Okay so I saved a mapClick.js file to the desktop. I can use that in order to, well, use it again

var loadGoogleMapsApi   = require ('load-google-maps-api-2'); //use googleMaps, not google.maps w/ this module
var getMapData          = require ('./2a__getMapData'); //has two underscores
var createBeacon        = require ('./2b__createBeacon')
var newMap              = require('./createMap/newMap');
var geolocation         = require ('./tools/geolocation');
var { mainLoader }      = require('../utility/utility');
var { iconInterface, populateIconInterface}      = require('../views/markerMenu');
var gifs                = require('./renderMarker/gif_library');
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
    store = {};
    store.mapClick = {};
    store.mapClick.active = false;
    masterArray = [];
    gifArray = [];

    // MAP CLICK
    map.addListener('click', function(e) {
      store.mapClick.active = true;
      store.mapClick.lat = e.latLng.lat();
      store.mapClick.lng = e.latLng.lng();
      iconInterface();
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
      iconInterface();
    })

    populateIconInterface();

    var textCreatePost = document.getElementById("text-create-post");
    textCreatePost.addEventListener("click", function(){
      var textBox = document.getElementById("post-description");
      var text = textBox.value;

      console.log(text);
    });



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
