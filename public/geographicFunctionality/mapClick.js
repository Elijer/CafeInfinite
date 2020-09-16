var createBeacon         = require('./createBeacon');
var gifs                = require('./common/gif_library');

var mapClick = function(googleMaps, db){
    map.addListener('click', function(e) {

    var lat = e.latLng.lat();
    var lng = e.latLng.lng();

    // this is where the map click beacon type can be set, but of course
    // the newBeacon button will pass through the icon instead.
    createBeacon(googleMaps, lat, lng, gifs.flame, db);

  });
};

module.exports = mapClick;
