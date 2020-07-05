import React,{Component} from 'react';
import firebase from 'firebase';
import { Redirect } from 'react-router';
import shortid from "shortid";




class AddShopping extends Component{

    constructor(props){
        super(props)

        this.state = {

            username: null,

            // shopping details
            price: this.props.location.state.price,
            description: this.props.location.state.description,
            img: this.props.location.state.img,
            name: this.props.location.state.name

        }
    }


    componentDidMount() {

        let that = this 

        // check user logged
        firebase.auth().onAuthStateChanged(function(user) {
            user = firebase.auth().currentUser;
            if (user) {

                // store the purchase
                const proxyUrl = "https://cors-anywhere.herokuapp.com/";
                const url = 'https://us-central1-dsid-gp5.cloudfunctions.net/api/cart/';

                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        username: user.email,
                        name: that.state.name,
                        price: that.state.price,
                        img: that.state.img,
                        description: that.state.description
                    })
                };
                fetch(proxyUrl + url, requestOptions)
                    .then(response => response.json())
                    .then(data => console.log(data));

            } else {
                // No user is signed in.
                console.log('No user identified')
            }
        });   
    }

    getRandomKey = () => {
        return shortid.generate();
    }

    render() {
        return <Redirect to={{pathname: '/cart', state: { id: this.getRandomKey() }}} />
    }
}

export default AddShopping;