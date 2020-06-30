import React, {Component} from 'react';
import FlightPackage from './Common/FlightPackage';

class DestinationsRow extends Component {
    render() {
        return(
            <div className="row">
				<FlightPackage name='Brasília' img='ckturistando-RWWHa5TUF8w-unsplash.jpg' description='3 noites + vôo, hotel 5 estrelas' price='R$ 1,000'/>
				<FlightPackage name='Paris' img='france.jpg' description='3 noites + vôo, hotel 5 estrelas' price='R$ 3,000'/>
				<FlightPackage name='Nova Iorque' img='new-york.jpg' description='2 noites + vôo, hotel 4 estrelas' price='R$ 2,900'/>
				<div className="col-md-12 text-center animate-box">
					<p><a className="btn btn-primary btn-outline btn-lg" href="/flights">Veja mais <i className="icon-arrow-right22"></i></a></p>
				</div>
			</div>
        )
    }
}

export default DestinationsRow;