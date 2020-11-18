const firebase          = require('firebase/app');
const firestore         = require('firebase/firestore'); // yes this is needed
const functions         = require('firebase/functions');
const storage           = require('firebase/storage');
const {firebaseConfig,
       handleEmulators,
       mainLoader}      = require('./utility/utility')

var geo = require('./geo/1__geo');

document.addEventListener("DOMContentLoaded", event => {

    mainLoader(true);

    firebase.initializeApp(firebaseConfig);

    var db = firebase.firestore();

    store = {
        db: db,
        testing: true,
        markerType: null,
        markerText: null,
        markerPhoto: null,
        mapClick: {
          active: true
        }
    };
      
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
    inputImage.onchange = function(){
        uploadFile(this.files, storageRef)
    };

    var uploadFile = function (files, storageRef){

        const file = files.item(0);
        console.log(file);
        var accepted = fileAccepted(file);
            
        if (accepted === true){

            const newRefName = Math.random().toString(36).slice(2);
            const horseRef = storageRef.child(newRefName);
        
            const task = horseRef.put(file);

            // hide input
            var inputField = document.getElementById("inputImage");
            inputField.style.display = "none";

            // show loader, load progress into bar
            var loader = document.getElementById("loadingPanel");
            var loadProgress = document.getElementById("loadingProgress");
            loader.style.display = "block";

            task.on("state_changed", function progress(snapshot) {

                var percentageLoaded = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                loadProgress.style.width = percentageLoaded + "%";
            });
            
            // how to get downloadURL from a snapshot
            // https://stackoverflow.com/questions/43911080/return-the-download-url-of-a-file-uploaded-to-firebase/50448571#50448571
            task.then(snapshot => {
                const info = uploadMedia(snapshot);
                return info;
            })
            .then(info => {
                console.log(info);
            })

            
            var imgUpload = document.getElementById('imgUpload');
            imgUpload.onload = function(){
                var loader = document.getElementById("loadingPanel");
                loader.style.display = "none";
            }

            var videoUpload = document.getElementById('videoUpload');
            imgUpload.onload = function(){
                var loader = document.getElementById("loadingPanel");
                loader.style.display = "none";
            }


        } else {
            console.log("file not accepted.");
        }
    
    }

});
  
const uploadMedia = async(snapshot) => {

    try {

        const type = snapshot.metadata.contentType;
        const url = snapshot.ref.getDownloadURL();
        const result = await Promise.all([type, url]);
        return result;

    } catch(err){
        
        console.log(err);
        return false;
    }
}

const fileAccepted = function(file){
    var isAccepted = false;
    var message = "Sorry dude, upload is not an accepted filetype";
    const type = file.type;

    for (var i = 0; i < accepted.length; i++){
        if (accepted[i] === type){
            isAccepted = true;
        }
    }

    if (file.size > 30000000){
        isAccepted = false;
        message = message + ", file is too big";
    }

    if (isAccepted === true){
        message = "file is acceptable!";
    }

    console.log(message);

    return (isAccepted ? true : false);

}

const accepted = [
    'image/png',
    'image/jpeg',
    'video/mp4',
    'video/quicktime'
]





/*             store.mediaType = snapshot.metadata.contentType;

            return snapshot.ref.getDownloadURL(); */

/* Deleted this stuff
var info = {};
info.type = snapshot.metadata.contentType;
info.url = snapshot.ref.getDownloadURL();

return info; */

/// Deleted this block
/*         .then(url => {
            store.markerPhoto = url;
            console.log(url);
            //document.getElementById('imgUpload').setAttribute('src', info.url);


        }) */




        // The hard part is that we are waiting for two different things
        // Uploading.............. => get link => downloading.......... => done

/* 
          console.log(snapshot)
          // https://stackoverflow.com/questions/43911080/return-the-download-url-of-a-file-uploaded-to-firebase/50448571#50448571
          const url = snapshot.ref.getDownloadURL();
          url.
          console.log(url);
          document.getElementById('imgUpload').setAttribute('src', url);
      
        }) */