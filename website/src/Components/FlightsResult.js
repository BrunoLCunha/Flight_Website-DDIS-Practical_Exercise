import React, {Component} from 'react';
import FlightsBetweenCities from './FlightsBetweenCities';
import rapidCredentials from './rapidCredentials';
import { Redirect } from 'react-router';

class FlightsResult extends Component {
     
    constructor(props) {
		super(props)

		this.state = {
			thisFrom: '',
			thisTo: '',
			thisDateGo: '',
			thisDateBack: '',
			thisRedirect: false
		}
	}

    search = (e) => {
        //e.preventDefault();
        document.body.appendChild(document.getElementById('form'));
		this.setState({thisRedirect: true})
	}

    render() {

        if (this.state.thisRedirect) {
			return	<Redirect to={{pathname: '/flights-result', state: {from: this.state.thisFrom, 
																		to: this.state.thisTo, 
																		dateGo: this.state.thisDateGo ? this.state.thisDateGo : 'anytime',
																		dateBack: this.state.thisDateBack ? this.state.thisDateBack : 'anytime',
																		}}} />
		}
		

        function GetBeforeComma(e) {
            if(e != null){
            if(e.includes(",")){
                    return e.substr(0, e.indexOf(','));
                }
            }
            return e;
        }
        return(          
            <div id='teste'>
                <div id = 'explain'>
                
                <div className="explain-row">
                <h1>{this.props.location.state ? this.props.location.state.thisFrom : null}<br></br>
                {this.props.location.state ? this.props.location.state.thisTo : null}</h1> 
                <form id="form"  onSubmit={this.search}>
                <label>Origem:</label><input placeholder="País ou cidade" 
                                            required="required"
                                            data-validation-required-message="Please enter your departure origin"
                                            onChange={(e) => this.setState({ thisFrom: e.target.value })} 
                                            onBlur={(e) => this.setState({ thisFrom: e.target.value })}></input>
                <label>Destino:</label><input placeholder="País ou cidade" 
                                            required="required"
                                            data-validation-required-message="Please enter your departure origin"
                                            onChange={(e) => this.setState({ thisTo: e.target.value })} 
                                            onBlur={(e) => this.setState({ thisTo: e.target.value })}></input>
                <label>Ida:</label><input type="date"
                                            required="required"
                                            value={this.state.thisDateGo}
                                            onChange={(e) => this.setState({ thisDateGo: e.target.value })}></input>
                <label>Volta:</label><input type="date"
                                            value={this.state.thisDateBack}
                                            onChange={(e) => this.setState({ thisDateBack: e.target.value })}></input>
                <div className="button-fly-search">
                    <input type="submit" className="btn btn-primary btn-block" value="Buscar voos" />
                         </div>
                         </form>
                    </div> 
                </div>
                
                <FlightsBetweenCities
                    rapidCredentials={rapidCredentials}
                    country='BR' 
                    currency='BRL' 
                    locale='pt-br' 
                    from={GetBeforeComma(this.props.location.state ? this.props.location.state.from : null)}
                    to={GetBeforeComma(this.props.location.state ? this.props.location.state.to : null)}
                    outboundpartialdate={this.props.location.state ? this.props.location.state.dateGo : null}
                    inboundpartialdate={this.props.location.state ? this.props.location.state.dateBack : null}
                />
            </div>
        )
    }
}

export default FlightsResult;