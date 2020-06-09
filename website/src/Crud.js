import React, {Component} from 'react';
import firebase from './firebase';
import logo from './logo.svg';
import Data from './Data';

class Crud extends Component {
    constructor(props) {
        super(props)

        // firebase.auth().onAuthStateChanged(function(user){
        //     if(!user) {
        //         window.location.replace("login.html");
        //     }
        // });

        this.state = {
            id: null,
            name: null,
            age: null
        }
    }
    
    render(){
        return(
            <div>
                <h1>
                    <img src={logo} className="App-logo" alt="logo" style={{width:100,height:100,verticalAlign:"middle"}}/>
                    Flight Website
                    <button onClick={(e) => this.logOut()} style={{marginLeft:500}}>logOut</button>
                </h1>
                
                <div className="App-content">
                    <h2>CRUD</h2>
                    <div>
                        
                            <label>
                            ID: 
                            <input type="text" value={this.state.id} onChange={e => this.setState({id: e.target.value})} />
                            </label>
                            <label>
                            Nome: 
                            <input type="text" value={this.state.name} onChange={e => this.setState({name: e.target.value})} />
                            </label>
                            <label>
                            Idade: 
                            <input type="text" value={this.state.age} onChange={e => this.setState({age: e.target.value})} />
                            </label>
                            
                    </div>
                    <div>
                        <button onClick={(e) => this.create()}>Create</button>
                        <button onClick={(e) => this.read()}>Read</button>
                        <button onClick={(e) => this.update()}>Update</button>
                        <button onClick={(e) => this.del()}>Delete</button>
                    </div>

                    {/* <Data /> */}
                </div>
            </div>
        )
    }

    logOut = () => {
        firebase.auth().signOut();
    }

    messageHandler = (err) => {
        if(!!err){
            console.log(err)
        }else{
            console.log("Success!")
        }
    }

    retrieve = (snapShot) => {
        if(!!snapShot && !!snapShot.val()){
            console.log(snapShot.val());
        }else{
            console.log('No data found');
        }
    }

    create = () => {
        if(!this.state.id) return;

        let path = 'users/' + this.state.id;
        
        firebase.database().ref(path).set(this.state, this.messageHandler);
    }

    read = () => {
        if(!this.state.id || !this.messageHandler) return;

        let path = 'users/' + this.state.id;

        firebase.database().ref(path).once('value').then(this.retrieve, this.messageHandler);
    }

    update = () => {
        if(!this.state.id) return;

        let path = 'users/' + this.state.id;
        let data = null;

        firebase.database().ref(path).once('value')
        .then((snapshot) => {
            data = snapshot.val
        }, this.messageHandler);

        this.setState(data)
        
        firebase.database().ref(path).update(this.state, this.messageHandler);
    }

    del = () => {
        if(!this.state.id) return;

        let path = 'users/' + this.state.id;
        
        firebase.database().ref(path).remove(this.messageHandler);
    }

    
}

export default Crud;