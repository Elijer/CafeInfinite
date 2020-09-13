var $                   = require('jquery');
var scaleCalculator     = require('./common/scaleCalculator');
var newMarker           = require('./common/newMarker');

var createFlame = function(googleMaps, lat, lng, db /*, rootUrl*/){
  //console.log(db);
  //var flames = db.collection('flames');

  // Add a new document with a generated id.
  db.collection("flames").add({
    lat: lat,
    lng: lng,
    created_at: new Date()
  })
  .then(function(docRef) {
    //console.log("Document written with ID: ", docRef.id);
    var newID =  docRef.id,
      position = masterArray.length,
      zoomLvl = map.getZoom(),
      scalingCoefficient = scaleCalculator(zoomLvl);

    newMarker(googleMaps, lat, lng, newID, position, scalingCoefficient);
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });

  //console.log("New flame added");

/*   var newID = newFlame._id,
    position = masterArray.length,
    zoomLvl = map.getZoom(),
    scalingCoefficient = scaleCalculator(zoomLvl);

  newMarker(googleMaps, lat, lng, newID, position, scalingCoefficient); */

  

  // and then I need to add it to a master array and render the master array




/*     $.post(rootUrl + '/api/flames', {lat: lat, lng: lng})
      .then(function(newFlame){
        //console.log(newFlame);
        //console.log("the lat here is " + newFlame.lat);
        console.log("the lng here is " + newFlame.lng)

        var newID = newFlame._id,
            position = masterArray.length,
            zoomLvl = map.getZoom(),
            scalingCoefficient = scaleCalculator(zoomLvl);

        //newMarker(googleMaps, lat, lng, newID, position, scalingCoefficient);


      })
      .catch(function(err){
        console.log(err);
      }); */
};

module.exports = createFlame;
