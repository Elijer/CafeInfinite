var firebase = require('firebase/app');
var firestore = require('firebase/firestore'); // yes this is needed
var functions = require('firebase/functions');
var firebaseConfig = require('./utility/firebaseConfig');
var handleEmulators = require('./utility/helpers');

var buildMap = require('./geographicFunctionality/1__buildMap');

document.addEventListener("DOMContentLoaded", event => {

    var loader = document.getElementById("loading");
    loader.style.visibility = "visible";

    firebase.initializeApp(firebaseConfig);

    var db = firebase.firestore();
    handleEmulators(firebase, db);

    // get googleMaps API key where it is saved on server in order to use googleMaps
    var gmapsAPIkey = firebase.functions().httpsCallable('gmapsAPIkey');
    gmapsAPIkey({whatever: "this doesn't matter"}).
    then(function(key){
        loader.style.visibility = "hidden";

        buildMap(db, key.data);

    })

/*     document.getElementById("center-map").addEventListener("click", function(){
        console.log("geolocation");
        geolocation();
    }); */
    //$("center-map").onClick(console.log("yo"));

    

});


/* OR: Get all flames indirectly through an https call like this:
var getFlames = firebase.functions().httpsCallable('getFlames');
getFlames({whatever: 'whatever'})
.then(function(flames){
    console.log(flames);
    //buildMap(flames, db);
}) */