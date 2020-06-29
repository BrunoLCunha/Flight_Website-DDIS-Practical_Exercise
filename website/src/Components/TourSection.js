import React, {Component} from 'react';
import DestinationsRow from './DestinationsRow';

class TourSection extends Component {
    render() {
        return(
            <div id="fh5co-tours" className="fh5co-section-gray">
			<div className="container">
				<div className="row">
					<div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
						<h3>Mais procurados</h3>
						<p>As viagens que estão fazendo mais sucesso entre nossos usuários.</p>
					</div>
				</div>
				<DestinationsRow />
			</div>
		</div>
        )
    }
}

export default TourSection;