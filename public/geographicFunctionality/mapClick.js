var $                   = require('jquery');
//var rootURL             = require ('../rootURL');
var createFlame         = require('./createFlame');

var mapClick = function(googleMaps, db){
    map.addListener('click', function(e) {
    //google maps stores click lat & lng in a weird way;
    var lat = e.latLng.lat();
    var lng = e.latLng.lng();
    //console.log("their style", lat, lng)

    createFlame(googleMaps, lat, lng, db/*, rootURL*/);

  });
};

module.exports = mapClick;
