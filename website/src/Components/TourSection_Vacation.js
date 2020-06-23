import React, {Component} from 'react';
import DestinationsRow from './DestinationsRow';

class TourSection_Vacation extends Component {
    render() {
        return(
            <div id="fh5co-tours" className="fh5co-section-gray">
			<div className="container">
				<div className="row">
					<div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
						<h3>Tourist Spots</h3>
						<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
					</div>
				</div>
				<DestinationsRow />
				<DestinationsRow />
			</div>
		</div>
        )
    }
}

export default TourSection_Vacation;