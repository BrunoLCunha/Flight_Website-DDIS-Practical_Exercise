import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAk2G45MO-if6VYZk_kypt5dvTCNkPzoyw",
    authDomain: "dsid-gp5.firebaseapp.com",
    databaseURL: "https://dsid-gp5.firebaseio.com",
    projectId: "dsid-gp5",
    storageBucket: "dsid-gp5.appspot.com",
    messagingSenderId: "1022571067612",
    appId: "1:1022571067612:web:b4a1f9d227771120e4dc19",
    measurementId: "G-BHVWHBKHCW"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase;