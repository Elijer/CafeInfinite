var loadGoogleMapsApi   = require ('load-google-maps-api-2'); //use googleMaps, not google.maps w/ this module
var getMapData          = require ('./2a__getMapData'); //has two underscores
var newMap              = require('./createMap/newMap');
var { geolocation }        = require ('./tools/geolocation');
var { mainLoader }      = require('../utility/utility');
// just inspiration for creating a new helper file for viewPost
var { iconInterface, toggleIconInterface, populateIconInterface}      = require('../views/markerMenu');
var { markerViewListeners }      = require('../views/markerView');

function geo(db, key){
  
  mainLoader(true);

  loadGoogleMapsApi.key = key;
  loadGoogleMapsApi().then(function (googleMaps) {

    // CREATE GLOBALS: MAP AND ARRAYS
    map = newMap(googleMaps); // googleMaps is definitely needed here
    gMaps = googleMaps;

    store = {
      db: db,
      testing: true,
      markerType: null,
      markerText: null,
      mapClick: {
        active: true
      }
    };

    masterArray = [];
    gifArray = [];

    getMapData(googleMaps, db);
    geolocation(map);
    mainLoader(false);
    populateIconInterface();

    markerViewListeners();

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



  }).catch(function (err) {
    console.error("There was a problem in the geo file", err);
  });

};


module.exports = geo;
