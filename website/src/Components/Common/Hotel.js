import React, {Component} from 'react';

class Hotel extends Component {
    render () {
        return(
            <div className="col-md-4 col-sm-6 fh5co-tours" data-animate-effect="fadeIn">
                <div href="/deadend"><img src={this.props.photoUrl} className="img-responsive" alt=""/>
                    <div className="desc">
                        <span className="price">{this.props.stars} <i className="icon-star"></i></span>
                        <h3>{this.props.name}</h3>
                        <span>{this.props.description}</span>
                        <span className="price">{this.props.price}</span>
                        <a className="btn btn-primary btn-outline" href="/deadend">Reserve agora <i className="icon-arrow-right22"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hotel;