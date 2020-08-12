(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"./components/test":2}],2:[function(require,module,exports){
var test = function(){
    console.log("testies");
}

module.exports = test
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvYXBwLmpzIiwicHVibGljL2NvbXBvbmVudHMvdGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy9sZXQgc2V0dXBNYXAgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvc2V0dXBNYXAnKTtcbmxldCB0ZXN0ID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3Rlc3QnKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZXZlbnQgPT4ge1xuICAgIGNvbnN0IGFwcCA9IGZpcmViYXNlLmFwcCgpO1xuICAgIGNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XG4gICAgY29uc29sZS5sb2coXCJkb20gaXMgbG9hZGVkXCIpO1xuICAgIHRlc3QoKTtcbiAgICAvL3NldHVwTWFwKCk7XG59KTtcblxubGV0IEluZGlhbmFQQSA9IHtsYXQ6IDQwLjYyMTUsIGxuZzogLTc5LjE1MjV9XG4gICAgXG4vLyBBdHRhY2ggeW91ciBjYWxsYmFjayBmdW5jdGlvbiB0byB0aGUgYHdpbmRvd2Agb2JqZWN0XG4gICAgd2luZG93LmluaXRNYXAgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coZ29vZ2xlKTtcbiAgICAgICAgbGV0IG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpLCB7XG4gICAgICAgIGNlbnRlcjogSW5kaWFuYVBBLFxuICAgICAgICB6b29tOiAxNlxuICAgIH0pO1xufTtcblxuLy9zZXR1cE1hcCgpO1xuXG4vLyBicm93c2VyaWZ5IC0tZGVidWcgcHVibGljL2FwcC5qcyAtbyBwdWJsaWMvYnVuZGxlLmpzIiwidmFyIHRlc3QgPSBmdW5jdGlvbigpe1xuICAgIGNvbnNvbGUubG9nKFwidGVzdGllc1wiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0ZXN0Il19
