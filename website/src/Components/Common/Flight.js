import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Flight extends Component {
    render() {
        return (
            <Link to={{
                pathname: "/addShopping",
                state: {
                    name: 'Vôo', 
                    img: 'generic_airplane.jpg', 
                    description: this.props.from + ' -> ' + this.props.to, 
                    price: this.props.price}
            }}
            className="flight-book" 
            style={{margin: 10}}
            >
                <div className="plane-name">
                    <span className="p-flight">{this.props.carryGo}</span>
                </div>
                <div className="desc">
                    <div className="left">
                        <h4>
                            <span>
                                {this.props.from + ' '}
                                <i className="icon-arrow-right22"></i>
                                {' ' + this.props.to}
                            </span>
                        </h4>
                        
                        <span>{this.props.dateGo}</span>
                    </div>
                    <div className="right">
                        <span className="price">
                            {this.props.price}
                        </span>
                    </div>
                </div>
            </Link>
        )
    }
}

export default Flight;