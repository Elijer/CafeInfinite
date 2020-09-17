var firebaseConfig = {
    apiKey: "AIzaSyCNpjyVF33s7frX9uCWYqur4DfRaizx3vg",
    authDomain: "cafe-infinite.firebaseapp.com",
    databaseURL: "https://cafe-infinite.firebaseio.com",
    projectId: "cafe-infinite",
    storageBucket: "cafe-infinite.appspot.com",
    messagingSenderId: "197502459222",
    appId: "1:197502459222:web:22ce4f978d4b649b284af7",
    measurementId: "G-R6GFMFJWGW"
};

function mainLoader(isOn){
    var loader = document.getElementById("loading");

    if (isOn){
        loader.style.visibility = "visible";
    } else {
        loader.style.visibility = "hidden";
    }

}

function handleEmulators(_firebase, _db){
    if (window.location.hostname === "localhost") {
        console.log("localhost detected! Using functions and firestore emulators instead of live instances");
        _firebase.functions().useFunctionsEmulator("http://localhost:5001");
        _db.settings({ 
          host: "localhost:8080",
          ssl: false
        });
    }
}

module.exports = {
    firebaseConfig,
    mainLoader,
    handleEmulators
}