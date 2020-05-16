var app_fireBase = {};
(function(){
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAk2G45MO-if6VYZk_kypt5dvTCNkPzoyw",
    authDomain: "dsid-gp5.firebaseapp.com",
    databaseURL: "https://dsid-gp5.firebaseio.com",
    projectId: "dsid-gp5",
    storageBucket: "dsid-gp5.appspot.com",
    messagingSenderId: "1022571067612",
    appId: "1:1022571067612:web:b4a1f9d227771120e4dc19",
    measurementId: "G-BHVWHBKHCW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  app_fireBase = firebase;

  function fnCreate(path, body, callBack){
      if(!path || !body) return;
      app_fireBase.database().ref(path).set(body, callBack);
  }

  app_fireBase.databaseApi = {
      create: fnCreate,
      //read: fnRead,
      //update: fnUpdate,
      //delete: fnDelete
  }
})()