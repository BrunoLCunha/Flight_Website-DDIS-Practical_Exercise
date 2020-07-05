import React, {Component} from 'react';
import DestinationsRow from './DestinationsRow';
import {Link} from 'react-router-dom';

class TourSection_Hotel extends Component {

	constructor(props) {
		super(props)

		this.state = {
            city: '',
			checkIn: '',
			checkOut: '',
        }
	}

    render() {
        return(
			<div>
			<div id = 'search-panel'>
				<div className="explain-row">
					<label>Destino:</label><input placeholder="Cidade" 
												required="required"
												data-validation-required-message="Please enter the city for search"
												onChange={(e) => this.setState({ city: e.target.value })} 
												onBlur={(e) => this.setState({ city: e.target.value })}></input>
					<label>CheckIn:</label><input type="date"
												value={this.state.checkIn}
												onChange={(e) => this.setState({ checkIn: e.target.value })}></input>
					<label>Checkout:</label><input type="date"
												value={this.state.checkOut}
												onChange={(e) => this.setState({ checkOut: e.target.value })}></input>
					<div className="button-fly-search">
						<Link onClick={this.search} to={{pathname:"/hotels-result", state:this.state}} className="btn btn-primary btn-block">Buscar hotéis</Link>
					</div>
				</div> 
			</div>
            <div id="fh5co-tours" className="fh5co-section-gray">
			<div className="container">
				<div className="row">
					<div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
						<h3>Hotéis populares</h3>
						<p>Conheça esses hotéis e aproveite uma estadia incrível.</p>
					</div>
				</div>
				<DestinationsRow />
				<DestinationsRow />
				<div className="row">
					<div className="col-md-12 animate-box">
						<h2 className="heading-title">Guia para escolher o hotel perfeito</h2>
					</div>
					<div className="col-md-6 animate-box">
						<p>Pesquise bem antes de escolher seu hotel, e confira se atende a todas as suas expectativas.</p>
						<p>Se atente a localização, para evitar dificuldades e curtir a sua viagem o máximo possível.</p>
					</div>
					<div className="col-md-6 animate-box">
						<img className="img-responsive" src="images\sara-dubler-Koei_7yYtIo-unsplash.jpg" alt="travel" /> 
					</div>
				</div>
			</div>
		</div>
		</div>
        )
    }
}

export default TourSection_Hotel;