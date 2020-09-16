var $                   = require('jquery');
//var rootURL             = require ('../rootURL');
var createFlame         = require('./createFlame');
var gifs                = require('./common/gif_library');

var flame = "./geographicFunctionality/gifs/flames/flame.gif";

var mapClick = function(googleMaps, db){
    map.addListener('click', function(e) {
    //google maps stores click lat & lng in a weird way;
    var lat = e.latLng.lat();
    var lng = e.latLng.lng();
    //console.log("their style", lat, lng)

    createFlame(googleMaps, lat, lng, gifs.cat, db/*, rootURL*/);

  });
};

module.exports = mapClick;
