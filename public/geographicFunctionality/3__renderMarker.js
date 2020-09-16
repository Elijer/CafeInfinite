var scale               = require('./renderMarker/scale');
var markerOnClick       = require('./renderMarker/markerOnClick');

var renderMarker = function(googleMaps, lat, lng, icon, id, index, scalingCoefficient){

  masterArray[index] = new googleMaps.Marker({
    elijahPosition: {lat: lat, lng: lng},
    position: {lat: lat, lng: lng},
    map: map,
    icon: {url: icon},
    iterationID: id,
    optimized: false, // increases performance, but prevents re-scaling
    visible: false
  });

  
  var r = .00005;
  var h = r / .83333333333;
  gifArray[index] = new google.maps.Rectangle({
    elijahPosition: {lat: lat, lng: lng},
    strokeColor: '#f9371c',
    strokeOpacity: 0.8,
    strokeWeight: 1.4,
    fillColor: '#fed130',
    fillOpacity: 1,
    map: map,
    bounds: {
      north: lat+r,
      south: lat-r,
      east:  lng+h,
      west:  lng-h
    }
  });

  scale(googleMaps, masterArray[index], scalingCoefficient);

};

module.exports = renderMarker;
