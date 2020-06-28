import React, {Component} from 'react';
import FlightsBetweenCities from './FlightsBetweenCities';

const rapidCredentials = {
    "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
    "x-rapidapi-key": "dba8c31e4amsha008db228d6ac1cp115817jsn47d0d202cb68",
    "useQueryString": true
}

class FlightsResult extends Component {
    render() {
        return(
            <div id='teste'>
                <FlightsBetweenCities
                    rapidCredentials={rapidCredentials}
                    country='BR' 
                    currency='BRL' 
                    locale='pt-br' 
                    from={this.props.location.state ? this.props.location.state.from : null}
                    to={this.props.location.state ? this.props.location.state.to : null}
                    outboundpartialdate={this.props.location.state ? this.props.location.state.dateGo : null}
                    inboundpartialdate={this.props.location.state ? this.props.location.state.dateBack : null}
                />
            </div>
        )
    }
}

export default FlightsResult;