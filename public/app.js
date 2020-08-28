/* New code
let newMap = require('./components/geo/newMap');
let test = require('./components/test');

newMap();
*/

const functions = require('firebase-functions');
const admin = require('firebase-admin'); //const { firestore } = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

let db = admin.firestore();
let db2 = db.collection('flames'); //let db1 = db.collection('products');
var geo = require('./geographicFunctionality/1__geo');

document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();
    const db = firebase.firestore();
    console.log("dom is loaded");
    geo(db2);
    //test();
});

// browserify --debug public/app.js -o public/bundle.js