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
    geolocation();
    mainLoader(false);
    populateIconInterface();

    markerViewListeners();

    /* ***** HTML ELEMENT EVENTS **** */

    /* CREATE CENTER MAP LISTENER */
    var centerMap = document.getElementById("center-map");
    centerMap.addEventListener("click", function(){

      /* Okay some weird things at work here. For one, the lat and lng getting stored are a weird data type
      and need to be wrapped with parseFloat. Another thing is that I am using watchPosition to save the 
      new lat and lng to localStorage everytime they change. I would like to request them, but besides from being
      slower, geolocation API apparently has a problem on chrome that prevents getCurrentLocation() form being called
      more than once??? So watchLocation is ultimately more reliable (shrugs) */

      let lat = parseFloat(localStorage.getItem('lat'));
      let lng = parseFloat(localStorage.getItem('lng'));

      if (typeof lat == 'number' ){
        console.log('coords exist, going to use')
        map.setCenter({lat: lat, lng: lng});
      }

      // this function doesn't work because of the bug I mentioned above. You should read up on geolocation and make sure
      // that you are following best practices, because ideally, new coordinates should be found, right?
      // Unless watchPosition is accurate and frequent enough, but I don't think it updates that frequently. Worth testing.
      centerIt();

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
