function toggleMarkerView(data){
    if (!data){
        console.log("turn off the marker view")
    } else {
        console.log("The view should use this data " + data);
    }
}

module.exports = { toggleMarkerView }