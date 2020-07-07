import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ShoppingStuff extends Component {

    delete(id) {
        // store the purchase
        const proxyUrl = "https://no-cors-dsid-gp5.herokuapp.com/";
        const url = 'https://us-central1-dsid-gp5.cloudfunctions.net/api/cart/';

        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch(proxyUrl + url + id, requestOptions)
            .then(response => {
                console.log(response)
                window.location.reload();
            })
            .catch(error =>  {
                console.log(error)
                window.location.reload();
            });

    }

    render() {
        return(
            <div className="col-md-4 col-sm-6 fh5co-tours" data-animate-effect="fadeIn">
                <div href="/deadend"><img src={ this.props.img && this.props.img.includes('http') ? this.props.img : "images/" + this.props.img} className="img-responsive" alt=""/>
                    <div className="desc">
                        <span></span>
                        <h3>{this.props.name}</h3>
                        <span>{this.props.description}</span>
                        <span className="price">{this.props.price}</span>
                        <Link className="btn btn-primary btn-outline" onClick={(e) => this.delete(this.props.dbId)} to="/cart"><i className="icon-arrow-left22"> Remover Item</i></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShoppingStuff;