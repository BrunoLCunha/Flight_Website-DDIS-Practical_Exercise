import React, {Component} from 'react';
import { Redirect } from 'react-router';

class HeroSection extends Component {

	constructor(props) {
		super(props)

		this.state = {
			redirect: false,
			type: 'flight',

			//flight
			from: '',
			to: '',
			dateGo: '',
			dateBack: '',

			//hotel
			city: '',
			checkIn: '',
			checkOut: ''
		}
	}

	componentDidMount() {
		window.placeSearch({
			key: 'AnXghgF4e4yW5GdvGL98x0v6MsoXeA3A',
			container: document.querySelector('#place-search-input'),
			collection: ['adminArea']
		  });

		  window.placeSearch({
			key: 'AnXghgF4e4yW5GdvGL98x0v6MsoXeA3A',
			container: document.querySelector('#from-place_0'),
			collection: ['adminArea']
		  });

		  window.placeSearch({
			key: 'AnXghgF4e4yW5GdvGL98x0v6MsoXeA3A',
			container: document.querySelector('#from-place_pk'),
			collection: ['adminArea']
		  });

		  window.placeSearch({
			key: 'AnXghgF4e4yW5GdvGL98x0v6MsoXeA3A',
			container: document.querySelector('#to-place_pk'),
			collection: ['adminArea']
		  });

	}

	searchFlight = (e) => {
		e.preventDefault();
		this.setState({redirect: true, type: 'flight'})
	}

	searchHotel = (e) => {
		e.preventDefault();
		this.setState({redirect: true, type: 'hotel'})
	}

    render() {

	
		if (this.state.redirect) {
			if (this.state.type === 'flight') {
				return	<Redirect to={{pathname: '/flights-result', state: {from: this.state.from.indexOf(',') === -1 ? this.state.from : this.state.from.substring(0, this.state.from.indexOf(',')), 
							to: this.state.to.indexOf(',') === -1 ? this.state.to : this.state.to.substring(0, this.state.to.indexOf(',')), 
							dateGo: this.state.dateGo ? this.state.dateGo : 'anytime',
							dateBack: this.state.dateBack ? this.state.dateBack : 'anytime',
							}}} />
			}
			if (this.state.type === 'hotel') {
				console.log(this.state)
				return	<Redirect to={{pathname: '/hotels-result', state: {city: this.state.city.indexOf(',') === -1 ? this.state.city : this.state.city.substring(0, this.state.city.indexOf(',')), 
					checkIn: this.state.checkIn, 
					checkOut: this.state.checkOut
					}}} />
			}
			
		}
        return(
            <div className="fh5co-hero">
			<script src="https://api.mqcdn.com/sdk/place-search-js/v1.0.0/place-search.js"></script>
			<div className="fh5co-overlay"></div>
			<div className="fh5co-cover" data-stellar-background-ratio="0.5" style={{backgroundImage: `url(images/egypt.jpg)`}}>
				<div className="desc">
					<div className="container">
						<div className="row">
							<div className="col-sm-5 col-md-5">
									
									<div className="tabulation animate-box">

									{/*Nav tabs*/}
									<ul className="nav nav-tabs" role="tablist">
										<li role="presentation" className="active">
											<a href="#flights" aria-controls="flights" role="tab" data-toggle="tab">Voos</a>
										</li>
										<li role="presentation">
											<a href="#hotels" aria-controls="hotels" role="tab" data-toggle="tab">Hotéis</a>
										</li>
									</ul>
									

										{/*Tab panes*/}
										
										<div className="tab-content">
											<div role="tabpanel" className="tab-pane active" id="flights">
												<form onSubmit={this.searchFlight}>
													<div className="row">
														<div className="col-xxs-12 col-xs-12 mt">
															<div className="input-field">
																<label htmlFor="from">Origem:</label>
																<input
																	type="text"
																	className="form-control"
																	id="place-search-input"
																	placeholder="País ou cidade"
																	required="required"
																	data-validation-required-message="Please enter your departure origin"
																	onChange={(e) => this.setState({ from: e.target.value })} 
																	onBlur={(e) => this.setState({ from: e.target.value })}
																/>
															</div>
														</div>
														<div className="col-xxs-12 col-xs-12 mt">
															<div className="input-field">
																<label htmlFor="from">Destino:</label>
																<input
																	type="text"
																	className="form-control"
																	id="from-place_0"
																	placeholder="País ou cidade"
																	required="required"
																	onChange={(e) => this.setState({ to: e.target.value })} 
																	onBlur={(e) => this.setState({ to: e.target.value })}
																/>
															</div>
														</div>
														<div className="col-xxs-12 col-xs-6 mt alternate">
															<div className="input-field">
																<label htmlFor="date-start">Ida:</label>
																<input
																	type="date"
																	id="date-start"
																	value={this.state.dateGo}
																	onChange={(e) => this.setState({ dateGo: e.target.value })}
																/>
															</div>
														</div>
														<div className="col-xxs-12 col-xs-6 mt alternate">
															<div className="input-field">
																<label htmlFor="date-end">Volta:</label>
																<input
																	type="date"
																	id="date-end"
																	value={this.state.dateBack}
																	onChange={(e) => this.setState({ dateBack: e.target.value })}
																/>
															</div>
														</div>
														{/*<div className="col-sm-12 mt">
													<section>
														<label htmlFor="className">Classe:</label>
														<select className="cs-select cs-skin-border">
															<option value="" defaultValue>Econômica</option>
															<option value="first">Primeira</option>
															<option value="business">Executiva</option>
														</select>
													</section>
												</div>
												<div className="col-xxs-12 col-xs-6 mt">
													<section>
														<label htmlFor="className">Adultos:</label>
														<select className="cs-select cs-skin-border">
															<option value="" defaultValue>1</option>
															<option value="2">2</option>
															<option value="3">3</option>
															<option value="4">4</option>
														</select>
													</section>
												</div>
												<div className="col-xxs-12 col-xs-6 mt">
													<section>
														<label htmlFor="className">Crianças:</label>
														<select className="cs-select cs-skin-border">
															<option value="" defaultValue>1</option>
															<option value="2">2</option>
															<option value="3">3</option>
															<option value="4">4</option>
														</select>
													</section>
												</div>*/}
														<div className="col-xs-12">
															<input type="submit" className="btn btn-primary btn-block" value="Buscar voos" />
														</div>
													</div>
												</form>
											</div>

											<div role="tabpanel" className="tab-pane" id="hotels">
												<form onSubmit={this.searchHotel}>
													<div className="row">
														<div className="col-xxs-12 col-xs-12 mt">
															<div className="input-field">
																<label htmlFor="from">Cidade:</label>
																<input
																	onChange={(e) => this.setState({ from: e.target.value })} 
																	onBlur={(e) => this.setState({ from: e.target.value })}

																	type="text"
																	className="form-control"
																	id="to-place_0"
																	placeholder="Los Angeles, USA"
																	required="required"
																	onChange={(e) => this.setState({ city: e.target.value })} 
																	onBlur={(e) => this.setState({ city: e.target.value })}
																/>
																	
															</div>
														</div>
														<div className="col-xxs-12 col-xs-6 mt alternate">
															<div className="input-field">
																<label htmlFor="date-start">Check In:</label>
																<input type="date"
																	id="date-start_h"
																	//required='required'
																	onInput={(e) => this.setState({ in: e.target.value })} />
															</div>
														</div>
														<div className="col-xxs-12 col-xs-6 mt alternate">
															<div className="input-field">
																<label htmlFor="date-end">Check Out:</label>
																<input type="date"
																	id="date-end_h"
																	//required='required'
																	onInput={(e) => this.setState({ out: e.target.value })} />
															</div>
														</div>
														{/*<div className="col-sm-12 mt">
															<section>
																<label htmlFor="className">Quartos:</label>
																<select className="cs-select cs-skin-border"
																	required='required'
																	onInput={(e) => this.setState({ rooms: e.target.value })}>
																	<option value="economy">1</option>
																	<option value="first">2</option>
																	<option value="business">3</option>
																</select>
															</section>
														</div>
														<div className="col-xxs-12 col-xs-6 mt">
															<section>
																<label htmlFor="className">Adultos:</label>
																<select className="cs-select cs-skin-border"
																	required='required'
																	onInput={(e) => this.setState({ adults: e.target.value })}>
																	<option value="1">1</option>
																	<option value="2">2</option>
																	<option value="3">3</option>
																	<option value="4">4</option>
																</select>
															</section>
														</div>
														<div className="col-xxs-12 col-xs-6 mt">
															<section>
																<label htmlFor="className">Crianças:</label>
																<select className="cs-select cs-skin-border"
																	onInput={(e) => this.setState({ children: e.target.value })}>
																	<option value="1">1</option>
																	<option value="2">2</option>
																	<option value="3">3</option>
																	<option value="4">4</option>
																</select>
															</section>
														</div>*/}
														<div className="col-xs-12">
															<input type="submit" className="btn btn-primary btn-block" value="Buscar hotéis" />
														</div>
													</div>
												</form>
											</div>

										<div role="tabpanel" className="tab-pane" id="packages">
											<div className="row">
												<div className="col-xxs-12 col-xs-6 mt">
													<div className="input-field">
														<label htmlFor="from">Cidade:</label>
														<input type="text" className="form-control" id="from-place_pk" placeholder="Los Angeles, USA"/>
													</div>
												</div>
												<div className="col-xxs-12 col-xs-6 mt">
													<div className="input-field">
														<label htmlFor="from">Destino:</label>
														<input type="text" className="form-control" id="to-place_pk" placeholder="Tokyo, Japan"/>
													</div>
												</div>
												<div className="col-xxs-12 col-xs-6 mt alternate">
													<div className="input-field">
														<label htmlFor="date-start">Ida:</label>
														<input type="date" id="date-start"/>
													</div>
												</div>
												<div className="col-xxs-12 col-xs-6 mt alternate">
													<div className="input-field">
														<label htmlFor="date-end">Volta:</label>
														<input type="date" id="date-end"/>
													</div>
												</div>
												<div className="col-sm-12 mt">
													<section>
														<label htmlFor="className">Quartos:</label>
														<select className="cs-select cs-skin-border">
															<option value="" defaultValue>1</option>
															<option value="first">2</option>
															<option value="business">3</option>
														</select>
													</section>
												</div>
												<div className="col-xxs-12 col-xs-6 mt">
													<section>
														<label htmlFor="className">Adultos:</label>
														<select className="cs-select cs-skin-border">
															<option value="" defaultValue>1</option>
															<option value="2">2</option>
															<option value="3">3</option>
															<option value="4">4</option>
														</select>
													</section>
												</div>
												<div className="col-xxs-12 col-xs-6 mt">
													<section>
														<label htmlFor="className">Crianças:</label>
														<select className="cs-select cs-skin-border">
															<option value="" defaultValue>1</option>
															<option value="2">2</option>
															<option value="3">3</option>
															<option value="4">4</option>
														</select>
													</section>
												</div>
												<div className="col-xs-12">
													<input type="submit" className="btn btn-primary btn-block" value="Buscar pacotes" />
												</div>
											</div>
										</div>
										</div>

									</div>
							</div>
							<div className="desc2 animate-box">
								<div className="col-sm-7 col-sm-push-1 col-md-7 col-md-push-1">
									<h2>Escolha sua próxima viagem</h2>
									<h3>Cuidamos dos detalhes para você se preocupar em criar novas memórias inesquecíveis</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
        </div>
        )
    }
}

export default HeroSection;