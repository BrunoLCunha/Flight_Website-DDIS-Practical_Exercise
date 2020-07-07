import React, {Component} from 'react';
import ShoppingStuff from './ShoppingStuff';
import firebase from 'firebase';
import { Link } from 'react-router-dom';

class ShoppingCart extends Component {  
    
    constructor(props) {
        super(props)
        
        this.state = {
            shopping: [],
            username: null,
            animation: false,
            loading: true
        }
    }
    
    componentDidMount() {
        let that = this 

        if (!this.state.username) {
            firebase.auth().onAuthStateChanged(function(user) {
                user = firebase.auth().currentUser;
                console.log('user',user);
                if (user) {
                    that.setState({ username: user.email, animation: true});
                } else {
                    // No user is signed in.
                    console.log('There is no logged in user');
                }

                const proxyUrl = "https://cors-anywhere.herokuapp.com/";
                const url = 'https://us-central1-dsid-gp5.cloudfunctions.net/api/cart/';
                fetch(proxyUrl + url) 
                    .then(response => response.json())
                    .then(data => {
                        let shop = []
                        data.forEach((item) => {
                            if(item.data.username === that.state.username) shop.push(item)
                        })
                        that.setState({ shopping: shop, loading: false , animation: true});
                        
                        return data;
                    })
                    .catch(error =>  {
                        console.log(error)
                        this.setState({ error: error, loading: false, animation: true })
                    });
            });
        }
    }

    componentWillMount() {
        if(this.props.location.state && this.props.location.state.animation) this.setState({animation: true, loading: true})
    }

    logout() {
        firebase.auth().signOut().then(function() {
            window.location.reload();  
          }).catch(function(error) {
            // An error happened.
          });
    }

    

    render() {
        let hide = {opacity: 0}
        let fadeIn = {transition: 'opacity 0.5s', opacity: 1}

        return (
        <div id="fh5co-tours" className="fh5co-section-gray">
        <div className="container" style={this.state.animation ? fadeIn : hide}>
            <div className="row">
                <div className="col-md-8 col-md-offset-2 text-center heading-section" >
                    <h3>Seu Carrinho</h3>
                    <p>Nesta seção você encontrará todos os produtos que demonstrou interesse até então. (O carregamento pode levar alguns segundos)</p>

                    {!this.state.username ? 
                        <div>
                            <p>Você ainda não está logado. Que tal entrar em nosso sistema?</p>     
                            <p><a className="btn btn-primary btn-outline btn-lg" href="/login">Fazer login <i className="icon-arrow-right22"></i></a></p>
                        </div>
                        : <p><Link className="btn btn-primary btn-outline btn-lg" onClick={this.logout} to="/cart"><i className="icon-arrow-left22"></i> Log out</Link></p>
                    }
                </div>
            </div>
            {
            this.state.loading ?
                <div style={{textAlign:'center'}}>Loading...</div>
            :
                this.state.shopping.map((stuff, index) => {
                    return  <ShoppingStuff key={index}
                                name={stuff.data.name}
                                price={stuff.data.price}
                                description={stuff.data.description}
                                img={stuff.data.img}  
                                dbId={stuff.id}
                            />
                })
            }
            
            
            </div>
            <div className="container" style={this.state.animation ? fadeIn : hide}>
            {
                this.state.shopping.length != 0 && this.state.username ?
                    <Link style={{float:"right", marginRight: '15px'}} className="btn btn-primary btn-outline" to="/deadend">Finalizar Compra <i className="icon-arrow-right22"></i></Link>
                :
                    null
            }
            </div>
        </div>
        )
    }
}

export default ShoppingCart;