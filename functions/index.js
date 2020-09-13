const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

let db = admin.firestore();
let flames = db.collection('flames');
//let db2 = db.collection('verifiedCustomers');

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

/* exports.getFlames = functions.https.onRequest(async(req, res) => {
    const collections = await flames.getCollections()
    res.status(200).send(collections)
    //https://stackoverflow.com/questions/49217090/how-to-iterate-through-every-document-in-every-collection-in-firestore
}) */