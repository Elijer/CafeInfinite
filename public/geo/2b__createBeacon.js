var scaleCalculator     = require('./renderMarker/scaleCalculator');
var renderMarker           = require('./3__renderMarker');

var createBeacon = function(googleMaps, lat, lng, media, icon, db){
  console.log("Is this happening?");
///
  db.collection("flames").add({
    lat: lat,
    lng: lng,
    icon: icon,
    text: media.text,
    created_at: new Date()
  })
  .then(function(docRef) {
    // Render onto Map
    const newID =  docRef.id
    const position = masterArray.length;
    const zoomLvl = map.getZoom();
    const scalingCoefficient = scaleCalculator(zoomLvl);
    renderMarker(googleMaps, lat, lng, icon, newID, position, scalingCoefficient, false);

  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });
};

module.exports = createBeacon;
