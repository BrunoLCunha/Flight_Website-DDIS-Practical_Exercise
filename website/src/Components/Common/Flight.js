import React, {Component} from 'react';

class Flight extends Component {
    render() {
        return (
            <a href="/deadend" className="flight-book" style={{margin: 10}}>
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
            </a>
        )
    }
}

export default Flight;