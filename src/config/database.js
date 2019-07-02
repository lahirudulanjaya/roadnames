var firebase = require('firebase');
require("firebase/firestore");


var firebaseConfig = {
    apiKey: "AIzaSyAK38MB4M7KOZPc_wL22Ue7a6rlLt57Vwk",
    authDomain: "roadnames-e5efb.firebaseapp.com",
    databaseURL: "https://roadnames-e5efb.firebaseio.com",
    projectId: "roadnames-e5efb",
    storageBucket: "",
    messagingSenderId: "55322753804",
    appId: "1:55322753804:web:8ac2047f8acf14cf"
  };

firebase.initializeApp(firebaseConfig);
firebase.firestore()