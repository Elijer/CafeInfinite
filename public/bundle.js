(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"./components/setupMap":2,"./components/test":3}],2:[function(require,module,exports){
function setupMap(){
    var script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCcFvCdo_5DPAUfRdhVq8sttNxwLAhLpUI&callback=initMap';
    script.defer = true;
    
    // Attach your callback function to the `window` object
    window.initMap = function() {
    
      var IndianaPA = {lat: 40.6215, lng: -79.1525}
    
      map = new google.maps.Map(document.getElementById('map'), {
        center: IndianaPA,
        zoom: 16
      });
    };
    
    // Append the 'script' element to 'head'
    document.head.appendChild(script);
  }

  module.exports = setupMap
},{}],3:[function(require,module,exports){
var test = function(){
    console.log("testies");
}

module.exports = test
},{}]},{},[1])
//# sourceMappingURL=bundle.js.map
