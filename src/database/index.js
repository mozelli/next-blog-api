require('dotenv').config({ path: "./database.env" });
const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore/lite');

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
};

const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);

module.exports = db;