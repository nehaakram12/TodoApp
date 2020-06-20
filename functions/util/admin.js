//admin.js

var admin = require('firebase-admin');

var serviceAccount = require('./todoappkey.json');

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: 'https://todoapp-29438.firebaseio.com',
	storageBucket: 'todoapp-29438.appspot.com'
});

const db = admin.firestore();

module.exports = { admin, db };
