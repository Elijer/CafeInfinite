{
  "version": 3,
  "sources": [
    "../../../.npm-global/lib/node_modules/browserify/node_modules/browser-pack/_prelude.js",
    "public/app.js",
    "public/components/setupMap.js",
    "public/components/test.js"
  ],
  "names": [],
  "mappings": "AAAA;ACAA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;;ACVA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;;ACnBA;AACA;AACA;AACA;AACA",
  "file": "generated.js",
  "sourceRoot": "",
  "sourcesContent": [
    "(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c=\"function\"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error(\"Cannot find module '\"+i+\"'\");throw a.code=\"MODULE_NOT_FOUND\",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u=\"function\"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()",
    "let setupMap = require('./components/setupMap');\nlet test = require('./components/test');\n\ndocument.addEventListener(\"DOMContentLoaded\", event => {\n    const app = firebase.app();\n    const db = firebase.firestore();\n    console.log(\"dom is loaded\");\n\n    setupMap();\n    test();\n});",
    "function setupMap(){\n    var script = document.createElement('script');\n    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCcFvCdo_5DPAUfRdhVq8sttNxwLAhLpUI&callback=initMap';\n    script.defer = true;\n\n    let IndianaPA = {lat: 40.6215, lng: -79.1525}\n    \n    // Attach your callback function to the `window` object\n    window.initMap = function() {\n      map = new google.maps.Map(document.getElementById('map'), {\n        center: IndianaPA,\n        zoom: 16\n      });\n    };\n    \n    // Append the 'script' element to 'head'\n    document.head.appendChild(script);\n  }\n\n  module.exports = setupMap",
    "var test = function(){\n    console.log(\"testies\");\n}\n\nmodule.exports = test"
  ]
}