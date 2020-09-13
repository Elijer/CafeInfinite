var firebase = require('firebase/app');
var firestore = require('firebase/firestore'); // yes this is needed
var functions = require('firebase/functions');
var firebaseConfig = require('./firebaseConfig');
var geo = require('./geographicFunctionality/1__geo');
var handleEmulators = require('./utility/helpers');

document.addEventListener("DOMContentLoaded", event => {
    firebase.initializeApp(firebaseConfig);
    var db = firebase.firestore();

    handleEmulators(firebase, db);

    let flames = db.collection('flames');

    // get flames
    var getFlames = firebase.functions().httpsCallable('getFlames');
    getFlames({whatever: 'whatever'})
    .then(function(result){
        geo(result, db);
    })
});