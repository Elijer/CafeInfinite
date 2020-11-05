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

        ///////// GET GEOLOCATION

        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
        
        // Set Error
        function error(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
            menuReset();
        }

        var loader = document.getElementById("loading");
        loader.style.visibility = "visible";
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(success, error, options);
        } else {
            loader.style.visibility = "hidden";
            alert("Geolocation is not supported by this browser.");
        }
    
        /* coords = getCurrentCoords();
            if (coords){
                console.log(value);
                createBeacon(gMaps, coords.lat, coords.lng, media, value, store.db);
            } else {
                console.log("huh sorry no coords to make this post");
            } */

    });
}

function success(position){

    // make sure there is a markerType in the store.
    if (store.markerType){
        var icon = store.markerType;
        console.log(icon);
        
        var text = document.getElementById("post-description").value;
        var media = { text: text }

        console.log(text);
        var lat = position.coords.latitude,
            lng = position.coords.longitude;
        createBeacon(gMaps, lat, lng, media, icon, store.db);
        var loader = document.getElementById("loading");
        loader.style.visibility = "hidden";

    } else {
        console.log("Done button was clicked but there was no markerType saved")
    }

    menuReset();
}


function menuReset(){
    document.getElementById("marker-menu").style.display = "none";
    textInterface(false);
    iconInterface(true);
    store.markerType = null;
    store.markerText = null;
}




module.exports = { toggleIconInterface, populateIconInterface, iconInterface }