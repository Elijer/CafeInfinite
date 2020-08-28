var firebase = require('firebase/app');
var firestore = require('firebase/firestore'); // yes this is needed
var firebaseConfig = require('./firebaseConfig');

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});




var geo     =       require('./geographicFunctionality/1__geo');

geo();

// browserify --debug public/app.js -o public/bundle.js



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