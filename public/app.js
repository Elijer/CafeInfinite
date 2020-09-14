var firebase = require('firebase/app');
var firestore = require('firebase/firestore'); // yes this is needed
var functions = require('firebase/functions');
var firebaseConfig = require('./firebaseConfig');
var handleEmulators = require('./utility/helpers');

var buildMap = require('./geographicFunctionality/1__buildMap')

document.addEventListener("DOMContentLoaded", event => {

    firebase.initializeApp(firebaseConfig);
    var db = firebase.firestore();
    handleEmulators(firebase, db);
    buildMap(db);
    
});



/* OR: Get all flames indirectly through an https call like this:

var getFlames = firebase.functions().httpsCallable('getFlames');
getFlames({whatever: 'whatever'})
.then(function(flames){
    console.log(flames);
    //buildMap(flames, db);
}) */