function toggleMarkerView(data){

    var markerView = document.getElementById("marker-view-panel");
    var theText = document.getElementById("marker-view-content");


    if (data){
        markerView.style.display = "inline";
        theText.innerHTML = data.text;
    } else {
        markerView.style.display = "none";
        theText.innerHTML = "";
        //console.log("The view should use this data " + data);
    }
}

function markerViewListeners(){

    // click anywhere to close markerView
    document.addEventListener("click", function(){
        toggleMarkerView();
    })
    
/*     // if map is clicked, markerView goes away
    var map = document.getElementById("map");
    map.addEventListener("click", function(){
        toggleMarkerView()
    })

    // if markerView is clicked, markerView goes away
    var markerView = document.getElementById("marker-view-panel");
    markerView.addEventListener("click", function(){
        toggleMarkerView()
    })

    // if centerView is clicked, markerView goes away
    var centerMap = document.getElementById("center-map");
    centerMap.addEventListener("click", function(){
        toggleMarkerView()
    })

    // if newMarker is clicked, markerView goes away
    var openMenu = document.getElementById("new-marker");
    openMenu.addEventListener("click", function(){
        toggleMarkerView()
    }) */

}

module.exports = { toggleMarkerView, markerViewListeners }