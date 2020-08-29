var firebase = require('firebase/app');
var firestore = require('firebase/firestore'); // yes this is needed
var functions = require('firebase/functions');
var firebaseConfig = require('./firebaseConfig');
var geo = require('./geographicFunctionality/1__geo');

document.addEventListener("DOMContentLoaded", event => {
    firebase.initializeApp(firebaseConfig);
    var db = firebase.firestore();

    // enforce use of EMULATED firestore and functions if app is local
    if (window.location.hostname === "localhost") {
      console.log("localhost detected! Using functions and firestore emulators instead of live instances");
      firebase.functions().useFunctionsEmulator("http://localhost:5001");
      db.settings({ 
        host: "localhost:8080",
        ssl: false
      });
    }

    let flames = db.collection('flames');

    // get flames
    var getFlames = firebase.functions().httpsCallable('getFlames');
    getFlames({whatever: 'whatever'})
    .then(function(result){
        //console.log(result);
    })


    geo(flames);

});

// browserify --debug public/app.js -o public/bundle.js

/* db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
}); */



/* New code
let newMap = require('./components/geo/newMap');
let test = require('./components/test');

document.addEventListener("DOMContentLoaded", event => {
    //const app = firebase.app();
    //const db = firebase.firestore();
    console.log("dom is loaded");
    test();
});

newMap();
*/