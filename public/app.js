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

var geo     =       require('./geographicFunctionality/1__geo');

geo();

// browserify --debug public/app.js -o public/bundle.js