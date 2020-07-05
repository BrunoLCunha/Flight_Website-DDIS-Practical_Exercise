import React, {Component} from 'react';
import ShoppingStuff from './ShoppingStuff';
import firebase from 'firebase';


class ShoppingCart extends Component {  
    
    constructor(props) {
        super(props)
        
        this.state = {
            shopping: [],
            username: null
        }
    }
    
    componentDidMount() {
        let that = this 

        firebase.auth().onAuthStateChanged(function(user) {

            user = firebase.auth().currentUser;
            console.log('user',user);
            if (user) {
                that.setState({ username: user.email});
            } else {
                // No user is signed in.
                console.log('There is no logged in user');
            }
        });
        
        
        const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        const url = 'https://us-central1-dsid-gp5.cloudfunctions.net/api/cart/';
        
        fetch(proxyUrl + url) 
            .then(response => response.json())
            .then(data => {
                this.setState({ shopping: data, loading: false });
                return data;
            })
            .catch(error =>  this.setState({ error: error, loading: false }));

    }

    logout() {
        firebase.auth().signOut().then(function() {
            
          }).catch(function(error) {
            // An error happened.
          });
    }
    
    render() {
        return (
        <div id="fh5co-tours" className="fh5co-section-gray">
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
                    <h3>Seu Carrinho</h3>
                    <p>Nesta seção você encontrará todos os produtos que demonstrou interesse até então.</p>

                    {!this.state.username ? 
                        <div>
                            <p>Você ainda não está logado. Que tal entrar em nosso sistema?</p>     
                            <p><a className="btn btn-primary btn-outline btn-lg" href="/fbl"><i className="icon-arrow-left22"></i> Fazer login</a></p>
                        </div>
                        : <p><a className="btn btn-primary btn-outline btn-lg" onClick={this.logout()} href="/cart"><i className="icon-arrow-left22"></i> Log out</a></p>
                    }
                </div>
            </div>
            {this.state.shopping.map((shopping, index) => {
                if(shopping.username === this.state.username){
                    return  <ShoppingStuff key={index}
                                name={shopping.name}
                                price={shopping.price}
                                description={shopping.description}
                                img={shopping.img}  
                            />
                }     
            })}
            </div>
        </div>
        )
    }
}

export default ShoppingCart;