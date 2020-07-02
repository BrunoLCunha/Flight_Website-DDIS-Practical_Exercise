import React, {Component} from 'react';

class FlightPackage extends Component {
    render () {
        return(
            <div className="col-md-4 col-sm-6 fh5co-tours animate-box" data-animate-effect="fadeIn">
                <div href="#"><img src={"images/" + this.props.img} className="img-responsive"/>
                    <div className="desc">
                        <span></span>
                        <h3>{this.props.name}</h3>
                        <span>{this.props.description}</span>
                        <span className="price">{this.props.price}</span>
                        <a className="btn btn-primary btn-outline" href="#">Reserve agora <i className="icon-arrow-right22"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default FlightPackage;