var scaleCalculator     = require('./common/scaleCalculator');
var newMarker           = require('./common/newMarker');

var createFlame = function(googleMaps, lat, lng, icon, db /*, rootUrl*/){
//
  db.collection("flames").add({
    lat: lat,
    lng: lng,
    icon: icon,
    created_at: new Date()
  })
  .then(function(docRef) {
    
    // Render onto Map
    const newID =  docRef.id
    const position = masterArray.length;
    const zoomLvl = map.getZoom();
    const scalingCoefficient = scaleCalculator(zoomLvl);
    newMarker(googleMaps, lat, lng, icon, newID, position, scalingCoefficient);

  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });
};

module.exports = createFlame;
