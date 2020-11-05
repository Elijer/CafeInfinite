var createBeacon        = require ('../geo/2b__createBeacon')
var gifs                = require('../geo/renderMarker/gif_library');

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
        lat: parseFloat(localStorage.getItem('lat')),
        lng: parseFloat(localStorage.getItem('lng'))
    }

    return coords;
}
//
function toggleIconInterface(){
    var box = document.getElementById("marker-menu");

    
    if (box.style.display != "inline"){
        console.log("is this ever getting called?1")
        box.style.display = "inline";
    } else if (box.style.display = "inline"){
        console.log("is this ever getting called?")
        box.style.display = "none";
    }
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

    // get the done button
    var textCreatePost = document.getElementById("text-interface-done");

    // create click listener for it
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

        if (coords){
            console.log(value);
            createBeacon(gMaps, coords.lat, coords.lng, media, value, store.db);
        } else {
            console.log("huh sorry no coords to make this post");
        }
        menuReset();
    });
}

function menuReset(){
    document.getElementById("marker-menu").style.display = "none";
    textInterface(false);
    iconInterface(true);
    store.markerType = null;
    store.markerText = null;
}

module.exports = { toggleIconInterface, populateIconInterface, iconInterface }