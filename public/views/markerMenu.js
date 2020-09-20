var createBeacon        = require ('../geo/2b__createBeacon')
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
            iconInterface();

            iconInterface(false);
            textInterface(true);
            store.markerType = value;

        })

        document.getElementById("grid-container").appendChild(item);

    }
}

function getCurrentCoords(){
    let coords = {
        lat: null,
        lng: null
    }
    if (store.mapClick.active && testing == true){
        coords.lat = store.mapClick.lat;
        coords.lng = store.mapClick.lng
        store.mapClick.active = false;
    } else {
        coords.lat = parseFloat(localStorage.getItem('lat'));
        coords.lng = parseFloat(localStorage.getItem('lng'));
    }

    return coords;
}

function iconInterface(isOn){
    var box = document.getElementById("icon-interface");
    if (isOn == true){
        box.style.display = "inline";
    } else {
        box.style.display = "none";
    }
}

function textInterface(isOn){
    var box = document.getElementById("text-interface");
    if (isOn){
        box.style.display = "inline";
        doneButton();
    } else {
        box.style.display = "none";
    }
}

function doneButton(){
    var textCreatePost = document.getElementById("text-interface-done");
    textCreatePost.addEventListener("click", function(){
        var textBox = document.getElementById("post-description");
        var text = textBox.value;

        var value;
        if (store.markerType){
            value = store.markerType;
        } else {
            value = null;
        }

        var media = {
            text: text
        }

        console.log(media.text);

        coords = getCurrentCoords();
        console.log(coords);
        if (coords){
            createBeacon(gMaps, coords.lat, coords.lng, media, value, store.db);
        } else {
            console.log("huh sorry no coords to make this post");
        }
        textInterface(false);
    });
}

module.exports = { iconInterface, populateIconInterface, doneButton}