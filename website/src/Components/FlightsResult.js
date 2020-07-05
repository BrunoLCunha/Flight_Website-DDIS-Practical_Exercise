import React, {Component} from 'react';
import FlightsBetweenCities from './FlightsBetweenCities';
import rapidCredentials from './rapidCredentials';
import {Link} from 'react-router-dom';

class FlightsResult extends Component {
     
    constructor(props) {
		super(props)

		this.state = {
			from: '',
			to: '',
			dateGo: '',
			dateBack: '',
		}
	}

    search = (e) => {
        window.location.reload();
    }

    componentWillMount() {
        console.log(this.state,this.props.location.state)
        if (!this.state.from)
            this.setState({
                from: this.props.location.state.from,
                to: this.props.location.state.to,
                dateGo: this.props.location.state.dateGo ? this.props.location.state.dateGo : 'anytime',
                dateBack: this.props.location.state.dateBack ? this.props.location.state.dateBack : 'anytime',
            })
    }

    componentDidMount() {
        console.log('did', this.state,this.props.location.state)
    }

    render() {
        return(          
            <div id='voo'>

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

                <div className="fh5co-section-gray">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2 text-center heading-section" style={{paddingBottom: 0, marginBottom: 0, padding: '1em'}} >
                                <p style={{marginBottom: 0}}>{this.props.location.state ? this.props.location.state.from + ' ' : null}
                                <i className="icon-arrow-right22"></i>
                                {this.props.location.state ? ' ' + this.props.location.state.to : null}</p> 
                            </div>
                        </div>
                </div>
                
                <FlightsBetweenCities
                    rapidCredentials={rapidCredentials}
                    country='BR' 
                    currency='BRL' 
                    locale='pt-br' 
                    from={this.state.from}
                    to={this.state.to}
                    outboundpartialdate={this.state.dateGo}
                    inboundpartialdate={this.state.dateBack}
                />
            </div>
        )
    }
}

export default FlightsResult;