function mainLoader(isOn){
    var loader = document.getElementById("loading");

    if (isOn){
        loader.style.visibility = "visible";
    } else {
        loader.style.visibility = "hidden";
    }

}

module.exports = mainLoader;