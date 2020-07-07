import React, {Component} from 'react';
import firebase from 'firebase';

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            login: true
        }
    }

    componentDidMount () {
        let that = this
		  firebase.auth().onAuthStateChanged(function(user) {
			user = firebase.auth().currentUser;
			if (user) {
				that.setState({ login: false});
			} else {
				// No user is signed in.
				console.log('There is no logged in user');
			}})
    }

    logout() {
        firebase.auth().signOut().then(function() {
            window.location.reload();  
          }).catch(function(error) {
            // An error happened.
          });
    }

    render() {
        return(
            <header id="fh5co-header-section" className="sticky-banner">
                <div className="container">
                    <div className="nav-header">
                        <h1 id="fh5co-logo"><a href="/"><i className="icon-airplane"></i>DSIDESTINOS</a></h1>
                        {/*<!-- START #fh5co-menu-wrap -->*/}
                        <nav id="fh5co-menu-wrap" role="navigation">
                            <ul className="sf-menu" id="fh5co-primary-menu">
                                <li><a href="/">Início</a></li>
                                <li><a href="/vacations" className="fh5co-sub-ddown">Viagens</a></li>
                                <li><a href="/flights">Voos</a></li>
                                <li><a href="/hotel">Hotéis</a></li>
                                <li><a href="/blog">Blog</a></li>
                                <li><a href="/cart">Carrinho</a></li>
                                <li><a href="/contact">Sobre</a></li>
                                {
                                    this.state.login ?
                                        <li><a href="/fbl">Login</a></li>
                                    :
                                        <li><a onClick={this.logout} href="/cart">Logout</a></li>
                                }
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;