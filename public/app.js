const firebase          = require('firebase/app')
const firestore         = require('firebase/firestore'); // yes this is needed
const functions         = require('firebase/functions');
const {firebaseConfig,
       handleEmulators,
       mainLoader}      = require('./utility/utility')

var geo = require('./geographicFunctionality/1__geo');

document.addEventListener("DOMContentLoaded", event => {

    mainLoader(true);

    firebase.initializeApp(firebaseConfig);

    var db = firebase.firestore();
    handleEmulators(firebase, db);

    // get googleMaps API key where it is saved on server in order to use googleMaps
    var gmapsAPIkey = firebase.functions().httpsCallable('gmapsAPIkey');
    gmapsAPIkey({whatever: "this doesn't matter"}).
    then(function(key){
        mainLoader(false);

        geo(db, key.data);

    })

});