//const moment          = require('moment');

var markerOnClick = function(thisMarker){

  thisMarker.addListener('click', function() {
    //console.log(thisMarker);

    console.log(thisMarker);
/*     var id = thisMarker.iterationID;
    var db = store.db;

    var docRef = db.collection("flames").doc(id);

    docRef.get().then(function(doc) {
      var current = doc.data();
      if (current.text){
        console.log("Text: " + current.text);
      }
      //https://dockyard.com/blog/2020/02/14/you-probably-don-t-need-moment-js-anymore
      console.log(current.created_at.toLocaleDateString())
    }); */


/*     var db = store.db;
    docRef.get(thisMarker.iterationID).then(function(doc) {
      if (doc.exists) {
          console.log("Document data:", doc.data().text);
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    }); */

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