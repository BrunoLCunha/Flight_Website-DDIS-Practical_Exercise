import React,{Component} from 'react';
import firebase from 'firebase';
import { Redirect } from 'react-router';


class AddShopping extends Component{

    constructor(props){
        super(props)

        this.state = {
            redirect: false,

            username: null,

            // shopping details
            price: this.props.location.state.price,
            description: this.props.location.state.description,
            img: this.props.location.state.img,
            name: this.props.location.state.name

        }
    }


    componentDidMount() {
        console.log(this.state)
        let that = this 
        firebase.auth().onAuthStateChanged(function(user) {

            var user = firebase.auth().currentUser;
            console.log('inside authStateChanged',user);
            if (user) {
                const proxyUrl = "https://cors-anywhere.herokuapp.com/";
                const url = 'https://us-central1-dsid-gp5.cloudfunctions.net/api/cart/' + user.email;
                
                fetch(proxyUrl + url, {
                    "method": "PUT",
                    "body": {
                        "cart": {
                            "username": user.email,
                            "price": that.state.price,
                            "description": that.state.description,
                            "img": that.state.img,
                            "name": that.state.name
                        }
                    }
                })
                .then(response => {
                    console.log(response);
                })
                .catch(err => {
                    console.log(err);
                });
            } else {
                // No user is signed in.
                console.log('There is no logged in user');
            }
        });
        console.log('addShop',this.state)
        if (this.state.username) {
            const proxyUrl = "https://cors-anywhere.herokuapp.com/";
            const url = 'https://us-central1-dsid-gp5.cloudfunctions.net/api/users/' + this.state.username;
            
            fetch(proxyUrl + url, {
                "method": "PUT",
                "body": {
                    "cart": {
                        "username": this.state.username,
                        "price": this.state.price,
                        "description": this.state.description,
                        "img": this.state.img,
                        "name": this.state.name
                    }
                }
            })
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            });
        }
        else {
            this.setState({redirect: true})	
        }
        
    }

    render() {
        if (this.state.redirect){
            //return <Redirect to={{pathname: '/fbl', state: this.state}} />
        }
        return null
        //return <Redirect to={{pathname: '/deadend'}} />
    }
}

export default AddShopping;