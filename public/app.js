var setupMap = require('./components/setupMap');
var test = require('./components/test');

test();

var map;

document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();
    const db = firebase.firestore();
});


// Create the script tag, set the appropriate attributes

//watchify public/app.js -o 'exorcist public/bundle.js.map > public/bundle.js' -d
// browserify --debug public/app.js -o public/bundle.js

setupMap();

//browserify public/app.js --debug | exorcist public/bundle.map.js > public/bundle.js

/*
var IndianaPA = {lat: 40.6215, lng: -79.1525}

window.intiMap = function() {   // map variable has been initialized globally
  map = new google.maps.Map(document.getElementById('map'), {
    center: IndianaPA,
    zoom: 16
  });
}
*/