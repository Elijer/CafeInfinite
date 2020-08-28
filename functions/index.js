const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

let db = admin.firestore();
let flames = db.collection('flames');
//let db2 = db.collection('verifiedCustomers');