/* store.mapClick = {};
store.mapClick.active = false; */

function markerMenu(){
    var box = document.getElementById("selection-box");

    if (box.style.display == "inline"){
        box.style.display = "none";
    } else {
        box.style.display = "inline";
    }

}

module.exports = {markerMenu}