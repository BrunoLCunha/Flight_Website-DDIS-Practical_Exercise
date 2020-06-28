import React, {Component} from 'react';
import FlightsBetweenCities from './FlightsBetweenCities';
import rapidCredentials from './rapidCredentials';

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