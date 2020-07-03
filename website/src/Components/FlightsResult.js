import React, {Component} from 'react';
import FlightsBetweenCities from './FlightsBetweenCities';
import rapidCredentials from './rapidCredentials';
import HeroSection from './HeroSection';

class FlightsResult extends Component {
      
    render() {
        function GetBeforeComma(e) {
            if(e.includes(",")){
                return e.substr(0, e.indexOf(','));
            }
            else return e;
        }
        return(          
            <div id='teste'>
                <div id = 'explain'>
                <h1>{this.props.location.state ? this.props.location.state.from : null}<br></br>
                {this.props.location.state ? this.props.location.state.to : null}</h1>
                <label>Origem:</label><input></input>
                <label>Destino:</label><input></input>
                <label>Ida:</label><input></input>
                <label>Volta:</label><input></input>
                <div className="col-xs-12">
                    <input type="submit" className="btn btn-primary btn-block" value="Buscar voos" />
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