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
    let flames = db.collection('flames'); // this must go after handleEmulators for some reason

    // Gets all the flames
    var getFlames = firebase.functions().httpsCallable('getFlames');
    getFlames({whatever: 'whatever'})
    .then(function(result){
        buildMap(result, db);
    })

});