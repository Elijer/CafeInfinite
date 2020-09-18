var gifs                = require('../geo/renderMarker/gif_library');

/* store.mapClick = {};
store.mapClick.active = false; */

function populateIconInterface(){
    for (const [key, value] of Object.entries(gifs)) {

        const item = document.createElement('div');
        item.className = "selection-item";
        item.id = "menu-item-" + key;

        item.innerHTML = `
        <img src = ${value.url} class = "selection-img" width = "25px" alt = ${key}>
        `
        item.addEventListener("click", function(){
            markerMenu();
            let lat,
                lng;
            if (store.mapClick.active && testing == true){
                lat = store.mapClick.lat;
                lng = store.mapClick.lng
                store.mapClick.active = false;
            } else {
                lat = parseFloat(localStorage.getItem('lat'));
                lng = parseFloat(localStorage.getItem('lng'));
            }
            if (lat && lng){
                createBeacon(googleMaps, lat, lng, value, db);
            }
        })
        document.getElementById("grid-container").appendChild(item);
    }
}

function iconInterface(){
    var box = document.getElementById("icon-interface");
    if (box.style.display == "inline"){
        box.style.display = "none";
    } else {
        box.style.display = "inline";
    }
}

module.exports = { iconInterface, populateIconInterface}