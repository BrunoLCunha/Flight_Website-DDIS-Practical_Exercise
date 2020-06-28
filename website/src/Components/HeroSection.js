import React, {Component} from 'react';
import { Redirect } from 'react-router';

class HeroSection extends Component {

	constructor(props) {
		super(props)

		this.state = {
			from: '',
			to: '',
			dateGo: '',
			dateBack: '',
			redirect: false
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
			container: document.querySelector('#to-place_0'),
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

	search = (e) => {
		e.preventDefault();
		this.setState({redirect: true})
	}

    render() {

	
		if (this.state.redirect) {
			return	<Redirect to={{pathname: '/flights-result', state: {from: this.state.from, 
																		to: this.state.to, 
																		dateGo: this.state.dateGo ? this.state.dateGo : 'anytime',
																		dateBack: this.state.dateBack ? this.state.dateBack : 'anytime',
																		}}} />
		}
        return(
			
            <div className="fh5co-hero">
			<script src="https://api.mqcdn.com/sdk/place-search-js/v1.0.0/place-search.js"></script>
			<div className="fh5co-overlay"></div>
			<div className="fh5co-cover" data-stellar-background-ratio="0.5" style={{backgroundImage: "%PUBLIC_URL%/images/cover_bg_1.jpg"}}>
				<div className="desc">
					<div className="container">
						<div className="row">
							<div className="col-sm-5 col-md-5">
									<form onSubmit={this.search}>
									<div className="tabulation animate-box">

									{/*Nav tabs*/}
									<ul className="nav nav-tabs" role="tablist">
										<li role="presentation" className="active">
											<a href="#flights" aria-controls="flights" role="tab" data-toggle="tab">Flights</a>
										</li>
										<li role="presentation">
											<a href="#hotels" aria-controls="hotels" role="tab" data-toggle="tab">Hotels</a>
										</li>
										<li role="presentation">
											<a href="#packages" aria-controls="packages" role="tab" data-toggle="tab">Packages</a>
										</li>
									</ul>
									

										{/*Tab panes*/}
										<div className="tab-content">
										<div role="tabpanel" className="tab-pane active" id="flights">
											<div className="row">
												<div className="col-xxs-12 col-xs-12 mt">
													<div className="input-field">
														<label htmlFor="from">From:</label>
														<input 
															type="text" 
															className="form-control" 
															id="place-search-input" 
															placeholder="Sao Paulo"
															required="required" 
															data-validation-required-message="Please enter your departure origin" 
															value={this.state.from}
															onChange={(e) => this.setState({from: e.target.value})}
														/>
													</div>
												</div>
												<div className="col-xxs-12 col-xs-12 mt">
													<div className="input-field">
														<label htmlFor="from">To:</label>
														<input 
															type="text" 
															className="form-control" 
															id="from-place_0" 
															placeholder="Curitiba"
															value={this.state.to}
															onChange={(e) => this.setState({to: e.target.value})}
														/>
													</div>
												</div>
												<div className="col-xxs-12 col-xs-6 mt alternate">
													<div className="input-field">
														<label htmlFor="date-start">Check In:</label>
														<input 
															type="text" 
															className="form-control" 
															id="date-start" 
															placeholder="yyyy-mm-dd"
															value={this.state.dateGo}
															onChange={(e) => this.setState({dateGo: e.target.value})}
														/>
													</div>
												</div>
												<div className="col-xxs-12 col-xs-6 mt alternate">
													<div className="input-field">
														<label htmlFor="date-end">Check Out:</label>
														<input 
															type="text" 
															className="form-control" 
															id="date-end" 
															placeholder="yyyy-mm-dd"
															value={this.state.dateBack}
															onChange={(e) => this.setState({dateBack: e.target.value})}
														/>
													</div>
												</div>
												<div className="col-sm-12 mt">
													<section>
														<label htmlFor="className">Class:</label>
														<select className="cs-select cs-skin-border">
															<option value="" defaultValue></option>
															<option value="economy">Economy</option>
															<option value="first">First</option>
															<option value="business">Business</option>
														</select>
													</section>
												</div>
												<div className="col-xxs-12 col-xs-6 mt">
													<section>
														<label htmlFor="className">Adult:</label>
														<select className="cs-select cs-skin-border">
															<option value="" defaultValue></option>
															<option value="1">1</option>
															<option value="2">2</option>
															<option value="3">3</option>
															<option value="4">4</option>
														</select>
													</section>
												</div>
												<div className="col-xxs-12 col-xs-6 mt">
													<section>
														<label htmlFor="className">Children:</label>
														<select className="cs-select cs-skin-border">
															<option value="" defaultValue></option>
															<option value="1">1</option>
															<option value="2">2</option>
															<option value="3">3</option>
															<option value="4">4</option>
														</select>
													</section>
												</div>
												<div className="col-xs-12">
													<input type="submit" className="btn btn-primary btn-block" value="Search Flight" />
												</div>
											</div>
										</div>

										<div role="tabpanel" className="tab-pane" id="hotels">
											<div className="row">
												<div className="col-xxs-12 col-xs-12 mt">
													<div className="input-field">
														<label htmlFor="from">City:</label>
														<input type="text" className="form-control" id="to-place_0" placeholder="Los Angeles, USA"/>
													</div>
												</div>
												<div className="col-xxs-12 col-xs-6 mt alternate">
													<div className="input-field">
														<label htmlFor="date-start">Return:</label>
														<input type="text" className="form-control" id="date-start" placeholder="mm/dd/yyyy"/>
													</div>
												</div>
												<div className="col-xxs-12 col-xs-6 mt alternate">
													<div className="input-field">
														<label htmlFor="date-end">Check Out:</label>
														<input type="text" className="form-control" id="date-end" placeholder="mm/dd/yyyy"/>
													</div>
												</div>
												<div className="col-sm-12 mt">
													<section>
														<label htmlFor="className">Rooms:</label>
														<select className="cs-select cs-skin-border">
															<option value="" defaultValue>1</option>
															<option value="economy">1</option>
															<option value="first">2</option>
															<option value="business">3</option>
														</select>
													</section>
												</div>
												<div className="col-xxs-12 col-xs-6 mt">
													<section>
														<label htmlFor="className">Adult:</label>
														<select className="cs-select cs-skin-border">
															<option value="" defaultValue>1</option>
															<option value="1">1</option>
															<option value="2">2</option>
															<option value="3">3</option>
															<option value="4">4</option>
														</select>
													</section>
												</div>
												<div className="col-xxs-12 col-xs-6 mt">
													<section>
														<label htmlFor="className">Children:</label>
														<select className="cs-select cs-skin-border">
															<option value="" defaultValue>1</option>
															<option value="1">1</option>
															<option value="2">2</option>
															<option value="3">3</option>
															<option value="4">4</option>
														</select>
													</section>
												</div>
												<div className="col-xs-12">
													<input type="submit" className="btn btn-primary btn-block" value="Search Hotel" />
												</div>
											</div>
										</div>

										<div role="tabpanel" className="tab-pane" id="packages">
											<div className="row">
												<div className="col-xxs-12 col-xs-6 mt">
													<div className="input-field">
														<label htmlFor="from">City:</label>
														<input type="text" className="form-control" id="from-place_pk" placeholder="Los Angeles, USA"/>
													</div>
												</div>
												<div className="col-xxs-12 col-xs-6 mt">
													<div className="input-field">
														<label htmlFor="from">Destination:</label>
														<input type="text" className="form-control" id="to-place_pk" placeholder="Tokyo, Japan"/>
													</div>
												</div>
												<div className="col-xxs-12 col-xs-6 mt alternate">
													<div className="input-field">
														<label htmlFor="date-start">Departs:</label>
														<input type="text" className="form-control" id="date-start" placeholder="mm/dd/yyyy"/>
													</div>
												</div>
												<div className="col-xxs-12 col-xs-6 mt alternate">
													<div className="input-field">
														<label htmlFor="date-end">Return:</label>
														<input type="text" className="form-control" id="date-end" placeholder="mm/dd/yyyy"/>
													</div>
												</div>
												<div className="col-sm-12 mt">
													<section>
														<label htmlFor="className">Rooms:</label>
														<select className="cs-select cs-skin-border">
															<option value="" defaultValue>1</option>
															<option value="economy">1</option>
															<option value="first">2</option>
															<option value="business">3</option>
														</select>
													</section>
												</div>
												<div className="col-xxs-12 col-xs-6 mt">
													<section>
														<label htmlFor="className">Adult:</label>
														<select className="cs-select cs-skin-border">
															<option value="" defaultValue>1</option>
															<option value="1">1</option>
															<option value="2">2</option>
															<option value="3">3</option>
															<option value="4">4</option>
														</select>
													</section>
												</div>
												<div className="col-xxs-12 col-xs-6 mt">
													<section>
														<label htmlFor="className">Children:</label>
														<select className="cs-select cs-skin-border">
															<option value="" defaultValue>1</option>
															<option value="1">1</option>
															<option value="2">2</option>
															<option value="3">3</option>
															<option value="4">4</option>
														</select>
													</section>
												</div>
												<div className="col-xs-12">
													<input type="submit" className="btn btn-primary btn-block" value="Search Packages" />
												</div>
											</div>
										</div>
										</div>

									</div>
								</form>
							</div>
							<div className="desc2 animate-box">
								<div className="col-sm-7 col-sm-push-1 col-md-7 col-md-push-1">
									<p>HandCrafted by <a href="http://frehtml5.co/" target="_blank" className="fh5co-site-name">FreeHTML5.co</a></p>
									<h2>Exclusive Limited Time Offer</h2>
									<h3>Fly to Hong Kong via Los Angeles, USA</h3>
									<span className="price">$599</span>
									{/* <p><a className="btn btn-primary btn-lg" href="#">Get Started</a></p> */}
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