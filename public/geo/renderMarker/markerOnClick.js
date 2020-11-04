var markerOnClick = function(thisMarker){

  // as of now, without zooming this function is not called. The problem is higher up though.

  thisMarker.addListener('click', function() {
    
    console.log("click");

    var id = thisMarker.iterationID;
    var db = store.db;

    var docRef = db.collection("flames").doc(id);

    docRef.get().then(function(doc) {
      if (doc.exists){
        var current = doc.data();

        if (current.text){
          console.log("Text: " + current.text);
        }

        var date = current.created_at.toDate().toLocaleDateString()
        // firestore seems to convert js Date objects into their own weird thing, and you have to use their toDate() method to turn it back
        console.log("Created at: " + date);

      } else {
        console.log("No such document!");
      }

    }).catch(function(error) {
        console.log("Error getting document:", error);
    });

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