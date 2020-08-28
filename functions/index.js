const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

let db = admin.firestore();
let flames = db.collection('flames');
//let db2 = db.collection('verifiedCustomers');

/*exports.getFlames = functions.https.onCall (async(data, context) => {
    return flames;
});*/

export const getFlames = functions.https.onRequest(async(req, res) => {
    const collections = await flames.getCollections()
    res.status(200).send(collections)
    //https://stackoverflow.com/questions/49217090/how-to-iterate-through-every-document-in-every-collection-in-firestore
  })