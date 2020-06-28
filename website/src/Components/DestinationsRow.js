import React, {Component} from 'react';
import Flight from './Common/Flight';

class DestinationsRow extends Component {
    render() {
        return(
            <div className="row">
				<Flight name='New York' img='place-1.jpg' description='3 nights + Flight 5*Hotel' price='$1,000'/>
				<Flight name='Philippines' img='place-2.jpg' description='3 nights + Flight 5*Hotel' price='$1,000'/>
				<Flight name='Hongkong' img='place-3.jpg' description='2 nights + Flight 4*Hotel' price='$1,000'/>
				<div className="col-md-12 text-center animate-box">
					<p><a className="btn btn-primary btn-outline btn-lg" href="#">See All Offers <i className="icon-arrow-right22"></i></a></p>
				</div>
			</div>
        )
    }
}

export default DestinationsRow;