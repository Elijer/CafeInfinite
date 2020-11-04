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

module.exports = { toggleMarkerView }