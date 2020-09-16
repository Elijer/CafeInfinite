var $                   = require('jquery');
//var rootURL             = require ('../rootURL');
var createBeacon         = require('./createBeacon');
var gifs                = require('./common/gif_library');

var flame = "./geographicFunctionality/gifs/flames/flame.gif";

var mapClick = function(googleMaps, db){
    map.addListener('click', function(e) {

    var lat = e.latLng.lat(); //google maps stores click lat & lng in a weird way;
    var lng = e.latLng.lng();

    createBeacon(googleMaps, lat, lng, gifs.flame, db/*, rootURL*/);

  });
};

module.exports = mapClick;
