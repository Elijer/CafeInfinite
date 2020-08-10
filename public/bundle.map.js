{
  "version": 3,
  "sources": [
    "../../../.npm-global/lib/node_modules/browserify/node_modules/browser-pack/_prelude.js",
    "public/app.js"
  ],
  "names": [],
  "mappings": "AAAA;ACAA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA",
  "file": "generated.js",
  "sourceRoot": "",
  "sourcesContent": [
    "(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c=\"function\"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error(\"Cannot find module '\"+i+\"'\");throw a.code=\"MODULE_NOT_FOUND\",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u=\"function\"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()",
    "//var setupMap = require('components/setupMap');\n\nvar map;\n\ndocument.addEventListener(\"DOMContentLoaded\", event => {\n    const app = firebase.app();\n    const db = firebase.firestore();\n});\n\n\n// Create the script tag, set the appropriate attributes\n\nsetupMap();\n\n//browserify public/app.js --debug | exorcist public/bundle.map.js > public/bundle.js\n\n/*\nvar IndianaPA = {lat: 40.6215, lng: -79.1525}\n\nwindow.intiMap = function() {   // map variable has been initialized globally\n  map = new google.maps.Map(document.getElementById('map'), {\n    center: IndianaPA,\n    zoom: 16\n  });\n}\n*/"
  ]
}