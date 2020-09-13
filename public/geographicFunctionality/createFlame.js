var $                   = require('jquery');
var scaleCalculator     = require('./common/scaleCalculator');
var newMarker           = require('./common/newMarker');

var createFlame = function(googleMaps, lat, lng, db /*, rootUrl*/){

  db.collection("flames").add({
    lat: lat,
    lng: lng,
    created_at: new Date()
  })
  .then(function(docRef) {
    var newID =  docRef.id,
      position = masterArray.length,
      zoomLvl = map.getZoom(),
      scalingCoefficient = scaleCalculator(zoomLvl);

    newMarker(googleMaps, lat, lng, newID, position, scalingCoefficient);
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });
};

module.exports = createFlame;
