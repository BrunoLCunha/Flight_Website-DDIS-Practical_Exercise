import React, {Component} from 'react';

class FlightPackage extends Component {
    render () {
        return(
            <div class="col-md-4 col-sm-6 fh5co-tours animate-box" data-animate-effect="fadeIn">
                <div href="#"><img src={"images/" + this.props.img} alt="Free HTML5 Website Template by FreeHTML5.co" class="img-responsive" id = "hotelImg" />
                    <div class="desc">
                        <span></span>
                        <h3>{this.props.name}</h3>
                        <span>{this.props.description}</span>
                        <span class="price">{this.props.price}</span>
                        <a class="btn btn-primary btn-outline" href="#">Book Now <i class="icon-arrow-right22"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default FlightPackage;