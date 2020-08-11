let setupMap = require('./components/setupMap');
let test = require('./components/test');

document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();
    const db = firebase.firestore();
    console.log("dom is loaded");
    test();
});

setupMap();

// browserify --debug public/app.js -o public/bundle.js