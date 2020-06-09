import React, {Component} from 'react';
import './App.css';
import LoginPage from './LoginPage';

class App extends Component{
  render(){
    return(
      <div className="App">
        <LoginPage />
      </div>
    )
  }
  
}

export default App;

// https://medium.com/reprogramabr/configura%C3%A7%C3%B5es-iniciais-do-firebase-realtime-database-com-reactjs-f76141eed5d9