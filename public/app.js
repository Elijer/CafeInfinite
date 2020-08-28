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

var firebase = require('firebase/app');
var firestore = require('firebase/firestore');


const firebaseConfig = {
    apiKey: "AIzaSyCNpjyVF33s7frX9uCWYqur4DfRaizx3vg",
    authDomain: "cafe-infinite.firebaseapp.com",
    databaseURL: "https://cafe-infinite.firebaseio.com",
    projectId: "cafe-infinite",
    storageBucket: "cafe-infinite.appspot.com",
    messagingSenderId: "197502459222",
    appId: "1:197502459222:web:22ce4f978d4b649b284af7",
    measurementId: "G-R6GFMFJWGW"
  };
  
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