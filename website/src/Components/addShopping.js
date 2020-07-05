import React,{Component} from 'react';
import firebase from 'firebase';
import { Redirect } from 'react-router';


class AddShopping extends Component{

    constructor(props){
        super(props)

        this.state = {

            username: null,
            stored: false,
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
                const proxyUrl = "https://no-cors-dsid-gp5.herokuapp.com/";
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
                fetch(url, requestOptions)
                    .then(response => response.json())
                    .then(data => this.setState({stored:true}));

            } else {
                // No user is signed in.
                console.log('No user identified')
            }
        });   
    }

    render() {
        return <Redirect to={{pathname: '/cart'}} />
    }
}

export default AddShopping;