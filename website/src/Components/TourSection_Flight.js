import React, {Component} from 'react';
import DestinationsRow from './DestinationsRow';
import {Link} from 'react-router-dom';

class TourSection_Flight extends Component {

	constructor(props) {
		super(props)

		this.state = {
			from: '',
			to: '',
			dateGo: '',
			dateBack: '',
		}
	}

    render() {
        return(
			<div>
			<div id = 'search-panel'>
				<div className="explain-row">
					<label>Origem:</label><input placeholder="País ou cidade" 
												required="required"
												data-validation-required-message="Please enter your departure origin"
												onChange={(e) => this.setState({ from: e.target.value })} 
												onBlur={(e) => this.setState({ from: e.target.value })}></input>
					<label>Destino:</label><input placeholder="País ou cidade" 
												required="required"
												data-validation-required-message="Please enter your departure origin"
												onChange={(e) => this.setState({ to: e.target.value })} 
												onBlur={(e) => this.setState({ to: e.target.value })}></input>
					<label>Ida:</label><input type="date"
												value={this.state.dateGo}
												onChange={(e) => this.setState({ dateGo: e.target.value })}></input>
					<label>Volta:</label><input type="date"
												value={this.state.dateBack}
												onChange={(e) => this.setState({ dateBack: e.target.value })}></input>
					<div className="button-fly-search">
						<Link onClick={this.search} to={{pathname:"/flights-result", state:this.state}} className="btn btn-primary btn-block">Buscar voos</Link>
					</div>
				</div> 
			</div>
            <div id="fh5co-tours" className="fh5co-section-gray">
			<div className="container">
				<div className="row">
					<div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
						<h3>Mais procurados</h3>
						<p>As viagens que estão fazendo mais sucesso entre nossos usuários.</p>
					</div>
				</div>
				<DestinationsRow />
				<div className="row row-bottom-padded-md">
					<div className="col-md-12 animate-box">
						<h2 className="heading-title">Ofertas da semana</h2>
					</div>
					<div className="col-md-6 animate-box">
						<div className="row">
							<div className="col-md-12">
								<h4>Melhores ofertas, mais habilidades</h4>
								<p>As melhores ofertas, você encontra em nosso site.</p>
							</div>
							<div className="col-md-12">
								<h4>Acompanhe seu vôo</h4>
								<p>Mantenha-se informado sobre atrasos, adiamentos e cancelamentos.</p>
							</div>
							<div className="col-md-12">
								<h4>Experiência de vôo</h4>
								<p>Conheça todas as regalias que a companhia oferece para seu conforto.</p>
							</div>
						</div>
					</div>
					<div className="col-md-6 animate-box">
						<img className="img-responsive" src="images\ross-parmly-rf6ywHVkrlY-unsplash.jpg" alt="travel" />
						<a href="/deadend" className="flight-book">
							<div className="plane-name">
								<span className="p-flight">United States Airways</span>
							</div>
							<div className="desc">
								<div className="left">
									<h4>HK-MNL</h4>
									<span>Dec 20 - Dec29</span>
								</div>
								<div className="right">
									<span className="price">
										<i className="icon-arrow-down22"></i>
										$1000
									</span>
								</div>
							</div>
						</a>
						<a href="/deadend" className="flight-book">
							<div className="plane-name">
								<span className="p-flight">Qatar Airways</span>
							</div>
							<div className="desc">
								<div className="left">
									<h4>HK-MNL</h4>
									<span>Dec 20 - Dec29</span>
								</div>
								<div className="right">
									<span className="price">
										<i className="icon-arrow-down22"></i>
										$790
									</span>
								</div>
							</div>
						</a>
						<a href="/deadend" className="flight-book">
							<div className="plane-name">
								<span className="p-flight">Philippine Airline</span>
							</div>
							<div className="desc">
								<div className="left">
									<h4>MNL-HK</h4>
									<span>Dec 20 - Dec29</span>
								</div>
								<div className="right">
									<span className="price">
										<i className="icon-arrow-down22"></i>
										$500
									</span>
								</div>
							</div>
						</a>
						<a href="/deadend" className="flight-book">
							<div className="plane-name">
								<span className="p-flight">China Airways</span>
							</div>
							<div className="desc">
								<div className="left">
									<h4>HK-LAS</h4>
									<span>Dec 20 - Dec29</span>
								</div>
								<div className="right">
									<span className="price">
										<i className="icon-arrow-down22"></i>
										$900
									</span>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
		</div>
        )
    }
}

export default TourSection_Flight;