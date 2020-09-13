var $                   = require('jquery');
var scaleCalculator     = require('./common/scaleCalculator');

var createFlame = function(googleMaps, lat, lng, db /*, rootUrl*/){
  //console.log(db);
  var flames = db.collection('flames');

  var data = {
    lat: lat,
    lng: lng,
    created_at: new Date(),
  }

  flames.add(data);
  //console.log(theNew);
  
/*   var flames = db.collection('flames');

  var data = {
    lat: lat,
    lng: lng,
    created_at: new Date(),
  }

  flames.set(data) */




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
