var newMarker           = require('./common/newMarker');
var onBoundsChange      = require('./onBoundsChange_v1.0');
var scaleCalculator     = require('./common/scaleCalculator');
var gifs                = require('./common/gif_library');


var getMapData = function(googleMaps, db){
  
  var beacons = [];
  var zoomLvl = map.getZoom();
  var scalingCoefficient = scaleCalculator(zoomLvl);

  // Get all documents in the beacons (flames) collection
  db.collection('flames').get()
  .then(function(querySnapshot) {

    // load each beacon from db into an array called 'beacons'
    querySnapshot.forEach(function(doc) {
      let beacon = doc.data();
      beacons.push(beacon);
    });
      
    // then for each item in the new array, run newMarker()
    for (var i = 0; i < beacons.length; i++){
      var beacon = beacons[i];
      newMarker(
        googleMaps, beacon.lat, beacon.lng, gifs.flame, beacon._id, i, scalingCoefficient);
    }
     
    //onZoomChange(googleMaps);
    onBoundsChange(googleMaps);
    /* wait to call onZoomChange until after markers created; onZoomChange resizes them
    and there's nothing to resize until they exist */

  })
  .catch(function(error) {
      console.log("Error getting flames from 'flames' collection: ", error);
  });
}


module.exports = getMapData;

/*
stuff I want the file structure to support:
1. pass in click listener for marker as an argument, or even
    as a method that is included in the markerConfig
2. automatically link scalingHandler to every marker
3. create a structure that will allow getFlames to be configurable as well as repeatable.
  there should be a way to use getFlames as the initial renderer, AND as a re-renderer
    I want it to be able to, in the future, take;
    --coords that it can take into account
    --a user
    --a timeRange
    --a type, etc.
*/
