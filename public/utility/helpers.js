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

module.exports = handleEmulators;