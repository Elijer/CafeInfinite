//let setupMap = require('./components/setupMap');
let test = require('./components/test');

document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();
    const db = firebase.firestore();
    console.log("dom is loaded");
    test();
    //setupMap();
});

let IndianaPA = {lat: 40.6215, lng: -79.1525}
    
// Attach your callback function to the `window` object
    window.initMap = function() {
        console.log(google);
        let map = new google.maps.Map(document.getElementById('map'), {
        center: IndianaPA,
        zoom: 16
    });
};

//setupMap();

// browserify --debug public/app.js -o public/bundle.js