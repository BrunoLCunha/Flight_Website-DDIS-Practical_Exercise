import React, {Component} from 'react';
import FlightPackage from './Common/FlightPackage';

class DestinationsRow extends Component {
    render() {
        return(
            <div className="row">
				<FlightPackage name='Brasília' img='ckturistando-RWWHa5TUF8w-unsplash.jpg' description='3 nights + Flight 5*Hotel' price='R$ 1,000'/>
				<FlightPackage name='Paris' img='france.jpg' description='3 nights + Flight 5*Hotel' price='R$ 1,000'/>
				<FlightPackage name='Nova Iorque' img='new-york.jpg' description='2 nights + Flight 4*Hotel' price='R$ 1,000'/>
				<div className="col-md-12 text-center animate-box">
					<p><a className="btn btn-primary btn-outline btn-lg" href="#">Veja mais <i className="icon-arrow-right22"></i></a></p>
				</div>
			</div>
        )
    }
}

export default DestinationsRow;