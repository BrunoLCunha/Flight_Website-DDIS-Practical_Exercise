var mainApp = {};

(function(){
    var firebase = app_fireBase;
    var uid = null;
    firebase.auth().onAuthStateChanged(function(user){
        if(user) {
            uid = user.uid;
        }else{
            uid = null;
            window.location.replace("login.html");
        }
    });

    function logOut(){
        firebase.auth().signOut();
    }

    function messageHandler(err){
        if(!!err){
            console.log(err)
        }else{
            console.log("Success!")
        }
    }

    function fnCreate(){
        var path = 'users/' + uid;
        var data = {
            name: "Random Name",
            age: 50,
            message: "Random message"
        }
        app_fireBase.databaseApi.create(path, data, messageHandler);
    }
    function fnRead(){
        
    }
    function fnUpdate(){
        
    }
    function fnDelete(){
        
    }

    mainApp.Create = fnCreate;
    mainApp.Read = fnRead;
    mainApp.Update = fnUpdate;
    mainApp.Delete = fnDelete;
    mainApp.logOut = logOut;
})()
