let setupMap = require('./components/setupMap');
let test = require('./components/test');

document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();
    const db = firebase.firestore();
    console.log("dom is loaded");

    setupMap();
    test();
});