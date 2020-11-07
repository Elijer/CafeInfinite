function toggleMarkerView(data){

    var markerView = document.getElementById("marker-view-panel");
    var theText = document.getElementById("marker-view-content");
    var theTime = document.getElementById("marker-view-time-actual");

    var imageView = document.getElementById("imgUploadView");
        imageView.src = ""

    if (data){

        markerView.style.display = "inline";
        theText.innerHTML = data.text;
        var date = data.created_at.toDate().toLocaleDateString();
        var time = formatAMPM(data.created_at.toDate());

        theTime.innerHTML = time + " on " + date;

        // Image
        if (data.image){
            imageView.style.display = "block";
            imageView.src = data.image;
        } else {
            imageView.src = ""
            imageView.style.display = "none";
        }

    } else {
        markerView.style.display = "none";
        theText.innerHTML = "";
        theTime.innerHTML = "";
    }
}

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + '' + ampm;
    return strTime;
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