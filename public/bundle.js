(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let newMap = require('./components/newMap');
let test = require('./components/test');

document.addEventListener("DOMContentLoaded", event => {
    //const app = firebase.app();
    //const db = firebase.firestore();
    console.log("dom is loaded");
    test();
});

newMap();

// browserify --debug public/app.js -o public/bundle.js
},{"./components/newMap":3,"./components/test":4}],2:[function(require,module,exports){
var dark_cities = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }
]

module.exports = dark_cities;

},{}],3:[function(require,module,exports){
var mapStyle = require('./mapStyles/dark_cities');
let IndianaPA = {lat: 40.6215, lng: -79.1525}

function newMap(){

  loadGoogleMaps();
  
  window.initMap = function() {   // Callback must be attached to the `window` object
    map = new google.maps.Map(document.getElementById('map'), {
      center: IndianaPA,
      styles: mapStyle,
      zoom: 16
    });
  };

}

function  loadGoogleMaps(){   // adds the loader script tag to the document
  var script = document.createElement('script');
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCcFvCdo_5DPAUfRdhVq8sttNxwLAhLpUI&callback=initMap';
  script.defer = true;
  document.head.appendChild(script);
}
  

module.exports = newMap
},{"./mapStyles/dark_cities":2}],4:[function(require,module,exports){
var test = function(){
    console.log("testies");
}

module.exports = test
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvYXBwLmpzIiwicHVibGljL2NvbXBvbmVudHMvbWFwU3R5bGVzL2RhcmtfY2l0aWVzLmpzIiwicHVibGljL2NvbXBvbmVudHMvbmV3TWFwLmpzIiwicHVibGljL2NvbXBvbmVudHMvdGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJsZXQgbmV3TWFwID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL25ld01hcCcpO1xubGV0IHRlc3QgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvdGVzdCcpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBldmVudCA9PiB7XG4gICAgLy9jb25zdCBhcHAgPSBmaXJlYmFzZS5hcHAoKTtcbiAgICAvL2NvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XG4gICAgY29uc29sZS5sb2coXCJkb20gaXMgbG9hZGVkXCIpO1xuICAgIHRlc3QoKTtcbn0pO1xuXG5uZXdNYXAoKTtcblxuLy8gYnJvd3NlcmlmeSAtLWRlYnVnIHB1YmxpYy9hcHAuanMgLW8gcHVibGljL2J1bmRsZS5qcyIsInZhciBkYXJrX2NpdGllcyA9IFtcbiAge1xuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiY29sb3JcIjogXCIjMjEyMTIxXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLmljb25cIixcbiAgICBcInN0eWxlcnNcIjogW1xuICAgICAge1xuICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXG4gICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJjb2xvclwiOiBcIiM3NTc1NzVcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5zdHJva2VcIixcbiAgICBcInN0eWxlcnNcIjogW1xuICAgICAge1xuICAgICAgICBcImNvbG9yXCI6IFwiIzIxMjEyMVwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcImFkbWluaXN0cmF0aXZlXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJjb2xvclwiOiBcIiM3NTc1NzVcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhZG1pbmlzdHJhdGl2ZS5jb3VudHJ5XCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcbiAgICBcInN0eWxlcnNcIjogW1xuICAgICAge1xuICAgICAgICBcImNvbG9yXCI6IFwiIzllOWU5ZVwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcImFkbWluaXN0cmF0aXZlLmxhbmRfcGFyY2VsXCIsXG4gICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmUubG9jYWxpdHlcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxuICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiY29sb3JcIjogXCIjYmRiZGJkXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmUubmVpZ2hib3Job29kXCIsXG4gICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicG9pXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0XCIsXG4gICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicG9pXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcbiAgICBcInN0eWxlcnNcIjogW1xuICAgICAge1xuICAgICAgICBcImNvbG9yXCI6IFwiIzc1NzU3NVwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaS5wYXJrXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJjb2xvclwiOiBcIiMxODE4MThcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2kucGFya1wiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXG4gICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJjb2xvclwiOiBcIiM2MTYxNjFcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2kucGFya1wiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5zdHJva2VcIixcbiAgICBcInN0eWxlcnNcIjogW1xuICAgICAge1xuICAgICAgICBcImNvbG9yXCI6IFwiIzFiMWIxYlwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWRcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuZmlsbFwiLFxuICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiY29sb3JcIjogXCIjMmMyYzJjXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZFwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHNcIixcbiAgICBcInN0eWxlcnNcIjogW1xuICAgICAge1xuICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcbiAgICBcInN0eWxlcnNcIjogW1xuICAgICAge1xuICAgICAgICBcImNvbG9yXCI6IFwiIzhhOGE4YVwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuYXJ0ZXJpYWxcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICBcInN0eWxlcnNcIjogW1xuICAgICAge1xuICAgICAgICBcImNvbG9yXCI6IFwiIzM3MzczN1wiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiY29sb3JcIjogXCIjM2MzYzNjXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5oaWdod2F5LmNvbnRyb2xsZWRfYWNjZXNzXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJjb2xvclwiOiBcIiM0ZTRlNGVcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmxvY2FsXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcbiAgICBcInN0eWxlcnNcIjogW1xuICAgICAge1xuICAgICAgICBcImNvbG9yXCI6IFwiIzYxNjE2MVwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInRyYW5zaXRcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxuICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiY29sb3JcIjogXCIjNzU3NTc1XCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwid2F0ZXJcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICBcInN0eWxlcnNcIjogW1xuICAgICAge1xuICAgICAgICBcImNvbG9yXCI6IFwiIzAwMDAwMFwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcIndhdGVyXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0XCIsXG4gICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwid2F0ZXJcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxuICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiY29sb3JcIjogXCIjM2QzZDNkXCJcbiAgICAgIH1cbiAgICBdXG4gIH1cbl1cblxubW9kdWxlLmV4cG9ydHMgPSBkYXJrX2NpdGllcztcbiIsInZhciBtYXBTdHlsZSA9IHJlcXVpcmUoJy4vbWFwU3R5bGVzL2RhcmtfY2l0aWVzJyk7XG5sZXQgSW5kaWFuYVBBID0ge2xhdDogNDAuNjIxNSwgbG5nOiAtNzkuMTUyNX1cblxuZnVuY3Rpb24gbmV3TWFwKCl7XG5cbiAgbG9hZEdvb2dsZU1hcHMoKTtcbiAgXG4gIHdpbmRvdy5pbml0TWFwID0gZnVuY3Rpb24oKSB7ICAgLy8gQ2FsbGJhY2sgbXVzdCBiZSBhdHRhY2hlZCB0byB0aGUgYHdpbmRvd2Agb2JqZWN0XG4gICAgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHtcbiAgICAgIGNlbnRlcjogSW5kaWFuYVBBLFxuICAgICAgc3R5bGVzOiBtYXBTdHlsZSxcbiAgICAgIHpvb206IDE2XG4gICAgfSk7XG4gIH07XG5cbn1cblxuZnVuY3Rpb24gIGxvYWRHb29nbGVNYXBzKCl7ICAgLy8gYWRkcyB0aGUgbG9hZGVyIHNjcmlwdCB0YWcgdG8gdGhlIGRvY3VtZW50XG4gIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgc2NyaXB0LnNyYyA9ICdodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/a2V5PUFJemFTeUNjRnZDZG9fNURQQVVmUmRoVnE4c3R0Tnh3TEFoTHBVSSZjYWxsYmFjaz1pbml0TWFwJztcbiAgc2NyaXB0LmRlZmVyID0gdHJ1ZTtcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufVxuICBcblxubW9kdWxlLmV4cG9ydHMgPSBuZXdNYXAiLCJ2YXIgdGVzdCA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc29sZS5sb2coXCJ0ZXN0aWVzXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRlc3QiXX0=
