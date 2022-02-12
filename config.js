const firebase = require("firebase"); 
const firebaseConfig = {
    apiKey: "AIzaSyD5otHMbNJ43FEDKHYzMgUKbx_MV5SYEK8",
    authDomain: "kotanipay-c9d90.firebaseapp.com",
    projectId: "kotanipay-c9d90",
    storageBucket: "kotanipay-c9d90.appspot.com",
    messagingSenderId: "962882968486",
    appId: "1:962882968486:web:85fa0387236d9def5b8d67",
    measurementId: "G-9C65ZNSN3T"
  };
  firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("Users");
module.exports = User;