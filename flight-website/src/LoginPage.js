import React,{Component} from 'react';
import firebase from './firebase';
import Crud from './Crud';

class LoginPage extends Component{

    constructor(props){
        super(props)

        this.state = {
            uid: null
        }
    }

    render() {

        // var provider = new firebase.auth.GoogleAuthProvider();
        const login = () => {
            // firebase.auth().signInWithPopup(provider).then(function(result) {
            //     // This gives you a Google Access Token. You can use it to access the Google API.
            //     var token = result.credential.accessToken;
            //     // The signed-in user info.
            //     var user = result.user;
            //     console.log(user)
            //     // ...
            //   }).catch(function(error) {
            //     // Handle Errors here.
            //     var errorCode = error.code;
            //     var errorMessage = error.message;
            //     console.log(errorMessage)
            //     // The email of the user's account used.
            //     var email = error.email;
            //     // The firebase.auth.AuthCredential type that was used.
            //     var credential = error.credential;
            //     // ...
            //   });
            
            let email = 'renan.ernesto@usp.br'
            let password = '123456'

            firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
              });
            
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    loggedIn(user.uid);
                    // User is signed in.
                    var displayName = user.displayName;
                    var email = user.email;
                    var emailVerified = user.emailVerified;
                    var photoURL = user.photoURL;
                    var isAnonymous = user.isAnonymous;
                    var uid = user.uid;
                    var providerData = user.providerData;
                    // ...
                } else {
                    // User is signed out.
                    // ...
                }
            });
        }

        let loggedIn = (userid) => {
            this.setState({
                uid: userid
            })
        }

        return(
            !this.state.uid ?
                <div>
                    <h1>Login</h1>
                    <div id="firebaseui-auth-container"></div>
                    <button onClick={(e) => login()}>Sign In</button>
                    <script src='login.js'></script>
                </div>
            :
                <Crud uid={this.state.uid} />
        )
    }
}

export default LoginPage;