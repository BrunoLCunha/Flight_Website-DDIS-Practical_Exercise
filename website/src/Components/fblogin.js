// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';


// Configure FirebaseUI.
const uiConfig = {

  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/cart',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ]
};

class fblogin extends React.Component {


  render() {
    return (
      <div id="fh5co-tours" className="fh5co-section-gray">
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2 text-center heading-section">
                  <h3>Acesse seu perfil</h3>
                  <p>Para registrar as compras do site em seu nome e assim podendo recuperá-las, é necessário o login</p>
                  <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
                  <p>Não se preocupe com os dados informados, uma API do Google é utilizada e portanto nós não temos acesso aos dados</p>
                </div>
              </div>
            </div>
          </div>
    );
  }
}

export default fblogin;