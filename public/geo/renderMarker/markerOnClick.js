var markerOnClick = function(thisMarker){

  thisMarker.addListener('click', function() {
    console.log("this is where the text will be display in a box");
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