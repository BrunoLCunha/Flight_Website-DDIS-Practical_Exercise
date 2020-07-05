import React, {Component} from 'react';
import DestinationsRow from './DestinationsRow';
import {Link} from 'react-router-dom';

class TourSection_Vacation extends Component {

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
						<h3>Cartões Postais</h3>
						<p>Visite as paisagens mais procuradas do planeta.</p>
					</div>
				</div>
				<DestinationsRow />
				<DestinationsRow />
			</div>
			</div>
			</div>
        )
    }
}

export default TourSection_Vacation;