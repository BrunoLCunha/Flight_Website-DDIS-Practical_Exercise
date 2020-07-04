import React,{Component} from 'react';
import firebase from 'firebase';

class AddShopping extends Component{

    constructor(props){
        super(props)

        this.state = {
            
            username: null,

            // shopping details
            price: this.props.price,
            description: this.props.description,
            description: this.props.description,
            img: this.props.img,
            name: this.props.name

        }
    }


    async componentDidMount() {

        firebase.auth().onAuthStateChanged(function(user) {

            var user = firebase.auth().currentUser;
            console.log(user);
            if (user) {
                console.log('This is the user: ', user)
            } else {
                // No user is signed in.
                console.log('There is no logged in user');
            }
        });

            // this.state.username = user;

            // const proxyUrl = "https://cors-anywhere.herokuapp.com/";
            // const url = 'https://us-central1-dsid-gp5.cloudfunctions.net/api/users/' + this.state.username;
            
            // fetch(proxyUrl + url, {
            //     "method": "PUT",
            //     "body": {
            //         "cart": {
            //             "username": this.state.username,
            //             "price": this.state.price,
            //             "description": this.state.description,
            //             "img": this.state.img,
            //             "name": this.state.name
            //         }
            //     }
            // })
            // .then(response => {
            //     console.log(response);
            // })
            // .catch(err => {
            //     console.log(err);
            // });

    }

    render() {

        return(
            <div>
            </div>
        )
    }
}

export default AddShopping;