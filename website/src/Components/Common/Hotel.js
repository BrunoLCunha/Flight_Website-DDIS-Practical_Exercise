import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Hotel extends Component {
    render () {
        return(
            <div className="col-md-4 col-sm-6 fh5co-tours" data-animate-effect="fadeIn">
                <div href="/deadend"><img src={this.props.photoUrl ? this.props.photoUrl : 'images/generic_hotel.jpg'} className="img-responsive" alt=""/>
                    <div className="desc">
                        <span className="price">{this.props.stars} <i className="icon-star"></i></span>
                        <h3>{this.props.name}</h3>
                        <span>{this.props.description}</span>
                        <span className="price">{this.props.price}</span>
                        <Link to={{
                            pathname: "/addShopping",
                            state: {
                                name: 'Hotel', 
                                img: this.props.photoUrl ? this.props.photoUrl : 'generic_hotel.jpg', 
                                description: this.props.name, 
                                price: this.props.price}
                        }}
                        className="btn btn-primary btn-outline" 
                        style={{margin: 10}}
                        >
                        Reserve agora <i className="icon-arrow-right22"></i></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hotel;