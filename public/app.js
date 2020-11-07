const firebase          = require('firebase/app');
const firestore         = require('firebase/firestore'); // yes this is needed
const functions         = require('firebase/functions');
const storage           = require('firebase/storage');
const {firebaseConfig,
       handleEmulators,
       mainLoader}      = require('./utility/utility')

var geo = require('./geo/1__geo');

document.addEventListener("DOMContentLoaded", event => {

    //testing = true;

    mainLoader(true);

    firebase.initializeApp(firebaseConfig);

    var db = firebase.firestore();
    handleEmulators(firebase, db);

    // get googleMaps API key where it is saved on server in order to use googleMaps
    var gmapsAPIkey = firebase.functions().httpsCallable('gmapsAPIkey');
    gmapsAPIkey({whatever: "this doesn't matter"}).
    then(function(key){
        mainLoader(false);

        geo(db, key.data);

    })



    // Storage Bucket Example
    var storage = firebase.storage();
    var storageRef = storage.ref();

    var inputImage = document.getElementById("inputImage");
    inputImage.onchange = function(){uploadFile(this.files, storageRef)};

    var uploadFile = function (files, storageRef){

        const newRefName = Math.random().toString(36).slice(2);
        const horseRef = storageRef.child(newRefName);
      
        const file = files.item(0);
        const task = horseRef.put(file);
      
        task.then(snapshot => {
          console.log(snapshot)
          const url = snapshot.downloadURL
          console.log(url);
          document.getElementById('imgUpload').setAttribute('src', url);
      
        })
    
    }

});
  