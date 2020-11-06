var loadGoogleMapsApi   = require ('load-google-maps-api-2'); //use googleMaps, not google.maps w/ this module
var getMapData          = require ('./2a__getMapData'); //has two underscores
var newMap              = require('./createMap/newMap');
var { geolocation, centerIt }        = require ('./tools/geolocation');
var { mainLoader }      = require('../utility/utility');
// var { mapClick }      = require('../utility/testing'); // this is unfortunately broken atm
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

      let lat = parseFloat(localStorage.getItem('lat'));
      let lng = parseFloat(localStorage.getItem('lng'));

      if (typeof lat === number ){
        map.setCenter({lat: lat, lng: lng});
      } else {
        centerIt();
      }

    })

    /* CREATE NEW MARKER BUTTON LISTENER */
    var openMenu = document.getElementById("new-marker");
    openMenu.addEventListener("click", function(){

      // reset the textBox to be empty
      var textBox = document.getElementById("post-description");
      textBox.value = "";

      toggleIconInterface();
    })



  }).catch(function (err) {
    console.error("There was a problem in the geo file", err);
  });

};


module.exports = geo;
