const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

let db = admin.firestore();
let flames = db.collection('flames');

exports.getFlames = functions.https.onCall (async(data, context) => {

    var dataRay = [];

    const flamesRef = db.collection('flames');
    const snapshot = await flamesRef.get();
    if (snapshot.empty) {
        console.log('No matching documents.');
        return;
    }

    //var data = ['hello'];

    snapshot.forEach(doc => {
        var thisDoc = doc.data();
        dataRay.push(thisDoc)
        //console.log(doc.id, '=>', doc.data());
    });

    return dataRay;
});

// this returns the active googlemapsAPI key that is saved in the firebase functions environmental variables
exports.gmapsAPIkey = functions.https.onCall (async(data, context) => {
    return functions.config().googlemaps.key;
});

/*
firebase functions:config:get > .runtimeconfig.json
firebase functions:config:set service.value="something" (sets a value, or multiple even)
firebase functions:config:get service.value (gets specific value)
firebase functions:config:get (gets all values)
*/