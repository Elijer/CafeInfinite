var loadGoogleMapsApi   = require ('load-google-maps-api-2'); //use googleMaps, not google.maps w/ this module
var getMapData          = require('./3__getMapData'); //has two underscores
var newMap              = require('./createMap/newMap');
var geolocation         = require ('./geolocation');
// var boundsPrinter       = require('./tools/boundsPrinter');
// var $                   = require ('jquery');
var mapClick            = require ('./mapClick');

loadGoogleMapsApi.key   = 'AIzaSyBI6f3-WMTwlVP7CVhpKiMbVlWvgI0s1_E';

buildMap = function(_db, db){
  loadGoogleMapsApi().then(function (googleMaps) {

    map = newMap(googleMaps);
    masterArray = [];
    gifArray = [];


    //CLICK EVENTS: SELECT ONE;
    mapClick(googleMaps, db); //marker gets added to map
    //boundsPrinter(googleMaps, 1); //tool for viewing the previous bounds of a screen

    getMapData(googleMaps, _db);
    geolocation(map);

  }).catch(function (err) {
    console.error(err);
  });
};

module.exports = buildMap;
