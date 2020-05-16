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
        var path = 'users/' + uid;
        app_fireBase.databaseApi.read(path, successFn, messageHandler);
        function successFn(snapShot){
            if(!!snapShot && !!snapShot.val()){
                console.log(snapShot.val());
            }else{
                console.log('No data found');
            }
        }
    }
    function fnUpdate(){
        var path = 'users/' + uid;
        var data = {
            name: "New Random Name",
            age: 30,
            message: "New random message"
        }
        app_fireBase.databaseApi.update(path, data, messageHandler);
    }
    function fnDelete(){
        var path = 'users/' + uid;
        app_fireBase.databaseApi.delete(path, messageHandler);
    }

    mainApp.Create = fnCreate;
    mainApp.Read = fnRead;
    mainApp.Update = fnUpdate;
    mainApp.Delete = fnDelete;
    mainApp.logOut = logOut;
})()
