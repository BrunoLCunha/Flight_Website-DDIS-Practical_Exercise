import React, {Component} from 'react';

class ShoppingStuff extends Component {
    render() {
        return(
            <div className="col-md-4 col-sm-6 fh5co-tours" data-animate-effect="fadeIn">
                <div href="/deadend"><img src={ this.props.img && this.props.img.includes('http') ? this.props.img : "images/" + this.props.img} className="img-responsive" alt=""/>
                    <div className="desc">
                        <span></span>
                        <h3>{this.props.name}</h3>
                        <span>{this.props.description}</span>
                        <span className="price">{this.props.price}</span>
                        <a className="btn btn-primary btn-outline" href="/deadend">Finalizar Compra <i className="icon-arrow-right22"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShoppingStuff;