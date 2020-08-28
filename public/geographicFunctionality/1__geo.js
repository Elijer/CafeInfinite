var     buildMap            = require('./2__buildMap'),
        geolocation         = require ('./geolocation');

var geo = function(_db1){
  buildMap(_db1);
};
geolocation();

module.exports = geo;



/*//////////////          BLUEPRINT          ////////////



                            1_geo
                              .
                              |
                              .
                          2_buildMap
                              .
                              |
                              .
                    ......................................
                    |                   |                |
                    .                   .                .
                3_mapData           mapClick         mapConfig
                    .                   .                .
                    |                   |                |
             ............................            mapStyles
             |                 |
             .                 .
        onZoomChange       newMarker
             |                 |
             .                 .
             ............................
                    |                   |
                    .                   .
                  scale            markerOnClick




///////////////////////////////////////////////////////*/

