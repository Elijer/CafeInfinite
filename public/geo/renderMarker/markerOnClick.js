var markerOnClick = function(thisMarker, ID){
  console.log(thisMarker);

  thisMarker.addListener('click', function() {
    //console.log(thisMarker);
  });

};

module.exports = markerOnClick;

/* marker.addListener("click", () => {
  map.setZoom(8);
  map.setCenter(marker.getPosition() as google.maps.LatLng);
}); */

/*   thisMarker.addListener('click', function() {
    $.ajax({
      method: 'DELETE',
      url: rootURL + '/api/flames/' + id
    })
    console.log("marker with id of " + id + " was deleted")
  }); */